import { N_BALL, N_HOLE } from './constants.js';

// ── SVG asset loader ──────────────────────────────────────────────────────────
// Charge les icônes SVG une fois au premier import. Une fois chargées, elles
// sont rastérisées dans un canvas offscreen (taille de référence haute déf).
// Chaque frame, on blit ce bitmap au lieu de re-rasteriser le SVG via drawImage
// — qui coûterait potentiellement une rasterization quand `scale(pulse)`
// fait varier la taille de destination chaque frame.
const SVG_BASE = (typeof import.meta !== 'undefined' && import.meta.env)
  ? `${import.meta.env.BASE_URL || '/'}assets/svg/`
  : '/assets/svg/';

// Tailles de rasterization de référence — assez grandes pour rester nettes
// sur écrans HiDPI au format final visible, et préservent les ratios des
// viewBox SVG (200×200 pour les bonus, 220×260 pour le finish).
const SVG_RASTER_SIZES = {
  '+5s':    { w: 256, h: 256 },
  '+10s':   { w: 256, h: 256 },
  '+30s':   { w: 256, h: 256 },
  'finish': { w: 256, h: 303 },  // 220/260 ≈ 0.846 → 256 / 0.846 ≈ 303
};

const svgImages       = {};   // Image() en cours / chargées
const svgCanvasCache  = {};   // <canvas> offscreen avec le bitmap rasterisé

function rasterizeSvg(key) {
  if (svgCanvasCache[key]) return;
  const img = svgImages[key];
  if (!img || !img.complete || img.naturalWidth === 0) return;
  const size = SVG_RASTER_SIZES[key];
  if (!size || typeof document === 'undefined') return;
  const off = document.createElement('canvas');
  off.width  = size.w;
  off.height = size.h;
  off.getContext('2d').drawImage(img, 0, 0, size.w, size.h);
  svgCanvasCache[key] = off;
}

function loadSvg(key, file) {
  if (svgImages[key]) return;
  const img = new Image();
  img.onload = () => rasterizeSvg(key);
  img.src = SVG_BASE + file;
  svgImages[key] = img;
  // Race condition : l'image peut être déjà en cache HTTP — onload ne refire
  // pas. On retente la rasterization au prochain tick.
  if (img.complete && img.naturalWidth > 0) rasterizeSvg(key);
}

if (typeof window !== 'undefined') {
  loadSvg('+5s',    'bonus-5s.svg');
  loadSvg('+10s',   'bonus-10s.svg');
  loadSvg('+30s',   'bonus-30s.svg');
  loadSvg('finish', 'finish.svg');
}

// Renvoie la source à dessiner : le canvas cache si dispo (rapide), sinon
// l'Image directement (le navigateur rasterise à chaque appel), sinon null.
// Exporté pour que Scene3D puisse encapsuler ces canvases en CanvasTexture.
export function getSvgSource(key) {
  if (svgCanvasCache[key]) return svgCanvasCache[key];
  const img = svgImages[key];
  if (img && img.complete && img.naturalWidth > 0) return img;
  return null;
}

export function svgReady(key) {
  return getSvgSource(key) !== null;
}

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
    surfaceHi: '#2a2e36', surfaceMid: '#1a1d24', surfaceLo: '#0c0f15',
    trackFloor: '#d6cebc', trackHi: '#ece5d2', trackLo: '#928876',
    edgeLit:    'rgba(255,253,245,0.85)',
    edgeShadow: 'rgba(5,7,12,0.85)',
    neonCore:   '#f4f9ff',
    highlight:  'rgba(255,255,255,0.95)',
    ball: '#c08050', hole: '#88ff66',
  };
}

// ── Surface (dark base) ───────────────────────────────────────────────────────
// Remplit le canvas avec le fond sombre — la table sur laquelle reposent
// les pistes. Les pistes (drawTrack) sont dessinées comme des strokes
// surélevés au-dessus de cette surface.
//
// Texture statique pour le rendu 3D (Lot 3 Threlte) — rend uniquement
// les couches statiques (surface + piste + intersections) dans un
// offscreen canvas. Sert de THREE.CanvasTexture appliquée au plateau
// 3D ; donne instantanément le look concrete + icy neon sans réécrire
// les passes en GLSL ni en meshes 3D. Régénérée à chaque initLevel.
export function renderStaticTexture(g) {
  if (typeof document === 'undefined' || !g) return null;
  const off = document.createElement('canvas');
  off.width  = g.W;
  off.height = g.H;
  const ctx  = off.getContext('2d');
  drawBoard(ctx, g, 1);          // surface slate
  drawTrack(ctx, g, 0, 0, 1);    // piste beige + néon (parallax neutralisé)
  return off;
}

