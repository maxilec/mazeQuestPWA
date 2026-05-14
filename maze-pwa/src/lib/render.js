import { N_BALL, N_HOLE } from './constants.js';

// ── Seeded PRNG (Mulberry32) ──────────────────────────────────────────────────
function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ── Nebula offscreen canvas ───────────────────────────────────────────────────
export function generateNebula(w, h, seed = 42) {
  const off = document.createElement('canvas');
  off.width = w; off.height = h;
  const ctx = off.getContext('2d');
  const rng = mulberry32(seed);

  // Deep space base
  ctx.fillStyle = '#03000f';
  ctx.fillRect(0, 0, w, h);

  // Nebula clouds
  const clouds = [
    { px: 0.18, py: 0.28, pr: 0.72, rgb: [130, 0, 200], a: 0.24 },
    { px: 0.72, py: 0.62, pr: 0.58, rgb: [0, 40, 180],  a: 0.20 },
    { px: 0.48, py: 0.85, pr: 0.50, rgb: [190, 0, 110], a: 0.16 },
    { px: 0.85, py: 0.18, pr: 0.52, rgb: [0, 90, 220],  a: 0.18 },
    { px: 0.30, py: 0.68, pr: 0.42, rgb: [110, 0, 210], a: 0.14 },
    { px: 0.60, py: 0.35, pr: 0.38, rgb: [20, 0, 150],  a: 0.12 },
  ];
  const diag = Math.sqrt(w * w + h * h);
  for (const n of clouds) {
    const nx = n.px * w + (rng() - 0.5) * w * 0.12;
    const ny = n.py * h + (rng() - 0.5) * h * 0.12;
    const nr = diag * n.pr;
    const [r, g, b] = n.rgb;
    const grad = ctx.createRadialGradient(nx, ny, 0, nx, ny, nr);
    grad.addColorStop(0,   `rgba(${r},${g},${b},${n.a})`);
    grad.addColorStop(0.5, `rgba(${r},${g},${b},${(n.a * 0.45).toFixed(3)})`);
    grad.addColorStop(1,   `rgba(${r},${g},${b},0)`);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
  }

  // Aurora streaks (horizontal gradient bands)
  for (let i = 0; i < 3; i++) {
    const ay = rng() * h;
    const ah = (rng() * 0.10 + 0.04) * h;
    const aGrad = ctx.createLinearGradient(0, ay - ah, 0, ay + ah);
    const hue = [280, 200, 320][i];
    aGrad.addColorStop(0,   'rgba(0,0,0,0)');
    aGrad.addColorStop(0.4, `hsla(${hue},90%,55%,${(rng() * 0.08 + 0.04).toFixed(3)})`);
    aGrad.addColorStop(0.6, `hsla(${hue},90%,55%,${(rng() * 0.08 + 0.04).toFixed(3)})`);
    aGrad.addColorStop(1,   'rgba(0,0,0,0)');
    ctx.fillStyle = aGrad;
    ctx.fillRect(0, ay - ah, w, ah * 2);
  }

  // Stars
  for (let i = 0; i < 200; i++) {
    const sx = rng() * w;
    const sy = rng() * h;
    const sr = rng() * 1.5 + 0.2;
    const sa = rng() * 0.65 + 0.15;
    const bright = rng() > 0.88;
    ctx.globalAlpha = sa;
    ctx.fillStyle = bright ? '#ffffff' : `hsl(${190 + rng() * 70}, 70%, 92%)`;
    if (bright) { ctx.shadowColor = '#aacfff'; ctx.shadowBlur = 7; }
    ctx.beginPath(); ctx.arc(sx, sy, sr, 0, Math.PI * 2); ctx.fill();
    if (bright) { ctx.shadowBlur = 0; }
  }
  ctx.globalAlpha = 1;

  return off;
}

