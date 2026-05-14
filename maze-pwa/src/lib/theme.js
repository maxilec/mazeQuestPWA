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
// Le plateau est une surface **crème / beige** éclairée par le haut-gauche
// (cf. référence visuelle). Les rainures sont des **canaux gris-slate**
// creusés dedans. Le néon n'est plus un large glow dominant mais un
// **trait fin** au centre du canal — il colore le niveau sans étouffer
// la lisibilité de la surface du plateau.
export function getTheme(level, mode, zenColor) {
  const neon = getNeonColor(level, mode, zenColor);
  const { r, g, b } = hexToRgb(neon);
  const rgba = (a) => `rgba(${r},${g},${b},${a})`;

  return {
    neon,                                  // couleur principale du niveau
    neonRgba:    rgba,                     // helper pour générer des rgba()
    // Plateau (surface crème, éclairée du haut-gauche)
    plateauHi:   '#ecdbb6',                // côté lumière (lit cream)
    plateauMid:  '#c8b48a',                // ton médian (warm beige)
    plateauLo:   '#7a6850',                // côté ombre (shadowed)
    // Rainure (canal gris-slate creusé dans le plateau)
    grooveDeep:  '#393d46',                // sol du canal
    grooveInner: '#2a2c34',                // accent intérieur (plus sombre)
    // Bevel (transition plateau ↔ rainure)
    edgeLit:     'rgba(255,245,215,0.75)', // liseré crème sur le bord lit
    edgeShadow:  'rgba(15,18,25,0.70)',    // ombre portée côté sombre
    // Accents
    highlight:   'rgba(220,250,255,0.55)', // bloom central blanc (discret)
    ball:        '#c08050',                // bille bronze/cuivre (réf)
    hole:        '#00ff80',                // sortie
  };
}