// Variant pour le rendu 3D « zen » (Lot 6) : sol beige uniforme + ligne
// néon visible au centre des couloirs. Les murs sont désormais des meshes
// 3D dans Scene3D — plus besoin de fake-bevel sur la track 2D.
export function renderClearTexture(g) {
  if (typeof document === 'undefined' || !g) return null;
  const off = document.createElement('canvas');
  off.width  = g.W;
  off.height = g.H;
  const ctx  = off.getContext('2d');
  const t    = getTheme(g);

  // Lot 6.3 : fond papier crème clair (override theme.trackFloor qui
  // est calibré pour le mode 2D et trop sombre vs le mur brun en 3D).
  ctx.fillStyle = '#f1e9d3';
  ctx.fillRect(0, 0, g.W, g.H);

  drawNeonLineOnly(ctx, g);
  return off;
}

// Extrait des passes 5-7 de drawTrack : la ligne néon glacée seule (sans
// drop shadow, lit edge, ni body beige — ces couches simulaient la
// piste creusée, plus utiles ici puisque la piste est juste le sol plat
// entre les murs 3D).
export function drawNeonLineOnly(ctx, g) {
  const { maze, cw, ch, R, C, trackRatio } = g;
  const t  = getTheme(g);
  const tw = Math.min(cw, ch) * trackRatio;

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
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  // Voile coloré (pass 5 de drawTrack)
  ctx.save();
  ctx.globalAlpha = 0.35;
  ctx.shadowColor = t.neon;
  ctx.shadowBlur  = 6;
  ctx.strokeStyle = t.neonRgba(0.22);
  ctx.lineWidth   = Math.max(2, tw * 0.10);
  ctx.stroke(path);
  ctx.restore();

  // Cœur de ligne (pass 6)
  ctx.save();
  ctx.shadowColor = t.neon;
  ctx.shadowBlur  = 6;
  ctx.strokeStyle = t.neonCore || '#f4f9ff';
  ctx.lineWidth   = 2.0;
  ctx.stroke(path);
  ctx.restore();

  // Nucleus blanc (pass 7)
  ctx.save();
  ctx.globalAlpha = 0.85;
  ctx.shadowColor = '#ffffff';
  ctx.shadowBlur  = 2;
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth   = 0.8;
  ctx.stroke(path);
  ctx.restore();

  ctx.restore();
}

