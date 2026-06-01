// Lot 8 — Builders géométriques des tuiles "Lego" du labyrinthe 3D.
// Extraits de Scene3D.svelte pour permettre la réutilisation par
// TileGallery.svelte (environnement de test des tuiles hors maze).
//
// Toutes les fonctions sont PURES : aucune dépendance Svelte ni au
// game state. Inputs : pathW (largeur piste), cw/ch (cell dims),
// bs (bevel size). Output : Shape three.js prête à être passée à
// ExtrudeGeometry.
//
// 5 build*Shape (orientations canoniques) :
//  - straight : opens +Y et -Y (vertical)
//  - corner   : opens +Y et +X (default TR)
//  - T        : opens T+R+B (default closed L = -X)
//  - cross    : opens 4 côtés
//  - deadEnd  : opens +Y seul

import {
  Shape, Color, CanvasTexture, LinearSRGBColorSpace,
  LinearFilter, MathUtils, Float32BufferAttribute,
} from 'three';

// ── AO color constants (Lot 7.3.h) ─────────────────────────────────
// AO_BASE match PATH_COLOR cream uniforme.
// AO_SHADOW : taupe chaud (~35% darker) appliqué aux parois latérales.
export const AO_BASE   = new Color(0xf1e9d9);
export const AO_SHADOW = new Color(0x9a7e54);

// ── Tunables géométriques (Lot 8.8 / 8.9) ──────────────────────────
// Source unique partagée par Scene3D (jeu) et TileGallery (dev).
// Toute évolution validée dans la gallery doit modifier ces valeurs
// → le jeu hérite automatiquement (quand la lib sera utilisée par
// Scene3D pour la formule bevel, cf. Lot 8.8.1).
//
// Bevel : ratios de min(cw, ch) (PAS de pathH). Cela découple
// l'arrondi soft clay de la hauteur d'extrusion → quelle que soit
// la hauteur choisie, la piste garde le MÊME arc latéral.
//
// Valeurs alignées sur le jeu : bevelSize = pathH × 0.12 et
// bevelThickness = pathH × 0.15 à pathH=cell×0.80 donnent
// 0.096 / 0.120 de cell. La gallery reproduit ces valeurs pour que
// le rendu soft clay soit visuellement identique au jeu.
export const BEVEL_SIZE_RATIO      = 0.096;   // = 9.6 pour cell=100
export const BEVEL_THICKNESS_RATIO = 0.120;   // = 12.0 pour cell=100

// Nombre de segments pour la courbe du bevel. Plus haut = plus lisse
// (et plus de vertices). Défaut Scene3D = 5.
export const DEFAULT_BEVEL_SEGMENTS = 5;

// Hauteur d'extrusion par défaut (en proportion de min(cw,ch)).
// Scene3D utilisait 0.80 hardcodé ; même valeur ici pour rétro-compat.
export const DEFAULT_PATH_H_RATIO  = 0.80;

// Helper pour calculer bevel à partir d'une taille de cell uniforme.
// cellSize = min(cw, ch) typiquement.
export function bevelForCell(cellSize) {
  return {
    bevelSize:      cellSize * BEVEL_SIZE_RATIO,
    bevelThickness: cellSize * BEVEL_THICKNESS_RATIO,
  };
}

// ── Helpers internes ───────────────────────────────────────────────

// Trick d'expansion pour bevel seamless : avant ExtrudeGeometry,
// on EXPAND les vertices boundary (sur cell boundary) vers l'extérieur
// de bevelSize. ExtrudeGeometry shrink ensuite ce polygone de bevelSize
// au top face → top face boundary atterrit pile sur la cell boundary
// → tiles adjacentes connectent sans gap visible.
export function expandBoundary(pts, cw, ch, bs) {
  const hw = cw / 2, hh = ch / 2;
  const eps = 1e-3;
  return pts.map(p => {
    let dx = 0, dy = 0;
    if (Math.abs(p.x - hw) < eps)  dx = +bs;
    if (Math.abs(p.x + hw) < eps)  dx = -bs;
    if (Math.abs(p.y - hh) < eps)  dy = +bs;
    if (Math.abs(p.y + hh) < eps)  dy = -bs;
    return { x: p.x + dx, y: p.y + dy };
  });
}

// smoothShape sélective : `smoothIndices` = Set des indices de vertices
// à arrondir avec quadraticCurveTo. Les autres restent sharp (lineTo).
export function smoothShape(points, smoothIndices, radius) {
  const shape = new Shape();
  const smooth = new Set(smoothIndices);
  const n = points.length;
  for (let i = 0; i < n; i++) {
    const curr = points[i];
    if (smooth.has(i) && radius > 0) {
      const prev = points[(i - 1 + n) % n];
      const next = points[(i + 1) % n];
      const dxP = prev.x - curr.x, dyP = prev.y - curr.y;
      const dxN = next.x - curr.x, dyN = next.y - curr.y;
      const lenP = Math.hypot(dxP, dyP);
      const lenN = Math.hypot(dxN, dyN);
      if (lenP < 1e-6 || lenN < 1e-6) {
        if (i === 0) shape.moveTo(curr.x, curr.y);
        else         shape.lineTo(curr.x, curr.y);
        continue;
      }
      const r = Math.min(radius, lenP / 2, lenN / 2);
      const sx = curr.x + (dxP / lenP) * r;
      const sy = curr.y + (dyP / lenP) * r;
      const ex = curr.x + (dxN / lenN) * r;
      const ey = curr.y + (dyN / lenN) * r;
      if (i === 0) shape.moveTo(sx, sy);
      else         shape.lineTo(sx, sy);
      shape.quadraticCurveTo(curr.x, curr.y, ex, ey);
    } else {
      if (i === 0) shape.moveTo(curr.x, curr.y);
      else         shape.lineTo(curr.x, curr.y);
    }
  }
  shape.closePath();
  return shape;
}

