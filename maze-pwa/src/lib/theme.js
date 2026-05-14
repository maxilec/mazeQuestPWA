// Visual tokens — palette néon par niveau + tokens dérivés.
// Source unique pour le rendu (Canvas) et l'UI (composants Svelte).

import { TRACK_PALETTES } from './constants.js';

// Re-export sous un nom plus parlant pour les nouveaux usages.
export { TRACK_PALETTES as NEON_PALETTE };

// Couleur d'accent (Zen color) par défaut si rien n'est défini.
export const ZEN_FALLBACK = '#00c8ff';

// Couleur néon principale pour un niveau et un mode donnés.
// En mode Zen, on respecte la couleur choisie par l'utilisateur.
export function getNeonColor(level, mode, zenColor) {
  if (mode === 'zen') return zenColor || ZEN_FALLBACK;
  const i = Math.floor((level - 1) / 5) % TRACK_PALETTES.length;
  return TRACK_PALETTES[i];
}

// Parse "#rrggbb" → "r,g,b" string for use in rgba(…)
function hexToRgb(hex) {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return { r, g, b };
}

// Thème complet pour le niveau courant. Le rendu (render.js) lit
// uniquement ces tokens, jamais la palette en dur.
//
// Plateau (surface du plan de jeu) : slate clair — assez clair pour qu'on
// sente la surface bombée (et pas un fond de void), assez neutre pour ne
// pas lutter avec le néon coloré qui court dans la rainure.
// La rainure est carved DANS le plateau (plus sombre, ombre interne).
export function getTheme(level, mode, zenColor) {
  const neon = getNeonColor(level, mode, zenColor);
  const { r, g, b } = hexToRgb(neon);
  const rgba = (a) => `rgba(${r},${g},${b},${a})`;

  return {
    neon,                                  // couleur principale du niveau
    neonRgba:    rgba,                     // helper pour générer des rgba()
    plateauHi:   '#3a3252',                // côté lumière (haut-gauche)
    plateauMid:  '#241d38',                // ton médian
    plateauLo:   '#120c22',                // côté ombre (bas-droit)
    grooveDeep:  '#04020a',                // fond du sillon (presque noir)
    grooveInner: '#1a0a30',                // accent intérieur du sillon
    highlight:   'rgba(220,250,255,0.92)', // bloom central blanc
    edgeLit:     'rgba(255,255,255,0.18)', // liseré clair (lumière en haut-g.)
    edgeShadow:  'rgba(0,0,5,0.75)',       // liseré sombre (ombre en bas-d.)
    ball:        '#ffe040',                // bille
    hole:        '#00ff80',                // sortie
  };
}