// ── Theme helpers ─────────────────────────────────────────────────────────────
// Fallback theme when g.theme is missing (legacy / safety net).
function getTheme(g) {
  if (g.theme) return g.theme;
  const neon = g.trackColor || '#00c8ff';
  const r = parseInt(neon.slice(1, 3), 16);
  const gv = parseInt(neon.slice(3, 5), 16);
  const b = parseInt(neon.slice(5, 7), 16);
  const rgba = (a) => `rgba(${r},${gv},${b},${a})`;
  return {
    neon, neonRgba: rgba,
    plateauHi: '#3a3252', plateauMid: '#241d38', plateauLo: '#120c22',
    grooveDeep: '#04020a', grooveInner: '#1a0a30',
    highlight: 'rgba(220,250,255,0.92)',
    edgeLit:    'rgba(255,255,255,0.18)',
    edgeShadow: 'rgba(0,0,5,0.75)',
    ball: '#ffe040', hole: '#00ff80',
  };
}

// ── Plateau (board surface) ───────────────────────────────────────────────────
// Fills the canvas with the playing board. The groove (drawTrack) is then
// rendered as a recessed channel carved into this surface.
export function drawBoard(ctx, g, ia) {
  const { W, H } = g;
  const t = getTheme(g);

  ctx.save();
  ctx.globalAlpha = ia;
  // Radial gradient — light bias towards upper-left simulates a top-left
  // light source. The plateau reads as a lit physical surface.
  const grad = ctx.createRadialGradient(
    W * 0.28, H * 0.22, Math.min(W, H) * 0.05,
    W * 0.58, H * 0.70, Math.max(W, H) * 0.90
  );
  grad.addColorStop(0,    t.plateauHi);
  grad.addColorStop(0.55, t.plateauMid);
  grad.addColorStop(1,    t.plateauLo);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);
  ctx.restore();
}

// ── Track (carved groove + neon) ──────────────────────────────────────────────
// Path topology unchanged — still drawn as line segments between adjacent open
// cells. The visual style is a recessed channel (dark) with a neon stream
// running through it.
export function drawTrack(ctx, g, btx, bty, ia) {
  const { maze, cw, ch, R, C, trackRatio } = g;
  const t  = getTheme(g);
  const tw = Math.min(cw, ch) * trackRatio;

  // Build the maze path once, reuse across passes (Path2D is widely supported).
  const path = new Path2D();
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      const cx = c * cw + cw / 2, cy = r * ch + ch / 2;
      const ce = maze[r][c];
      if (c < C - 1 && !ce.R) { path.moveTo(cx, cy); path.lineTo(cx + cw, cy); }
      if (r < R - 1 && !ce.B) { path.moveTo(cx, cy); path.lineTo(cx, cy + ch); }
    }
  }

  ctx.save();
  // Subtle parallax — the groove appears to "sit inside" the plateau when
  // the board tilts. CSS handles the actual 3D tilt; this just adds depth cue.
  ctx.translate(btx * -2, bty * -2);
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  // 1 — Drop shadow (carved depression — strong bottom-right shadow)
  ctx.save();
  ctx.translate(2.5, 3.5);
  ctx.globalAlpha = 0.85 * ia;
  ctx.strokeStyle = t.edgeShadow;
  ctx.lineWidth = tw + 2;
  ctx.stroke(path);
  ctx.restore();

  // 2 — Top-left lit edge (bright rim where the plateau is lit)
  ctx.save();
  ctx.translate(-1.5, -1.5);
  ctx.globalAlpha = 0.85 * ia;
  ctx.strokeStyle = t.edgeLit;
  ctx.lineWidth = tw + 1.5;
  ctx.stroke(path);
  ctx.restore();

  // 3 — Groove floor (the dark recessed channel)
  ctx.save();
  ctx.globalAlpha = ia;
  ctx.strokeStyle = t.grooveDeep;
  ctx.lineWidth = tw;
  ctx.stroke(path);
  ctx.restore();

  // 4 — Inner shadow tint (subtle gradient inside the groove)
  ctx.save();
  ctx.globalAlpha = 0.45 * ia;
  ctx.strokeStyle = t.grooveInner;
  ctx.lineWidth = tw * 0.78;
  ctx.stroke(path);
  ctx.restore();

  // 5 — Wide neon halo (the "rivière de lumière" inside the groove)
  ctx.save();
  ctx.globalAlpha = ia;
  ctx.shadowColor = t.neon;
  ctx.shadowBlur  = 22;
  ctx.strokeStyle = t.neonRgba(0.48);
  ctx.lineWidth   = tw * 0.30;
  ctx.stroke(path);
  ctx.restore();

  // 6 — Bright neon core
  ctx.save();
  ctx.globalAlpha = ia;
  ctx.shadowColor = t.neon;
  ctx.shadowBlur  = 10;
  ctx.strokeStyle = t.neonRgba(0.95);
  ctx.lineWidth   = tw * 0.11;
  ctx.stroke(path);
  ctx.restore();

  // 7 — Hot white bloom in the centre of the stream
  ctx.save();
  ctx.globalAlpha = ia;
  ctx.shadowColor = '#ffffff';
  ctx.shadowBlur  = 5;
  ctx.strokeStyle = t.highlight;
  ctx.lineWidth   = 1.5;
  ctx.stroke(path);
  ctx.restore();

  // 8 — Bright intersections (3+ open passages get a glowing junction dot).
  // Helps navigation by marking decision points clearly.
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      const ce = maze[r][c];
      const open = (!ce.T?1:0) + (!ce.B?1:0) + (!ce.L?1:0) + (!ce.R?1:0);
      if (open < 3) continue;
      const cx = c * cw + cw / 2, cy = r * ch + ch / 2;
      ctx.save();
      ctx.globalAlpha = 0.55 * ia;
      ctx.shadowColor = t.neon;
      ctx.shadowBlur  = 18;
      ctx.fillStyle   = t.neonRgba(0.42);
      ctx.beginPath(); ctx.arc(cx, cy, tw * 0.16, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    }
  }

  ctx.restore();
}

