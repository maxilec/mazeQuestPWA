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
  let showCfg              = false;
  let paused               = false;
  let countdownText        = '';
  let isPortrait           = false;
  let attempts             = 0;
  let soundEnabled         = true;
  let sensitivity          = 0.55;  // 0.1 → 1.5
  let musicVolume          = 0.5;   // 0.0 → 1.0

  // ── Refs non-réactifs ─────────────────────────────────────────────────────
  let canvas;
  let boardWrap;
  let G                    = null;
  let raf                  = null;
  let tilt                 = { x: 0, y: 0 };
  let gyroOk               = false;
  let pendingGyroActivation = false; // iOS: permission déjà accordée → activer au 1er tap
  let held                 = { l: 0, r: 0, u: 0, d: 0 };
  let rowsInUse            = 6;
  let colsInUse            = 10;
  let keyInt               = null;
  let gyroOffset           = { beta: 0, gamma: 0 };
  let lastOrient           = { beta: 0, gamma: 0 };
  let controlMode          = 'gyro';  // 'gyro' | 'joystick'
  let joyActive            = false;
  let joyCx = 0, joyCy    = 0;  // centre joystick (canvas px)
  let joyDx = 0, joyDy    = 0;  // déplacement courant
  const JOY_RADIUS         = 70; // rayon max (canvas px)
  // Web Audio API
  let audioCtx             = null;
  let audioBuffer          = null;
  let audioSource          = null;
  let gainNode             = null;
  let audioReady           = false;
  let audioStarted         = false;
  let boardTiltX           = 0;  // tilt visuel lissé du plateau [-1, 1]
  let boardTiltY           = 0;

  // ── Helpers ───────────────────────────────────────────────────────────────
  function wallThickness(cw, ch) {
    return Math.max(3, Math.min(7, Math.min(cw, ch) * 0.12));
  }

  function getTrackRatio(lvl) {
    return Math.max(0.35, 0.65 - Math.floor((lvl - 1) / 5) * 0.05);
  }

  // ── BFS : chemin spawn → trou pour placer les checkpoints ────────────────
  function bfsPath(maze, R, C, spawn, hole) {
    const dist = Array.from({ length: R }, () => Array(C).fill(-1));
    const prev = Array.from({ length: R }, () => Array(C).fill(null));
    const queue = [{ r: spawn.r, c: spawn.c }];
    dist[spawn.r][spawn.c] = 0;
    while (queue.length > 0) {
      const { r, c } = queue.shift();
      const ce = maze[r][c];
      const neighbors = [];
      if (!ce.T && r > 0)   neighbors.push({ r: r - 1, c });
      if (!ce.B && r < R-1) neighbors.push({ r: r + 1, c });
      if (!ce.L && c > 0)   neighbors.push({ r, c: c - 1 });
      if (!ce.R && c < C-1) neighbors.push({ r, c: c + 1 });
      for (const n of neighbors) {
        if (dist[n.r][n.c] === -1) {
          dist[n.r][n.c] = dist[r][c] + 1;
          prev[n.r][n.c] = { r, c };
          queue.push(n);
        }
      }
    }
    const path = [];
    let cur = { r: hole.r, c: hole.c };
    while (cur) {
      path.unshift(cur);
      cur = prev[cur.r][cur.c];
    }
    return path;
  }

  function computeCheckpoints(path) {
    if (path.length < 4) return [];
    const checkpoints = [];
    for (const frac of [0.33, 0.67]) {
      const idx = Math.round(frac * (path.length - 1));
      const cell = path[idx];
      const prevCell = path[Math.max(0, idx - 1)];
      const dr = cell.r - prevCell.r;
      checkpoints.push({ r: cell.r, c: cell.c, horizontal: dr !== 0, passed: false });
    }
    return checkpoints;
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

  function toggleSound() {
    soundEnabled = !soundEnabled;
    if (gainNode) gainNode.gain.value = soundEnabled ? musicVolume : 0;
  }

  function startAudio() {
    if (!audioReady || audioStarted) return;
    audioCtx.resume().then(() => {
      audioSource = audioCtx.createBufferSource();
      audioSource.buffer = audioBuffer;
      audioSource.loop = true;
      audioSource.connect(gainNode);
      audioSource.start(0);
      audioStarted = true;
    }).catch(() => {});
  }

  function toggleControlMode() {
    controlMode = controlMode === 'gyro' ? 'joystick' : 'gyro';
    joyActive = false; joyDx = 0; joyDy = 0;
    tilt = { x: 0, y: 0 };
    hint = controlMode === 'joystick' ? 'joystick' : (gyroOk ? 'gyro' : hint);
  }

  // ── Joystick touch handlers (canvas uniquement) ───────────────────────────
  function onTouchStart(e) {
    e.preventDefault();
    startAudio();
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
    if (G.checkpoints) { G.checkpoints.forEach(cp => { cp.passed = false; }); }
    G.lastCheckpoint = null;
    G.trail = [];
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
    const spawnPt = G.lastCheckpoint || G.spawn;
    G.ball = { x: spawnPt.c * G.cw + G.cw / 2, y: spawnPt.r * G.ch + G.ch / 2, vx: 0, vy: 0 };
    G.trail = [];
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

    const path = bfsPath(maze, R, C, sc, { r: hr, c: hc });
    const checkpoints = computeCheckpoints(path);

    const now = performance.now();
    G = {
      W, H, cw, ch, br, wt, maze, lvl: levelNum, R, C, trackRatio, stars,
      spawn: { ...sc },
      ball: { x: sc.c * cw + cw / 2, y: sc.r * ch + ch / 2, vx: 0, vy: 0 },
      hole: { r: hr, c: hc },
      checkpoints,
      lastCheckpoint: null,
      trail: [],
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

  // ── Piste métallique avec néon central ───────────────────────────────────
  function drawTrack(ctx, g, btx, bty, ia) {
    const { maze, cw, ch, R, C, trackRatio, W, H } = g;
    const tw = Math.min(cw, ch) * trackRatio;

    ctx.save();
    ctx.translate(btx * -4, bty * -4);

    // Grille hexagonale subtile dans le vide
    ctx.save();
    ctx.globalAlpha = 0.048 * ia;
    ctx.strokeStyle = '#003399';
    ctx.lineWidth = 0.5;
    const hSize = Math.min(cw, ch) * 0.24;
    const hexCols = Math.ceil(W / (hSize * 1.732)) + 2;
    const hexRows = Math.ceil(H / (hSize * 1.5)) + 2;
    for (let hr = -1; hr < hexRows; hr++) {
      for (let hc2 = -1; hc2 < hexCols; hc2++) {
        const hx = hc2 * hSize * 1.732 + (((hr % 2) + 2) % 2) * hSize * 0.866;
        const hy = hr * hSize * 1.5;
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const a = (Math.PI / 3) * i - Math.PI / 6;
          const px = hx + hSize * Math.cos(a), py = hy + hSize * Math.sin(a);
          i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.closePath(); ctx.stroke();
      }
    }
    ctx.restore();

    // Lignes centrales des corridors (moveTo/lineTo, lineCap='round')
    function buildPath() {
      ctx.beginPath();
      for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
          const cx = c * cw + cw / 2, cy = r * ch + ch / 2;
          const ce = maze[r][c];
          if (c < C - 1 && !ce.R) { ctx.moveTo(cx, cy); ctx.lineTo(cx + cw, cy); }
          if (r < R - 1 && !ce.B) { ctx.moveTo(cx, cy); ctx.lineTo(cx, cy + ch); }
        }
      }
    }

    // Cercles aux nœuds pour combler les jonctions
    function drawNodes(radius) {
      for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
          const cx = c * cw + cw / 2, cy = r * ch + ch / 2;
          ctx.beginPath(); ctx.arc(cx, cy, radius, 0, Math.PI * 2); ctx.fill();
        }
      }
    }

    // Côtés lumineux parallaxe (décalage fort — effet profondeur des flancs)
    ctx.save();
    ctx.translate(btx * 20, bty * 20);
    ctx.globalAlpha = 0.22 * ia;
    ctx.shadowColor = '#00c8ff'; ctx.shadowBlur = 18;
    ctx.strokeStyle = 'rgba(0,180,255,0.65)';
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.lineWidth = tw * 1.15;
    buildPath(); ctx.stroke();
    ctx.restore();

    // Ombre portée (parallaxe)
    ctx.save();
    ctx.translate(btx * 9, bty * 9);
    ctx.globalAlpha = 0.22 * ia;
    ctx.strokeStyle = 'rgba(0,5,40,0.85)';
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.lineWidth = tw;
    buildPath(); ctx.stroke();
    ctx.restore();

    // Chrome argent (bordure extérieure de la plateforme)
    ctx.save();
    ctx.globalAlpha = ia;
    ctx.shadowBlur = 0;
    ctx.strokeStyle = 'rgba(155,205,235,0.88)';
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.lineWidth = tw;
    buildPath(); ctx.stroke();
    ctx.fillStyle = 'rgba(155,205,235,0.88)';
    drawNodes(tw / 2);
    ctx.restore();

    // Surface sombre métallique (cache l'intérieur du chrome)
    ctx.save();
    ctx.globalAlpha = ia;
    ctx.shadowBlur = 0;
    ctx.strokeStyle = '#05001a';
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.lineWidth = tw * 0.80;
    buildPath(); ctx.stroke();
    ctx.fillStyle = '#05001a';
    drawNodes(tw * 0.40);
    ctx.restore();

    // Reflet interne subtil (effet métal brossé)
    ctx.save();
    ctx.globalAlpha = 0.32 * ia;
    ctx.strokeStyle = 'rgba(30,65,130,1)';
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.lineWidth = tw * 0.58;
    buildPath(); ctx.stroke();
    ctx.restore();

    // Halo néon cyan (lueur large)
    ctx.save();
    ctx.globalAlpha = ia;
    ctx.shadowColor = '#00c8ff'; ctx.shadowBlur = 18;
    ctx.strokeStyle = 'rgba(0,180,255,0.55)';
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.lineWidth = tw * 0.18;
    buildPath(); ctx.stroke();
    ctx.restore();

    // Filet lumineux central (ligne blanche-cyan)
    ctx.save();
    ctx.globalAlpha = ia;
    ctx.shadowColor = '#a8e8ff'; ctx.shadowBlur = 5;
    ctx.strokeStyle = 'rgba(205,245,255,0.95)';
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.lineWidth = 1.5;
    buildPath(); ctx.stroke();
    ctx.restore();

    // Intersections plus lumineuses (≥3 passages ouverts)
    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        const ce = maze[r][c];
        const open = (!ce.T?1:0) + (!ce.B?1:0) + (!ce.L?1:0) + (!ce.R?1:0);
        if (open >= 3) {
          const cx = c * cw + cw / 2, cy = r * ch + ch / 2;
          ctx.save();
          ctx.globalAlpha = 0.50 * ia;
          ctx.shadowColor = '#00c8ff'; ctx.shadowBlur = 26;
          ctx.fillStyle = 'rgba(0,200,255,0.38)';
          ctx.beginPath(); ctx.arc(cx, cy, tw * 0.48, 0, Math.PI * 2); ctx.fill();
          ctx.globalAlpha = 0.80 * ia;
          ctx.shadowBlur = 8;
          ctx.fillStyle = 'rgba(160,235,255,0.78)';
          ctx.beginPath(); ctx.arc(cx, cy, tw * 0.10, 0, Math.PI * 2); ctx.fill();
          ctx.restore();
        }
      }
    }

    // Bordure extérieure du labyrinthe (néon bleu foncé)
    ctx.save();
    ctx.globalAlpha = 0.72 * ia;
    ctx.shadowColor = '#0044ff'; ctx.shadowBlur = 22;
    ctx.strokeStyle = 'rgba(0,55,215,0.80)';
    ctx.lineWidth = 3;
    ctx.lineCap = 'square';
    ctx.strokeRect(2, 2, W - 4, H - 4);
    ctx.restore();

    ctx.restore();
  }

  // ── Checkpoints ───────────────────────────────────────────────────────────
  function drawCheckpoints(ctx, g, ia) {
    const { checkpoints, cw, ch, trackRatio } = g;
    if (!checkpoints || checkpoints.length === 0) return;
    const tw = Math.min(cw, ch) * trackRatio;
    const hw = tw / 2;

    for (const cp of checkpoints) {
      const cx = cp.c * cw + cw / 2, cy = cp.r * ch + ch / 2;
      const color = cp.passed ? '#ffcc00' : '#00ff80';
      ctx.save();
      ctx.globalAlpha = (cp.passed ? 0.55 : 0.88) * ia;
      ctx.shadowColor = color; ctx.shadowBlur = 14;
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.beginPath();
      if (cp.horizontal) {
        ctx.moveTo(cx - hw, cy); ctx.lineTo(cx + hw, cy);
      } else {
        ctx.moveTo(cx, cy - hw); ctx.lineTo(cx, cy + hw);
      }
      ctx.stroke();
      // Marqueur central
      ctx.globalAlpha = (cp.passed ? 0.40 : 0.70) * ia;
      ctx.shadowBlur = 8;
      ctx.fillStyle = color;
      ctx.beginPath(); ctx.arc(cx, cy, tw * 0.10, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    }
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

    // Piste métallique
    drawTrack(ctx, g, btx, bty, ia);

    // Checkpoints
    drawCheckpoints(ctx, g, ia);

    // ── Vortex de sortie ─────────────────────────────────────────────────────
    const hx = hole.c * cw + cw / 2, hy = hole.r * ch + ch / 2, hR = br * 1.25;
    const vt = ts * 0.001; // temps en secondes pour animer le vortex

    // Halo externe rayonnant
    const hGlow = ctx.createRadialGradient(hx, hy, hR * 0.3, hx, hy, hR * 3.5);
    hGlow.addColorStop(0, 'rgba(0,255,128,0.20)'); hGlow.addColorStop(1, 'rgba(0,255,128,0)');
    ctx.globalAlpha = ia;
    ctx.fillStyle = hGlow;
    ctx.beginPath(); ctx.arc(hx, hy, hR * 3.5, 0, Math.PI * 2); ctx.fill();

    // Vide central noir
    ctx.fillStyle = '#000';
    ctx.beginPath(); ctx.arc(hx, hy, hR * 1.05, 0, Math.PI * 2); ctx.fill();

    // Bras spiralés (3 couches, 5 bras chacune, vitesses différentes)
    for (let layer = 2; layer >= 0; layer--) {
      const r2 = hR * (0.45 + layer * 0.32);
      const speed = 1.6 - layer * 0.35;
      const numArms = 5;
      const arcLen = Math.PI * 0.42;
      ctx.save();
      ctx.shadowColor = '#00ff80';
      ctx.shadowBlur = 10 + layer * 6;
      const alpha = layer === 2 ? 0.65 : layer === 1 ? 0.45 : 0.30;
      const lw    = layer === 2 ? 1.5  : layer === 1 ? 2.5  : 3.5;
      ctx.strokeStyle = layer === 2
        ? 'rgba(200,255,215,0.95)'
        : layer === 1 ? 'rgba(0,255,128,0.85)' : 'rgba(0,200,100,0.70)';
      ctx.lineWidth = lw;
      ctx.lineCap = 'round';
      for (let arm = 0; arm < numArms; arm++) {
        const baseAngle = (arm / numArms) * Math.PI * 2 + vt * speed;
        ctx.globalAlpha = alpha * ia;
        ctx.beginPath();
        ctx.arc(hx, hy, r2, baseAngle, baseAngle + arcLen);
        ctx.stroke();
      }
      ctx.restore();
    }

    // Anneau néon vif
    ctx.save();
    ctx.globalAlpha = ia;
    ctx.shadowColor = N_HOLE; ctx.shadowBlur = 22;
    ctx.strokeStyle = N_HOLE; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.arc(hx, hy, hR, 0, Math.PI * 2); ctx.stroke();
    ctx.shadowBlur = 6;
    ctx.strokeStyle = 'rgba(200,255,220,0.90)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(hx, hy, hR * 0.68, 0, Math.PI * 2); ctx.stroke();
    ctx.restore();

    // Label FINISH
    ctx.save();
    ctx.globalAlpha = 0.78 * ia;
    ctx.font = `bold ${Math.min(cw, ch) * 0.22}px "Courier New"`;
    ctx.fillStyle = N_HOLE; ctx.textAlign = 'center';
    ctx.shadowColor = N_HOLE; ctx.shadowBlur = 12;
    ctx.fillText('FINISH', hx, hy + hR + Math.min(cw, ch) * 0.30);
    ctx.restore();

    // Trainée lumineuse
    if (g.trail && g.trail.length > 1) {
      const tLen = g.trail.length;
      for (let i = 0; i < tLen; i++) {
        const tp = g.trail[i];
        const frac = (i + 1) / tLen;
        const r2 = br * (0.12 + frac * 0.52);
        ctx.save();
        ctx.globalAlpha = frac * 0.60 * ia;
        ctx.shadowColor = N_BALL; ctx.shadowBlur = 8 * frac;
        const tg = ctx.createRadialGradient(tp.x, tp.y, 0, tp.x, tp.y, r2);
        tg.addColorStop(0, 'rgba(255,224,64,0.90)');
        tg.addColorStop(0.5, 'rgba(255,140,0,0.45)');
        tg.addColorStop(1, 'rgba(255,60,0,0)');
        ctx.fillStyle = tg;
        ctx.beginPath(); ctx.arc(tp.x, tp.y, r2, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      }
    }

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

    // Wake lock — empêcher la mise en veille (robuste : re-acquisition auto)
    let wakeLock = null;
    const acquireWakeLock = async () => {
      if (document.visibilityState !== 'visible') return;
      try {
        wakeLock = await navigator.wakeLock.request('screen');
        // Re-acquire automatiquement si l'OS libère le lock (ex. perte de focus)
        wakeLock.addEventListener('release', () => {
          setTimeout(acquireWakeLock, 500);
        });
      } catch {}
    };
    acquireWakeLock();
    // Re-acquire quand la page redevient visible (app en arrière-plan → premier plan)
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') acquireWakeLock();
    });
    // Tentative périodique de secours (certains navigateurs libèrent silencieusement)
    const wlInterval = setInterval(acquireWakeLock, 25000);

    // Musique via Web Audio API (invisible pour l'OS media player)
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      gainNode = audioCtx.createGain();
      gainNode.gain.value = soundEnabled ? musicVolume : 0;
      gainNode.connect(audioCtx.destination);
      fetch(`${import.meta.env.BASE_URL}assets/music/MazeBalll - Don't fall again.mp3`)
        .then(r => r.arrayBuffer())
        .then(buf => audioCtx.decodeAudioData(buf))
        .then(decoded => { audioBuffer = decoded; audioReady = true; })
        .catch(() => {});
    } catch {}
    // Effacer toute session média OS
    if ('mediaSession' in navigator) navigator.mediaSession.metadata = null;

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
        const MAX_DEG = 14;
        boardWrap.style.transform =
          `perspective(700px) rotateX(${-boardTiltY * MAX_DEG}deg) rotateY(${boardTiltX * MAX_DEG}deg)`;
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
        // Trainée
        const spd = Math.hypot(G.ball.vx, G.ball.vy);
        if (spd > 0.3) {
          G.trail.push({ x: G.ball.x, y: G.ball.y });
          const maxLen = Math.min(40, Math.round(spd * 6));
          while (G.trail.length > maxLen) G.trail.shift();
        } else {
          if (G.trail.length > 0) G.trail = [];
        }
        // Détection checkpoints
        if (G.checkpoints) {
          for (const cp of G.checkpoints) {
            if (cp.passed) continue;
            const cpx = cp.c * G.cw + G.cw / 2, cpy = cp.r * G.ch + G.ch / 2;
            if (Math.hypot(G.ball.x - cpx, G.ball.y - cpy) < G.br * 1.6) {
              cp.passed = true;
              G.lastCheckpoint = { r: cp.r, c: cp.c };
            }
          }
        }
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
      const s25 = 25 / sensitivity;
      if      (angle === 90)              { tx =  dB / s25; ty = -dG / s25; }
      else if (angle === -90 || angle === 270) { tx = -dB / s25; ty =  dG / s25; }
      else                                { tx = dG / s25;  ty =  dB / s25; }
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
      if (!gyroOk && controlMode !== 'joystick') tilt = { x: (held.r - held.l) * sensitivity, y: (held.d - held.u) * sensitivity };
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

    // Joystick sur le canvas uniquement
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
      if (audioSource) { try { audioSource.stop(); } catch {} }
      if (audioCtx) { audioCtx.close().catch(() => {}); }
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

  // Volume réactif : met à jour le gain dès que musicVolume ou soundEnabled change
  $: if (gainNode) gainNode.gain.value = soundEnabled ? musicVolume : 0;

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

  <!-- Zone B : haut (portrait) → droite (paysage) = timer, boutons -->
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
  .cfg-label input[type=range] {
    width: 100%; accent-color: #00c8ff;
    cursor: pointer;
  }
  .cfg-val {
    color: #00c8ff; font-size: 10px; letter-spacing: 1px;
    text-shadow: 0 0 6px #00c8ff;
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

  .neon-btn--amber {
    border-color: #ffb300; color: #ffcc44;
    text-shadow: 0 0 8px #ffb300;
    box-shadow: 0 0 10px rgba(255,179,0,0.20);
  }
  .neon-btn--amber:active { background: rgba(255,179,0,0.13); }

  .neon-btn--sound {
    border-color: #44ddaa; color: #55ffbb;
    text-shadow: 0 0 8px #44ddaa;
    box-shadow: 0 0 10px rgba(68,221,170,0.20);
  }
  .neon-btn--sound:active { background: rgba(68,221,170,0.13); }

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
