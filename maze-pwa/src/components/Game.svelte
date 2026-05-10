<script>
  import { onMount }                                                from 'svelte';
  import { makeMaze }                                               from '../lib/maze.js';
  import { N_BALL, N_HOLE, GYRO_KEY, getTrackColor }               from '../lib/constants.js';
  import { getTrackRatio, bfsPath, computeCheckpoints,
           computeCollectibles }                                    from '../lib/maze-utils.js';
  import { stepPhysics, checkWallFall }                            from '../lib/physics.js';
  import { draw }                                                   from '../lib/render.js';
  import { screen as appScreen, gameMode, runStats, settings,
           audioMgrStore }                                         from '../stores.js';
  import SettingsPanel                                              from './SettingsPanel.svelte';

  // ── Fixed grid (portrait base) ──────────────────────────────────────────────
  const ROWS = 10, COLS = 6;

  // ── Reactive state ──────────────────────────────────────────────────────────
  let lvl           = 1;
  let chrono        = '2:00';
  let timeLeft      = 120;
  let hint          = 'mouse';
  let showIosOverlay = false;   // iOS gyro permission overlay (blocks countdown)
  let showCfg       = false;
  let paused        = false;
  let countdownText = '';
  let attempts      = 0;
  let lastHapticSec = -1;
  let deviceAngle   = 0;   // current screen orientation angle

  // Settings (initialised from store in onMount)
  let soundEnabled = true;
  let musicVolume  = 0.5;
  let sensitivity  = 0.55;
  let hapticsOn    = true;
  let controlMode  = 'gyro';

  const MODE_DURATION = 120;
  const currentMode   = $gameMode;  // snapshot — won't change mid-run

  // ── Non-reactive refs ───────────────────────────────────────────────────────
  let canvas, boardWrap, worldRotateEl;
  let G            = null;
  let raf          = null;
  let tilt         = { x: 0, y: 0 };
  let gyroOk       = false;
  let held         = { l: 0, r: 0, u: 0, d: 0 };
  let keyInt       = null;
  let gyroOffset   = { beta: 0, gamma: 0 };
  let lastOrient   = { beta: 0, gamma: 0 };
  let joyActive    = false;
  let joyCx = 0, joyCy = 0, joyDx = 0, joyDy = 0;
  const JOY_RADIUS = 70;
  let boardTiltX   = 0;
  let boardTiltY   = 0;

  // ── Helpers ─────────────────────────────────────────────────────────────────
  function wallThickness(cw, ch) { return Math.max(3, Math.min(7, Math.min(cw, ch) * 0.12)); }
  function formatTime(ms) {
    const s = Math.max(0, ms) / 1000;
    return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
  }

  function getDeviceAngle() {
    if (typeof window === 'undefined') return 0;
    const a = (window.screen?.orientation?.angle ?? window.orientation) || 0;
    return ((a % 360) + 360) % 360;
  }

  function haptic(pattern = [30]) {
    if (hapticsOn && $settings.haptics && navigator.vibrate) navigator.vibrate(pattern);
  }

  function spawnFloatingText(text, x, y, color) {
    if (G) G.floatingTexts.push({ text, x, y, color, startT: performance.now() });
  }

  // ── Canvas sizing (world-lock aware) ─────────────────────────────────────────
  // Canvas is always portrait-shaped (ROWS > COLS).
  // In landscape (normAngle=90 or 270), the canvas is CSS-rotated -90° so it
  // appears landscape on screen.
  function fitCanvas() {
    if (!canvas) return;
    const sw = window.innerWidth, sh = window.innerHeight;
    const normAngle = getDeviceAngle();
    const isLandscape = normAngle === 90 || normAngle === 270;
    const aspect = ROWS / COLS;  // portrait H/W ratio (e.g. 10/6 ≈ 1.67)

    let cw, ch;
    if (!isLandscape) {
      // Portrait: canvas appears portrait, fills portrait screen
      const hudH = 160;
      cw = Math.min(sw * 0.92, (sh - hudH) / aspect);
      ch = cw * aspect;
    } else {
      // Landscape: canvas CSS-rotated -90° → appears landscape on screen
      // visual_landscape_width  = canvas.height  ≤ sh × 0.90
      // visual_landscape_height = canvas.width   ≤ (sw - hudW)
      // canvas aspect: ch = cw × aspect  →  cw ≤ sh×0.90 AND cw×aspect ≤ sw-hudW
      const hudW = 260;
      cw = Math.min(sh * 0.90, (sw - hudW) / aspect);
      ch = cw * aspect;
    }

    canvas.width  = Math.max(100, cw | 0);
    canvas.height = Math.max(100, ch | 0);
  }

  // Update the world-rotate wrapper to take the correct VISUAL space in the layout.
  function updateWorldRotateSize() {
    if (!worldRotateEl || !canvas) return;
    const normAngle = getDeviceAngle();
    const isRotated = normAngle === 90 || normAngle === 270;
    worldRotateEl.style.width  = (isRotated ? canvas.height : canvas.width)  + 'px';
    worldRotateEl.style.height = (isRotated ? canvas.width  : canvas.height) + 'px';
  }

  // ── Level init ───────────────────────────────────────────────────────────────
  function initLevel(levelNum, spawnCell) {
    if (!canvas) return;
    const W = canvas.width, H = canvas.height;
    const R = ROWS, C = COLS;
    const cw = W / C, ch = H / R;
    const trackRatio = currentMode === 'zen' ? 0.65 : getTrackRatio(levelNum);
    const br = Math.min(cw, ch) * trackRatio * 0.35;
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

    if (gyroOk) gyroOffset = { ...lastOrient };

    const path         = bfsPath(maze, R, C, sc, { r: hr, c: hc });
    const checkpoints  = computeCheckpoints(path);
    const collectibles = currentMode !== 'zen'
      ? computeCollectibles(path, maze, R, C, checkpoints)
      : [];

    const trackColor = currentMode === 'zen'
      ? ($settings.zenColor || '#00c8ff')
      : getTrackColor(levelNum);

    // Carry remaining time + bonus. G.remainingAtComplete is set when the ball
    // enters the hole, so we add 30s to what was actually left, not to initialTime.
    const initialTime = (levelNum > 1 && G?.remainingAtComplete != null)
      ? G.remainingAtComplete + 30
      : MODE_DURATION;

    const now = performance.now();
    G = {
      W, H, cw, ch, br, wt, maze, lvl: levelNum, R, C, trackRatio, trackColor,
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

  // ── Orientation change handler ───────────────────────────────────────────────
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
        const sx    = newCw / oldCw;
        const sy    = newCh / oldCh;

        G.ball.x  *= sx; G.ball.y  *= sy;
        G.ball.vx *= sx; G.ball.vy *= sy;
        G.trail = G.trail.map(p => ({ x: p.x * sx, y: p.y * sy }));
        G.W = canvas.width; G.H = canvas.height;
        G.cw = newCw; G.ch = newCh;
        G.br = Math.min(newCw, newCh) * G.trackRatio * 0.35;
        G.wt = wallThickness(newCw, newCh);
      }

      if (gyroOk) gyroOffset = { ...lastOrient };
    }, 180);
  }

  // ── Game actions ─────────────────────────────────────────────────────────────
  function pauseGame()  {
    if (!G || G.phase !== 'play') return;
    paused = true; G.pauseAt = performance.now();
  }
  function resumeGame() {
    if (!G) return;
    if (G.pauseAt) { G.pausedMs += performance.now() - G.pauseAt; G.pauseAt = 0; }
    paused = false;
  }

  function triggerGameOver() {
    if (raf) { cancelAnimationFrame(raf); raf = null; }
    runStats.update(s => ({ ...s, lvl: G?.lvl ?? 1, falls: attempts }));
    appScreen.set('gameover');
  }

  function toggleSound() {
    soundEnabled = !soundEnabled;
    settings.update(s => ({ ...s, muted: !soundEnabled }));
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
    runStats.update(s => ({ ...s, falls: attempts }));
    const pt = G.lastCheckpoint || G.spawn;
    G.ball = { x: pt.c * G.cw + G.cw / 2, y: pt.r * G.ch + G.ch / 2, vx: 0, vy: 0 };
    G.trail = []; G.phase = 'play';
    if (gyroOk) gyroOffset = { ...lastOrient };
  }

  // ── Touch → canvas coordinate mapping (accounts for CSS world-lock rotation) ──
  // The canvas is always portrait (H > W). In landscape the board is CSS-rotated
  // by -deviceAngle, so touchscreen coords must be remapped to canvas space.
  function screenToCanvas(vx, vy) {
    const W = canvas.width, H = canvas.height;
    const na = ((deviceAngle % 360) + 360) % 360;
    if (na === 90)  return { x: W - vy, y: vx };      // CSS rotate(-90deg)
    if (na === 270) return { x: vy,     y: H - vx };  // CSS rotate(+90deg)
    if (na === 180) return { x: W - vx, y: H - vy };
    return { x: vx, y: vy };
  }

  // ── Touch handlers ───────────────────────────────────────────────────────────
  function onTouchStart(e) {
    e.preventDefault();
    $audioMgrStore?.start();
    if (controlMode !== 'joystick') return;
    const t = e.changedTouches[0];
    const r = canvas.getBoundingClientRect();
    const cp = screenToCanvas(t.clientX - r.left, t.clientY - r.top);
    joyCx = cp.x; joyCy = cp.y;
    joyDx = 0; joyDy = 0; joyActive = true;
  }

  function onTouchMove(e) {
    e.preventDefault();
    if (!joyActive || controlMode !== 'joystick') return;
    const t = e.changedTouches[0];
    const r = canvas.getBoundingClientRect();
    const cp = screenToCanvas(t.clientX - r.left, t.clientY - r.top);
    const dx = cp.x - joyCx, dy = cp.y - joyCy;
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
    joyActive = false; joyDx = 0; joyDy = 0; tilt = { x: 0, y: 0 };
  }

  function handleCanvasTap() {
    if (!G || showIosOverlay) return;
    $audioMgrStore?.start();
    if (G.phase === 'intro') {
      G.phase = 'play'; G.levelStart = performance.now(); countdownText = '';
    }
  }

  // Called by iOS overlay button "ACTIVER"
  async function iosActivateGyro() {
    try {
      const res = await DeviceOrientationEvent.requestPermission();
      if (res === 'granted') {
        gyroOk = true; hint = 'gyro';
        localStorage.setItem(GYRO_KEY, '1');
      }
    } catch {}
    showIosOverlay = false;
    if (G) { G.introT = performance.now(); }  // restart countdown fresh
  }

  // Called by iOS overlay button "JOYSTICK"
  function iosSkipGyro() {
    showIosOverlay = false;
    controlMode = 'joystick';
    settings.update(s => ({ ...s, controlMode: 'joystick' }));
    hint = 'joystick';
    if (G) { G.introT = performance.now(); }  // restart countdown fresh
  }

  // ── Mount ────────────────────────────────────────────────────────────────────
  onMount(() => {
    const s = $settings;
    soundEnabled = !s.muted;
    musicVolume  = s.volume;
    sensitivity  = s.sensitivity;
    controlMode  = s.controlMode;
    hapticsOn    = s.haptics;
    hint = controlMode === 'joystick' ? 'joystick' : 'mouse';

    // Wake lock
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

    // iOS gyro — show blocking overlay before the countdown starts.
    // iOS always requires requestPermission() per session (even if previously granted),
    // so we always show the overlay. We just pre-select the right default based on
    // the stored preference (GYRO_KEY).
    if (typeof DeviceOrientationEvent !== 'undefined' &&
        typeof DeviceOrientationEvent.requestPermission === 'function') {
      showIosOverlay = true;
    }

    deviceAngle = getDeviceAngle();
    fitCanvas();
    updateWorldRotateSize();
    setTimeout(() => initLevel(1, null), 60);

    const ctx = canvas.getContext('2d');
    let last  = performance.now();

    function loop(ts) {
      if (!G) { raf = requestAnimationFrame(loop); return; }
      const dt = Math.min((ts - last) / 16.67, 3);
      last = ts;

      // Smooth board tilt
      boardTiltX += (tilt.x - boardTiltX) * 0.08;
      boardTiltY += (tilt.y - boardTiltY) * 0.08;

      // World-lock + 3D tilt transform on the board
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

      // Sync worldRotateEl size (cheap — just string assignment)
      if (worldRotateEl) {
        const normAngle = ((deviceAngle % 360) + 360) % 360;
        const isRot = normAngle === 90 || normAngle === 270;
        worldRotateEl.style.width  = (isRot ? canvas.height : canvas.width)  + 'px';
        worldRotateEl.style.height = (isRot ? canvas.width  : canvas.height) + 'px';
      }

      // Canvas resize sync (if window resized without orientation change)
      if (G.W !== canvas.width || G.H !== canvas.height) {
        const oldCw = G.cw, oldCh = G.ch;
        G.W = canvas.width; G.H = canvas.height;
        G.cw = G.W / G.C; G.ch = G.H / G.R;
        const sx = G.cw / oldCw, sy = G.ch / oldCh;
        G.ball.x *= sx; G.ball.y *= sy; G.ball.vx *= sx; G.ball.vy *= sy;
        G.trail = G.trail.map(p => ({ x: p.x * sx, y: p.y * sy }));
        G.br = Math.min(G.cw, G.ch) * G.trackRatio * 0.35;
        G.wt = wallThickness(G.cw, G.ch);
      }

      // ── Intro phase ──
      if (G.phase === 'intro') {
        // Freeze countdown while iOS permission overlay is shown
        if (showIosOverlay) {
          if (countdownText !== `NVL ${G.lvl}`) countdownText = `NVL ${G.lvl}`;
          // fall through to draw, but don't advance timer
        } else {
        const elapsed = ts - G.introT;
        const step = elapsed < 900  ? `NVL ${G.lvl}`
                   : elapsed < 1700 ? '3'
                   : elapsed < 2500 ? '2'
                   : elapsed < 3300 ? '1'
                   : '';
        if (step === '' && countdownText !== '') { G.phase = 'play'; G.levelStart = ts; }
        if (step !== countdownText) countdownText = step;
        }

      // ── Play phase ──
      } else if (!paused && G.phase === 'play') {
        stepPhysics(G, dt, tilt);

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
          // Snapshot remaining time NOW so initLevel can add the 30s bonus to it
          if (currentMode !== 'zen') {
            const elapsed = (ts - G.levelStart - G.pausedMs) / 1000;
            G.remainingAtComplete = Math.max(0, G.initialTime - elapsed);
          }
          spawnFloatingText('+30s', G.W / 2, G.H / 2, '#00ff80');
          G.phase = 'falling'; G.fallT = ts; G.fallCause = 'hole';
        } else if (checkWallFall(G.ball, G)) {
          G.phase = 'falling'; G.fallT = ts; G.fallCause = 'void';
        }

      // ── Falling phase ──
      } else if (G.phase === 'falling' && ts - G.fallT > 720) {
        if (G.fallCause === 'hole') {
          initLevel(G.lvl + 1, { r: G.hole.r, c: G.hole.c });
        } else {
          restartAfterFall();
        }
      }

      draw(ctx, G, ts, boardTiltX, boardTiltY, tilt, {
        active: joyActive, cx: joyCx, cy: joyCy,
        dx: joyDx, dy: joyDy, radius: JOY_RADIUS, mode: controlMode,
      });

      raf = requestAnimationFrame(loop);
    }

    raf = requestAnimationFrame(loop);

    // ── Gyroscope ──
    const onOrient = (e) => {
      if (e.beta == null) return;
      lastOrient = { beta: e.beta || 0, gamma: e.gamma || 0 };
      if (!gyroOk) { gyroOffset = { ...lastOrient }; gyroOk = true; hint = 'gyro'; }
      if (controlMode !== 'gyro') return;

      const normAngle = getDeviceAngle();
      const dB = (e.beta  || 0) - gyroOffset.beta;
      const dG = (e.gamma || 0) - gyroOffset.gamma;
      const s25 = 25 / sensitivity;

      // World-lock mapping: physical right always → canvas x+ (appears right on screen)
      // Canvas is always portrait; CSS rotates it for landscape view.
      // These formulas keep ball movement physically intuitive regardless of phone angle.
      let tx, ty;
      if (normAngle === 90) {
        // Phone CW (landscape): canvas rotated -90° to world-lock
        tx = -dB / s25;   // physical forward → canvas left
        ty =  dG / s25;   // physical right   → canvas down (appears right in landscape)
      } else if (normAngle === 270) {
        // Phone CCW (landscape): canvas rotated +90° to world-lock
        tx =  dB / s25;
        ty = -dG / s25;
      } else if (normAngle === 180) {
        // Upside-down portrait
        tx = -dG / s25;
        ty = -dB / s25;
      } else {
        // Normal portrait
        tx =  dG / s25;
        ty =  dB / s25;
      }
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
        G.br = Math.min(G.cw, G.ch) * G.trackRatio * 0.35;
        G.wt = wallThickness(G.cw, G.ch);
      }
    };

    const onRotate = () => {
      deviceAngle = getDeviceAngle();
      handleOrientationChange();
    };

    canvas.addEventListener('touchstart', onTouchStart, { passive: false });
    canvas.addEventListener('touchmove',  onTouchMove,  { passive: false });
    canvas.addEventListener('touchend',   onTouchEnd);
    window.addEventListener('deviceorientation', onOrient);
    window.addEventListener('mousemove',         onMouse);
    window.addEventListener('keydown',           onKD);
    window.addEventListener('keyup',             onKU);
    window.addEventListener('resize',            onResize);
    window.addEventListener('orientationchange', onRotate);
    window.screen?.orientation?.addEventListener('change', onRotate);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      clearInterval(keyInt); clearInterval(wlInterval);
      wakeLock?.release();
      canvas.removeEventListener('touchstart', onTouchStart);
      canvas.removeEventListener('touchmove',  onTouchMove);
      canvas.removeEventListener('touchend',   onTouchEnd);
      window.removeEventListener('deviceorientation', onOrient);
      window.removeEventListener('mousemove',         onMouse);
      window.removeEventListener('keydown',           onKD);
      window.removeEventListener('keyup',             onKU);
      window.removeEventListener('resize',            onResize);
      window.removeEventListener('orientationchange', onRotate);
      window.screen?.orientation?.removeEventListener('change', onRotate);
    };
  });

  const hints = {
    gyro:     "📡 Inclinez l'appareil",
    mouse:    '🖱 Déplacez la souris',
    keys:     '⌨ Touches fléchées',
    joystick: '🕹 Glissez pour diriger',
  };

  const modeColor = { survie: '#00c8ff', hardcore: '#ff5555', zen: '#bb44ff' };