// ── 5 tile builders ────────────────────────────────────────────────

export function buildStraightShape(pathW, cw, ch, bs) {
  const hp = pathW / 2, hh = ch / 2;
  let pts = [
    {x:  hp, y:  hh}, {x: -hp, y:  hh},
    {x: -hp, y: -hh}, {x:  hp, y: -hh},
  ];
  pts = expandBoundary(pts, cw, ch, bs);
  return smoothShape(pts, [], 0);
}

export function buildCornerShape(pathW, cw, ch, bs) {
  const hp = pathW / 2, hw = cw / 2, hh = ch / 2;
  // Lot 6.30 : suppression du point colinéaire pour éviter z-fighting
  // de normales avec un bevel plus volumineux.
  let pts = [
    {x:  hp, y:  hh},  // 0 boundary
    {x: -hp, y:  hh},  // 1 boundary
    {x: -hp, y: -hp},  // 2 INTERNAL SW outer convex
    {x:  hw, y: -hp},  // 3 boundary
    {x:  hw, y:  hp},  // 4 boundary
    {x:  hp, y:  hp},  // 5 INTERNAL NE elbow concave
  ];
  pts = expandBoundary(pts, cw, ch, bs);
  return smoothShape(pts, [2, 5], pathW * 0.30);
}

export function buildTShape(pathW, cw, ch, bs) {
  const hp = pathW / 2, hw = cw / 2, hh = ch / 2;
  let pts = [
    {x:  hp, y:  hh},  // 0 boundary
    {x: -hp, y:  hh},  // 1 boundary
    {x: -hp, y: -hh},  // 2 boundary (long left edge)
    {x:  hp, y: -hh},  // 3 boundary
    {x:  hp, y: -hp},  // 4 INTERNAL elbow
    {x:  hw, y: -hp},  // 5 boundary
    {x:  hw, y:  hp},  // 6 boundary
    {x:  hp, y:  hp},  // 7 INTERNAL elbow
  ];
  pts = expandBoundary(pts, cw, ch, bs);
  return smoothShape(pts, [4, 7], pathW * 0.30);
}

export function buildCrossShape(pathW, cw, ch, bs) {
  const hp = pathW / 2, hw = cw / 2, hh = ch / 2;
  let pts = [
    {x:  hp, y:  hh},  // 0  boundary
    {x: -hp, y:  hh},  // 1  boundary
    {x: -hp, y:  hp},  // 2  INTERNAL
    {x: -hw, y:  hp},  // 3  boundary
    {x: -hw, y: -hp},  // 4  boundary
    {x: -hp, y: -hp},  // 5  INTERNAL
    {x: -hp, y: -hh},  // 6  boundary
    {x:  hp, y: -hh},  // 7  boundary
    {x:  hp, y: -hp},  // 8  INTERNAL
    {x:  hw, y: -hp},  // 9  boundary
    {x:  hw, y:  hp},  // 10 boundary
    {x:  hp, y:  hp},  // 11 INTERNAL
  ];
  pts = expandBoundary(pts, cw, ch, bs);
  return smoothShape(pts, [2, 5, 8, 11], pathW * 0.30);
}

export function buildDeadEndShape(pathW, cw, ch, bs) {
  const hp = pathW / 2, hh = ch / 2;
  let pts = [
    {x:  hp, y:  hh},  // 0 boundary (open top right)
    {x: -hp, y:  hh},  // 1 boundary (open top left)
    {x: -hp, y: -hp},  // 2 INTERNAL cap left
    {x:  hp, y: -hp},  // 3 INTERNAL cap right
  ];
  pts = expandBoundary(pts, cw, ch, bs);
  return smoothShape(pts, [2, 3], pathW * 0.50);
}

