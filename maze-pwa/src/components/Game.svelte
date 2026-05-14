<script>
  import { onMount }                              from 'svelte';
  import { makeMaze }                             from '../lib/maze.js';
  import { getTrackRatio, bfsPath,
           computeCheckpoints, computeCollectibles } from '../lib/maze-utils.js';
  import { stepPhysics, checkWallFall }           from '../lib/physics.js';
  import { draw }                                 from '../lib/render.js';
  import { getTheme }                             from '../lib/theme.js';
  import { screen as appScreen, gameMode,
           runStats, settings, audioMgrStore }    from '../stores.js';
  import { createInputManager, JOY_RADIUS }       from '../lib/input.js';
  import { formatTime, getDeviceAngle,
           wallThickness }                        from '../lib/utils.js';

  import Canvas        from './Canvas.svelte';
  import HUD           from './HUD.svelte';
  import PauseOverlay  from './PauseOverlay.svelte';
  import SettingsPanel from './SettingsPanel.svelte';

  // ── Constantes ─────────────────────────────────────────────────────────────
  const ROWS = 10, COLS = 6;
  const BALL_RATIO    = 0.65 * 0.35;  // ≈ 0.2275 — rayon stable indépendant du track ratio
  const MODE_DURATION = 120;

  // ── State (lié à l'UI) ─────────────────────────────────────────────────────
  let lvl           = 1;
  let chrono        = '2:00';
  let timeLeft      = 120;
  let hint          = 'mouse';
  let showCfg       = false;
  let paused        = false;
  let countdownText = '';
  let attempts      = 0;
  let lastHapticSec = -1;
  let deviceAngle   = 0;

  // ── Settings synchronisés (re-évalués si l'utilisateur change durant la partie)
  $: sensitivity = $settings.sensitivity;
  $: hapticsOn   = $settings.haptics;
  $: controlMode = $settings.controlMode;
  $: if (controlMode === 'joystick' && inputMgr) inputMgr.clearTilt();

  const currentMode = $gameMode;  // snapshot — ne change pas en cours de partie

  // ── Refs DOM & état non-réactif ────────────────────────────────────────────
  let canvas, boardWrap, worldRotateEl;
  let G          = null;
  let raf        = null;
  let inputMgr   = null;
  let boardTiltX = 0;
  let boardTiltY = 0;

  // ── Helpers ────────────────────────────────────────────────────────────────
  function haptic(pattern = [30]) {
    if (hapticsOn && $settings.haptics && navigator.vibrate) navigator.vibrate(pattern);
  }
  function spawnFloatingText(text, x, y, color) {
    if (G) G.floatingTexts.push({ text, x, y, color, startT: performance.now() });
  }

  // ── Canvas sizing ──────────────────────────────────────────────────────────
  // Canvas toujours en pixels portrait (ROWS > COLS).
  // En paysage, CSS pivote le canvas pour qu'il apparaisse paysage à l'écran.
  function fitCanvas() {
    if (!canvas) return;
    const sw = window.innerWidth, sh = window.innerHeight;
    const normAngle = getDeviceAngle();
    const isLandscape = normAngle === 90 || normAngle === 270;
    const aspect = ROWS / COLS;

    let cw, ch;
    if (!isLandscape) {
      const hudH = 160;
      cw = Math.min(sw * 0.92, (sh - hudH) / aspect);
      ch = cw * aspect;
    } else {
      const hudW = 260;
      cw = Math.min(sh * 0.90, (sw - hudW) / aspect);
      ch = cw * aspect;
    }
    canvas.width  = Math.max(100, cw | 0);
    canvas.height = Math.max(100, ch | 0);
  }

  function updateWorldRotateSize() {
    if (!worldRotateEl || !canvas) return;
    const normAngle = getDeviceAngle();
    const isRotated = normAngle === 90 || normAngle === 270;
    worldRotateEl.style.width  = (isRotated ? canvas.height : canvas.width)  + 'px';
    worldRotateEl.style.height = (isRotated ? canvas.width  : canvas.height) + 'px';
  }

  // ── Level init ─────────────────────────────────────────────────────────────
  function initLevel(levelNum, spawnCell) {
    if (!canvas) return;
    const W = canvas.width, H = canvas.height;
    const R = ROWS, C = COLS;
    const cw = W / C, ch = H / R;
    const trackRatio = currentMode === 'zen' ? 0.65 : getTrackRatio(levelNum);
    const br = Math.min(cw, ch) * BALL_RATIO;
    const wt = wallThickness(cw, ch);
    const maze = makeMaze(R, C);
    const sc   = spawnCell || { r: 0, c: 0 };

    let hr = -1, hc = -1, best = -1;
    for (let i = 0; i < 30; i++) {
      const tr = (Math.random() * R) | 0, tc = (Math.random() * C) | 0;
      const d  = Math.abs(tr - sc.r) + Math.abs(tc - sc.c);
      if (d > best && d > 1) { best = d; hr = tr; hc = tc; }
    }
    if (hr < 0) { hr = R - 1 - sc.r; hc = C - 1 - sc.c; }
    if (hr === sc.r && hc === sc.c) hr = (hr + 1) % R;

    inputMgr?.resetGyroOffset();

    const path         = bfsPath(maze, R, C, sc, { r: hr, c: hc });
    const checkpoints  = computeCheckpoints(path, maze);
    const collectibles = currentMode !== 'zen'
      ? computeCollectibles(path, maze, R, C, checkpoints)
      : [];

    const theme = getTheme(levelNum, currentMode, $settings.zenColor);
    // Propagate the level's neon color to the UI so menus / borders track
    // the palette change every 5 levels (and the Zen choice).
    if (typeof document !== 'undefined') {
      document.documentElement.style.setProperty('--neon-color', theme.neon);
    }

    // Carry remaining time + bonus at level completion.
    const initialTime = (levelNum > 1 && G?.remainingAtComplete != null)
      ? G.remainingAtComplete + 30
      : MODE_DURATION;

    const now = performance.now();
    G = {
      W, H, cw, ch, br, wt, maze, lvl: levelNum, R, C, trackRatio, theme,
      trackColor: theme.neon,  // legacy alias used by some render passes
      spawn: { ...sc },
      ball: { x: sc.c * cw + cw / 2, y: sc.r * ch + ch / 2, vx: 0, vy: 0 },
      hole: { r: hr, c: hc },
      checkpoints, collectibles,
      lastCheckpoint: null,
      trail: [], floatingTexts: [],
      phase: 'intro', fallT: 0, fallCause: 'hole',
      introT: now, levelStart: now,
      pausedMs: 0, pauseAt: 0,
      initialTime,
    };
    lvl    = levelNum;
    chrono = currentMode === 'zen' ? '∞' : formatTime(initialTime * 1000);
    countdownText = '';
    runStats.update(s => ({ ...s, lvl: levelNum }));
  }

  function handleOrientationChange() {
    setTimeout(() => {
      const oldCw = G ? G.cw : 0;
      const oldCh = G ? G.ch : 0;
      deviceAngle = getDeviceAngle();
      fitCanvas();
      updateWorldRotateSize();
      if (G) {
        const newCw = canvas.width  / COLS;
        const newCh = canvas.height / ROWS;
        const sx = newCw / oldCw, sy = newCh / oldCh;
        G.ball.x  *= sx; G.ball.y  *= sy;
        G.ball.vx *= sx; G.ball.vy *= sy;
        G.trail = G.trail.map(p => ({ x: p.x * sx, y: p.y * sy }));
        G.W = canvas.width; G.H = canvas.height;
        G.cw = newCw; G.ch = newCh;
        G.br = Math.min(newCw, newCh) * BALL_RATIO;
        G.wt = wallThickness(newCw, newCh);
      }
      inputMgr?.resetGyroOffset();
    }, 180);
  }

  // ── Game actions ───────────────────────────────────────────────────────────
  function pauseGame()  {
    if (!G || G.phase !== 'play') return;
    paused = true; G.pauseAt = performance.now();
  }
  function resumeGame() {
    if (!G) return;
    if (G.pauseAt) { G.pausedMs += performance.now() - G.pauseAt; G.pauseAt = 0; }
    paused = false;
  }
  function togglePause() { paused ? resumeGame() : pauseGame(); }

  function triggerGameOver() {
    if (raf) { cancelAnimationFrame(raf); raf = null; }
    runStats.update(s => ({ ...s, lvl: G?.lvl ?? 1, falls: attempts }));
    appScreen.set('gameover');
  }

  function restartLevel() {
    if (!G) return;
    G.initialTime = MODE_DURATION;
    attempts = 0; chrono = currentMode === 'zen' ? '∞' : '2:00';
    paused = false;
    initLevel(1, null);
  }

  function restartAfterFall() {
    if (!G) return;
    if (currentMode === 'hardcore') { triggerGameOver(); return; }
    attempts += 1;
    haptic([80]);
    if (currentMode !== 'zen') {
      G.initialTime = Math.max(0, G.initialTime - 5);
      spawnFloatingText('-5s', G.W / 2, G.H / 2, '#ff5555');
    }
    runStats.update(s => ({ ...s, falls: attempts }));
    const pt = G.lastCheckpoint || G.spawn;
    G.ball = { x: pt.c * G.cw + G.cw / 2, y: pt.r * G.ch + G.ch / 2, vx: 0, vy: 0 };
    G.trail = []; G.phase = 'play';
    inputMgr?.resetGyroOffset();
  }

  // ── Tap handlers ───────────────────────────────────────────────────────────
  function handleCanvasTap() {
    if (!G) return;
    $audioMgrStore?.start();
    if (G.phase === 'intro') {
      G.phase = 'play'; G.levelStart = performance.now(); countdownText = '';
      return;
    }
    if (controlMode === 'gyro' && G.phase === 'play') {
      paused ? resumeGame() : pauseGame();
    }
  }

  function handleContainerTap(e) {
    if (controlMode !== 'gyro') return;
    if (!G || G.phase !== 'play' || paused) return;
    if (e.target.closest('button')) return;
    pauseGame();
  }

  // Gyro permission depuis le panneau de réglages (geste utilisateur requis sur iOS).
  async function handleGyroEnable() {
    if (!inputMgr) return;
    const res = await inputMgr.requestGyroPermissionFromUserGesture();
    if (res === 'denied') {
      settings.update(s => ({ ...s, controlMode: 'joystick' }));
    }
  }

  // ── Mount / Game loop ──────────────────────────────────────────────────────
  onMount(() => {
    hint = $settings.controlMode === 'joystick' ? 'joystick' : 'mouse';

    // Wake lock — empêche l'écran de s'éteindre pendant le jeu
    let wakeLock = null;
    const acquireWakeLock = async () => {
      if (document.visibilityState !== 'visible') return;
      try {
        wakeLock = await navigator.wakeLock?.request('screen');
        wakeLock?.addEventListener('release', () => setTimeout(acquireWakeLock, 500));
      } catch {}
    };
    acquireWakeLock();
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') acquireWakeLock();
    });
    const wlInterval = setInterval(acquireWakeLock, 25000);

    deviceAngle = getDeviceAngle();
    fitCanvas();
    updateWorldRotateSize();

    inputMgr = createInputManager({
      canvas,
      getDeviceAngle: () => deviceAngle,
      getControlMode: () => controlMode,
      getSensitivity: () => sensitivity,
      onCanvasTap:    handleCanvasTap,
      onEscape:       togglePause,
      onTouchStart:   () => $audioMgrStore?.start(),
      onHintChange:   (h) => { hint = h; },
    });
    inputMgr.attach();

    setTimeout(() => initLevel(1, null), 60);

    const ctx = canvas.getContext('2d');
    let last  = performance.now();

    function loop(ts) {
      if (!G) { raf = requestAnimationFrame(loop); return; }
      const dt = Math.min((ts - last) / 16.67, 3);
      last = ts;

      // Parallaxe : gyro (si dispo et mode gyro) sinon tilt courant (joystick/clavier/souris)
      const im = inputMgr.state;
      const useGyroParallax = im.gyroOk && controlMode === 'gyro';
      const ptx = useGyroParallax ? im.gyroParallaxX : im.tilt.x;
      const pty = useGyroParallax ? im.gyroParallaxY : im.tilt.y;
      boardTiltX += (ptx - boardTiltX) * 0.08;
      boardTiltY += (pty - boardTiltY) * 0.08;

      // World-lock + bascule 3D — appliqué chaque frame en direct DOM pour la perf
      const MAX_DEG = 12;
      const wlRot   = -deviceAngle;
      if (boardWrap) {
        boardWrap.style.transform = [
          'translate(-50%, -50%)',
          `rotate(${wlRot}deg)`,
          'perspective(700px)',
          `rotateX(${-boardTiltY * MAX_DEG}deg)`,
          `rotateY(${boardTiltX * MAX_DEG}deg)`,
        ].join(' ');
        boardWrap.style.boxShadow =
          `0 0 50px rgba(0,200,255,0.18), ${boardTiltX * 18}px ${boardTiltY * 18 + 6}px 48px rgba(0,0,0,0.90)`;
      }
      if (worldRotateEl) {
        const normAngle = ((deviceAngle % 360) + 360) % 360;
        const isRot = normAngle === 90 || normAngle === 270;
        worldRotateEl.style.width  = (isRot ? canvas.height : canvas.width)  + 'px';
        worldRotateEl.style.height = (isRot ? canvas.width  : canvas.height) + 'px';
      }

      // Resize sync (window resized sans rotation)
      if (G.W !== canvas.width || G.H !== canvas.height) {
        const oldCw = G.cw, oldCh = G.ch;
        G.W = canvas.width; G.H = canvas.height;
        G.cw = G.W / G.C; G.ch = G.H / G.R;
        const sx = G.cw / oldCw, sy = G.ch / oldCh;
        G.ball.x *= sx; G.ball.y *= sy; G.ball.vx *= sx; G.ball.vy *= sy;
        G.trail = G.trail.map(p => ({ x: p.x * sx, y: p.y * sy }));
        G.br = Math.min(G.cw, G.ch) * BALL_RATIO;
        G.wt = wallThickness(G.cw, G.ch);
      }

      // ── Phases ─────────────────────────────────────────────────────────────
      if (G.phase === 'intro') {
        const elapsed = ts - G.introT;
        const step = elapsed < 900  ? `NVL ${G.lvl}`
                   : elapsed < 1700 ? '3'
                   : elapsed < 2500 ? '2'
                   : elapsed < 3300 ? '1'
                   : '';
        if (step === '' && countdownText !== '') { G.phase = 'play'; G.levelStart = ts; }
        if (step !== countdownText) countdownText = step;

      } else if (!paused && G.phase === 'play') {
        stepPhysics(G, dt, im.tilt);

        // Timer
        if (currentMode !== 'zen') {
          const elapsed = (ts - G.levelStart - G.pausedMs) / 1000;
          const tl = Math.max(0, G.initialTime - elapsed);
          timeLeft = tl;
          chrono   = formatTime(tl * 1000);
          const secLeft = Math.ceil(tl);
          if (tl <= 10 && secLeft !== lastHapticSec) {
            lastHapticSec = secLeft; haptic([10]);
          }
          if (tl <= 0) { triggerGameOver(); return; }
        }

        // Trail
        const spd = Math.hypot(G.ball.vx, G.ball.vy);
        if (spd > 0.06) {
          G.trail.push({ x: G.ball.x, y: G.ball.y });
          const maxLen = Math.max(10, Math.min(40, Math.round(spd * 10)));
          while (G.trail.length > maxLen) G.trail.shift();
        } else if (G.trail.length > 0) {
          G.trail = [];
        }

        // Checkpoints
        if (G.checkpoints) {
          for (const cp of G.checkpoints) {
            if (cp.passed) continue;
            const cpx = cp.c * G.cw + G.cw / 2, cpy = cp.r * G.ch + G.ch / 2;
            if (Math.hypot(G.ball.x - cpx, G.ball.y - cpy) < G.br * 1.6) {
              cp.passed = true; G.lastCheckpoint = { r: cp.r, c: cp.c };
            }
          }
        }

        // Collectibles
        if (G.collectibles) {
          for (const col of G.collectibles) {
            if (col.collected) continue;
            const cx = col.c * G.cw + G.cw / 2, cy = col.r * G.ch + G.ch / 2;
            if (Math.hypot(G.ball.x - cx, G.ball.y - cy) < G.br * 2.0) {
              col.collected = true; col.collectT = ts;
              G.initialTime += parseInt(col.type);
              spawnFloatingText(col.type, cx, cy, '#ffe040');
              haptic([30, 15, 30]);
            }
          }
        }

        // Hole detection
        const hx = G.hole.c * G.cw + G.cw / 2, hy = G.hole.r * G.ch + G.ch / 2;
        if (Math.hypot(G.ball.x - hx, G.ball.y - hy) < G.br * 0.58) {
          haptic([20, 10, 20, 10, 40]);
          if (currentMode !== 'zen') {
            const elapsed = (ts - G.levelStart - G.pausedMs) / 1000;
            G.remainingAtComplete = Math.max(0, G.initialTime - elapsed);
          }
          spawnFloatingText('+30s', G.W / 2, G.H / 2, '#00ff80');
          G.phase = 'falling'; G.fallT = ts; G.fallCause = 'hole';
        } else if (checkWallFall(G.ball, G)) {
          G.phase = 'falling'; G.fallT = ts; G.fallCause = 'void';
        }

      } else if (G.phase === 'falling' && ts - G.fallT > 720) {
        if (G.fallCause === 'hole') {
          initLevel(G.lvl + 1, { r: G.hole.r, c: G.hole.c });
        } else {
          restartAfterFall();
        }
      }

      draw(ctx, G, ts, boardTiltX, boardTiltY, im.tilt, {
        active: im.joystick.active, cx: im.joystick.cx, cy: im.joystick.cy,
        dx: im.joystick.dx, dy: im.joystick.dy, radius: JOY_RADIUS, mode: controlMode,
      }, deviceAngle * Math.PI / 180);

      raf = requestAnimationFrame(loop);
    }

    raf = requestAnimationFrame(loop);

    const onResize = () => {
      const oldCw = G ? G.cw : 0;
      const oldCh = G ? G.ch : 0;
      fitCanvas();
      updateWorldRotateSize();
      if (G && oldCw > 0) {
        const sx = (canvas.width  / COLS) / oldCw;
        const sy = (canvas.height / ROWS) / oldCh;
        G.ball.x *= sx; G.ball.y *= sy; G.ball.vx *= sx; G.ball.vy *= sy;
        G.trail = G.trail.map(p => ({ x: p.x * sx, y: p.y * sy }));
        G.W = canvas.width; G.H = canvas.height;
        G.cw = canvas.width / COLS; G.ch = canvas.height / ROWS;
        G.br = Math.min(G.cw, G.ch) * BALL_RATIO;
        G.wt = wallThickness(G.cw, G.ch);
      }
    };
    const onRotate = () => {
      deviceAngle = getDeviceAngle();
      handleOrientationChange();
    };

    window.addEventListener('resize',            onResize);
    window.addEventListener('orientationchange', onRotate);
    window.screen?.orientation?.addEventListener('change', onRotate);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      clearInterval(wlInterval);
      wakeLock?.release();
      inputMgr?.detach();
      window.removeEventListener('resize',            onResize);
      window.removeEventListener('orientationchange', onRotate);
      window.screen?.orientation?.removeEventListener('change', onRotate);
    };
  });
