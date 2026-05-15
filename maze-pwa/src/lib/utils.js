// Petits helpers partagés entre Game.svelte, Canvas.svelte et l'input manager.
// Module pur, aucune dépendance Svelte.

export function formatTime(ms) {
  const s = Math.max(0, ms) / 1000;
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
}

// Angle de l'orientation écran, normalisé dans [0, 360).
export function getDeviceAngle() {
  if (typeof window === 'undefined') return 0;
  const a = (window.screen?.orientation?.angle ?? window.orientation) || 0;
  return ((a % 360) + 360) % 360;
}

// Épaisseur des murs (visuel) en fonction de la taille des cellules.
export function wallThickness(cw, ch) {
  return Math.max(3, Math.min(7, Math.min(cw, ch) * 0.12));
}

// Convertit coords écran (clientX/Y - canvas rect) en coords canvas, en
// tenant compte du « world-lock » CSS qui pivote le canvas en paysage.
export function screenToCanvas(vx, vy, canvasW, canvasH, deviceAngle) {
  const na = ((deviceAngle % 360) + 360) % 360;
  if (na === 90)  return { x: canvasW - vy, y: vx };
  if (na === 270) return { x: vy,           y: canvasH - vx };
  if (na === 180) return { x: canvasW - vx, y: canvasH - vy };
  return { x: vx, y: vy };
}

// Clamp utilitaire (parfois plus lisible que Math.max(min, Math.min(max, v))).
export function clamp(v, min, max) {
  return v < min ? min : v > max ? max : v;
}

// Interpolation linéaire entre deux couleurs hex "#rrggbb".
// t est clampé dans [0, 1]. Renvoie un nouveau "#rrggbb".
// Utilisé pour adoucir le changement de palette néon entre niveaux.
export function lerpHex(a, b, t) {
  t = t < 0 ? 0 : t > 1 ? 1 : t;
  const ar = parseInt(a.slice(1, 3), 16);
  const ag = parseInt(a.slice(3, 5), 16);
  const ab = parseInt(a.slice(5, 7), 16);
  const br = parseInt(b.slice(1, 3), 16);
  const bg = parseInt(b.slice(3, 5), 16);
  const bb = parseInt(b.slice(5, 7), 16);
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bv = Math.round(ab + (bb - ab) * t);
  const hex = (v) => v.toString(16).padStart(2, '0');
  return '#' + hex(r) + hex(g) + hex(bv);
}
