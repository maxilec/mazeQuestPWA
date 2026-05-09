<script>
  import { onMount } from 'svelte';
  import { makeMaze } from './lib/maze.js';

  // ── Palette neon ──────────────────────────────────────────────────────────
  const N_WALL  = '#00c8ff';
  const N_BALL  = '#ffe040';
  const N_HOLE  = '#00ff80';
  const N_FRAME = '#9900ff';
  const BG_MAIN = '#06001a';
  const GYRO_KEY = 'mazeGyroGranted';

  // ── Physique ──────────────────────────────────────────────────────────────
  const FRICTION = 0.96;   // plus d'inertie — la bille glisse ~2.5× plus loin
  const GRAVITY  = 0.45;   // accélération légèrement plus forte
  const BOUNCE   = 0.18;   // rebond plus amorti

  // ── État réactif ──────────────────────────────────────────────────────────
  let lvl                  = 1;
  let chrono               = '0:00';
  let hint                 = 'mouse';
  let iosBtn               = false;
  let rows                 = 6;
  let cols                 = 10;
  let showCfg              = false;
  let paused               = false;
  let countdownText        = '';
  let isPortrait           = false;
  let attempts             = 0;

  // ── Refs non-réactifs ─────────────────────────────────────────────────────
  let canvas;
  let boardWrap;
  let G                    = null;
  let raf                  = null;
  let tilt                 = { x: 0, y: 0 };
  let gyroOk               = false;
  let pendingGyroActivation = false; // iOS: permission déjà accordée → activer au 1er tap
  let held                 = { l: 0, r: 0, u: 0, d: 0 };
  let rowsInUse            = 6;   // toujours paysage
  let colsInUse            = 10;
  let keyInt               = null;
  let gyroOffset           = { beta: 0, gamma: 0 };
  let lastOrient           = { beta: 0, gamma: 0 };
  let controlMode          = 'gyro';  // 'gyro' | 'joystick'
  let joyActive            = false;
  let joyCx = 0, joyCy    = 0;  // centre joystick (canvas px)
  let joyDx = 0, joyDy    = 0;  // déplacement courant
  const JOY_RADIUS         = 70; // rayon max (canvas px)
  let boardTiltX           = 0;  // tilt visuel lissé du plateau [-1, 1]
  let boardTiltY           = 0;

  // ── Helpers ───────────────────────────────────────────────────────────────
  function wallThickness(cw, ch) {
    return Math.max(3, Math.min(7, Math.min(cw, ch) * 0.12));
  }

  function getTrackRatio(lvl) {
    return Math.max(0.35, 0.65 - Math.floor((lvl - 1) / 5) * 0.05);
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

  // ── Pause ─────────────────────────────────────────────────────────────────
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

  function recenterPosition() {
    gyroOffset = { ...lastOrient };
  }

  function toggleControlMode() {
    controlMode = controlMode === 'gyro' ? 'joystick' : 'gyro';
    joyActive = false; joyDx = 0; joyDy = 0;
    tilt = { x: 0, y: 0 };
    hint = controlMode === 'joystick' ? 'joystick' : (gyroOk ? 'gyro' : hint);
  }

  // ── Joystick touch handlers ────────────────────────────────────────────────
  function onTouchStart(e) {
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
      x: Math.max(-1, Math.min(1, joyDx / JOY_RADIUS)),
      y: Math.max(-1, Math.min(1, joyDy / JOY_RADIUS)),
    };
  }

  function onTouchEnd(e) {
    if (controlMode !== 'joystick') { handleCanvasTap(); return; }
    const scale = canvas.width / canvas.getBoundingClientRect().width;
    if (Math.hypot(joyDx, joyDy) < 8 * scale) handleCanvasTap();
    joyActive = false; joyDx = 0; joyDy = 0;
    tilt = { x: 0, y: 0 };
  }

  // ── Tap sur le canvas ─────────────────────────────────────────────────────
  function handleCanvasTap() {
    if (!G) return;

    // iOS : activer gyro automatiquement si permission déjà accordée avant
    if (pendingGyroActivation) {
      pendingGyroActivation = false;
      DeviceOrientationEvent.requestPermission()
        .then(res => { if (res === 'granted') { gyroOk = true; hint = 'gyro'; } else iosBtn = true; })
        .catch(() => { iosBtn = true; });
      return;
    }

    // Sauter le compte à rebours
    if (G.phase === 'intro') {
      G.phase = 'play';
      G.levelStart = performance.now();
      countdownText = '';
      return;
    }
  }

  // ── Recommencer le niveau ────────────────────────────────────────────────
  function restartLevel() {
    if (!G) return;
    const now = performance.now();
    G.ball     = { x: G.spawn.c * G.cw + G.cw / 2, y: G.spawn.r * G.ch + G.ch / 2, vx: 0, vy: 0 };
    G.phase    = 'intro';
    G.introT   = now;
    G.levelStart = now;
    G.pausedMs = 0;
    G.pauseAt  = 0;
    chrono = '0:00';
    attempts = 0;
    countdownText = '';
    paused = false;
    if (gyroOk) gyroOffset = { ...lastOrient };
  }

  // ── Redémarrage après chute dans le vide (même niveau, chrono conservé) ──
  function restartAfterFall() {
    if (!G) return;
    attempts += 1;
    G.ball = { x: G.spawn.c * G.cw + G.cw / 2, y: G.spawn.r * G.ch + G.ch / 2, vx: 0, vy: 0 };
    G.phase = 'play';
    countdownText = '';
    paused = false;
    if (gyroOk) gyroOffset = { ...lastOrient };
  }

  // ── Initialisation d'un niveau ───────────────────────────────────────────
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
      const d = Math.abs(tr - sc.r) + Math.abs(tc - sc.c);
      if (d > best && d > 1) { best = d; hr = tr; hc = tc; }
    }
    if (hr < 0) { hr = R - 1 - sc.r; hc = C - 1 - sc.c; }
    if (hr === sc.r && hc === sc.c) hr = (hr + 1) % R;

    // Recalibrer le gyro à chaque nouveau niveau
    if (gyroOk) gyroOffset = { ...lastOrient };

    const stars = Array.from({ length: 55 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.2 + 0.3,
      a: Math.random() * 0.45 + 0.12,
    }));

    const now = performance.now();
    G = {
      W, H, cw, ch, br, wt, maze, lvl: levelNum, R, C, trackRatio, stars,
      spawn: { ...sc },
      ball: { x: sc.c * cw + cw / 2, y: sc.r * ch + ch / 2, vx: 0, vy: 0 },
      hole: { r: hr, c: hc },
      phase: 'intro',
      fallT: 0,
      fallCause: 'hole',
      introT: now,
      levelStart: now,
      pausedMs: 0,
      pauseAt: 0,
    };
    chrono = '0:00';
    countdownText = '';
  }

  // ── Canvas adaptatif — portrait (10×6) ou paysage (6×10), cellules carrées ─
  function fitCanvas(R, C) {
    if (!canvas) return;
    // Cellules carrées : cw = w/C = h/R → canvas ratio = C/R
    // Portrait (R>C) : h > w ; Paysage (C>R) : w > h
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

  // ── Détection de chute — basée sur la géométrie de la piste ─────────────
  function checkWallFall(ball, g) {
    const { maze, cw, ch, W, H, R, C, trackRatio } = g;
    const hw = Math.min(cw, ch) * trackRatio * 0.5;
    const bx = ball.x, by = ball.y;
    if (bx < 0 || bx > W || by < 0 || by > H) return true;
    const col = Math.max(0, Math.min(C - 1, (bx / cw) | 0));
    const row = Math.max(0, Math.min(R - 1, (by / ch) | 0));
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        const r = row + dr, c = col + dc;
        if (r < 0 || r >= R || c < 0 || c >= C) continue;
        const cx = c * cw + cw / 2, cy = r * ch + ch / 2;
        const ce = maze[r][c];
        if (Math.abs(bx - cx) <= hw && Math.abs(by - cy) <= hw) return false;
        if (c < C - 1 && !ce.R) {
          const nx = cx + cw;
          if (bx >= cx - hw && bx <= nx + hw && Math.abs(by - cy) <= hw) return false;
        }
        if (r < R - 1 && !ce.B) {
          const ny = cy + ch;
          if (by >= cy - hw && by <= ny + hw && Math.abs(bx - cx) <= hw) return false;
        }
      }
    }
    return true;
  }

  // ── Physique — gravité + inertie, sans rebond sur murs ───────────────────
  function physics(g, dt) {
    const { ball } = g;
    ball.vx = (ball.vx + tilt.x * GRAVITY * dt) * FRICTION;
    ball.vy = (ball.vy + tilt.y * GRAVITY * dt) * FRICTION;
    ball.x += ball.vx * dt;
    ball.y += ball.vy * dt;
  }

  // ── Piste lumineuse ───────────────────────────────────────────────────────
  function drawTrack(ctx, g, btx, bty, ia) {
    const { maze, cw, ch, R, C, trackRatio } = g;
    const tw = Math.min(cw, ch) * trackRatio;
    const hw = tw / 2;

    function fillPieces(style) {
      ctx.fillStyle = style;
      for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
          const cx = c * cw + cw / 2, cy = r * ch + ch / 2;
          const ce = maze[r][c];
          ctx.fillRect(cx - hw, cy - hw, tw, tw);
          if (c < C - 1 && !ce.R) ctx.fillRect(cx, cy - hw, cw, tw);
          if (r < R - 1 && !ce.B) ctx.fillRect(cx - hw, cy, tw, ch);
        }
      }
    }

    ctx.save();
    ctx.translate(btx * -2, bty * -2);

    // Halo extérieur large (dans le vide autour de la piste)
    ctx.save();
    ctx.globalAlpha = ia;
    ctx.shadowColor = '#00c8ff'; ctx.shadowBlur = 20;
    ctx.strokeStyle = 'rgba(0,200,255,0.28)';
    ctx.lineWidth = tw * 0.55;
    ctx.lineCap = 'square'; ctx.lineJoin = 'miter';
    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        const cx = c * cw + cw / 2, cy = r * ch + ch / 2;
        const ce = maze[r][c];
        ctx.strokeRect(cx - hw, cy - hw, tw, tw);
        if (c < C - 1 && !ce.R) ctx.strokeRect(cx, cy - hw, cw, tw);
        if (r < R - 1 && !ce.B) ctx.strokeRect(cx - hw, cy, tw, ch);
      }
    }
    ctx.restore();

    // Sol sombre (couvre le glow intérieur du halo)
    ctx.globalAlpha = ia;
    ctx.shadowBlur = 0;
    fillPieces('#07001b');

    // Bords extérieurs neon — seulement les arêtes faisant face au vide
    ctx.save();
    ctx.globalAlpha = ia;
    ctx.shadowColor = '#00c8ff'; ctx.shadowBlur = 9;
    ctx.strokeStyle = 'rgba(20,220,255,0.92)';
    ctx.lineWidth = 1.5;
    ctx.lineCap = 'square'; ctx.lineJoin = 'miter';
    ctx.beginPath();
    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        const cx = c * cw + cw / 2, cy = r * ch + ch / 2;
        const ce = maze[r][c];
        const x0 = cx - hw, x1 = cx + hw, y0 = cy - hw, y1 = cy + hw;
        if (ce.T) { ctx.moveTo(x0, y0); ctx.lineTo(x1, y0); }
        if (ce.B) { ctx.moveTo(x0, y1); ctx.lineTo(x1, y1); }
        if (ce.L) { ctx.moveTo(x0, y0); ctx.lineTo(x0, y1); }
        if (ce.R) { ctx.moveTo(x1, y0); ctx.lineTo(x1, y1); }
        if (c < C - 1 && !ce.R) {
          ctx.moveTo(x1, y0); ctx.lineTo(x1 + cw - tw, y0);
          ctx.moveTo(x1, y1); ctx.lineTo(x1 + cw - tw, y1);
        }
        if (r < R - 1 && !ce.B) {
          ctx.moveTo(x0, y1); ctx.lineTo(x0, y1 + ch - tw);
          ctx.moveTo(x1, y1); ctx.lineTo(x1, y1 + ch - tw);
        }
      }
    }
    ctx.stroke();
    ctx.restore();

    // Lueur parallaxe décalée (profondeur 3D)
    ctx.save();
    ctx.translate(btx * 9, bty * 9);
    ctx.globalAlpha = 0.16 * ia;
    ctx.shadowBlur = 0;
    fillPieces('rgba(0,120,220,0.55)');
    ctx.restore();

    ctx.restore();
  }

  // ── Rendu Canvas ──────────────────────────────────────────────────────────
  function draw(ctx, g, ts, btx = 0, bty = 0) {
    const { W, H, cw, ch, br, ball, hole, phase, fallT, introT, stars } = g;
    const ia = Math.min(1, (ts - introT) / 300);

    // Fond étoilé (hors fade — toujours visible)
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, H);
    if (stars) {
      for (const s of stars) {
        ctx.globalAlpha = s.a;
        ctx.fillStyle = '#fff';
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
      }
    }
    ctx.globalAlpha = ia;

    // Piste lumineuse
    drawTrack(ctx, g, btx, bty, ia);

    // Trou neon
    const hx = hole.c * cw + cw / 2, hy = hole.r * ch + ch / 2, hR = br * 1.25;
    const hGlow = ctx.createRadialGradient(hx, hy, hR * .4, hx, hy, hR * 3.2);
    hGlow.addColorStop(0, 'rgba(0,255,128,0.22)'); hGlow.addColorStop(1, 'rgba(0,255,128,0)');
    ctx.fillStyle = hGlow;
    ctx.beginPath(); ctx.arc(hx, hy, hR * 3.2, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#000';
    ctx.beginPath(); ctx.arc(hx, hy, hR, 0, Math.PI * 2); ctx.fill();
    ctx.save();
    ctx.shadowColor = N_HOLE; ctx.shadowBlur = 16;
    ctx.strokeStyle = N_HOLE; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.arc(hx, hy, hR, 0, Math.PI * 2); ctx.stroke();
    ctx.shadowBlur = 4; ctx.strokeStyle = 'rgba(255,255,255,0.65)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(hx, hy, hR, 0, Math.PI * 2); ctx.stroke();
    ctx.restore();

    // Label FINISH
    ctx.save();
    ctx.globalAlpha = 0.80 * ia;
    ctx.font = `bold ${Math.min(cw, ch) * 0.22}px "Courier New"`;
    ctx.fillStyle = N_HOLE; ctx.textAlign = 'center';
    ctx.shadowColor = N_HOLE; ctx.shadowBlur = 12;
    ctx.fillText('FINISH', hx, hy + hR + Math.min(cw, ch) * 0.30);
    ctx.restore();

    // Bille
    const el  = phase === 'falling' ? ts - fallT : 0;
    const sc2 = phase === 'falling' ? Math.max(0, 1 - el / 480) : 1;
    const rbr = br * sc2;

    if (rbr > 1.5) {
      ctx.save();
      ctx.globalAlpha = 0.45 * ia * sc2;
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.ellipse(ball.x + tilt.x * br * .55, ball.y + tilt.y * br * .55 + rbr * .45,
        rbr * .85, rbr * .22, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.shadowColor = N_BALL; ctx.shadowBlur = 22 * sc2;
      const bg = ctx.createRadialGradient(
        ball.x - rbr * .34, ball.y - rbr * .40, rbr * .04,
        ball.x + rbr * .06, ball.y + rbr * .06, rbr);
      bg.addColorStop(0, '#ffffff'); bg.addColorStop(.18, '#ffffc0');
      bg.addColorStop(.42, '#ffe040'); bg.addColorStop(.68, '#ff9900');
      bg.addColorStop(.88, '#cc5500'); bg.addColorStop(1, '#7a2800');
      ctx.beginPath(); ctx.arc(ball.x, ball.y, rbr, 0, Math.PI * 2);
      ctx.fillStyle = bg; ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.globalAlpha = .55 * ia;
      const sp = ctx.createRadialGradient(
        ball.x - rbr * .36, ball.y - rbr * .42, 0,
        ball.x - rbr * .36, ball.y - rbr * .42, rbr * .38);
      sp.addColorStop(0, 'rgba(255,255,255,.92)');
      sp.addColorStop(.6, 'rgba(255,255,255,.15)');
      sp.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.beginPath(); ctx.arc(ball.x - rbr * .36, ball.y - rbr * .42, rbr * .38, 0, Math.PI * 2);
      ctx.fillStyle = sp; ctx.fill();
      ctx.restore();
    }

    ctx.globalAlpha = 1;

    // ── Overlay joystick ──────────────────────────────────────────────────────
    if (controlMode === 'joystick' && joyActive && g.phase === 'play') {
      const ratio = Math.min(Math.hypot(joyDx, joyDy) / JOY_RADIUS, 1);
      ctx.save();
      ctx.globalAlpha = 0.22 + ratio * 0.18;
      ctx.strokeStyle = '#00c8ff'; ctx.lineWidth = 2.5;
      ctx.shadowColor = '#00c8ff'; ctx.shadowBlur = 14;
      ctx.beginPath(); ctx.arc(joyCx, joyCy, JOY_RADIUS, 0, Math.PI * 2); ctx.stroke();
      ctx.globalAlpha = 0.05 + ratio * 0.07;
      ctx.fillStyle = '#00c8ff';
      ctx.beginPath(); ctx.arc(joyCx, joyCy, JOY_RADIUS, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 0.65 + ratio * 0.35;
      ctx.shadowBlur = 20; ctx.fillStyle = '#00c8ff';
      ctx.beginPath(); ctx.arc(joyCx + joyDx, joyCy + joyDy, 18, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 0.40; ctx.fillStyle = '#fff'; ctx.shadowBlur = 0;
      ctx.beginPath(); ctx.arc(joyCx + joyDx - 5, joyCy + joyDy - 5, 5, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    }
  }

  // ── Cycle de vie ──────────────────────────────────────────────────────────
  onMount(() => {
    isPortrait = window.innerHeight > window.innerWidth;
    // Essayer de verrouiller l'orientation paysage (Android PWA installée)
    try { screen.orientation.lock('landscape').catch(() => {}); } catch {}

    // Wake lock — empêcher la mise en veille pendant le jeu
    let wakeLock = null;
    const acquireWakeLock = async () => {
      try { wakeLock = await navigator.wakeLock.request('screen'); } catch {}
    };
    acquireWakeLock();
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') acquireWakeLock();
    });

    fitCanvas(rowsInUse, colsInUse);
    setTimeout(() => initLevel(1, null, rowsInUse, colsInUse), 60);

    // iOS : vérifier si la permission gyroscope a déjà été accordée
    if (typeof DeviceOrientationEvent !== 'undefined' &&
        typeof DeviceOrientationEvent.requestPermission === 'function') {
      if (localStorage.getItem(GYRO_KEY) === '1') {
        // Permission déjà accordée → activer au premier tap (user gesture requis)
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

      // Inertie visuelle : boardTilt suit tilt avec lag (~12 frames à 60fps)
      boardTiltX += (tilt.x - boardTiltX) * 0.08;
      boardTiltY += (tilt.y - boardTiltY) * 0.08;
      if (boardWrap) {
        const MAX_DEG = 8;
        boardWrap.style.transform =
          `perspective(900px) rotateX(${-boardTiltY * MAX_DEG}deg) rotateY(${boardTiltX * MAX_DEG}deg)`;
        boardWrap.style.boxShadow =
          `0 0 45px rgba(0,200,255,0.22), ${boardTiltX * 22}px ${boardTiltY * 22 + 8}px 50px rgba(0,0,0,0.92)`;
      }

      if (G.W !== canvas.width || G.H !== canvas.height) {
        G.W = canvas.width; G.H = canvas.height;
        G.cw = G.W / G.C; G.ch = G.H / G.R;
        G.br = Math.min(G.cw, G.ch) * G.trackRatio * 0.35;
        G.wt = wallThickness(G.cw, G.ch);
      }

      if (G.phase === 'intro') {
        const elapsed = ts - G.introT;
        let step = elapsed < 900 ? `LVL ${G.lvl}`
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
        physics(G, dt);
        chrono = formatTime(ts - G.levelStart - G.pausedMs);
        // Détection : trou de sortie (fin de niveau)
        const hx = G.hole.c * G.cw + G.cw / 2, hy = G.hole.r * G.ch + G.ch / 2;
        if (Math.hypot(G.ball.x - hx, G.ball.y - hy) < G.br * .58) {
          G.phase = 'falling'; G.fallT = ts; G.fallCause = 'hole';
        // Détection : chute dans le vide (relance la manche)
        } else if (checkWallFall(G.ball, G)) {
          G.phase = 'falling'; G.fallT = ts; G.fallCause = 'void';
        }
      } else if (G.phase === 'falling' && ts - G.fallT > 720) {
        if (G.fallCause === 'hole') {
          const nl = G.lvl + 1;
          initLevel(nl, { r: G.hole.r, c: G.hole.c }, G.R, G.C);
          lvl = nl;
        } else {
          // Chute vide : relance la manche, chrono conservé
          restartAfterFall();
        }
      }

      draw(ctx, G, ts, boardTiltX, boardTiltY);
      raf = requestAnimationFrame(loop);
    }

    raf = requestAnimationFrame(loop);

    // ── Gyroscope — axes orientation-aware + auto-calibration ──
    const onOrient = (e) => {
      if (e.beta == null) return;
      lastOrient = { beta: e.beta || 0, gamma: e.gamma || 0 };
      if (!gyroOk) {
        gyroOffset = { ...lastOrient };
        gyroOk = true; hint = 'gyro';
      }
      if (controlMode !== 'gyro') return;
      const angle = getOrientationAngle();
      const dB = (e.beta  || 0) - gyroOffset.beta;
      const dG = (e.gamma || 0) - gyroOffset.gamma;
      let tx, ty;
      if      (angle === 90)              { tx =  dB / 25; ty = -dG / 25; }
      else if (angle === -90 || angle === 270) { tx = -dB / 25; ty =  dG / 25; }
      else                                { tx = dG / 25;  ty =  dB / 25; }
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
      if (!gyroOk && controlMode !== 'joystick') tilt = { x: (held.r - held.l) * 0.9, y: (held.d - held.u) * 0.9 };
    }, 16);

    const onResize = () => {
      fitCanvas(rowsInUse, colsInUse);
      if (G) {
        G.W = canvas.width; G.H = canvas.height;
        G.cw = G.W / G.C; G.ch = G.H / G.R;
        G.br = Math.min(G.cw, G.ch) * G.trackRatio * 0.35;
        G.wt = wallThickness(G.cw, G.ch);
      }
    };

    const onRotate = () => setTimeout(() => {
      isPortrait = window.innerWidth < window.innerHeight;
      if (!isPortrait) {
        // Retour en paysage : redimensionner et recalibrer
        onResize();
        if (gyroOk) gyroOffset = { ...lastOrient };
      }
    }, 150);

    // Touch listeners non-passifs (preventDefault dans touchmove pour bloquer le scroll)
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
    };
  });

  // Permission iOS + mémorisation dans localStorage
  async function requestGyroIOS() {
    try {
      const res = await DeviceOrientationEvent.requestPermission();
      if (res === 'granted') {
        gyroOk = true; iosBtn = false; hint = 'gyro';
        localStorage.setItem(GYRO_KEY, '1');
      }
    } catch {}
  }

  function applyConfig() {
    rowsInUse = rows; colsInUse = cols;
    fitCanvas(rows, cols);
    setTimeout(() => { initLevel(1, null, rows, cols); lvl = 1; showCfg = false; }, 60);
  }

  const hints = {
    gyro:     "📱 Inclinez l'appareil",
    mouse:    '🖱 Déplacez la souris',
    keys:     '⌨ Touches fléchées',
    joystick: '🕹 Glissez pour diriger',
  };
</script>

<!-- ── Markup ───────────────────────────────────────────────────────────── -->
<div class="container">

  <!-- Zone A : bas (portrait) → gauche (paysage) = logo + hint -->
  <div class="zone-a">
    <div class="logo">MazeBall</div>
    <p class="hint">{hints[hint]}</p>
    {#if iosBtn && controlMode === 'gyro'}
      <button class="gyro-btn" on:click={requestGyroIOS}>Activer le gyroscope</button>
    {/if}
  </div>

  <!-- Plateau -->
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

  <!-- Zone B : haut (portrait) → droite (paysage) = timer, vies, boutons -->
  <div class="zone-b">
    <div class="hud-timer">
      <div class="chrono">{chrono}</div>
      <div class="hud-label">TEMPS</div>
    </div>
    <div class="hud-level">NVL {lvl}</div>
    {#if attempts > 0}
      <div class="hud-lives">
        {#each Array(Math.min(attempts, 8)) as _}
          <span class="heart-lost">♥</span>
        {/each}
        {#if attempts > 8}<span class="lives-extra">+{attempts - 8}</span>{/if}
      </div>
    {/if}
    <div class="hud-btns">
      <button class="icon-btn" on:click={() => paused ? resumeGame() : pauseGame()} aria-label="Pause">
        {paused ? '▶' : '⏸'}
      </button>
      <button class="icon-btn" on:click={() => showCfg = !showCfg} aria-label="Paramètres">⚙</button>
    </div>
    {#if showCfg}
      <div class="config">
        <label>Rangs <input type="number" min="3" max="16" bind:value={rows} /></label>
        <label>Cols  <input type="number" min="3" max="12" bind:value={cols} /></label>
        <button class="apply-btn" on:click={applyConfig}>OK</button>
      </div>
    {/if}
  </div>

</div>

<!-- ── Overlay portrait : demander de tourner l'appareil ─────────────────── -->
{#if isPortrait}
  <div class="rotate-overlay">
    <div class="rotate-icon">⟳</div>
    <div class="rotate-msg">Tournez votre appareil</div>
    <div class="rotate-sub">MazeBall se joue en mode paysage</div>
  </div>
{/if}

<!-- ── Menu Pause (fixed) ────────────────────────────────────────────────── -->
{#if paused}
  <div class="pause-overlay" on:click|self={resumeGame}>
    <div class="pause-panel">
      <div class="pause-title">PAUSE</div>
      <div class="pause-info">NVL {lvl} · {chrono} · {attempts} chute{attempts !== 1 ? 's' : ''}</div>
      <button class="neon-btn" on:click={resumeGame}>▶&nbsp; REPRENDRE</button>
      <button class="neon-btn neon-btn--green" on:click={restartLevel}>↺&nbsp; RECOMMENCER</button>
      <button class="neon-btn neon-btn--amber" on:click={toggleControlMode}>
        {controlMode === 'gyro' ? '🕹 MODE JOYSTICK' : '📡 MODE GYROSCOPE'}
      </button>
      <button class="neon-btn neon-btn--purple" on:click={recenterPosition}>⊕&nbsp; RECENTRER</button>
    </div>
  </div>
{/if}

<!-- ── Styles ──────────────────────────────────────────────────────────── -->
<style>
  :global(*, *::before, *::after) { box-sizing: border-box; margin: 0; padding: 0; }
  :global(html, body) {
    width: 100%; height: 100%;
    background: #000;
    overflow: hidden;
    touch-action: none;
    user-select: none;
  }

  /* ── Container ── */
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

  /* Portrait : zone-a en haut, canvas au milieu, zone-b en bas */
  .zone-a    { order: 0; width: 100%; max-width: 460px; }
  .board-wrap { order: 1; flex-shrink: 0; }
  .zone-b    { order: 2; width: 100%; max-width: 460px; }

  /* ── Paysage : zone-a à gauche, canvas au centre, zone-b à droite ── */
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

  /* ── Zone A : logo + hint ── */
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

  /* ── Plateau ── */
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

  /* ── Compte à rebours ── */
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

  /* ── Zone B : HUD ── */
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

  .hud-lives {
    display: flex; flex-wrap: wrap; gap: 3px;
    max-width: 160px;
  }

  .heart-lost {
    color: #ff3030;
    font-size: 14px;
    text-shadow: 0 0 7px #ff2020;
    line-height: 1;
  }

  .lives-extra {
    color: #ff3030; font-size: 11px; align-self: center; letter-spacing: 1px;
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

  /* ── Config ── */
  .config {
    background: rgba(0,5,20,0.97);
    border: 1px solid #00c8ff;
    border-radius: 6px;
    padding: 8px 12px;
    display: flex; flex-wrap: wrap; gap: 8px; align-items: center;
    font-size: 11px; color: #00c8ff; font-family: inherit;
    box-shadow: 0 0 20px rgba(0,200,255,0.18);
    margin-top: 4px;
  }
  .config label { display: flex; align-items: center; gap: 4px; }
  .config input {
    width: 36px; background: rgba(0,20,60,0.8); color: #00c8ff;
    border: 1px solid #00c8ff; border-radius: 3px;
    padding: 2px 4px; text-align: center; font-family: inherit; font-size: 11px;
  }
  .apply-btn {
    background: rgba(0,200,255,0.12); color: #00c8ff;
    border: 1px solid #00c8ff; border-radius: 4px;
    padding: 3px 10px; cursor: pointer; font-family: inherit;
  }

  /* ── Menu Pause ── */
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

  .pause-info {
    color: rgba(0,200,255,0.55); font-size: 12px; letter-spacing: 2px; margin-top: -4px;
  }

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

  .neon-btn--purple {
    border-color: #aa44ff; color: #cc66ff;
    text-shadow: 0 0 8px #aa44ff; box-shadow: 0 0 10px rgba(170,68,255,0.20);
  }
  .neon-btn--purple:active { background: rgba(170,68,255,0.13); }

  .neon-btn--amber {
    border-color: #ffb300; color: #ffcc44;
    text-shadow: 0 0 8px #ffb300;
    box-shadow: 0 0 10px rgba(255,179,0,0.20);
  }
  .neon-btn--amber:active { background: rgba(255,179,0,0.13); }

  .ios-start-btn {
    font-size: 16px; letter-spacing: 4px; padding: 14px 28px;
    pointer-events: all; width: auto;
  }

  /* ── Overlay portrait ── */
  .rotate-overlay {
    position: fixed; inset: 0; z-index: 500;
    background: #000;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    gap: 16px;
  }
  .rotate-icon {
    font-size: 72px;
    animation: spin90 1.8s ease-in-out infinite;
    display: inline-block;
  }
  @keyframes spin90 {
    0%, 40%  { transform: rotate(0deg);   opacity: 1; }
    60%, 100%{ transform: rotate(90deg);  opacity: 0.5; }
  }
  .rotate-msg {
    color: #00c8ff; font-size: 20px; letter-spacing: 3px;
    text-shadow: 0 0 20px #00c8ff;
  }
  .rotate-sub {
    color: rgba(0,200,255,0.45); font-size: 12px; letter-spacing: 1px;
  }
</style>
