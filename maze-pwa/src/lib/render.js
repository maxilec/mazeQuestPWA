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

// ── Track (metallic neon) ─────────────────────────────────────────────────────
export function drawTrack(ctx, g, btx, bty, ia) {
  const { maze, cw, ch, R, C, trackRatio, W, H } = g;
  const tw = Math.min(cw, ch) * trackRatio;

  ctx.save();
  ctx.translate(btx * -4, bty * -4);

  // Subtle hex grid in the void
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

  function drawNodes(radius) {
    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        const cx = c * cw + cw / 2, cy = r * ch + ch / 2;
        ctx.beginPath(); ctx.arc(cx, cy, radius, 0, Math.PI * 2); ctx.fill();
      }
    }
  }

  // Parallax side glow (strong offset → depth illusion)
  ctx.save();
  ctx.translate(btx * 20, bty * 20);
  ctx.globalAlpha = 0.22 * ia;
  ctx.shadowColor = '#00c8ff'; ctx.shadowBlur = 18;
  ctx.strokeStyle = 'rgba(0,180,255,0.65)';
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.lineWidth = tw * 1.15;
  buildPath(); ctx.stroke();
  ctx.restore();

  // Drop shadow (parallax)
  ctx.save();
  ctx.translate(btx * 9, bty * 9);
  ctx.globalAlpha = 0.22 * ia;
  ctx.strokeStyle = 'rgba(0,5,40,0.85)';
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.lineWidth = tw;
  buildPath(); ctx.stroke();
  ctx.restore();

  // Chrome border
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

  // Dark metallic surface
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

  // Brushed metal reflection
  ctx.save();
  ctx.globalAlpha = 0.32 * ia;
  ctx.strokeStyle = 'rgba(30,65,130,1)';
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.lineWidth = tw * 0.58;
  buildPath(); ctx.stroke();
  ctx.restore();

  // Wide neon glow
  ctx.save();
  ctx.globalAlpha = ia;
  ctx.shadowColor = '#00c8ff'; ctx.shadowBlur = 18;
  ctx.strokeStyle = 'rgba(0,180,255,0.55)';
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.lineWidth = tw * 0.18;
  buildPath(); ctx.stroke();
  ctx.restore();

  // Bright centre line
  ctx.save();
  ctx.globalAlpha = ia;
  ctx.shadowColor = '#a8e8ff'; ctx.shadowBlur = 5;
  ctx.strokeStyle = 'rgba(205,245,255,0.95)';
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.lineWidth = 1.5;
  buildPath(); ctx.stroke();
  ctx.restore();

  // Bright intersections (≥3 open passages)
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

  // Maze border
  ctx.save();
  ctx.globalAlpha = 0.72 * ia;
  ctx.shadowColor = '#0044ff'; ctx.shadowBlur = 22;
  ctx.strokeStyle = 'rgba(0,55,215,0.80)';
  ctx.lineWidth = 3; ctx.lineCap = 'square';
  ctx.strokeRect(2, 2, W - 4, H - 4);
  ctx.restore();

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
export function drawVortex(ctx, g, ts, ia) {
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

  // FINISH label
  ctx.save();
  ctx.globalAlpha = 0.78 * ia;
  ctx.font = `bold ${Math.min(cw, ch) * 0.22}px "Courier New"`;
  ctx.fillStyle = N_HOLE; ctx.textAlign = 'center';
  ctx.shadowColor = N_HOLE; ctx.shadowBlur = 12;
  ctx.fillText('FINISH', hx, hy + hR + Math.min(cw, ch) * 0.30);
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
export function drawBall(ctx, g, ts, tilt, ia) {
  const { ball, br, phase, fallT } = g;
  const el  = phase === 'falling' ? ts - fallT : 0;
  const sc2 = phase === 'falling' ? Math.max(0, 1 - el / 480) : 1;
  const rbr = br * sc2;
  if (rbr < 1.5) return;

  // Shadow
  ctx.save();
  ctx.globalAlpha = 0.45 * ia * sc2;
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.ellipse(ball.x + tilt.x * br * 0.55, ball.y + tilt.y * br * 0.55 + rbr * 0.45,
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

  // Specular
  ctx.save();
  ctx.globalAlpha = 0.55 * ia;
  const sp = ctx.createRadialGradient(
    ball.x - rbr * 0.36, ball.y - rbr * 0.42, 0,
    ball.x - rbr * 0.36, ball.y - rbr * 0.42, rbr * 0.38);
  sp.addColorStop(0,   'rgba(255,255,255,0.92)');
  sp.addColorStop(0.6, 'rgba(255,255,255,0.15)');
  sp.addColorStop(1,   'rgba(255,255,255,0)');
  ctx.beginPath(); ctx.arc(ball.x - rbr * 0.36, ball.y - rbr * 0.42, rbr * 0.38, 0, Math.PI * 2);
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
export function draw(ctx, g, ts, btx, bty, nebulaCanvas, tilt, joy) {
  const { W, H, introT } = g;
  const ia = Math.min(1, (ts - introT) / 300);

  // Nebula background
  ctx.globalAlpha = 1;
  if (nebulaCanvas) {
    ctx.drawImage(nebulaCanvas, 0, 0, W, H);
  } else {
    ctx.fillStyle = '#03000f';
    ctx.fillRect(0, 0, W, H);
  }

  ctx.globalAlpha = ia;

  drawTrack(ctx, g, btx, bty, ia);
  drawCheckpoints(ctx, g, ia);
  drawVortex(ctx, g, ts, ia);
  drawTrail(ctx, g, ia);
  drawBall(ctx, g, ts, tilt, ia);

  ctx.globalAlpha = 1;
  drawJoystick(ctx, { ...joy, phase: g.phase });
}