</script>

<HUD {lvl} {chrono} {attempts} {paused} mode={currentMode} {hint} {timeLeft}
     onTogglePause={togglePause}
     on:click={handleContainerTap}>
  <Canvas
    bind:canvas
    bind:worldRotateEl
    bind:boardWrap
    {countdownText}
    {deviceAngle}
    on:click={handleCanvasTap} />
</HUD>

{#if showCfg}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="cfg-overlay" on:click|self={() => showCfg = false}>
    <div class="cfg-panel">
      <SettingsPanel showClose={true} onClose={() => showCfg = false}
        on:gyro-enable={handleGyroEnable} />
    </div>
  </div>
{/if}

{#if paused}
  <PauseOverlay
    {lvl} {chrono} mode={currentMode}
    onResume={resumeGame}
    onRestart={restartLevel}
    onSettings={() => showCfg = true}
    onMenu={() => appScreen.set('title')} />
{/if}

<style>
  .cfg-overlay {
    position: fixed; inset: 0; z-index: 300;
    background: rgba(0,2,15,0.88);
    display: flex; align-items: center; justify-content: center;
    padding: 32px 24px;
  }
  .cfg-panel {
    background: rgba(0,5,25,0.98);
    border: 1.5px solid var(--neon-color, #00c8ff);
    border-radius: 14px; padding: 28px 28px;
    box-shadow: 0 0 40px rgba(0,200,255,0.22);
  }
</style>
