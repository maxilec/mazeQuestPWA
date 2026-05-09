<script>
  import { onMount } from 'svelte';
  import { makeMaze } from './lib/maze.js';

  // ── Palette neon ──────────────────────────────────────────────────────────
  const N_WALL  = '#00c8ff';
  const N_BALL  = '#ffe040';
  const N_HOLE  = '#00ff80';
  const N_FRAME = '#9900ff';
  const BG_MAIN = '#06001a';

  // ── Physique ──────────────────────────────────────────────────────────────
  const FRICTION = 0.93;
  const GRAVITY  = 0.40;
  const BOUNCE   = 0.22;

  // ── État réactif ──────────────────────────────────────────────────────────
  let lvl      = 1;
  let chrono   = '0:00';
  let hint     = 'mouse';
  let iosBtn   = false;
  let rows     = 8;
  let cols     = 6;
  let showCfg  = false;
  let paused   = false;
  let msg      = '';

  // ── Refs non-réactifs ─────────────────────────────────────────────────────
  let canvas;
  let boardWrap;
  let G           = null;
  let raf         = null;
  let tilt        = { x: 0, y: 0 };
  let gyroOk      = false;
  let held        = { l: 0, r: 0, u: 0, d: 0 };
  let rowsInUse   = 8;
  let colsInUse   = 6;
  let keyInt      = null;
  let gyroOffset  = { beta: 0, gamma: 0 };
  let lastOrient  = { beta: 0, gamma: 0 };

  // ── Helpers ───────────────────────────────────────────────────────────────
  function wallThickness(cw, ch) {
    return Math.max(3, Math.min(7, Math.min(cw, ch) * 0.12));
  }

  function formatTime(ms) {
    const s = Math.max(0, ms) / 1000;
    const m = Math.floor(s / 60);
    const ss = Math.floor(s % 60);
    return `${m}:${ss.toString().padStart(2, '0')}`;
  }

  // ── Pause / Reprise ───────────────────────────────────────────────────────
  function pauseGame() {
    if (!G || G.phase !== 'play') return;
    paused = true;
    G.pauseAt = performance.now();
  }

  function resumeGame() {
    if (!G) return;
    if (G.pauseAt) {
      G.pausedMs += performance.now() - G.pauseAt;
      G.pauseAt = 0;
    }
    paused = false;
  }

  // Utilise la position actuelle du téléphone comme position neutre
  function recenterPosition() {
    gyroOffset = { beta: lastOrient.beta, gamma: lastOrient.gamma };
  }

  // ── Initialisation d'un niveau ───────────────────────────────────────────
  function initLevel(levelNum, spawnCell, R, C) {
    if (!canvas) return;
    R = R ?? rowsInUse;
    C = C ?? colsInUse;
    const W = canvas.width, H = canvas.height;
    const cw = W / C, ch = H / R;
    const br = Math.min(cw, ch) * 0.26;
    const wt = wallThickness(cw, ch);
    const maze = makeMaze(R, C);
    const sc = spawnCell || { r: 0, c: 0 };

    let hr = -1, hc = -1, best = -1;
    for (let i = 0; i < 30; i++) {
      const tr = (Math.random() * R) | 0;
      const tc = (Math.random() * C) | 0;
      const d  = Math.abs(tr - sc.r) + Math.abs(tc - sc.c);
      if (d > best && d > 1) { best = d; hr = tr; hc = tc; }
    }
    if (hr < 0) { hr = R - 1 - sc.r; hc = C - 1 - sc.c; }
    if (hr === sc.r && hc === sc.c) hr = (hr + 1) % R;

    const now = performance.now();
    G = {
      W, H, cw, ch, br, wt, maze, lvl: levelNum, R, C,
      ball: { x: sc.c * cw + cw / 2, y: sc.r * ch + ch / 2, vx: 0, vy: 0 },
      hole: { r: hr, c: hc },
      phase: 'play',
      fallT: 0,
      introT: now,
      levelStart: now,
      pausedMs: 0,
      pauseAt: 0,
    };
    chrono = '0:00';
  }

  // ── Canvas ────────────────────────────────────────────────────────────────
  function fitCanvas(R, C) {
    if (!canvas) return;
    const ratio = R / C;
    const maxW  = Math.min(window.innerWidth * 0.92, 460);
    const maxH  = window.innerHeight * 0.62;
    let w = maxW, h = maxW * ratio;
    if (h > maxH) { h = maxH; w = h / ratio; }
    canvas.width  = w | 0;
    canvas.height = h | 0;
  }

  // ── Collisions ────────────────────────────────────────────────────────────
  function hw(ball, wy, x0, x1, br, wt) {
    if (ball.x < x0 || ball.x > x1) return;
    const d = ball.y - wy, thr = br + wt;
    if (Math.abs(d) < thr) {
      ball.y = wy + (d >= 0 ? thr : -thr);
      if (d >= 0 && ball.vy < 0) ball.vy *= -BOUNCE;
      if (d  < 0 && ball.vy > 0) ball.vy *= -BOUNCE;
    }
  }

  function vw(ball, wx, y0, y1, br, wt) {
    if (ball.y < y0 || ball.y > y1) return;
    const d = ball.x - wx, thr = br + wt;
    if (Math.abs(d) < thr) {
      ball.x = wx + (d >= 0 ? thr : -thr);
      if (d >= 0 && ball.vx < 0) ball.vx *= -BOUNCE;
      if (d  < 0 && ball.vx > 0) ball.vx *= -BOUNCE;
    }
  }

  function physics(g, dt) {
    const { ball, maze, cw, ch, br, wt, W, H, R, C } = g;
    ball.vx = (ball.vx + tilt.x * GRAVITY * dt) * FRICTION;
    ball.vy = (ball.vy + tilt.y * GRAVITY * dt) * FRICTION;
    ball.x += ball.vx * dt;
    ball.y += ball.vy * dt;

    const col = Math.max(0, Math.min(C - 1, (ball.x / cw) | 0));
    const row = Math.max(0, Math.min(R - 1, (ball.y / ch) | 0));
    for (let r = Math.max(0, row - 1); r <= Math.min(R - 1, row + 1); r++)
      for (let c = Math.max(0, col - 1); c <= Math.min(C - 1, col + 1); c++) {
        const ce = maze[r][c];
        const x0 = c * cw, x1 = x0 + cw, y0 = r * ch, y1 = y0 + ch;
        if (ce.T) hw(ball, y0, x0, x1, br, wt);
        if (ce.B) hw(ball, y1, x0, x1, br, wt);
        if (ce.L) vw(ball, x0, y0, y1, br, wt);
        if (ce.R) vw(ball, x1, y0, y1, br, wt);
      }

    if (ball.x < br + wt)     { ball.x = br + wt;     if (ball.vx < 0) ball.vx *= -BOUNCE; }
    if (ball.x > W - br - wt) { ball.x = W - br - wt; if (ball.vx > 0) ball.vx *= -BOUNCE; }
    if (ball.y < br + wt)     { ball.y = br + wt;     if (ball.vy < 0) ball.vy *= -BOUNCE; }
    if (ball.y > H - br - wt) { ball.y = H - br - wt; if (ball.vy > 0) ball.vy *= -BOUNCE; }
  }

  // ── Dessin des segments de murs (réutilisé par plusieurs passes) ──────────
  function strokeWalls(ctx, maze, R, C, cw, ch) {
    ctx.beginPath();
    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        const ce = maze[r][c];
        const x0 = c * cw, x1 = x0 + cw, y0 = r * ch, y1 = y0 + ch;
        if (ce.T) { ctx.moveTo(x0, y0); ctx.lineTo(x1, y0); }
        if (ce.B) { ctx.moveTo(x0, y1); ctx.lineTo(x1, y1); }
        if (ce.L) { ctx.moveTo(x0, y0); ctx.lineTo(x0, y1); }
        if (ce.R) { ctx.moveTo(x1, y0); ctx.lineTo(x1, y1); }
      }
    }
    ctx.stroke();
  }

  // ── Rendu Canvas Neon ─────────────────────────────────────────────────────
  function draw(ctx, g, ts) {
    const { W, H, maze, cw, ch, br, wt, ball, hole, phase, fallT, introT, R, C } = g;
    const ia = Math.min(1, (ts - introT) / 300);

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = BG_MAIN;
    ctx.fillRect(0, 0, W, H);
    ctx.globalAlpha = ia;

    // ── Fond : cases damier sombres ──
    for (let r = 0; r < R; r++)
      for (let c = 0; c < C; c++) {
        ctx.fillStyle = (r + c) % 2 ? '#090028' : '#070020';
        ctx.fillRect(c * cw, r * ch, cw, ch);
      }

    // Grille de fond très subtile
    ctx.strokeStyle = 'rgba(0,60,180,0.10)';
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    for (let r = 0; r <= R; r++) { ctx.moveTo(0, r * ch); ctx.lineTo(W, r * ch); }
    for (let c = 0; c <= C; c++) { ctx.moveTo(c * cw, 0); ctx.lineTo(c * cw, H); }
    ctx.stroke();

    // ── Trou neon ──
    const hx = hole.c * cw + cw / 2, hy = hole.r * ch + ch / 2, hR = br * 1.25;
    // Halo d'attraction
    const hGlow = ctx.createRadialGradient(hx, hy, hR * .4, hx, hy, hR * 3.2);
    hGlow.addColorStop(0, 'rgba(0,255,128,0.22)');
    hGlow.addColorStop(1, 'rgba(0,255,128,0)');
    ctx.fillStyle = hGlow;
    ctx.beginPath(); ctx.arc(hx, hy, hR * 3.2, 0, Math.PI * 2); ctx.fill();
    // Fond sombre du trou
    ctx.fillStyle = '#000a06';
    ctx.beginPath(); ctx.arc(hx, hy, hR, 0, Math.PI * 2); ctx.fill();
    // Anneau neon (shadowBlur ok ici car un seul cercle)
    ctx.save();
    ctx.shadowColor = N_HOLE;
    ctx.shadowBlur  = 16;
    ctx.strokeStyle = N_HOLE;
    ctx.lineWidth   = 2.5;
    ctx.beginPath(); ctx.arc(hx, hy, hR, 0, Math.PI * 2); ctx.stroke();
    // Cœur blanc brillant
    ctx.shadowBlur  = 4;
    ctx.strokeStyle = 'rgba(255,255,255,0.65)';
    ctx.lineWidth   = 1;
    ctx.beginPath(); ctx.arc(hx, hy, hR, 0, Math.PI * 2); ctx.stroke();
    ctx.restore();

    // ── Murs neon — 3 passes sans shadowBlur (perf mobile) ──
    // lineCap/Join round = coins et extrémités arrondis (style Pacman)
    ctx.lineCap  = 'round';
    ctx.lineJoin = 'round';

    // Passe 1 : halo large transparent
    ctx.strokeStyle = 'rgba(0,200,255,0.15)';
    ctx.lineWidth   = wt * 5.5;
    strokeWalls(ctx, maze, R, C, cw, ch);

    // Passe 2 : corps lumineux
    ctx.strokeStyle = 'rgba(0,200,255,0.65)';
    ctx.lineWidth   = wt * 2.2;
    strokeWalls(ctx, maze, R, C, cw, ch);

    // Passe 3 : cœur brillant
    ctx.strokeStyle = '#b8eeff';
    ctx.lineWidth   = wt * 0.75;
    strokeWalls(ctx, maze, R, C, cw, ch);

    // ── Bordure extérieure neon violet ──
    ctx.save();
    ctx.shadowColor = N_FRAME;
    ctx.shadowBlur  = 16;
    ctx.strokeStyle = N_FRAME;
    ctx.lineWidth   = 3;
    ctx.lineCap     = 'square';
    ctx.strokeRect(1.5, 1.5, W - 3, H - 3);
    ctx.restore();

    // ── Bille ──
    const el  = phase === 'falling' ? ts - fallT : 0;
    const sc2 = phase === 'falling' ? Math.max(0, 1 - el / 480) : 1;
    const rbr = br * sc2;

    if (rbr > 1.5) {
      // Ombre elliptique au sol (décalée selon inclinaison → illusion de hauteur)
      ctx.save();
      ctx.globalAlpha = 0.45 * ia * sc2;
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.ellipse(
        ball.x + tilt.x * br * 0.55,
        ball.y + tilt.y * br * 0.55 + rbr * 0.45,
        rbr * 0.85, rbr * 0.22, 0, 0, Math.PI * 2
      );
      ctx.fill();
      ctx.restore();

      // Sphère avec glow neon doré
      ctx.save();
      ctx.shadowColor = N_BALL;
      ctx.shadowBlur  = 22 * sc2;
      const bg = ctx.createRadialGradient(
        ball.x - rbr * .34, ball.y - rbr * .40, rbr * .04,
        ball.x + rbr * .06, ball.y + rbr * .06, rbr
      );
      bg.addColorStop(0,   '#ffffff');
      bg.addColorStop(.18, '#ffffc0');
      bg.addColorStop(.42, '#ffe040');
      bg.addColorStop(.68, '#ff9900');
      bg.addColorStop(.88, '#cc5500');
      bg.addColorStop(1,   '#7a2800');
      ctx.beginPath(); ctx.arc(ball.x, ball.y, rbr, 0, Math.PI * 2);
      ctx.fillStyle = bg; ctx.fill();
      ctx.restore();

      // Reflet spéculaire
      ctx.save();
      ctx.globalAlpha = .55 * ia;
      const sp = ctx.createRadialGradient(
        ball.x - rbr * .36, ball.y - rbr * .42, 0,
        ball.x - rbr * .36, ball.y - rbr * .42, rbr * .38
      );
      sp.addColorStop(0,  'rgba(255,255,255,.92)');
      sp.addColorStop(.6, 'rgba(255,255,255,.15)');
      sp.addColorStop(1,  'rgba(255,255,255,0)');
      ctx.beginPath(); ctx.arc(ball.x - rbr * .36, ball.y - rbr * .42, rbr * .38, 0, Math.PI * 2);
      ctx.fillStyle = sp; ctx.fill();
      ctx.restore();
    }

    ctx.globalAlpha = 1;
  }

  // ── Cycle de vie ──────────────────────────────────────────────────────────
  onMount(() => {
    fitCanvas(rowsInUse, colsInUse);
    setTimeout(() => initLevel(1, null, rowsInUse, colsInUse), 60);

    if (
      typeof DeviceOrientationEvent !== 'undefined' &&
      typeof DeviceOrientationEvent.requestPermission === 'function'
    ) iosBtn = true;

    const ctx = canvas.getContext('2d');
    let last  = performance.now();

    function loop(ts) {
      if (!G) { raf = requestAnimationFrame(loop); return; }
      const dt = Math.min((ts - last) / 16.67, 3);
      last = ts;

      // Ombre du cadre dynamique (effet 3D sans toucher au canvas)
      if (boardWrap) {
        const sx = tilt.x * 18, sy = tilt.y * 18;
        boardWrap.style.boxShadow =
          `0 0 45px rgba(0,200,255,0.22), ${sx}px ${sy + 8}px 50px rgba(0,0,0,0.92)`;
      }

      // Sync dimensions
      if (G.W !== canvas.width || G.H !== canvas.height) {
        G.W = canvas.width; G.H = canvas.height;
        G.cw = G.W / G.C;  G.ch = G.H / G.R;
        G.br = Math.min(G.cw, G.ch) * .26;
        G.wt = wallThickness(G.cw, G.ch);
      }

      if (!paused && G.phase === 'play') {
        physics(G, dt);
        chrono = formatTime(ts - G.levelStart - G.pausedMs);
        const hx = G.hole.c * G.cw + G.cw / 2;
        const hy = G.hole.r * G.ch + G.ch / 2;
        if (Math.hypot(G.ball.x - hx, G.ball.y - hy) < G.br * .58) {
          G.phase = 'falling';
          G.fallT = ts;
        }
      } else if (G.phase === 'falling' && ts - G.fallT > 720) {
        const nl = G.lvl + 1;
        const sp = { r: G.hole.r, c: G.hole.c };
        initLevel(nl, sp, G.R, G.C);
        lvl = nl;
        msg = `LVL ${nl}`;
        setTimeout(() => msg = '', 1600);
      }

      draw(ctx, G, ts);
      raf = requestAnimationFrame(loop);
    }

    raf = requestAnimationFrame(loop);

    // ── Gyroscope avec auto-calibration au premier événement ──
    const onOrient = (e) => {
      if (e.beta == null) return;
      lastOrient = { beta: e.beta || 0, gamma: e.gamma || 0 };
      if (!gyroOk) {
        // Position initiale = position neutre (offset zéro)
        gyroOffset = { ...lastOrient };
        gyroOk = true;
        hint = 'gyro';
      }
      tilt = {
        x: Math.max(-1, Math.min(1, ((e.gamma || 0) - gyroOffset.gamma) / 25)),
        y: Math.max(-1, Math.min(1, ((e.beta  || 0) - gyroOffset.beta ) / 25)),
      };
    };

    const onMouse = (e) => {
      if (gyroOk) return;
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
      if (!gyroOk) tilt = { x: (held.r - held.l) * 0.9, y: (held.d - held.u) * 0.9 };
    }, 16);

    const onResize = () => {
      fitCanvas(rowsInUse, colsInUse);
      if (G) {
        G.W = canvas.width; G.H = canvas.height;
        G.cw = G.W / G.C;  G.ch = G.H / G.R;
        G.br = Math.min(G.cw, G.ch) * .26;
        G.wt = wallThickness(G.cw, G.ch);
      }
    };

    window.addEventListener('deviceorientation', onOrient);
    window.addEventListener('mousemove',         onMouse);
    window.addEventListener('keydown',           onKD);
    window.addEventListener('keyup',             onKU);
    window.addEventListener('resize',            onResize);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(keyInt);
      window.removeEventListener('deviceorientation', onOrient);
      window.removeEventListener('mousemove',         onMouse);
      window.removeEventListener('keydown',           onKD);
      window.removeEventListener('keyup',             onKU);
      window.removeEventListener('resize',            onResize);
    };
  });

  async function requestGyroIOS() {
    try {
      const res = await DeviceOrientationEvent.requestPermission();
      if (res === 'granted') { gyroOk = true; iosBtn = false; hint = 'gyro'; }
    } catch {}
  }

  function applyConfig() {
    rowsInUse = rows;
    colsInUse = cols;
    fitCanvas(rows, cols);
    setTimeout(() => { initLevel(1, null, rows, cols); lvl = 1; showCfg = false; }, 60);
  }

  const hints = {
    gyro:  "📱 Inclinez l'appareil",
    mouse: '🖱 Déplacez la souris',
    keys:  '⌨ Touches fléchées',
  };
