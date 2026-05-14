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

// Theme complet pour le niveau courant (utilisé par render.js et l'UI).
// Le rendu actuel (Lot A) n'exploite que `neon` ; les autres tokens
// servent le futur look « rainure embossée » (Lot B).
export function getTheme(level, mode, zenColor) {
  const neon = getNeonColor(level, mode, zenColor);
  return {
    neon,            // couleur principale du niveau (existant)
    plateau:   '#0a0816',
    grooveBg:  '#1a1422',
    highlight: '#ffffff',
    ball:      '#ffe040',
    hole:      '#00ff80',
  };
}