export function drawBoard(ctx, g, ia) {
  const { W, H } = g;
  const t = getTheme(g);

  ctx.save();
  ctx.globalAlpha = ia;
  // Radial gradient — light bias towards upper-left simulates a top-left
  // light source on the slate surface.
  const grad = ctx.createRadialGradient(
    W * 0.28, H * 0.22, Math.min(W, H) * 0.05,
    W * 0.58, H * 0.70, Math.max(W, H) * 0.90
  );
  grad.addColorStop(0,    t.surfaceHi);
  grad.addColorStop(0.55, t.surfaceMid);
  grad.addColorStop(1,    t.surfaceLo);
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

  // 1 — Drop shadow (la piste surélevée projette une ombre sur la surface
  //     vers le bas-droit ; donne la sensation de relief)
  ctx.save();
  ctx.translate(2.5, 3.5);
  ctx.globalAlpha = 0.85 * ia;
  ctx.strokeStyle = t.edgeShadow;
  ctx.lineWidth = tw + 2;
  ctx.stroke(path);
  ctx.restore();

  // 2 — Lit edge (le bord haut-gauche de la piste capte la lumière)
  ctx.save();
  ctx.translate(-1.5, -1.5);
  ctx.globalAlpha = 0.90 * ia;
  ctx.strokeStyle = t.edgeLit;
  ctx.lineWidth = tw + 1.5;
  ctx.stroke(path);
  ctx.restore();

  // 3 — Piste — couche d'épaule légèrement sombre pour adoucir le bord
  ctx.save();
  ctx.globalAlpha = ia;
  ctx.strokeStyle = t.trackLo;
  ctx.lineWidth = tw + 0.5;
  ctx.stroke(path);
  ctx.restore();

  // 4 — Piste — sol beige (corps principal de la piste)
  ctx.save();
  ctx.globalAlpha = ia;
  ctx.strokeStyle = t.trackFloor;
  ctx.lineWidth = tw;
  ctx.stroke(path);
  ctx.restore();

  // 5 — Voile coloré très subtil sur la piste (pose la teinte du niveau)
  ctx.save();
  ctx.globalAlpha = 0.30 * ia;
  ctx.shadowColor = t.neon;
  ctx.shadowBlur  = 5;
  ctx.strokeStyle = t.neonRgba(0.18);
  ctx.lineWidth   = Math.max(2, tw * 0.08);
  ctx.stroke(path);
  ctx.restore();

  // 6 — Cœur de ligne « néon glacé » : trait blanc-bleuté avec un halo
  //     coloré DISCRET (shadowBlur faible, shadowColor = teinte du niveau).
  //     C'est le shadowBlur qui colore le halo, le strokeStyle reste froid.
  ctx.save();
  ctx.globalAlpha = ia;
  ctx.shadowColor = t.neon;
  ctx.shadowBlur  = 5;
  ctx.strokeStyle = t.neonCore || '#f4f9ff';
  ctx.lineWidth   = 1.8;
  ctx.stroke(path);
  ctx.restore();

  // 7 — Tiny bright nucleus (étincelle blanche au centre, très discrète)
  ctx.save();
  ctx.globalAlpha = 0.80 * ia;
  ctx.shadowColor = '#ffffff';
  ctx.shadowBlur  = 2;
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth   = 0.7;
  ctx.stroke(path);
  ctx.restore();

  // 8 — Petits points d'intersection (≥ 3 passages). Discrets — un simple
  // repère blanc-bleuté pour marquer un point de décision.
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      const ce = maze[r][c];
      const open = (!ce.T?1:0) + (!ce.B?1:0) + (!ce.L?1:0) + (!ce.R?1:0);
      if (open < 3) continue;
      const cx = c * cw + cw / 2, cy = r * ch + ch / 2;
      ctx.save();
      ctx.globalAlpha = 0.55 * ia;
      ctx.shadowColor = t.neon;
      ctx.shadowBlur  = 6;
      ctx.fillStyle   = t.neonCore || '#f4f9ff';
      ctx.beginPath(); ctx.arc(cx, cy, tw * 0.07, 0, Math.PI * 2); ctx.fill();
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

// ── Exit vortex (FINISH) — rendu via SVG ─────────────────────────────────────
// finish.svg : viewBox 220×260, centre des anneaux à (110, 110), rayon
// extérieur 80. Le label « FINISH » est cuit dans le SVG sous le portail.
// On counter-rotate le tout pour que les anneaux et le label restent
// orientés correctement à l'écran quelle que soit la rotation du device.
export function drawVortex(ctx, g, ts, ia, canvasRot = 0) {
  const { cw, ch, br, hole } = g;
  const hx = hole.c * cw + cw / 2;
  const hy = hole.r * ch + ch / 2;
  const src = getSvgSource('finish');

  // Pulsation lente du portail
  const pulse = 1 + Math.sin(ts * 0.003) * 0.05;

  if (src) {
    // Rayon visible du portail sur le canvas
    const targetRingR = br * 1.6;
    const scale       = targetRingR / 80;   // 80 = rayon dans le viewBox SVG
    const sw = 220 * scale;
    const sh = 260 * scale;
    // Anchor : on veut que le centre des anneaux (110,110 viewBox) tombe à (0,0)
    const ax = -110 * scale;
    const ay = -110 * scale;

    ctx.save();
    ctx.globalAlpha = ia;
    ctx.translate(hx, hy);
    ctx.rotate(canvasRot);
    ctx.scale(pulse, pulse);
    ctx.drawImage(src, ax, ay, sw, sh);
    ctx.restore();
    return;
  }

  // Fallback : anneau néon simple si le SVG n'est pas encore chargé
  ctx.save();
  ctx.globalAlpha = ia;
  ctx.shadowColor = N_HOLE; ctx.shadowBlur = 18;
  ctx.strokeStyle = N_HOLE; ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.arc(hx, hy, br * 1.4 * pulse, 0, Math.PI * 2); ctx.stroke();
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

// ── Collectibles (+5s / +10s / +30s) — rendus via SVG ────────────────────────
// Les SVG sont chargés en haut du module (svgImages). On les drawImage ici
// counter-rotated pour que le label reste lisible quel que soit l'angle.
const COLLECTIBLE_FALLBACK_COLORS = {
  '+5s':  '#1ad8ff',
  '+10s': '#9b6bff',
  '+30s': '#ff45a8',
};

export function drawCollectibles(ctx, g, ts, ia, canvasRot = 0) {
  const { collectibles, br } = g;
  if (!collectibles || collectibles.length === 0) return;
  const size = br * 2.8;  // taille apparente du SVG (200×200 viewBox)

  for (const col of collectibles) {
    const cx = col.c * g.cw + g.cw / 2;
    const cy = col.r * g.ch + g.ch / 2;
    const src = getSvgSource(col.type);  // canvas cache ou Image, sinon null

    // Phase de disparition (400 ms : grossit légèrement + s'efface)
    if (col.collected) {
      const age = ts - col.collectT;
      if (age > 400) continue;
      const t01   = age / 400;
      const sc    = 1 + t01 * 0.45;
      const alpha = 1 - t01;
      ctx.save();
      ctx.globalAlpha = alpha * ia;
      ctx.translate(cx, cy);
      ctx.rotate(canvasRot);
      ctx.scale(sc, sc);
      if (src) ctx.drawImage(src, -size / 2, -size / 2, size, size);
      ctx.restore();
      continue;
    }

    // Pulsation douce
    const pulse = 1 + Math.sin(ts * 0.004 + col.c + col.r) * 0.06;

    ctx.save();
    ctx.globalAlpha = ia;
    ctx.translate(cx, cy);
    ctx.rotate(canvasRot);
    ctx.scale(pulse, pulse);

    if (src) {
      ctx.drawImage(src, -size / 2, -size / 2, size, size);
    } else {
      // Fallback (SVG pas encore chargé) — disque néon simple
      const color = COLLECTIBLE_FALLBACK_COLORS[col.type] || '#00c8ff';
      ctx.shadowColor = color; ctx.shadowBlur = 14;
      ctx.strokeStyle = color; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(0, 0, br * 0.7, 0, Math.PI * 2); ctx.stroke();
    }
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
