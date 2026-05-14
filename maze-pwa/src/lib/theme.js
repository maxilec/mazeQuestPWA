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
// Modèle visuel — esthétique « béton & néon glacé » :
//  - SURFACE = fond slate sombre entre les pistes (la « table »).
//  - TRACK   = piste type béton clair, surélevée, ton froid neutre
//    (pas chaude/jaune). Bevel net via lit edge et drop shadow.
//  - NEON    = trait FIN au centre, **cœur blanc-bleuté** ("glacé") avec
//    un GLOW DISCRET dans la couleur du niveau. Lumineux mais sobre.
export function getTheme(level, mode, zenColor) {
  const neon = getNeonColor(level, mode, zenColor);
  const { r, g, b } = hexToRgb(neon);
  const rgba = (a) => `rgba(${r},${g},${b},${a})`;

  return {
    neon,                                  // couleur principale du niveau
    neonRgba:    rgba,                     // helper pour générer des rgba()
    // Surface — fond sombre slate qui remplit le canvas
    surfaceHi:   '#2a2e36',                // côté lumière (top-left)
    surfaceMid:  '#1a1d24',                // ton médian
    surfaceLo:   '#0c0f15',                // côté ombre (bot-right)
    // Track — piste béton clair (tonalité froide, peu saturée)
    trackFloor:  '#d6cebc',                // corps de la piste (concrete beige)
    trackHi:     '#ece5d2',                // crème clair lit (cœur)
    trackLo:     '#928876',                // ombre douce (épaule)
    // Bevel (transition piste / surface)
    edgeLit:     'rgba(255,253,245,0.85)', // liseré clair quasi-blanc
    edgeShadow:  'rgba(5,7,12,0.85)',      // ombre profonde côté sombre
    // Neon glacé — cœur blanc bleuté + glow discret en couleur du niveau
    neonCore:    '#f4f9ff',                // cœur de la ligne (presque blanc)
    highlight:   'rgba(255,255,255,0.95)', // nucleus tiny bright
    ball:        '#c08050',                // bille bronze/cuivre
    hole:        '#88ff66',                // sortie (FINISH)
  };
}