// ── Maze cell → tile type + rotation ───────────────────────────────
// Détermine le type de tuile + la rotation Z pour une cellule du
// maze. Cell shape : { T, R, B, L } où chaque flag = wall (true) ou
// ouverture (false). Retourne null si la cellule n'a aucune ouverture.
// Convention : tile rot=0 = orientation canonique du build*Shape.
// Identique au detectTileType utilisé dans Scene3D pour le rendu
// in-game → permet à TileGallery de produire un assemblage avec les
// mêmes orientations que le jeu.
export function detectTileType(cell) {
  const oT = !cell.T, oR = !cell.R, oB = !cell.B, oL = !cell.L;
  const n  = (oT?1:0) + (oR?1:0) + (oB?1:0) + (oL?1:0);
  if (n === 0) return null;
  if (n === 4) return { type: 'cross', rot: 0 };
  if (n === 1) {
    if (oT) return { type: 'deadEnd', rot: 0 };
    if (oL) return { type: 'deadEnd', rot:  Math.PI / 2 };
    if (oB) return { type: 'deadEnd', rot:  Math.PI };
    if (oR) return { type: 'deadEnd', rot: -Math.PI / 2 };
  }
  if (n === 2) {
    if (oT && oB) return { type: 'straight', rot: 0 };
    if (oL && oR) return { type: 'straight', rot:  Math.PI / 2 };
    if (oT && oR) return { type: 'corner',   rot: 0 };
    if (oR && oB) return { type: 'corner',   rot: -Math.PI / 2 };
    if (oB && oL) return { type: 'corner',   rot:  Math.PI };
    if (oL && oT) return { type: 'corner',   rot:  Math.PI / 2 };
  }
  if (n === 3) {
    if (cell.L) return { type: 'T', rot: 0 };
    if (cell.B) return { type: 'T', rot:  Math.PI / 2 };
    if (cell.R) return { type: 'T', rot:  Math.PI };
    if (cell.T) return { type: 'T', rot: -Math.PI / 2 };
  }
  return null;
}

// ── Vertex AO ──────────────────────────────────────────────────────
// AO procédurale via vertex colors. Plus un vertex est bas en Z
// (proche du sol/intérieur du fossé), plus sa couleur tend vers
// AO_SHADOW. Coût zéro runtime : appliqué une fois à la création
// des geometries.
//
// `bevelThickness` est requis pour identifier la "bevel ring" top
// (vertices avec z dans [zMax - bevelThickness, zMax]) où on applique
// un léger dip sinusoidal (contact shadow soft clay).
export function applyVertexAO(geometry, bevelThickness) {
  const pos = geometry.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  let zMin = Infinity, zMax = -Infinity;
  for (let i = 0; i < pos.count; i++) {
    const z = pos.getZ(i);
    if (z < zMin) zMin = z;
    if (z > zMax) zMax = z;
  }
  const range = (zMax - zMin) || 1;
  const bevelStart = zMax - bevelThickness;
  const tmp = new Color();
  for (let i = 0; i < pos.count; i++) {
    const z = pos.getZ(i);
    let r = (z - zMin) / range;
    r = MathUtils.clamp(r, 0, 1);
    // Lot 7.3.h : range [0..1] → [0.05..1] → parois latérales
    // nettement plus contrastées au contact du sol. Le top des
    // pistes reste à r=1 (pur AO_BASE) car z=zMax → ratio=1.
    r = MathUtils.mapLinear(r, 0, 1, 0.05, 1);
    if (bevelThickness > 0 && z >= bevelStart && z <= zMax) {
      const t = (z - bevelStart) / bevelThickness;
      const dip = 1 - 0.15 * Math.sin(t * Math.PI);
      r *= dip;
    }
    tmp.lerpColors(AO_SHADOW, AO_BASE, r);
    colors[i*3]   = tmp.r;
    colors[i*3+1] = tmp.g;
    colors[i*3+2] = tmp.b;
  }
  geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
}

// ── AO map textures (Lot 7.3 — retiré du runtime en 7.3.g) ────────
// Gardé exporté pour debug / reuse éventuel. Bandes sombres aux
// côtés FERMÉS de chaque tile (où il y aurait des murs adjacents).
export const TILE_CLOSED_SIDES = {
  straight: ['W', 'E'],
  corner:   ['W', 'S'],
  T:        ['W'],
  cross:    [],
  deadEnd:  ['W', 'S', 'E'],
};

function drawAOBand(ctx, side, depth, intensity) {
  const C = 256;
  let g;
  switch (side) {
    case 'W': g = ctx.createLinearGradient(0, 0, depth, 0); break;
    case 'E': g = ctx.createLinearGradient(C, 0, C - depth, 0); break;
    case 'N': g = ctx.createLinearGradient(0, 0, 0, depth); break;
    case 'S': g = ctx.createLinearGradient(0, C, 0, C - depth); break;
  }
  g.addColorStop(0, `rgba(0,0,0,${intensity})`);
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, C, C);
}

export function buildAOTexture(tileType) {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 256, 256);
  const sides = TILE_CLOSED_SIDES[tileType] || [];
  for (const side of sides) {
    drawAOBand(ctx, side, 96, 0.5);
  }
  const tex = new CanvasTexture(c);
  // Lot 7.3.e : aoMap = DATA texture → LinearSRGBColorSpace
  // (pas de conversion sRGB→linéaire qui produisait des taches noisy).
  tex.colorSpace = LinearSRGBColorSpace;
  tex.minFilter = LinearFilter;
  tex.magFilter = LinearFilter;
  tex.needsUpdate = true;
  return tex;
}
