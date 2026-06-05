// Lot 9 — Constantes lighting partagées Scene3D / TileGallery.
//
// Scene3D et TileGallery utilisent ces valeurs comme défauts. La
// gallery override via sliders dev sans toucher au jeu. Une fois
// calibré, le bouton "copier defaults" du panneau lumière génère un
// snippet à coller ici.

// ── Hémisphère ────────────────────────────────────────────────────
export const DEFAULT_HEMI_INTENSITY    = 0.75;
export const DEFAULT_HEMI_SKY_COLOR    = '#93e3fd';
export const DEFAULT_HEMI_GROUND_COLOR = '#ffc5ab';

// ── Key directional ───────────────────────────────────────────────
// Lot 9.7 — couleur fixe (cyan froid). Position normalisée (-1..1).
// En jeu, multipliée par G.W, G.H et un facteur z pour atteindre
// l'échelle scène. En gallery, multipliée par un facteur d'échelle
// local (300 par défaut).
export const DEFAULT_KEY_INTENSITY = 1.8;
export const DEFAULT_KEY_COLOR     = '#fff5e0';
export const DEFAULT_KEY_POS_X     = -0.15;
export const DEFAULT_KEY_POS_Y     =  0.10;
export const DEFAULT_KEY_POS_Z     =  0.15;

// ── Rim directional ───────────────────────────────────────────────
// Lot 9.7 — couleur dérivée du néon (G.theme.neon en jeu, slider neon
// en gallery). Pas de DEFAULT_RIM_COLOR statique.
export const DEFAULT_RIM_INTENSITY = 2.15;
export const DEFAULT_RIM_POS_X     = -0.45;
export const DEFAULT_RIM_POS_Y     =  1.60;
export const DEFAULT_RIM_POS_Z     =  0.00;

// ── Shadow setup ──────────────────────────────────────────────────
export const DEFAULT_SHADOW_BIAS         = 0.0002;
export const DEFAULT_SHADOW_NORMAL_BIAS  = 1.5;
export const DEFAULT_SHADOW_RADIUS       = 20;
export const DEFAULT_SHADOW_MAP_SIZE     = 2048;

// ── N8AO (post-process Ambient Occlusion temps réel) ──────────────
// Lot 9.11 — Réintroduit avec la bonne classe N8AOPass (compatible
// EffectComposer natif) — pas N8AOPostPass qui était pour la lib
// postprocessing. Le pass est désormais instancié au mount et toggle
// via .enabled, donc DEFAULT_AO_INTENSITY peut être > 0 sans risque.
export const DEFAULT_AO_RADIUS            = 2.0;
export const DEFAULT_AO_DISTANCE_FALLOFF  = 1.0;
export const DEFAULT_AO_INTENSITY         = 3.0;

// ── Bloom (UnrealBloomPass) ───────────────────────────────────────
export const DEFAULT_BLOOM_STRENGTH  = 0.30;
export const DEFAULT_BLOOM_RADIUS    = 0.05;
export const DEFAULT_BLOOM_THRESHOLD = 1.00;

// ── Compensation perceptuelle d'intensité néon ────────────────────
// La luminance perçue d'un emissive dépend fortement de sa couleur
// (rouge ≈ 0.21, vert ≈ 0.71, bleu ≈ 0.07 — coefficients Rec.709).
// À intensité numérique égale, un néon rouge paraît bien plus fort
// qu'un néon bleu/cyan. On normalise autour de Y_REF=0.5 (proche du
// cyan néon par défaut) avec sqrt() pour adoucir : cyan reste ~×1.0
// (calibration user préservée), rouge ~×1.5, bleu pur ~×2.6.
const Y_REF = 0.5;
const MIN_Y = 0.05;

function srgbChannelToLinear(c) {
  c /= 255;
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

export function getPerceptualIntensityFactor(hex) {
  if (typeof hex !== 'string') return 1;
  const s = hex.startsWith('#') ? hex.slice(1) : hex;
  if (s.length !== 6) return 1;
  const r = parseInt(s.slice(0, 2), 16);
  const g = parseInt(s.slice(2, 4), 16);
  const b = parseInt(s.slice(4, 6), 16);
  if (!Number.isFinite(r + g + b)) return 1;
  const Y = 0.2126 * srgbChannelToLinear(r)
          + 0.7152 * srgbChannelToLinear(g)
          + 0.0722 * srgbChannelToLinear(b);
  return Math.sqrt(Y_REF / Math.max(Y, MIN_Y));
}
