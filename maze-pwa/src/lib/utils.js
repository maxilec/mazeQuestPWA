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
