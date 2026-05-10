<script>
  import { onMount } from 'svelte';
  import { makeMaze }                                from './lib/maze.js';
  import { N_WALL, N_BALL, N_HOLE, GYRO_KEY }       from './lib/constants.js';
  import { getTrackRatio, bfsPath, computeCheckpoints } from './lib/maze-utils.js';
  import { FRICTION, GRAVITY, stepPhysics, checkWallFall } from './lib/physics.js';
  import { createAudioManager }                      from './lib/audio.js';
  import { generateNebula, draw }                    from './lib/render.js';

  // ── Reactive state ────────────────────────────────────────────────────────
  let lvl           = 1;
  let chrono        = '0:00';
  let hint          = 'mouse';
  let iosBtn        = false;
  let showCfg       = false;
  let paused        = false;
  let countdownText = '';
  let isPortrait    = false;
  let attempts      = 0;
  let soundEnabled  = true;
  let sensitivity   = 0.55;
  let musicVolume   = 0.5;

  // ── Non-reactive refs ─────────────────────────────────────────────────────
  let canvas, boardWrap;
  let G             = null;
  let raf           = null;
  let tilt          = { x: 0, y: 0 };
  let gyroOk        = false;
  let pendingGyroActivation = false;
  let held          = { l: 0, r: 0, u: 0, d: 0 };
  let rowsInUse     = 6;
  let colsInUse     = 10;
  let keyInt        = null;
  let gyroOffset    = { beta: 0, gamma: 0 };
  let lastOrient    = { beta: 0, gamma: 0 };
  let controlMode   = 'gyro';
  let joyActive     = false;
  let joyCx = 0, joyCy = 0;
  let joyDx = 0, joyDy = 0;
  const JOY_RADIUS  = 70;
  let boardTiltX    = 0;
  let boardTiltY    = 0;
  let nebulaCanvas  = null;
  let audioMgr      = null;

  // ── Small helpers ─────────────────────────────────────────────────────────
  function wallThickness(cw, ch) {
    return Math.max(3, Math.min(7, Math.min(cw, ch) * 0.12));
  }

  function formatTime(ms) {
    const s = Math.max(0, ms) / 1000;
    return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
  }

  function getOrientationAngle() {
    return (typeof screen !== 'undefined' && screen.orientation)
      ? screen.orientation.angle
      : (window.orientation || 0);
  }

  // ── Game actions ──────────────────────────────────────────────────────────
  function pauseGame() {
    if (!G || G.phase !== 'play') return;
    paused = true;
    G.pauseAt = performance.now();
  }

  function resumeGame() {
    if (!G) return;
    if (G.pauseAt) { G.pausedMs += performance.now() - G.pauseAt; G.pauseAt = 0; }
    paused = false;
  }

  function toggleSound() {
    soundEnabled = !soundEnabled;
    audioMgr?.setVolume(musicVolume, soundEnabled);
  }

  function toggleControlMode() {
    controlMode = controlMode === 'gyro' ? 'joystick' : 'gyro';
    joyActive = false; joyDx = 0; joyDy = 0;
    tilt = { x: 0, y: 0 };
    hint = controlMode === 'joystick' ? 'joystick' : (gyroOk ? 'gyro' : hint);
  }

  function restartLevel() {
    if (!G) return;
    const now = performance.now();
    G.ball = { x: G.spawn.c * G.cw + G.cw / 2, y: G.spawn.r * G.ch + G.ch / 2, vx: 0, vy: 0 };
    G.phase = 'intro'; G.introT = now; G.levelStart = now;
    G.pausedMs = 0; G.pauseAt = 0;
    if (G.checkpoints) G.checkpoints.forEach(cp => { cp.passed = false; });
    G.lastCheckpoint = null;
    G.trail = [];
    chrono = '0:00'; attempts = 0; countdownText = ''; paused = false;
    if (gyroOk) gyroOffset = { ...lastOrient };
  }

  function restartAfterFall() {
    if (!G) return;
    attempts += 1;
    const pt = G.lastCheckpoint || G.spawn;
    G.ball = { x: pt.c * G.cw + G.cw / 2, y: pt.r * G.ch + G.ch / 2, vx: 0, vy: 0 };
    G.trail = []; G.phase = 'play'; countdownText = ''; paused = false;
    if (gyroOk) gyroOffset = { ...lastOrient };
  }

  // ── Canvas sizing ─────────────────────────────────────────────────────────
  function fitCanvas(R, C) {
    if (!canvas) return;
    const isLandscape = window.innerWidth > window.innerHeight;
    let w, h;
    if (isLandscape) {
      h = window.innerHeight * 0.88;
      w = h * (C / R);
      const maxW = window.innerWidth * 0.64;
      if (w > maxW) { w = maxW; h = w * (R / C); }
    } else {
      w = Math.min(window.innerWidth * 0.90, 460);
      h = w * (R / C);
      const maxH = window.innerHeight * 0.62;
      if (h > maxH) { h = maxH; w = h * (C / R); }
    }
    canvas.width  = w | 0;
    canvas.height = h | 0;
  }

  // ── Level init ────────────────────────────────────────────────────────────
  function initLevel(levelNum, spawnCell, R, C) {
    if (!canvas) return;
    R = R ?? rowsInUse;
    C = C ?? colsInUse;
    const W = canvas.width, H = canvas.height;
    const cw = W / C, ch = H / R;
    const trackRatio = getTrackRatio(levelNum);
    const br = Math.min(cw, ch) * trackRatio * 0.35;
    const wt = wallThickness(cw, ch);
    const maze = makeMaze(R, C);
    const sc = spawnCell || { r: 0, c: 0 };

    let hr = -1, hc = -1, best = -1;
    for (let i = 0; i < 30; i++) {
      const tr = (Math.random() * R) | 0, tc = (Math.random() * C) | 0;
      const d  = Math.abs(tr - sc.r) + Math.abs(tc - sc.c);
      if (d > best && d > 1) { best = d; hr = tr; hc = tc; }
    }
    if (hr < 0) { hr = R - 1 - sc.r; hc = C - 1 - sc.c; }
    if (hr === sc.r && hc === sc.c) hr = (hr + 1) % R;

    if (gyroOk) gyroOffset = { ...lastOrient };

    // Generate nebula for this level
    nebulaCanvas = generateNebula(W, H, levelNum * 31 + 7);

    const path = bfsPath(maze, R, C, sc, { r: hr, c: hc });
    const checkpoints = computeCheckpoints(path);

    const now = performance.now();
    G = {
      W, H, cw, ch, br, wt, maze, lvl: levelNum, R, C, trackRatio,
      spawn: { ...sc },
      ball: { x: sc.c * cw + cw / 2, y: sc.r * ch + ch / 2, vx: 0, vy: 0 },
      hole: { r: hr, c: hc },
      checkpoints,
      lastCheckpoint: null,
      trail: [],
      phase: 'intro',
      fallT: 0, fallCause: 'hole',
      introT: now, levelStart: now,
      pausedMs: 0, pauseAt: 0,
    };
    chrono = '0:00'; countdownText = '';
  }

  // ── Touch handlers ────────────────────────────────────────────────────────
  function onTouchStart(e) {
    e.preventDefault();
    audioMgr?.start();
    if (controlMode !== 'joystick') return;
    const t = e.changedTouches[0];
    const r = canvas.getBoundingClientRect();
    const sx = canvas.width / r.width, sy = canvas.height / r.height;
    joyCx = (t.clientX - r.left) * sx;
    joyCy = (t.clientY - r.top)  * sy;
    joyDx = 0; joyDy = 0; joyActive = true;
  }

  function onTouchMove(e) {
    e.preventDefault();
    if (!joyActive || controlMode !== 'joystick') return;
    const t = e.changedTouches[0];
    const r = canvas.getBoundingClientRect();
    const sx = canvas.width / r.width, sy = canvas.height / r.height;
    const dx = (t.clientX - r.left) * sx - joyCx;
    const dy = (t.clientY - r.top)  * sy - joyCy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const c = Math.min(dist, JOY_RADIUS);
    joyDx = dist > 0 ? (dx / dist) * c : 0;
    joyDy = dist > 0 ? (dy / dist) * c : 0;
    tilt = {
      x: Math.max(-1, Math.min(1, joyDx / JOY_RADIUS * sensitivity)),
      y: Math.max(-1, Math.min(1, joyDy / JOY_RADIUS * sensitivity)),
    };
  }

  function onTouchEnd(e) {
    if (controlMode !== 'joystick') { handleCanvasTap(); return; }
    const scale = canvas.width / canvas.getBoundingClientRect().width;
    if (Math.hypot(joyDx, joyDy) < 8 * scale) handleCanvasTap();
    joyActive = false; joyDx = 0; joyDy = 0;
    tilt = { x: 0, y: 0 };
  }

  function handleCanvasTap() {
    if (!G) return;
    audioMgr?.start();
    if (pendingGyroActivation) {
      pendingGyroActivation = false;
      DeviceOrientationEvent.requestPermission()
        .then(res => { if (res === 'granted') { gyroOk = true; hint = 'gyro'; } else iosBtn = true; })
        .catch(() => { iosBtn = true; });
      return;
    }
    if (G.phase === 'intro') {
      G.phase = 'play';
      G.levelStart = performance.now();
      countdownText = '';
    }
  }

  // ── iOS gyro permission ───────────────────────────────────────────────────
  async function requestGyroIOS() {
    try {
      const res = await DeviceOrientationEvent.requestPermission();
      if (res === 'granted') {
        gyroOk = true; iosBtn = false; hint = 'gyro';
        localStorage.setItem(GYRO_KEY, '1');
      }
    } catch {}
  }

  // ── Reactive: sync audio volume when controls change ──────────────────────
  $: audioMgr?.setVolume(musicVolume, soundEnabled);

  // ── Mount ─────────────────────────────────────────────────────────────────
  onMount(() => {
    isPortrait = window.innerHeight > window.innerWidth;
    try { screen.orientation.lock('landscape').catch(() => {}); } catch {}

    // Wake lock
    let wakeLock = null;
    const acquireWakeLock = async () => {
      if (document.visibilityState !== 'visible') return;
      try {
        wakeLock = await navigator.wakeLock.request('screen');
        wakeLock.addEventListener('release', () => { setTimeout(acquireWakeLock, 500); });
      } catch {}
    };
    acquireWakeLock();
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') acquireWakeLock();
    });
    const wlInterval = setInterval(acquireWakeLock, 25000);

    // Audio
    audioMgr = createAudioManager(import.meta.env.BASE_URL);
    audioMgr.init(soundEnabled ? musicVolume : 0);

    fitCanvas(rowsInUse, colsInUse);
    setTimeout(() => initLevel(1, null, rowsInUse, colsInUse), 60);

    // iOS gyro check
    if (typeof DeviceOrientationEvent !== 'undefined' &&
        typeof DeviceOrientationEvent.requestPermission === 'function') {
      if (localStorage.getItem(GYRO_KEY) === '1') {
        pendingGyroActivation = true;
        iosBtn = false;
      } else {
        iosBtn = true;
      }
    }

    const ctx = canvas.getContext('2d');
    let last  = performance.now();

    function loop(ts) {
      if (!G) { raf = requestAnimationFrame(loop); return; }
      const dt = Math.min((ts - last) / 16.67, 3);
      last = ts;

      // Smooth visual board tilt
      boardTiltX += (tilt.x - boardTiltX) * 0.08;
      boardTiltY += (tilt.y - boardTiltY) * 0.08;
      if (boardWrap) {
        const MAX_DEG = 14;
        boardWrap.style.transform =
          `perspective(700px) rotateX(${-boardTiltY * MAX_DEG}deg) rotateY(${boardTiltX * MAX_DEG}deg)`;
        boardWrap.style.boxShadow =
          `0 0 45px rgba(0,200,255,0.22), ${boardTiltX * 22}px ${boardTiltY * 22 + 8}px 50px rgba(0,0,0,0.92)`;
      }

      // Resize sync
      if (G.W !== canvas.width || G.H !== canvas.height) {
        G.W = canvas.width; G.H = canvas.height;
        G.cw = G.W / G.C; G.ch = G.H / G.R;
        G.br = Math.min(G.cw, G.ch) * G.trackRatio * 0.35;
        G.wt = wallThickness(G.cw, G.ch);
        nebulaCanvas = generateNebula(G.W, G.H, G.lvl * 31 + 7);
      }

      if (G.phase === 'intro') {
        const elapsed = ts - G.introT;
        const step = elapsed < 900 ? `LVL ${G.lvl}`
                   : elapsed < 1700 ? '3'
                   : elapsed < 2500 ? '2'
                   : elapsed < 3300 ? '1'
                   : '';
        if (step === '' && countdownText !== '') {
          G.phase = 'play';
          G.levelStart = ts;
        }
        if (step !== countdownText) countdownText = step;

      } else if (!paused && G.phase === 'play') {
        stepPhysics(G, dt, tilt);
        chrono = formatTime(ts - G.levelStart - G.pausedMs);

        // Trail
        const spd = Math.hypot(G.ball.vx, G.ball.vy);
        if (spd > 0.06) {
          G.trail.push({ x: G.ball.x, y: G.ball.y });
          const maxLen = Math.max(10, Math.min(40, Math.round(spd * 10)));
          while (G.trail.length > maxLen) G.trail.shift();
        } else {
          if (G.trail.length > 0) G.trail = [];
        }

        // Checkpoint detection
        if (G.checkpoints) {
          for (const cp of G.checkpoints) {
            if (cp.passed) continue;
            const cpx = cp.c * G.cw + G.cw / 2;
            const cpy = cp.r * G.ch + G.ch / 2;
            if (Math.hypot(G.ball.x - cpx, G.ball.y - cpy) < G.br * 1.6) {
              cp.passed = true;
              G.lastCheckpoint = { r: cp.r, c: cp.c };
            }
          }
        }

        // Hole detection (level complete)
        const hx = G.hole.c * G.cw + G.cw / 2;
        const hy = G.hole.r * G.ch + G.ch / 2;
        if (Math.hypot(G.ball.x - hx, G.ball.y - hy) < G.br * 0.58) {
          G.phase = 'falling'; G.fallT = ts; G.fallCause = 'hole';
        } else if (checkWallFall(G.ball, G)) {
          G.phase = 'falling'; G.fallT = ts; G.fallCause = 'void';
        }

      } else if (G.phase === 'falling' && ts - G.fallT > 720) {
        if (G.fallCause === 'hole') {
          const nl = G.lvl + 1;
          initLevel(nl, { r: G.hole.r, c: G.hole.c }, G.R, G.C);
          lvl = nl;
        } else {
          restartAfterFall();
        }
      }

      draw(ctx, G, ts, boardTiltX, boardTiltY, nebulaCanvas, tilt, {
        active: joyActive, cx: joyCx, cy: joyCy,
        dx: joyDx, dy: joyDy, radius: JOY_RADIUS, mode: controlMode,
      });
      raf = requestAnimationFrame(loop);
    }

    raf = requestAnimationFrame(loop);

    // Gyroscope
    const onOrient = (e) => {
      if (e.beta == null) return;
      lastOrient = { beta: e.beta || 0, gamma: e.gamma || 0 };
      if (!gyroOk) { gyroOffset = { ...lastOrient }; gyroOk = true; hint = 'gyro'; }
      if (controlMode !== 'gyro') return;
      const angle = getOrientationAngle();
      const dB = (e.beta  || 0) - gyroOffset.beta;
      const dG = (e.gamma || 0) - gyroOffset.gamma;
      const s25 = 25 / sensitivity;
      let tx, ty;
      if      (angle === 90)                    { tx =  dB / s25; ty = -dG / s25; }
      else if (angle === -90 || angle === 270)  { tx = -dB / s25; ty =  dG / s25; }
      else                                      { tx =  dG / s25; ty =  dB / s25; }
      tilt = { x: Math.max(-1, Math.min(1, tx)), y: Math.max(-1, Math.min(1, ty)) };
    };

    const onMouse = (e) => {
      if (gyroOk || controlMode === 'joystick') return;
      hint = 'mouse';
      const r = canvas.getBoundingClientRect();
      tilt = {
        x: Math.max(-1, Math.min(1, (e.clientX - r.left - r.width  / 2) / (r.width  * 0.4))),
        y: Math.max(-1, Math.min(1, (e.clientY - r.top  - r.height / 2) / (r.height * 0.4))),
      };
    };

    const onKD = (e) => {
      if (['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)) e.preventDefault();
      if (e.key === 'Escape') { paused ? resumeGame() : pauseGame(); return; }
      if (e.key === 'ArrowLeft')  { held.l = 1; hint = 'keys'; }
      if (e.key === 'ArrowRight') { held.r = 1; hint = 'keys'; }
      if (e.key === 'ArrowUp')    { held.u = 1; hint = 'keys'; }
      if (e.key === 'ArrowDown')  { held.d = 1; hint = 'keys'; }
    };
    const onKU = (e) => {
      if (e.key === 'ArrowLeft')  held.l = 0;
      if (e.key === 'ArrowRight') held.r = 0;
      if (e.key === 'ArrowUp')    held.u = 0;
      if (e.key === 'ArrowDown')  held.d = 0;
    };
    keyInt = setInterval(() => {
      if (!gyroOk && controlMode !== 'joystick')
        tilt = { x: (held.r - held.l) * sensitivity, y: (held.d - held.u) * sensitivity };
    }, 16);

    const onResize = () => {
      fitCanvas(rowsInUse, colsInUse);
      if (G) {
        G.W = canvas.width; G.H = canvas.height;
        G.cw = G.W / G.C; G.ch = G.H / G.R;
        G.br = Math.min(G.cw, G.ch) * G.trackRatio * 0.35;
        G.wt = wallThickness(G.cw, G.ch);
        nebulaCanvas = generateNebula(G.W, G.H, G.lvl * 31 + 7);
      }
    };

    const onRotate = () => setTimeout(() => {
      isPortrait = window.innerWidth < window.innerHeight;
      if (!isPortrait) { onResize(); if (gyroOk) gyroOffset = { ...lastOrient }; }
    }, 150);

    canvas.addEventListener('touchstart', onTouchStart, { passive: false });
    canvas.addEventListener('touchmove',  onTouchMove,  { passive: false });
    canvas.addEventListener('touchend',   onTouchEnd);

    window.addEventListener('deviceorientation', onOrient);
    window.addEventListener('mousemove',         onMouse);
    window.addEventListener('keydown',           onKD);
    window.addEventListener('keyup',             onKU);
    window.addEventListener('resize',            onResize);
    window.addEventListener('orientationchange', onRotate);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(keyInt);
      clearInterval(wlInterval);
      wakeLock?.release();
      audioMgr?.destroy();
      canvas.removeEventListener('touchstart', onTouchStart);
      canvas.removeEventListener('touchmove',  onTouchMove);
      canvas.removeEventListener('touchend',   onTouchEnd);
      window.removeEventListener('deviceorientation', onOrient);
      window.removeEventListener('mousemove',         onMouse);
      window.removeEventListener('keydown',           onKD);
      window.removeEventListener('keyup',             onKU);
      window.removeEventListener('resize',            onResize);
      window.removeEventListener('orientationchange', onRotate);
    };
  });

  const hints = {
    gyro:     "📱 Inclinez l'appareil",
    mouse:    '🖱 Déplacez la souris',
    keys:     '⌨ Touches fléchées',
    joystick: '🕹 Glissez pour diriger',
  };
