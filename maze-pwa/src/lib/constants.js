export const N_BALL  = '#ffe040';
export const N_HOLE  = '#00ff80';
export const GYRO_KEY = 'mazeGyroGranted';

// Neon colour palette — changes every 5 levels
export const TRACK_PALETTES = [
  '#00c8ff',  // cyan   levels  1-5
  '#ff44cc',  // pink   levels  6-10
  '#44ff99',  // green  levels 11-15
  '#ffaa00',  // amber  levels 16-20
  '#bb44ff',  // violet levels 21+
];

export function getTrackColor(lvl) {
  return TRACK_PALETTES[Math.floor((lvl - 1) / 5) % TRACK_PALETTES.length];
}
