// Lot 9 — Constantes lighting partagées Scene3D / TileGallery.
//
// Scene3D et TileGallery utilisent ces valeurs comme défauts. La
// gallery override via sliders dev sans toucher au jeu. Une fois
// calibré, le bouton "copier defaults" du panneau lumière génère un
// snippet à coller ici.

// ── Hémisphère ────────────────────────────────────────────────────
export const DEFAULT_HEMI_INTENSITY    = 1.15;
export const DEFAULT_HEMI_SKY_COLOR    = '#ffffff';
export const DEFAULT_HEMI_GROUND_COLOR = '#e8d6bc';

// ── Key directional ───────────────────────────────────────────────
// Position normalisée (-1..1). En jeu, multipliée par G.W, G.H et un
// facteur z pour atteindre l'échelle scène. En gallery, multipliée
// par un facteur d'échelle local (300 par défaut).
export const DEFAULT_KEY_INTENSITY = 1.15;
export const DEFAULT_KEY_COLOR     = '#fff5e0';
export const DEFAULT_KEY_POS_X     = -0.05;
export const DEFAULT_KEY_POS_Y     =  0.05;
export const DEFAULT_KEY_POS_Z     =  1.00;   // dominant +Z (quasi-vertical)

// ── Rim directional ───────────────────────────────────────────────
export const DEFAULT_RIM_INTENSITY = 0.55;
export const DEFAULT_RIM_COLOR     = '#fff5e0';
export const DEFAULT_RIM_POS_X     =  0.00;
export const DEFAULT_RIM_POS_Y     =  1.10;   // +Y (haut du plateau)
export const DEFAULT_RIM_POS_Z     =  0.20;

// ── Shadow setup ──────────────────────────────────────────────────
export const DEFAULT_SHADOW_BIAS         = -0.001;
export const DEFAULT_SHADOW_NORMAL_BIAS  = 2.0;
export const DEFAULT_SHADOW_RADIUS       = 12;
export const DEFAULT_SHADOW_MAP_SIZE     = 2048;

// ── N8AO (post-process Ambient Occlusion temps réel) ──────────────
// 0 intensity = pass désactivé (perf mobile)
export const DEFAULT_AO_RADIUS            = 2.0;
export const DEFAULT_AO_DISTANCE_FALLOFF  = 1.0;
export const DEFAULT_AO_INTENSITY         = 3.0;

// ── Bloom (UnrealBloomPass) ───────────────────────────────────────
// Valeurs initiales = celles tune in-game (subtle, ne fait briller que
// les emissive > 0.85). À monter si on veut un glow plus prononcé sur
// le neon rail.
export const DEFAULT_BLOOM_STRENGTH  = 0.15;
export const DEFAULT_BLOOM_RADIUS    = 0.08;
export const DEFAULT_BLOOM_THRESHOLD = 0.85;