</script>

<!-- ── Markup ─────────────────────────────────────────────────────────────── -->
<div class="container">

  <!-- Zone A : logo + hint -->
  <div class="zone-a">
    <div class="logo">MazeBall</div>
    <p class="hint">{hints[hint]}</p>
    {#if iosBtn && controlMode === 'gyro'}
      <button class="gyro-btn" on:click={requestGyroIOS}>Activer le gyroscope</button>
    {/if}
  </div>

  <!-- Board -->
  <div class="board-wrap" bind:this={boardWrap}>
    <canvas bind:this={canvas} on:click={handleCanvasTap}></canvas>

    {#if countdownText}
      <div class="countdown-overlay">
        {#if iosBtn}
          <button class="neon-btn ios-start-btn" on:click={requestGyroIOS}>
            ▶ ACTIVER &amp; JOUER
          </button>
        {:else}
          {#key countdownText}
            <div class="countdown-text">{countdownText}</div>
          {/key}
        {/if}
      </div>
    {/if}
  </div>

  <!-- Zone B : HUD -->
  <div class="zone-b">
    <div class="hud-timer">
      <div class="chrono">{chrono}</div>
      <div class="hud-label">TEMPS</div>
    </div>
    <div class="hud-level">NVL {lvl}</div>
    <div class="hud-btns">
      <button class="icon-btn" on:click={() => paused ? resumeGame() : pauseGame()} aria-label="Pause">
        {paused ? '▶' : '⏸'}
      </button>
      <button class="icon-btn" on:click={() => showCfg = !showCfg} aria-label="Paramètres">⚙</button>
    </div>
    {#if showCfg}
      <div class="config">
        <label class="cfg-label">
          Sensibilité
          <input type="range" min="0.1" max="1.5" step="0.05" bind:value={sensitivity} />
          <span class="cfg-val">{sensitivity.toFixed(2)}</span>
        </label>
        <label class="cfg-label">
          Volume
          <input type="range" min="0" max="1" step="0.05" bind:value={musicVolume} />
          <span class="cfg-val">{Math.round(musicVolume * 100)}%</span>
        </label>
      </div>
    {/if}
  </div>

</div>

<!-- ── Portrait overlay ───────────────────────────────────────────────────── -->
{#if isPortrait}
  <div class="rotate-overlay">
    <div class="rotate-icon">⟳</div>
    <div class="rotate-msg">Tournez votre appareil</div>
    <div class="rotate-sub">MazeBall se joue en mode paysage</div>
  </div>
{/if}

<!-- ── Pause menu ─────────────────────────────────────────────────────────── -->
{#if paused}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="pause-overlay" on:click|self={resumeGame}>
    <div class="pause-panel">
      <div class="pause-title">PAUSE</div>
      <div class="pause-info">NVL {lvl} · {chrono}</div>
      <button class="neon-btn" on:click={resumeGame}>▶&nbsp; REPRENDRE</button>
      <button class="neon-btn neon-btn--green" on:click={restartLevel}>↺&nbsp; RECOMMENCER</button>
      <button class="neon-btn neon-btn--amber" on:click={toggleControlMode}>
        {controlMode === 'gyro' ? '🕹 MODE JOYSTICK' : '📡 MODE GYROSCOPE'}
      </button>
      <button class="neon-btn neon-btn--sound" on:click={toggleSound}>
        {soundEnabled ? '🔊 SON ACTIVÉ' : '🔇 SON COUPÉ'}
      </button>
    </div>
  </div>
{/if}

<!-- ── Styles ─────────────────────────────────────────────────────────────── -->
<style>
  :global(*, *::before, *::after) { box-sizing: border-box; margin: 0; padding: 0; }
  :global(html, body) {
    width: 100%; height: 100%;
    background: #000;
    overflow: hidden;
    touch-action: none;
    user-select: none;
  }

  .container {
    width: 100vw; height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Courier New', monospace;
    gap: 8px;
    padding-top:    max(8px, env(safe-area-inset-top));
    padding-bottom: max(8px, env(safe-area-inset-bottom));
    padding-left:   env(safe-area-inset-left);
    padding-right:  env(safe-area-inset-right);
  }

  .zone-a    { order: 0; width: 100%; max-width: 460px; }
  .board-wrap { order: 1; flex-shrink: 0; }
  .zone-b    { order: 2; width: 100%; max-width: 460px; }

  @media (orientation: landscape) {
    .container {
      flex-direction: row;
      gap: 12px;
      padding-top:    env(safe-area-inset-top,    4px);
      padding-bottom: env(safe-area-inset-bottom, 4px);
      padding-left:  max(12px, env(safe-area-inset-left));
      padding-right: max(12px, env(safe-area-inset-right));
    }
    .zone-a    { order: 0; width: 90px;  min-width: 70px;  max-width: 110px; flex-shrink: 0; }
    .board-wrap { order: 1; }
    .zone-b    { order: 2; width: 150px; min-width: 130px; max-width: 170px; flex-shrink: 0; }
  }

  .zone-a {
    display: flex; flex-direction: column; align-items: center;
    gap: 10px; justify-content: center;
  }

  .logo {
    font-family: 'Courier New', monospace;
    font-weight: bold;
    font-size: clamp(12px, 2.2vw, 20px);
    color: #00c8ff;
    letter-spacing: 2px;
    text-shadow: 0 0 18px #00c8ff, 0 0 6px #00c8ff;
    text-align: center;
  }

  @media (orientation: landscape) {
    .logo {
      writing-mode: vertical-rl;
      text-orientation: mixed;
      transform: rotate(180deg);
      font-size: clamp(14px, 1.8vh, 22px);
      letter-spacing: 4px;
    }
    .hint {
      writing-mode: vertical-rl;
      text-orientation: mixed;
      transform: rotate(180deg);
      font-size: 9px;
    }
  }

  .hint {
    color: rgba(0,200,255,0.35);
    font-size: 10px;
    text-align: center;
    letter-spacing: .5px;
  }

  .gyro-btn {
    padding: 6px 10px;
    background: rgba(0,200,255,0.08);
    border: 1.5px solid #00c8ff; color: #00c8ff;
    border-radius: 5px; font-size: 10px; cursor: pointer;
    font-family: inherit; text-shadow: 0 0 8px #00c8ff;
  }
  .gyro-btn:active { opacity: .85; }

  .board-wrap {
    position: relative;
    border-radius: 4px;
    box-shadow: 0 0 50px rgba(0,200,255,0.18), 0 10px 50px rgba(0,0,0,0.95);
  }

  canvas {
    display: block;
    border-radius: 3px;
    border: 1.5px solid rgba(0,200,255,0.30);
    box-shadow: 0 0 30px rgba(0,200,255,0.10);
    cursor: pointer;
  }

  .countdown-overlay {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    background: rgba(0,0,10,0.55);
    border-radius: 3px;
    pointer-events: none;
  }

  .countdown-text {
    font-size: clamp(36px, 14vw, 72px);
    font-weight: bold;
    letter-spacing: 4px;
    color: #00c8ff;
    text-shadow: 0 0 40px #00c8ff, 0 0 14px #00c8ff, 0 0 4px #fff;
    animation: cdPulse 0.72s cubic-bezier(.2,.8,.4,1) both;
  }

  @keyframes cdPulse {
    from { transform: scale(2.2); opacity: 0; }
    to   { transform: scale(1);   opacity: 1; }
  }

  .zone-b {
    display: flex; flex-direction: row;
    align-items: center; justify-content: space-around;
    gap: 8px; flex-wrap: wrap;
  }

  @media (orientation: landscape) {
    .zone-b {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 12px;
      height: 100%;
      padding-top: 4px;
    }
  }

  .hud-timer { display: flex; flex-direction: column; align-items: flex-start; }

  .chrono {
    color: #ffe040;
    font-family: 'Courier New', monospace;
    font-size: clamp(20px, 3vw, 32px);
    font-weight: bold;
    letter-spacing: 3px;
    text-shadow: 0 0 14px #ffe040, 0 0 5px #ffe040;
    line-height: 1;
  }

  .hud-label {
    color: rgba(255,224,64,0.40);
    font-size: 8px;
    letter-spacing: 4px;
    font-family: 'Courier New', monospace;
    margin-top: 1px;
  }

  .hud-level {
    color: rgba(0,200,255,0.50);
    font-size: 11px;
    letter-spacing: 3px;
    font-family: 'Courier New', monospace;
  }

  .hud-btns { display: flex; gap: 6px; }

  @media (orientation: landscape) {
    .hud-btns { margin-top: auto; }
  }

  .icon-btn {
    background: transparent;
    border: 1px solid #00c8ff;
    color: #00c8ff;
    width: 30px; height: 30px;
    border-radius: 5px;
    font-size: 12px; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    text-shadow: 0 0 6px #00c8ff;
    box-shadow: 0 0 8px rgba(0,200,255,0.20);
    font-family: inherit;
  }
  .icon-btn:active { background: rgba(0,200,255,0.15); }

  .config {
    background: rgba(0,5,20,0.97);
    border: 1px solid #00c8ff;
    border-radius: 6px;
    padding: 10px 12px;
    display: flex; flex-direction: column; gap: 10px;
    font-size: 11px; color: #00c8ff; font-family: inherit;
    box-shadow: 0 0 20px rgba(0,200,255,0.18);
    margin-top: 4px;
  }
  .cfg-label {
    display: flex; flex-direction: column; gap: 4px;
    color: rgba(0,200,255,0.80);
  }
  .cfg-label input[type=range] { width: 100%; accent-color: #00c8ff; cursor: pointer; }
  .cfg-val { color: #00c8ff; font-size: 10px; letter-spacing: 1px; text-shadow: 0 0 6px #00c8ff; }

  .pause-overlay {
    position: fixed; inset: 0;
    background: rgba(0,0,10,0.85);
    display: flex; align-items: center; justify-content: center;
    z-index: 200;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }

  .pause-panel {
    background: rgba(0,5,20,0.98);
    border: 1.5px solid #00c8ff; border-radius: 14px;
    padding: 28px 32px;
    display: flex; flex-direction: column; align-items: center; gap: 14px;
    min-width: 220px;
    box-shadow: 0 0 50px rgba(0,200,255,0.30), inset 0 0 30px rgba(0,0,80,0.35);
  }

  .pause-title {
    color: #00c8ff; font-size: 24px; letter-spacing: 8px;
    text-shadow: 0 0 20px #00c8ff, 0 0 8px #00c8ff;
  }

  .pause-info { color: rgba(0,200,255,0.55); font-size: 12px; letter-spacing: 2px; margin-top: -4px; }

  .neon-btn {
    border: 1.5px solid #00c8ff; background: transparent; color: #00c8ff;
    padding: 10px 16px; border-radius: 7px;
    font-family: inherit; font-size: 12px; cursor: pointer;
    letter-spacing: 2px; text-shadow: 0 0 8px #00c8ff;
    box-shadow: 0 0 10px rgba(0,200,255,0.20); width: 100%;
  }
  .neon-btn:active { background: rgba(0,200,255,0.13); }

  .neon-btn--green {
    border-color: #00ff80; color: #00ff80;
    text-shadow: 0 0 8px #00ff80; box-shadow: 0 0 10px rgba(0,255,128,0.20);
  }
  .neon-btn--green:active { background: rgba(0,255,128,0.13); }

  .neon-btn--amber {
    border-color: #ffb300; color: #ffcc44;
    text-shadow: 0 0 8px #ffb300; box-shadow: 0 0 10px rgba(255,179,0,0.20);
  }
  .neon-btn--amber:active { background: rgba(255,179,0,0.13); }

  .neon-btn--sound {
    border-color: #44ddaa; color: #55ffbb;
    text-shadow: 0 0 8px #44ddaa; box-shadow: 0 0 10px rgba(68,221,170,0.20);
  }
  .neon-btn--sound:active { background: rgba(68,221,170,0.13); }

  .ios-start-btn { font-size: 16px; letter-spacing: 4px; padding: 14px 28px; pointer-events: all; width: auto; }

  .rotate-overlay {
    position: fixed; inset: 0; z-index: 500;
    background: #000;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    gap: 16px;
  }
  .rotate-icon { font-size: 72px; animation: spin90 1.8s ease-in-out infinite; display: inline-block; }
  @keyframes spin90 {
    0%, 40%  { transform: rotate(0deg);  opacity: 1;   }
    60%, 100%{ transform: rotate(90deg); opacity: 0.5; }
  }
  .rotate-msg  { color: #00c8ff; font-size: 20px; letter-spacing: 3px; text-shadow: 0 0 20px #00c8ff; }
  .rotate-sub  { color: rgba(0,200,255,0.45); font-size: 12px; letter-spacing: 1px; }
</style>