</script>

<!-- ── Markup ─────────────────────────────────────────────────────────────── -->

<div class="container">

  <!-- Zone A : logo + hint -->
  <div class="zone-a">
    <div class="logo">MazeBall</div>
    <p class="hint">{hints[hint]}</p>
  </div>

  <!-- Board (world-rotate sets visual layout size; board-wrap carries CSS rotation) -->
  <div class="world-rotate" bind:this={worldRotateEl}>
    <div class="board-wrap" bind:this={boardWrap}>
      <canvas bind:this={canvas} on:click={handleCanvasTap}></canvas>

      {#if showIosOverlay}
        <!-- iOS gyro permission — blocks countdown until user decides -->
        <div class="countdown-overlay">
          <!-- counter-rotate so panel appears upright on screen regardless of device angle -->
          <div class="ios-panel" style="transform: rotate({deviceAngle}deg)">
            <div class="ios-icon">📡</div>
            <div class="ios-title">Gyroscope</div>
            <div class="ios-desc">Autoriser le mouvement pour incliner le plateau</div>
            <button class="ios-btn ios-btn--primary" on:click={iosActivateGyro}>
              AUTORISER
            </button>
            <button class="ios-btn ios-btn--secondary" on:click={iosSkipGyro}>
              Mode joystick
            </button>
          </div>
        </div>
      {:else if countdownText}
        <div class="countdown-overlay">
          <!-- counter-rotate wrapper keeps text upright; animation stays on inner div -->
          <div class="countdown-rot" style="transform: rotate({deviceAngle}deg)">
            {#key countdownText}
              <div class="countdown-text">{countdownText}</div>
            {/key}
          </div>
        </div>
      {/if}
    </div>
  </div>

  <!-- Zone B : HUD -->
  <div class="zone-b">
    {#if currentMode !== 'zen'}
      <div class="hud-timer" class:alert={timeLeft <= 10 && timeLeft > 0}>
        <div class="chrono">{chrono}</div>
        <div class="hud-label">TEMPS</div>
      </div>
    {:else}
      <div class="hud-zen">ZEN</div>
    {/if}
    <div class="hud-level" style="color: {modeColor[currentMode]}">NVL {lvl}</div>
    <div class="hud-btns">
      <button class="icon-btn" on:click={() => paused ? resumeGame() : pauseGame()} aria-label="Pause">
        {paused ? '▶' : '⏸'}
      </button>
    </div>
  </div>

</div>

<!-- ── In-game settings panel ─────────────────────────────────────────────── -->
{#if showCfg}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="cfg-overlay" on:click|self={() => showCfg = false}>
    <div class="cfg-panel">
      <SettingsPanel showClose={true} onClose={() => showCfg = false} />
    </div>
  </div>
{/if}

<!-- ── Pause menu ─────────────────────────────────────────────────────────── -->
{#if paused}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="pause-overlay" on:click|self={resumeGame}>
    <div class="pause-panel">
      <div class="pause-title">PAUSE</div>
      <div class="pause-info">NVL {lvl}{currentMode !== 'zen' ? ' · ' + chrono : ''}</div>
      <button class="neon-btn" on:click={resumeGame}>▶&nbsp; REPRENDRE</button>
      <button class="neon-btn neon-btn--green" on:click={restartLevel}>↺&nbsp; RECOMMENCER</button>
      <button class="neon-btn neon-btn--amber" on:click={() => { showCfg = true; }}>
        ⚙&nbsp; PARAMÈTRES
      </button>
      <button class="neon-btn neon-btn--dim" on:click={() => appScreen.set('title')}>
        ⬅ MENU PRINCIPAL
      </button>
    </div>
  </div>
{/if}

<!-- ── Styles ─────────────────────────────────────────────────────────────── -->
<style>
  .container {
    position: relative; z-index: 1;
    width: 100vw; height: 100vh;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    font-family: 'Orbitron', 'Courier New', monospace;
    gap: 10px;
    padding-top:    max(10px, env(safe-area-inset-top));
    padding-bottom: max(10px, env(safe-area-inset-bottom));
    padding-left:   env(safe-area-inset-left);
    padding-right:  env(safe-area-inset-right);
  }

  .zone-a { order: 0; }
  .world-rotate { order: 1; flex-shrink: 0; position: relative; }
  .zone-b { order: 2; }

  @media (orientation: landscape) {
    .container {
      flex-direction: row; gap: 14px;
      padding-left:  max(14px, env(safe-area-inset-left));
      padding-right: max(14px, env(safe-area-inset-right));
    }
    .zone-a    { order: 0; width: 90px;  min-width: 70px; flex-shrink: 0; }
    .world-rotate { order: 1; }
    .zone-b    { order: 2; width: 160px; min-width: 130px; flex-shrink: 0; }
  }

  /* Zone A */
  .zone-a {
    display: flex; flex-direction: column;
    align-items: center; gap: 8px; justify-content: center;
  }
  .logo {
    font-weight: 900; font-size: clamp(14px, 2.4vw, 22px);
    color: #00c8ff; letter-spacing: 2px;
    text-shadow: 0 0 18px #00c8ff, 0 0 6px #00c8ff;
    text-align: center;
  }
  .hint {
    color: rgba(255,255,255,0.60);
    font-size: 10px; text-align: center; letter-spacing: .5px;
    font-family: 'Courier New', monospace;
  }
  @media (orientation: landscape) {
    .logo { writing-mode: vertical-rl; text-orientation: mixed; transform: rotate(180deg); font-size: clamp(14px, 1.8vh, 22px); letter-spacing: 4px; }
    .hint { writing-mode: vertical-rl; text-orientation: mixed; transform: rotate(180deg); font-size: 9px; }
  }

  /* iOS gyro permission panel */
  .ios-panel {
    display: flex; flex-direction: column; align-items: center; gap: 12px;
    background: rgba(0,5,25,0.97);
    border: 1.5px solid rgba(0,200,255,0.60);
    border-radius: 16px; padding: 28px 24px;
    box-shadow: 0 0 40px rgba(0,200,255,0.25);
    max-width: 260px;
    font-family: 'Orbitron', 'Courier New', monospace;
    pointer-events: all;
  }
  .ios-icon  { font-size: 32px; }
  .ios-title {
    color: #00c8ff; font-size: 14px; font-weight: 700; letter-spacing: 4px;
    text-shadow: 0 0 12px #00c8ff;
  }
  .ios-desc  {
    color: rgba(255,255,255,0.75); font-size: 10px; text-align: center;
    font-family: 'Courier New', monospace; line-height: 1.5; letter-spacing: 0.3px;
  }
  .ios-btn {
    width: 100%; padding: 11px 16px; border-radius: 7px;
    font-family: 'Orbitron', monospace; font-size: 11px; cursor: pointer;
    letter-spacing: 2px;
  }
  .ios-btn--primary {
    border: 1.5px solid #00c8ff; background: rgba(0,200,255,0.12); color: #00c8ff;
    text-shadow: 0 0 8px #00c8ff; box-shadow: 0 0 12px rgba(0,200,255,0.22);
  }
  .ios-btn--primary:active  { background: rgba(0,200,255,0.25); }
  .ios-btn--secondary {
    border: 1px solid rgba(255,255,255,0.25); background: transparent;
    color: rgba(255,255,255,0.55); font-size: 10px; letter-spacing: 1px;
  }
  .ios-btn--secondary:active { background: rgba(255,255,255,0.07); }

  /* World-rotate: sizes itself to the VISUAL (post-CSS-rotation) canvas dimensions */
  .world-rotate { display: flex; align-items: center; justify-content: center; }

  /* Board-wrap: centered inside world-rotate, carries the world-lock CSS rotation */
  .board-wrap {
    position: absolute; top: 50%; left: 50%;
    border-radius: 4px;
  }

  canvas {
    display: block; border-radius: 3px;
    border: 1.5px solid rgba(0,200,255,0.35);
    cursor: pointer;
  }

  .countdown-overlay {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    background: rgba(0,0,10,0.55); border-radius: 3px; pointer-events: none;
  }
  .countdown-rot { display: flex; align-items: center; justify-content: center; }
  .countdown-text {
    font-size: clamp(36px, 14vw, 72px); font-weight: 900; letter-spacing: 4px;
    color: #00c8ff;
    text-shadow: 0 0 40px #00c8ff, 0 0 14px #00c8ff, 0 0 4px #fff;
    animation: cdPulse 0.72s cubic-bezier(.2,.8,.4,1) both;
  }
  @keyframes cdPulse {
    from { transform: scale(2.2); opacity: 0; }
    to   { transform: scale(1);   opacity: 1; }
  }

  /* HUD - Zone B */
  .zone-b {
    display: flex; flex-direction: row;
    align-items: center; justify-content: space-around;
    gap: 10px; flex-wrap: wrap;
  }
  @media (orientation: landscape) {
    .zone-b { flex-direction: column; align-items: flex-start; justify-content: flex-start; gap: 14px; height: 100%; padding-top: 4px; }
  }

  .hud-timer { display: flex; flex-direction: column; align-items: flex-start; }
  .hud-timer.alert .chrono {
    color: #ff5555; text-shadow: 0 0 14px #ff5555, 0 0 5px #ff5555;
    animation: timerFlash 0.6s ease-in-out infinite;
  }
  @keyframes timerFlash { 0%, 100% { opacity: 1; } 50% { opacity: 0.45; } }

  .chrono {
    color: #ffe040; font-size: clamp(22px, 3.5vw, 36px);
    font-weight: 700; letter-spacing: 3px;
    text-shadow: 0 0 14px #ffe040, 0 0 5px #ffe040; line-height: 1;
  }
  .hud-label {
    color: rgba(255,224,64,0.65);
    font-size: 8px; letter-spacing: 4px;
    font-family: 'Courier New', monospace; margin-top: 1px;
  }
  .hud-zen { color: #bb44ff; font-size: 13px; letter-spacing: 5px; text-shadow: 0 0 10px #bb44ff; }
  .hud-level { font-size: 12px; letter-spacing: 3px; font-weight: 700; }
  .hud-btns  { display: flex; gap: 8px; }
  @media (orientation: landscape) { .hud-btns { margin-top: auto; } }

  .icon-btn {
    background: rgba(0,200,255,0.08); border: 1.5px solid #00c8ff; color: #00c8ff;
    width: 34px; height: 34px; border-radius: 6px; font-size: 14px; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    text-shadow: 0 0 8px #00c8ff; box-shadow: 0 0 10px rgba(0,200,255,0.20);
    font-family: inherit;
  }
  .icon-btn:active { background: rgba(0,200,255,0.22); }

  /* In-game settings overlay — z-index 300 so it appears above the pause panel (200) */
  .cfg-overlay {
    position: fixed; inset: 0; z-index: 300;
    background: rgba(0,2,15,0.88);
    display: flex; align-items: center; justify-content: center;
    padding: 32px 24px;
  }
  .cfg-panel {
    background: rgba(0,5,25,0.98);
    border: 1.5px solid rgba(0,200,255,0.55);
    border-radius: 14px; padding: 28px 28px;
    box-shadow: 0 0 40px rgba(0,200,255,0.22);
  }

  /* Pause overlay */
  .pause-overlay {
    position: fixed; inset: 0; background: rgba(0,0,10,0.85);
    display: flex; align-items: center; justify-content: center;
    z-index: 200; backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
  }
  .pause-panel {
    background: rgba(0,5,20,0.98); border: 1.5px solid #00c8ff; border-radius: 14px;
    padding: 28px 32px; display: flex; flex-direction: column; align-items: center; gap: 14px;
    min-width: 220px;
    box-shadow: 0 0 50px rgba(0,200,255,0.28), inset 0 0 30px rgba(0,0,80,0.35);
  }
  .pause-title { color: #00c8ff; font-size: 22px; letter-spacing: 8px; text-shadow: 0 0 20px #00c8ff; }
  .pause-info  { color: rgba(255,255,255,0.65); font-size: 11px; letter-spacing: 2px; margin-top: -4px; font-family: 'Courier New', monospace; }

  .neon-btn {
    border: 1.5px solid #00c8ff; background: transparent; color: #00c8ff;
    padding: 10px 16px; border-radius: 7px; font-family: 'Orbitron', monospace;
    font-size: 11px; cursor: pointer; letter-spacing: 2px; text-shadow: 0 0 8px #00c8ff;
    box-shadow: 0 0 10px rgba(0,200,255,0.20); width: 100%;
  }
  .neon-btn:active { background: rgba(0,200,255,0.13); }
  .neon-btn--green { border-color:#00ff80; color:#00ff80; text-shadow:0 0 8px #00ff80; box-shadow:0 0 10px rgba(0,255,128,0.20); }
  .neon-btn--green:active { background: rgba(0,255,128,0.13); }
  .neon-btn--amber { border-color:#ffb300; color:#ffcc44; text-shadow:0 0 8px #ffb300; box-shadow:0 0 10px rgba(255,179,0,0.20); }
  .neon-btn--amber:active { background: rgba(255,179,0,0.13); }
.neon-btn--dim   { border-color:rgba(0,200,255,0.30); color:rgba(255,255,255,0.55); text-shadow:none; box-shadow:none; }
  .neon-btn--dim:active   { background: rgba(0,200,255,0.06); }

</style>
