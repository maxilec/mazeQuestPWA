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
// Modèle visuel :
//  - SURFACE = fond sombre (slate) entre les pistes — c'est la « table »
//    qui supporte le labyrinthe ; remplit le canvas (drawBoard).
//  - TRACK   = piste beige clair surélevée sur laquelle la bille roule ;
//    dessinée en strokes (drawTrack). Bordée d'un liseré clair côté
//    lumière (haut-gauche) et d'une ombre projetée côté sombre (bas-droit).
//  - NEON    = trait fin coloré au centre de la piste, dans la palette
//    du niveau (change tous les 5 niveaux, Zen = couleur utilisateur).
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
    // Track — piste beige clair surélevée
    trackFloor:  '#cab48a',                // beige principal (corps de la piste)
    trackHi:     '#ecdbb6',                // crème clair (cœur lit)
    trackLo:     '#7a6850',                // beige sombre (ombre sous-jacente)
    // Bevel (transition piste / surface)
    edgeLit:     'rgba(255,250,225,0.85)', // liseré clair sur le bord lit
    edgeShadow:  'rgba(5,7,12,0.85)',      // ombre projetée côté sombre
    // Accents
    highlight:   'rgba(255,255,255,0.50)', // tiny white bloom (discret)
    ball:        '#c08050',                // bille bronze/cuivre
    hole:        '#00ff80',                // sortie
  };
}
