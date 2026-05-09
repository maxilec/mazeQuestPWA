<script>
  import { onMount } from 'svelte';
  import { makeMaze } from './lib/maze.js';

  // ── Physique ──────────────────────────────────────────────────────────────
  const FRICTION = 0.93;
  const GRAVITY  = 0.40;
  const BOUNCE   = 0.22;

  // ── État réactif Svelte ───────────────────────────────────────────────────
  let lvl      = 1;
  let msg      = '';
  let hint     = 'mouse';
  let iosBtn   = false;
  let rows     = 8;
  let cols     = 6;
  let showCfg  = false;

  // ── Refs non-réactifs (jeu + canvas) ─────────────────────────────────────
  let canvas;
  let boardWrap;
  let G          = null;
  let raf        = null;
  let tilt       = { x: 0, y: 0 };
  let gyroOk     = false;
  let held       = { l: 0, r: 0, u: 0, d: 0 };
  let rowsInUse  = 8;
  let colsInUse  = 6;
  let keyInt     = null;

  // ── Initialisation d'un niveau ───────────────────────────────────────────
  function initLevel(levelNum, spawnCell, R, C) {
    if (!canvas) return;
    R = R ?? rowsInUse;
    C = C ?? colsInUse;
    const W = canvas.width, H = canvas.height;
    const cw = W / C, ch = H / R;
    const br = Math.min(cw, ch) * 0.26;
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

    G = {
      W, H, cw, ch, br, maze, lvl: levelNum, R, C,
      ball: { x: sc.c * cw + cw / 2, y: sc.r * ch + ch / 2, vx: 0, vy: 0 },
      hole: { r: hr, c: hc },
      phase: 'play',
      fallT: 0,
      introT: performance.now(),
    };
  }

  // ── Dimensionnement canvas ────────────────────────────────────────────────
  function fitCanvas(R, C) {
    if (!canvas) return;
    const ratio = R / C;
    const maxW  = Math.min(window.innerWidth  * 0.92, 460);
    const maxH  = window.innerHeight * 0.66;
    let w = maxW, h = maxW * ratio;
    if (h > maxH) { h = maxH; w = h / ratio; }
    canvas.width  = w | 0;
    canvas.height = h | 0;
  }

  // ── Collision : mur horizontal ────────────────────────────────────────────
  function hw(ball, wy, x0, x1, br) {
    if (ball.x < x0 || ball.x > x1) return;
    const d = ball.y - wy;
    if (Math.abs(d) < br) {
      ball.y = wy + (d >= 0 ? br : -br);
      if (d >= 0 && ball.vy < 0) ball.vy *= -BOUNCE;
      if (d  < 0 && ball.vy > 0) ball.vy *= -BOUNCE;
    }
  }

  // ── Collision : mur vertical ──────────────────────────────────────────────
  function vw(ball, wx, y0, y1, br) {
    if (ball.y < y0 || ball.y > y1) return;
    const d = ball.x - wx;
    if (Math.abs(d) < br) {
      ball.x = wx + (d >= 0 ? br : -br);
      if (d >= 0 && ball.vx < 0) ball.vx *= -BOUNCE;
      if (d  < 0 && ball.vx > 0) ball.vx *= -BOUNCE;
    }
  }

  // ── Physique bille ────────────────────────────────────────────────────────
  function physics(g, dt) {
    const { ball, maze, cw, ch, br, W, H, R, C } = g;
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
        if (ce.T) hw(ball, y0, x0, x1, br);
        if (ce.B) hw(ball, y1, x0, x1, br);
        if (ce.L) vw(ball, x0, y0, y1, br);
        if (ce.R) vw(ball, x1, y0, y1, br);
      }

    if (ball.x < br)     { ball.x = br;     if (ball.vx < 0) ball.vx *= -BOUNCE; }
    if (ball.x > W - br) { ball.x = W - br; if (ball.vx > 0) ball.vx *= -BOUNCE; }
    if (ball.y < br)     { ball.y = br;     if (ball.vy < 0) ball.vy *= -BOUNCE; }
    if (ball.y > H - br) { ball.y = H - br; if (ball.vy > 0) ball.vy *= -BOUNCE; }
  }

  // ── Rendu Canvas ──────────────────────────────────────────────────────────
  function draw(ctx, g, ts) {
    const { W, H, maze, cw, ch, br, ball, hole, phase, fallT, introT, R, C } = g;
    const ia = Math.min(1, (ts - introT) / 300);

    // Décalage parallaxe basé sur l'inclinaison (effet lumière/ombre directionnelle)
    const sdx = tilt.x * 5;
    const sdy = tilt.y * 5;
    // Épaisseur des murs (proportion de la cellule)
    const wt = Math.max(3.5, Math.min(9, Math.min(cw, ch) * 0.15));

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#1a0c04';
    ctx.fillRect(0, 0, W, H);
    ctx.globalAlpha = ia;

    // ── Cases damier bois ──
    for (let r = 0; r < R; r++)
      for (let c = 0; c < C; c++) {
        ctx.fillStyle = (r + c) % 2 ? '#2e1606' : '#371b09';
        ctx.fillRect(c * cw + 1, r * ch + 1, cw - 2, ch - 2);
      }

    // ── Grille de veinage bois (micro-texture) ──
    ctx.strokeStyle = 'rgba(255,200,120,0.04)';
    ctx.lineWidth = 1;
    for (let r = 0; r <= R; r++) {
      ctx.beginPath(); ctx.moveTo(0, r * ch); ctx.lineTo(W, r * ch); ctx.stroke();
    }
    for (let c = 0; c <= C; c++) {
      ctx.beginPath(); ctx.moveTo(c * cw, 0); ctx.lineTo(c * cw, H); ctx.stroke();
    }

    // ── Trou ──
    const hx = hole.c * cw + cw / 2, hy = hole.r * ch + ch / 2, hR = br * 1.3;
    // Halo d'ombre au sol
    const sg = ctx.createRadialGradient(hx + sdx * 0.3, hy + sdy * 0.3, hR * .3, hx, hy, hR * 3.5);
    sg.addColorStop(0, 'rgba(0,0,0,.95)'); sg.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.beginPath(); ctx.arc(hx, hy, hR * 3.5, 0, Math.PI * 2); ctx.fillStyle = sg; ctx.fill();
    // Corps du trou
    ctx.beginPath(); ctx.arc(hx, hy, hR, 0, Math.PI * 2); ctx.fillStyle = '#030000'; ctx.fill();
    // Bord chanfreiné 3D avec offset parallaxe
    const rim = ctx.createRadialGradient(
      hx - hR * .35 + sdx * 0.4, hy - hR * .35 + sdy * 0.4, hR * .15,
      hx, hy, hR
    );
    rim.addColorStop(0,   'rgba(180,120,60,0.1)');
    rim.addColorStop(.6,  'rgba(80,40,10,.45)');
    rim.addColorStop(1,   'rgba(0,0,0,.95)');
    ctx.beginPath(); ctx.arc(hx, hy, hR, 0, Math.PI * 2); ctx.fillStyle = rim; ctx.fill();
    // Reflet intérieur du trou (effet profondeur)
    ctx.beginPath(); ctx.arc(hx - hR * .3, hy - hR * .3, hR * .18, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(60,30,10,0.15)'; ctx.fill();

    // ── Murs en 3D (rectangles épais avec faces biseautées) ──
    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        const ce = maze[r][c];
        const x0 = c * cw, x1 = x0 + cw, y0 = r * ch, y1 = y0 + ch;

        // Mur HAUT (segment horizontal en y0)
        if (ce.T) {
          const yw = y0;
          // Ombre portée au sol (déplacée selon inclinaison → parallaxe)
          ctx.fillStyle = 'rgba(0,0,0,0.50)';
          ctx.fillRect(x0 + sdx * .6, yw - wt / 2 + sdy * .8 + wt, x1 - x0, wt * .7);
          // Face avant (visible quand on penche vers soi, tilt.y > 0)
          if (sdy > 0) {
            ctx.fillStyle = '#5a2a08';
            ctx.fillRect(x0, yw + wt / 2, x1 - x0, Math.min(sdy * .7, wt));
          }
          // Corps principal avec dégradé bois 3D
          const gH = ctx.createLinearGradient(0, yw - wt, 0, yw + wt);
          gH.addColorStop(0,    '#d4aa72');
          gH.addColorStop(0.3,  '#9B6840');
          gH.addColorStop(0.75, '#7a5030');
          gH.addColorStop(1,    '#5a2a08');
          ctx.fillStyle = gH;
          ctx.fillRect(x0 - .5, yw - wt, x1 - x0 + 1, wt * 2);
          // Arête supérieure lumineuse
          ctx.fillStyle = 'rgba(220,175,110,0.55)';
          ctx.fillRect(x0, yw - wt, x1 - x0, wt * .28);
        }

        // Mur BAS (segment horizontal en y1)
        if (ce.B) {
          const yw = y1;
          ctx.fillStyle = 'rgba(0,0,0,0.50)';
          ctx.fillRect(x0 + sdx * .6, yw - wt / 2 + sdy * .8 + wt, x1 - x0, wt * .7);
          if (sdy > 0) {
            ctx.fillStyle = '#5a2a08';
            ctx.fillRect(x0, yw + wt / 2, x1 - x0, Math.min(sdy * .7, wt));
          }
          const gH = ctx.createLinearGradient(0, yw - wt, 0, yw + wt);
          gH.addColorStop(0,    '#d4aa72');
          gH.addColorStop(0.3,  '#9B6840');
          gH.addColorStop(0.75, '#7a5030');
          gH.addColorStop(1,    '#5a2a08');
          ctx.fillStyle = gH;
          ctx.fillRect(x0 - .5, yw - wt, x1 - x0 + 1, wt * 2);
          ctx.fillStyle = 'rgba(220,175,110,0.55)';
          ctx.fillRect(x0, yw - wt, x1 - x0, wt * .28);
        }

        // Mur GAUCHE (segment vertical en x0)
        if (ce.L) {
          const xw = x0;
          ctx.fillStyle = 'rgba(0,0,0,0.50)';
          ctx.fillRect(xw - wt / 2 + sdx * .8 + wt, y0 + sdy * .6, wt * .7, y1 - y0);
          if (sdx > 0) {
            ctx.fillStyle = '#5a2a08';
            ctx.fillRect(xw + wt / 2, y0, Math.min(sdx * .7, wt), y1 - y0);
          }
          const gV = ctx.createLinearGradient(xw - wt, 0, xw + wt, 0);
          gV.addColorStop(0,    '#d4aa72');
          gV.addColorStop(0.3,  '#9B6840');
          gV.addColorStop(0.75, '#7a5030');
          gV.addColorStop(1,    '#5a2a08');
          ctx.fillStyle = gV;
          ctx.fillRect(xw - wt, y0 - .5, wt * 2, y1 - y0 + 1);
          ctx.fillStyle = 'rgba(220,175,110,0.55)';
          ctx.fillRect(xw - wt, y0, wt * .28, y1 - y0);
        }

        // Mur DROITE (segment vertical en x1)
        if (ce.R) {
          const xw = x1;
          ctx.fillStyle = 'rgba(0,0,0,0.50)';
          ctx.fillRect(xw - wt / 2 + sdx * .8 + wt, y0 + sdy * .6, wt * .7, y1 - y0);
          if (sdx > 0) {
            ctx.fillStyle = '#5a2a08';
            ctx.fillRect(xw + wt / 2, y0, Math.min(sdx * .7, wt), y1 - y0);
          }
          const gV = ctx.createLinearGradient(xw - wt, 0, xw + wt, 0);
          gV.addColorStop(0,    '#d4aa72');
          gV.addColorStop(0.3,  '#9B6840');
          gV.addColorStop(0.75, '#7a5030');
          gV.addColorStop(1,    '#5a2a08');
          ctx.fillStyle = gV;
          ctx.fillRect(xw - wt, y0 - .5, wt * 2, y1 - y0 + 1);
          ctx.fillStyle = 'rgba(220,175,110,0.55)';
          ctx.fillRect(xw - wt, y0, wt * .28, y1 - y0);
        }
      }
    }

    // ── Bordure extérieure 3D ──
    const bw = 5;
    const frameGrad = ctx.createLinearGradient(0, 0, bw * 2, bw * 2);
    frameGrad.addColorStop(0, '#c49a6c');
    frameGrad.addColorStop(1, '#4a1e06');
    ctx.strokeStyle = '#7a3a10';
    ctx.lineWidth = bw;
    ctx.strokeRect(bw / 2, bw / 2, W - bw, H - bw);
    // Reflet haut-gauche du cadre
    ctx.strokeStyle = 'rgba(210,160,90,0.4)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(1, H - 1); ctx.lineTo(1, 1); ctx.lineTo(W - 1, 1);
    ctx.stroke();
    // Ombre bas-droite du cadre
    ctx.strokeStyle = 'rgba(0,0,0,0.55)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(1, H - 1); ctx.lineTo(W - 1, H - 1); ctx.lineTo(W - 1, 1);
    ctx.stroke();

    // ── Ombre de la bille au sol (parallaxe de hauteur) ──
    const el  = phase === 'falling' ? ts - fallT : 0;
    const sc2 = phase === 'falling' ? Math.max(0, 1 - el / 480) : 1;
    const rbr = br * sc2;
    const shadowOffX = tilt.x * br * 0.55;
    const shadowOffY = tilt.y * br * 0.55 + br * 0.45;
    ctx.save();
    ctx.globalAlpha = 0.38 * ia * sc2;
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.ellipse(
      ball.x + shadowOffX, ball.y + shadowOffY,
      br * 0.82, br * 0.22, 0, 0, Math.PI * 2
    );
    ctx.fill();
    ctx.restore();

    // ── Bille métallique ──
    if (rbr > 1.5) {
      ctx.save();
      ctx.shadowColor   = 'rgba(0,0,0,.70)';
      ctx.shadowBlur    = rbr * 2.8;
      ctx.shadowOffsetX = rbr * .20;
      ctx.shadowOffsetY = rbr * .28;
      // Dégradé sphérique
      const bg = ctx.createRadialGradient(
        ball.x - rbr * .34, ball.y - rbr * .40, rbr * .04,
        ball.x + rbr * .08, ball.y + rbr * .08, rbr
      );
      bg.addColorStop(0,    '#ffffff');
      bg.addColorStop(.18,  '#eeeeee');
      bg.addColorStop(.42,  '#c0c0c0');
      bg.addColorStop(.68,  '#909090');
      bg.addColorStop(.88,  '#666666');
      bg.addColorStop(1,    '#3a3a3a');
      ctx.beginPath(); ctx.arc(ball.x, ball.y, rbr, 0, Math.PI * 2);
      ctx.fillStyle = bg; ctx.fill();
      ctx.restore();

      // Reflet spéculaire primaire
      ctx.save();
      ctx.globalAlpha = .50 * ia;
      const sp = ctx.createRadialGradient(
        ball.x - rbr * .36, ball.y - rbr * .42, 0,
        ball.x - rbr * .36, ball.y - rbr * .42, rbr * .38
      );
      sp.addColorStop(0, 'rgba(255,255,255,.95)');
      sp.addColorStop(.6, 'rgba(255,255,255,.2)');
      sp.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.beginPath(); ctx.arc(ball.x - rbr * .36, ball.y - rbr * .42, rbr * .38, 0, Math.PI * 2);
      ctx.fillStyle = sp; ctx.fill();
      ctx.restore();

      // Reflet secondaire (bas-droit, réflexion du plateau)
      ctx.save();
      ctx.globalAlpha = .15 * ia;
      const sp2 = ctx.createRadialGradient(
        ball.x + rbr * .30, ball.y + rbr * .35, 0,
        ball.x + rbr * .30, ball.y + rbr * .35, rbr * .25
      );
      sp2.addColorStop(0, 'rgba(180,120,60,.7)');
      sp2.addColorStop(1, 'rgba(180,120,60,0)');
      ctx.beginPath(); ctx.arc(ball.x + rbr * .30, ball.y + rbr * .35, rbr * .25, 0, Math.PI * 2);
      ctx.fillStyle = sp2; ctx.fill();
      ctx.restore();
    }

    ctx.globalAlpha = 1;
  }

  // ── Cycle de vie Svelte ───────────────────────────────────────────────────
  onMount(() => {
    fitCanvas(rowsInUse, colsInUse);
    setTimeout(() => initLevel(1, null, rowsInUse, colsInUse), 60);

    if (
      typeof DeviceOrientationEvent !== 'undefined' &&
      typeof DeviceOrientationEvent.requestPermission === 'function'
    ) iosBtn = true;

    const ctx = canvas.getContext('2d');
    let last  = performance.now();

    // ── Boucle de jeu ──
    function loop(ts) {
      if (!G) { raf = requestAnimationFrame(loop); return; }
      const dt = Math.min((ts - last) / 16.67, 3);
      last = ts;

      // Effet 3D/parallaxe : inclinaison perspective CSS du plateau
      const tx = tilt.x * 11;
      const ty = tilt.y * 11;
      canvas.style.transform = `perspective(700px) rotateX(${-ty}deg) rotateY(${tx}deg)`;

      // Ombre du cadre en fonction de l'inclinaison
      if (boardWrap) {
        const sx = tilt.x * 18;
        const sy = tilt.y * 18;
        boardWrap.style.boxShadow =
          `${sx}px ${sy + 8}px 50px rgba(0,0,0,0.92), ` +
          `${sx * .3}px ${sy * .3 + 2}px 10px rgba(0,0,0,0.55)`;
      }

      if (G.W !== canvas.width || G.H !== canvas.height) {
        G.W  = canvas.width;  G.H  = canvas.height;
        G.cw = G.W / G.C;    G.ch = G.H / G.R;
        G.br = Math.min(G.cw, G.ch) * .26;
      }

      if (G.phase === 'play') {
        physics(G, dt);
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
        msg = `Niveau ${nl}`;
        setTimeout(() => msg = '', 1600);
      }

      draw(ctx, G, ts);
      raf = requestAnimationFrame(loop);
    }

    raf = requestAnimationFrame(loop);

    // ── Gyroscope ──
    const onOrient = (e) => {
      if (e.beta == null) return;
      gyroOk = true; hint = 'gyro';
      tilt = {
        x: Math.max(-1, Math.min(1, (e.gamma || 0) / 25)),
        y: Math.max(-1, Math.min(1, (e.beta  || 0) / 25)),
      };
    };

    // ── Souris ──
    const onMouse = (e) => {
      if (gyroOk) return;
      hint = 'mouse';
      const r = canvas.getBoundingClientRect();
      tilt = {
        x: Math.max(-1, Math.min(1, (e.clientX - r.left - r.width  / 2) / (r.width  * 0.4))),
        y: Math.max(-1, Math.min(1, (e.clientY - r.top  - r.height / 2) / (r.height * 0.4))),
      };
    };

    // ── Clavier ──
    const onKD = (e) => {
      if (['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)) e.preventDefault();
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

    // ── Redimensionnement ──
    const onResize = () => {
      fitCanvas(rowsInUse, colsInUse);
      if (G) {
        G.W  = canvas.width;  G.H  = canvas.height;
        G.cw = G.W / G.C;    G.ch = G.H / G.R;
        G.br = Math.min(G.cw, G.ch) * .26;
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

  // ── Permission gyroscope iOS ──────────────────────────────────────────────
  async function requestGyroIOS() {
    try {
      const res = await DeviceOrientationEvent.requestPermission();
      if (res === 'granted') { gyroOk = true; iosBtn = false; hint = 'gyro'; }
    } catch {}
  }

  // ── Appliquer nouvelle config grille ─────────────────────────────────────
  function applyConfig() {
    rowsInUse = rows;
    colsInUse = cols;
    fitCanvas(rows, cols);
    setTimeout(() => { initLevel(1, null, rows, cols); lvl = 1; showCfg = false; }, 60);
  }

  const hints = {
    gyro:  "📱 Inclinez l'appareil pour diriger la bille",
    mouse: '🖱 Déplacez la souris sur le plateau',
    keys:  '⌨ Utilisez les touches fléchées',
  };
</script>

<!-- ── Markup ───────────────────────────────────────────────────────────── -->
<div class="container">

  <div class="header">
    <span class="level">⬡ Niveau {lvl}</span>
    <button class="cfg-btn" on:click={() => showCfg = !showCfg}>⚙ Grille</button>
  </div>

  {#if showCfg}
    <div class="config">
      <label>Rangs
        <input type="number" min="3" max="16" bind:value={rows} />
      </label>
      <label>Cols
        <input type="number" min="3" max="12" bind:value={cols} />
      </label>
      <button class="apply-btn" on:click={applyConfig}>Appliquer</button>
    </div>
  {/if}

  <div class="board-wrap" bind:this={boardWrap}>
    <canvas bind:this={canvas}></canvas>
    {#if msg}
      <div class="overlay">{msg}</div>
    {/if}
  </div>

  <p class="hint">{hints[hint]}</p>

  {#if iosBtn}
    <button class="gyro-btn" on:click={requestGyroIOS}>
      Activer le gyroscope (iOS)
    </button>
  {/if}

</div>

<!-- ── Styles ──────────────────────────────────────────────────────────── -->
<style>
  :global(*, *::before, *::after) { box-sizing: border-box; margin: 0; padding: 0; }
  :global(html, body) {
    width: 100%; height: 100%;
    background: #130902;
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

  .header {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  .level {
    color: #c49a6c;
    font-size: 15px;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  .cfg-btn {
    background: transparent;
    border: 1px solid #7A4525;
    color: #9B6840;
    font-size: 11px;
    padding: 3px 10px;
    border-radius: 4px;
    cursor: pointer;
    letter-spacing: 1px;
    font-family: inherit;
  }
  .cfg-btn:active { opacity: .7; }

  .config {
    background: #1e0e04;
    border: 1px solid #7A4525;
    border-radius: 6px;
    padding: 10px 16px;
    display: flex;
    gap: 14px;
    align-items: center;
    font-size: 12px;
    color: #c49a6c;
    font-family: inherit;
  }
  .config label { display: flex; align-items: center; gap: 4px; }
  .config input {
    width: 42px;
    background: #2a1505;
    color: #c49a6c;
    border: 1px solid #7A4525;
    border-radius: 3px;
    padding: 2px 4px;
    text-align: center;
    font-family: inherit;
    font-size: 12px;
  }

  .apply-btn {
    background: #9B6840;
    color: #130902;
    border: none;
    border-radius: 4px;
    padding: 4px 12px;
    font-weight: bold;
    cursor: pointer;
    font-family: inherit;
  }
  .apply-btn:active { opacity: .8; }

  .board-wrap {
    position: relative;
    border-radius: 4px;
    /* La box-shadow est mise à jour dynamiquement via JS (effet 3D) */
    box-shadow: 0 8px 40px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.5);
  }

  canvas {
    display: block;
    border-radius: 3px;
    border: 4px solid #5C2E10;
    /* Transition douce pour l'effet de perspective gyroscope */
    transition: transform 0.08s ease-out;
    will-change: transform;
  }

  .overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(10,4,1,.72);
    border-radius: 3px;
    color: #c49a6c;
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 5px;
    text-transform: uppercase;
    text-shadow: 0 0 20px rgba(196,154,108,.6);
    pointer-events: none;
  }

  .hint {
    color: #7A4525;
    font-size: 11px;
    text-align: center;
    letter-spacing: .5px;
  }

  .gyro-btn {
    padding: 10px 22px;
    background: #c49a6c;
    color: #130902;
    border: none;
    border-radius: 5px;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
    font-family: inherit;
    letter-spacing: 1px;
  }
  .gyro-btn:active { opacity: .85; }
</style>