</script>

<!-- ── Markup ───────────────────────────────────────────────────────────── -->
<div class="container">

  <div class="header">
    <span class="chrono">{chrono}</span>
    <span class="level">LVL&nbsp;{lvl}</span>
    <div class="header-btns">
      <button class="icon-btn" on:click={() => paused ? resumeGame() : pauseGame()}
              aria-label="Pause / Reprendre">
        {paused ? '▶' : '⏸'}
      </button>
      <button class="icon-btn" on:click={() => showCfg = !showCfg}
              aria-label="Paramètres">⚙</button>
    </div>
  </div>

  {#if showCfg}
    <div class="config">
      <label>Rangs <input type="number" min="3" max="16" bind:value={rows} /></label>
      <label>Cols  <input type="number" min="3" max="12" bind:value={cols} /></label>
      <button class="apply-btn" on:click={applyConfig}>OK</button>
    </div>
  {/if}

  <div class="board-wrap" bind:this={boardWrap}>
    <canvas bind:this={canvas}></canvas>
    {#if msg}
      <div class="lvl-overlay">{msg}</div>
    {/if}
  </div>

  <p class="hint">{hints[hint]}</p>

  {#if iosBtn}
    <button class="gyro-btn" on:click={requestGyroIOS}>
      Activer le gyroscope (iOS)
    </button>
  {/if}

</div>

<!-- ── Menu Pause ────────────────────────────────────────────────────────── -->
{#if paused}
  <div class="pause-overlay" on:click|self={resumeGame}>
    <div class="pause-panel">
      <div class="pause-title">PAUSE</div>
      <div class="pause-info">Niveau {lvl} · {chrono}</div>
      <button class="neon-btn" on:click={resumeGame}>
        ▶&nbsp; REPRENDRE
      </button>
      <button class="neon-btn neon-btn--purple" on:click={recenterPosition}>
        ⊕&nbsp; RECENTRER LA POSITION
      </button>
    </div>
  </div>
{/if}

<!-- ── Styles ──────────────────────────────────────────────────────────── -->
<style>
  :global(*, *::before, *::after) { box-sizing: border-box; margin: 0; padding: 0; }
  :global(html, body) {
    width: 100%; height: 100%;
    background: #06001a;
    overflow: hidden;
    touch-action: none;
    user-select: none;
  }

  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Georgia, 'Times New Roman', serif;
    gap: 10px;
    padding: env(safe-area-inset-top) env(safe-area-inset-right)
             env(safe-area-inset-bottom) env(safe-area-inset-left);
  }

  /* ── Header ── */
  .header {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 460px;
    padding: 0 6px;
    gap: 10px;
  }

  .chrono {
    color: #ffe040;
    font-family: 'Courier New', monospace;
    font-size: 16px;
    letter-spacing: 2px;
    text-shadow: 0 0 10px #ffe040, 0 0 4px #ffe040;
    min-width: 48px;
  }

  .level {
    flex: 1;
    text-align: center;
    color: #ff44dd;
    font-size: 13px;
    letter-spacing: 4px;
    text-shadow: 0 0 12px #ff44dd, 0 0 4px #ff44dd;
  }

  .header-btns {
    display: flex;
    gap: 6px;
  }

  .icon-btn {
    background: transparent;
    border: 1px solid #00c8ff;
    color: #00c8ff;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 0 0 6px #00c8ff;
    box-shadow: 0 0 8px rgba(0,200,255,0.25);
    font-family: inherit;
  }
  .icon-btn:active { background: rgba(0,200,255,0.15); }

  /* ── Config ── */
  .config {
    background: rgba(0,8,35,0.96);
    border: 1px solid #00c8ff;
    border-radius: 6px;
    padding: 10px 16px;
    display: flex;
    gap: 14px;
    align-items: center;
    font-size: 12px;
    color: #00c8ff;
    font-family: inherit;
    box-shadow: 0 0 20px rgba(0,200,255,0.18);
  }
  .config label { display: flex; align-items: center; gap: 4px; }
  .config input {
    width: 40px;
    background: rgba(0,20,60,0.8);
    color: #00c8ff;
    border: 1px solid #00c8ff;
    border-radius: 3px;
    padding: 2px 4px;
    text-align: center;
    font-family: inherit;
    font-size: 12px;
  }
  .apply-btn {
    background: rgba(0,200,255,0.12);
    color: #00c8ff;
    border: 1px solid #00c8ff;
    border-radius: 4px;
    padding: 4px 12px;
    font-weight: bold;
    cursor: pointer;
    font-family: inherit;
    letter-spacing: 1px;
  }
  .apply-btn:active { background: rgba(0,200,255,0.25); }

  /* ── Plateau ── */
  .board-wrap {
    position: relative;
    border-radius: 4px;
    box-shadow: 0 0 45px rgba(0,200,255,0.22), 0 8px 40px rgba(0,0,0,0.9);
  }

  canvas {
    display: block;
    border-radius: 3px;
    border: 2px solid #9900ff;
    box-shadow: 0 0 20px rgba(153,0,255,0.5), 0 0 60px rgba(0,200,255,0.12);
  }

  /* ── Overlay passage de niveau ── */
  .lvl-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(6,0,26,.75);
    border-radius: 3px;
    color: #ff44dd;
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 6px;
    text-transform: uppercase;
    text-shadow: 0 0 30px #ff44dd, 0 0 10px #ff44dd;
    pointer-events: none;
  }

  /* ── Hint ── */
  .hint {
    color: rgba(0,200,255,0.38);
    font-size: 10px;
    text-align: center;
    letter-spacing: .5px;
  }

  /* ── iOS Gyro ── */
  .gyro-btn {
    padding: 10px 22px;
    background: rgba(0,200,255,0.08);
    border: 1.5px solid #00c8ff;
    color: #00c8ff;
    border-radius: 5px;
    font-size: 13px;
    cursor: pointer;
    font-family: inherit;
    letter-spacing: 1px;
    text-shadow: 0 0 8px #00c8ff;
  }
  .gyro-btn:active { opacity: .85; }

  /* ── Menu Pause ── */
  .pause-overlay {
    position: fixed;
    inset: 0;
    background: rgba(6,0,26,0.82);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 200;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }

  .pause-panel {
    background: rgba(0,8,38,0.97);
    border: 1.5px solid #00c8ff;
    border-radius: 14px;
    padding: 30px 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    box-shadow:
      0 0 50px rgba(0,200,255,0.30),
      inset 0 0 30px rgba(0,0,80,0.35);
    min-width: 240px;
  }

  .pause-title {
    color: #00c8ff;
    font-size: 24px;
    letter-spacing: 8px;
    text-shadow: 0 0 20px #00c8ff, 0 0 8px #00c8ff;
  }

  .pause-info {
    color: rgba(0,200,255,0.55);
    font-size: 12px;
    letter-spacing: 2px;
    margin-top: -6px;
  }

  .neon-btn {
    border: 1.5px solid #00c8ff;
    background: transparent;
    color: #00c8ff;
    padding: 11px 20px;
    border-radius: 7px;
    font-family: inherit;
    font-size: 12px;
    cursor: pointer;
    letter-spacing: 2.5px;
    text-shadow: 0 0 8px #00c8ff;
    box-shadow: 0 0 12px rgba(0,200,255,0.22);
    width: 100%;
  }
  .neon-btn:active {
    background: rgba(0,200,255,0.13);
    box-shadow: 0 0 28px rgba(0,200,255,0.55);
  }

  .neon-btn--purple {
    border-color: #aa44ff;
    color: #cc66ff;
    text-shadow: 0 0 8px #aa44ff;
    box-shadow: 0 0 12px rgba(170,68,255,0.22);
  }
  .neon-btn--purple:active {
    background: rgba(170,68,255,0.13);
    box-shadow: 0 0 28px rgba(170,68,255,0.55);
  }
</style>
