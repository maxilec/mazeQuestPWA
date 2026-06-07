export const N_BALL  = '#ffe040';
export const N_HOLE  = '#00ff80';
export const GYRO_KEY = 'mazeGyroGranted';

// Neon colour palette — changes every 5 levels.
// Lot 9.14 — Palette zen unifiée (8 couleurs) reprise in-game.
export const TRACK_PALETTES = [
  '#00d4ff',  // 1. cyan       levels  1-5  (default)
  '#00d400',  // 2. green      levels  6-10
  '#ffc800',  // 3. gold       levels 11-15
  '#ff3e00',  // 4. red-orange levels 16-20
  '#a70000',  // 5. deep red   levels 21-25
  '#a700ff',  // 6. purple     levels 26-30
  '#0000ca',  // 7. deep blue  levels 31-35
  '#ffffff',  // 8. white      levels 36+
];

export function getTrackColor(lvl) {
  return TRACK_PALETTES[Math.floor((lvl - 1) / 5) % TRACK_PALETTES.length];
}