// ── Checkpoints ───────────────────────────────────────────────────────────────
export function drawCheckpoints(ctx, g, ia) {
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
    ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.lineCap = 'round';
    ctx.beginPath();
    if (cp.horizontal) {
      ctx.moveTo(cx - hw, cy); ctx.lineTo(cx + hw, cy);
    } else {
      ctx.moveTo(cx, cy - hw); ctx.lineTo(cx, cy + hw);
    }
    ctx.stroke();
    ctx.globalAlpha = (cp.passed ? 0.40 : 0.70) * ia;
    ctx.shadowBlur = 8;
    ctx.fillStyle = color;
    ctx.beginPath(); ctx.arc(cx, cy, tw * 0.10, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }
}

// ── Exit vortex ───────────────────────────────────────────────────────────────
export function drawVortex(ctx, g, ts, ia, canvasRot = 0) {
  const { cw, ch, br, hole } = g;
  const hx = hole.c * cw + cw / 2, hy = hole.r * ch + ch / 2;
  const hR = br * 1.25;
  const vt = ts * 0.001;

  // Outer glow
  const hGlow = ctx.createRadialGradient(hx, hy, hR * 0.3, hx, hy, hR * 3.5);
  hGlow.addColorStop(0, 'rgba(0,255,128,0.20)');
  hGlow.addColorStop(1, 'rgba(0,255,128,0)');
  ctx.globalAlpha = ia;
  ctx.fillStyle = hGlow;
  ctx.beginPath(); ctx.arc(hx, hy, hR * 3.5, 0, Math.PI * 2); ctx.fill();

  // Black void
  ctx.fillStyle = '#000';
  ctx.beginPath(); ctx.arc(hx, hy, hR * 1.05, 0, Math.PI * 2); ctx.fill();

  // Spiral arms (3 layers, 5 arms each)
  for (let layer = 2; layer >= 0; layer--) {
    const r2     = hR * (0.45 + layer * 0.32);
    const speed  = 1.6 - layer * 0.35;
    const alpha  = layer === 2 ? 0.65 : layer === 1 ? 0.45 : 0.30;
    const lw     = layer === 2 ? 1.5  : layer === 1 ? 2.5  : 3.5;
    ctx.save();
    ctx.shadowColor = '#00ff80'; ctx.shadowBlur = 10 + layer * 6;
    ctx.strokeStyle = layer === 2
      ? 'rgba(200,255,215,0.95)'
      : layer === 1 ? 'rgba(0,255,128,0.85)' : 'rgba(0,200,100,0.70)';
    ctx.lineWidth = lw; ctx.lineCap = 'round';
    for (let arm = 0; arm < 5; arm++) {
      const baseAngle = (arm / 5) * Math.PI * 2 + vt * speed;
      ctx.globalAlpha = alpha * ia;
      ctx.beginPath();
      ctx.arc(hx, hy, r2, baseAngle, baseAngle + Math.PI * 0.42);
      ctx.stroke();
    }
    ctx.restore();
  }

  // Neon ring
  ctx.save();
  ctx.globalAlpha = ia;
  ctx.shadowColor = N_HOLE; ctx.shadowBlur = 22;
  ctx.strokeStyle = N_HOLE; ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.arc(hx, hy, hR, 0, Math.PI * 2); ctx.stroke();
  ctx.shadowBlur = 6;
  ctx.strokeStyle = 'rgba(200,255,220,0.90)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.arc(hx, hy, hR * 0.68, 0, Math.PI * 2); ctx.stroke();
  ctx.restore();

  // FINISH label — counter-rotated so it reads upright on screen
  ctx.save();
  ctx.globalAlpha = 0.78 * ia;
  const finTx = hx, finTy = hy + hR + Math.min(cw, ch) * 0.30;
  ctx.translate(finTx, finTy);
  ctx.rotate(canvasRot);
  ctx.font = `bold ${Math.min(cw, ch) * 0.22}px "Courier New"`;
  ctx.fillStyle = N_HOLE; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.shadowColor = N_HOLE; ctx.shadowBlur = 12;
  ctx.fillText('FINISH', 0, 0);
  ctx.restore();
}

// ── Ball trail ────────────────────────────────────────────────────────────────
export function drawTrail(ctx, g, ia) {
  const { trail, br } = g;
  if (!trail || trail.length < 2) return;
  const tLen = trail.length;
  for (let i = 0; i < tLen; i++) {
    const tp   = trail[i];
    const frac = (i + 1) / tLen;
    const r2   = br * (0.12 + frac * 0.52);
    ctx.save();
    ctx.globalAlpha = frac * 0.60 * ia;
    ctx.shadowColor = N_BALL; ctx.shadowBlur = 8 * frac;
    const tg = ctx.createRadialGradient(tp.x, tp.y, 0, tp.x, tp.y, r2);
    tg.addColorStop(0,   'rgba(255,224,64,0.90)');
    tg.addColorStop(0.5, 'rgba(255,140,0,0.45)');
    tg.addColorStop(1,   'rgba(255,60,0,0)');
    ctx.fillStyle = tg;
    ctx.beginPath(); ctx.arc(tp.x, tp.y, r2, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }
}

// ── Ball ──────────────────────────────────────────────────────────────────────
export function drawBall(ctx, g, ts, tilt, ia, canvasRot = 0) {
  const { ball, br, phase, fallT } = g;
  const el  = phase === 'falling' ? ts - fallT : 0;
  const sc2 = phase === 'falling' ? Math.max(0, 1 - el / 480) : 1;
  const rbr = br * sc2;
  if (rbr < 1.5) return;

  // Screen-down offset rotated to canvas space
  const sdx = -Math.sin(canvasRot) * rbr * 0.45;
  const sdy =  Math.cos(canvasRot) * rbr * 0.45;
  // Shadow
  ctx.save();
  ctx.globalAlpha = 0.45 * ia * sc2;
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.ellipse(ball.x + tilt.x * br * 0.55 + sdx, ball.y + tilt.y * br * 0.55 + sdy,
    rbr * 0.85, rbr * 0.22, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Ball body
  ctx.save();
  ctx.shadowColor = N_BALL; ctx.shadowBlur = 22 * sc2;
  const bg = ctx.createRadialGradient(
    ball.x - rbr * 0.34, ball.y - rbr * 0.40, rbr * 0.04,
    ball.x + rbr * 0.06, ball.y + rbr * 0.06, rbr);
  bg.addColorStop(0,   '#ffffff');
  bg.addColorStop(0.18,'#ffffc0');
  bg.addColorStop(0.42,'#ffe040');
  bg.addColorStop(0.68,'#ff9900');
  bg.addColorStop(0.88,'#cc5500');
  bg.addColorStop(1,   '#7a2800');
  ctx.beginPath(); ctx.arc(ball.x, ball.y, rbr, 0, Math.PI * 2);
  ctx.fillStyle = bg; ctx.fill();
  ctx.restore();

  // Specular — rotate highlight to always appear screen-upper-left
  const bhx = -rbr * 0.36, bhy = -rbr * 0.42;
  const rhx = bhx * Math.cos(canvasRot) - bhy * Math.sin(canvasRot);
  const rhy = bhx * Math.sin(canvasRot) + bhy * Math.cos(canvasRot);
  ctx.save();
  ctx.globalAlpha = 0.55 * ia;
  const sp = ctx.createRadialGradient(
    ball.x + rhx, ball.y + rhy, 0,
    ball.x + rhx, ball.y + rhy, rbr * 0.38);
  sp.addColorStop(0,   'rgba(255,255,255,0.92)');
  sp.addColorStop(0.6, 'rgba(255,255,255,0.15)');
  sp.addColorStop(1,   'rgba(255,255,255,0)');
  ctx.beginPath(); ctx.arc(ball.x + rhx, ball.y + rhy, rbr * 0.38, 0, Math.PI * 2);
  ctx.fillStyle = sp; ctx.fill();
  ctx.restore();
}

// ── Joystick overlay ──────────────────────────────────────────────────────────
export function drawJoystick(ctx, joy) {
  const { active, cx, cy, dx, dy, radius, mode, phase } = joy;
  if (mode !== 'joystick' || !active || phase !== 'play') return;
  const ratio = Math.min(Math.hypot(dx, dy) / radius, 1);
  ctx.save();
  ctx.globalAlpha = 0.22 + ratio * 0.18;
  ctx.strokeStyle = '#00c8ff'; ctx.lineWidth = 2.5;
  ctx.shadowColor = '#00c8ff'; ctx.shadowBlur = 14;
  ctx.beginPath(); ctx.arc(cx, cy, radius, 0, Math.PI * 2); ctx.stroke();
  ctx.globalAlpha = 0.05 + ratio * 0.07;
  ctx.fillStyle = '#00c8ff';
  ctx.beginPath(); ctx.arc(cx, cy, radius, 0, Math.PI * 2); ctx.fill();
  ctx.globalAlpha = 0.65 + ratio * 0.35;
  ctx.shadowBlur = 20; ctx.fillStyle = '#00c8ff';
  ctx.beginPath(); ctx.arc(cx + dx, cy + dy, 18, 0, Math.PI * 2); ctx.fill();
  ctx.globalAlpha = 0.40; ctx.fillStyle = '#fff'; ctx.shadowBlur = 0;
  ctx.beginPath(); ctx.arc(cx + dx - 5, cy + dy - 5, 5, 0, Math.PI * 2); ctx.fill();
  ctx.restore();
}

// ── Main draw ─────────────────────────────────────────────────────────────────
export function draw(ctx, g, ts, btx, bty, tilt, joy, canvasRot = 0) {
  const { W, H, introT } = g;
  const ia = Math.min(1, (ts - introT) / 300);

  // Plateau fills the canvas — the nebula remains visible only OUTSIDE the
  // canvas (around the board in the HTML background).
  ctx.globalAlpha = 1;
  ctx.clearRect(0, 0, W, H);

  drawBoard(ctx, g, ia);

  ctx.globalAlpha = ia;
  drawTrack(ctx, g, btx, bty, ia);
  drawCheckpoints(ctx, g, ia);
  drawCollectibles(ctx, g, ts, ia, canvasRot);
  drawVortex(ctx, g, ts, ia, canvasRot);
  drawTrail(ctx, g, ia);
  drawBall(ctx, g, ts, tilt, ia, canvasRot);

  ctx.globalAlpha = 1;
  drawJoystick(ctx, { ...joy, phase: g.phase });
  drawFloatingTexts(ctx, g, ts, canvasRot);
}

// ── Collectibles (+5s / +10s / +30s) ─────────────────────────────────────────
export function drawCollectibles(ctx, g, ts, ia, canvasRot = 0) {
  const { collectibles, cw, ch, br } = g;
  if (!collectibles || collectibles.length === 0) return;
  const r = br * 0.60;
  const COLORS = { '+5s': '#00c8ff', '+10s': '#00ff80', '+30s': '#dd44ff' };

  for (const col of collectibles) {
    const cx = col.c * cw + cw / 2;
    const cy = col.r * ch + ch / 2;
    const color = COLORS[col.type] || '#00c8ff';

    if (col.collected) {
      // Disappear animation (400ms scale-down)
      const age = ts - col.collectT;
      if (age > 400) continue;
      const sc = 1 - age / 400;
      ctx.save();
      ctx.globalAlpha = sc * ia;
      ctx.shadowColor = color; ctx.shadowBlur = 20;
      ctx.strokeStyle = color; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(cx, cy, r * sc * 2.0, 0, Math.PI * 2); ctx.stroke();
      ctx.restore();
      continue;
    }

    // Pulse animation
    const pulse = Math.sin(ts * 0.004 + col.c + col.r) * 0.12 + 0.88;

    ctx.save();
    ctx.globalAlpha = pulse * ia;
    ctx.shadowColor = color; ctx.shadowBlur = 18;

    // Outer ring
    ctx.strokeStyle = color; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(cx, cy, r * 1.35, 0, Math.PI * 2); ctx.stroke();

    // Inner filled circle
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    grad.addColorStop(0,   `${color}cc`);
    grad.addColorStop(0.5, `${color}66`);
    grad.addColorStop(1,   `${color}11`);
    ctx.fillStyle = grad;
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();

    // Label — counter-rotated to read upright on screen
    ctx.save();
    ctx.globalAlpha = ia;
    ctx.translate(cx, cy);
    ctx.rotate(canvasRot);
    ctx.fillStyle = '#fff';
    ctx.shadowColor = color; ctx.shadowBlur = 8;
    ctx.font = `bold ${Math.round(r * 0.9)}px Orbitron, Courier New`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(col.type, 0, 0);
    ctx.restore();

    ctx.restore();
  }
}

// ── Floating texts (+Xs animation) ───────────────────────────────────────────
export function drawFloatingTexts(ctx, g, ts, canvasRot = 0) {
  if (!g.floatingTexts || g.floatingTexts.length === 0) return;
  g.floatingTexts = g.floatingTexts.filter(ft => ts - ft.startT < 1200);
  for (const ft of g.floatingTexts) {
    const age   = (ts - ft.startT) / 1200;
    const alpha = 1 - age;
    // Rise direction tracks world-up (counter-rotate the offset vector)
    const rise  = age * 70;
    const rx = -Math.sin(canvasRot) * rise;
    const ry = -Math.cos(canvasRot) * rise;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.translate(ft.x + rx, ft.y - ry);
    ctx.rotate(canvasRot);
    ctx.fillStyle   = ft.color;
    ctx.shadowColor = ft.color; ctx.shadowBlur = 14;
    ctx.font = `bold 18px Orbitron, Courier New`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(ft.text, 0, 0);
    ctx.restore();
  }
}
