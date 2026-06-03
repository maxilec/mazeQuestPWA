// Lot 8.10 v6 — Chanfrein sélectif sur arêtes fermées (rayon de cylindre).
//
// Le slider gallery passe :
//   bevelSize      = L  (positive, du slider chanfrein %)
//   bevelThickness = L  (45° lock, ignoré ici)
//
// Approche :
//   1. Tile = extrusion DROITE de la shape de piste (pas de bevel)
//      → murs verticaux pile à l'outline, top à z=pathH, base à z=0.
//   2. Pour chaque arête FERMÉE (= ne touche pas la cell boundary)
//      du contour discrétisé, soustraire un wedge triangulaire qui
//      mange le coin supérieur entre paroi et top à 45°.
//   3. Les arêtes OUVERTES (jonctions cell-boundary pour les tiles
//      adjacentes) ne sont PAS chanfreinées → ponts vifs préservés.
//
// Cross-section du wedge (perpendiculaire à l'arête) :
//        V1 ─── V2          ← z = pathH + ε
//        │   ╱
//        │  ╱  (chanfrein passe par outline+L*n et outline)
//        │ ╱
//        V3                  ← z = pathH - L - ε
//   (outline−ε)*n
// V1 et V3 sont décalés de ε vers l'extérieur du polygone, V2 est à
// L+ε vers l'intérieur. Le wedge contient strictement le volume à
// retirer ; sa face hypothénuse devient la face chanfrein du tile
// après SUBTRACT.

import {
  BufferGeometry, ExtrudeGeometry, Float32BufferAttribute,
} from 'three';
import { Brush, Evaluator, SUBTRACTION } from 'three-bvh-csg';
import { applyVertexAO } from './tile-geometry.js';

const evaluator = new Evaluator();
evaluator.attributes = ['position', 'uv', 'normal'];
evaluator.useGroups = false;

const EPS = 0.05;             // anti-coplanarité + slight wedge oversize
const CURVE_DIVISIONS = 24;   // matche curveSegments d'ExtrudeGeometry
const BOUNDARY_EPS = 1e-3;    // tolérance pour test cell boundary

/** Vérifie qu'une BufferGeometry n'a pas de positions NaN/Infinity. */
function isGeometryFinite(geo) {
  const arr = geo.attributes.position.array;
  for (let i = 0; i < arr.length; i++) {
    if (!Number.isFinite(arr[i])) return false;
  }
  return true;
}

/** Arête sur la cell boundary (= "jonction" vers tile adjacente) ? */
function isEdgeOnCellBoundary(p1, p2, cw, ch) {
  const hw = cw / 2, hh = ch / 2;
  return (
    (Math.abs(p1.x - hw) < BOUNDARY_EPS && Math.abs(p2.x - hw) < BOUNDARY_EPS) ||
    (Math.abs(p1.x + hw) < BOUNDARY_EPS && Math.abs(p2.x + hw) < BOUNDARY_EPS) ||
    (Math.abs(p1.y - hh) < BOUNDARY_EPS && Math.abs(p2.y - hh) < BOUNDARY_EPS) ||
    (Math.abs(p1.y + hh) < BOUNDARY_EPS && Math.abs(p2.y + hh) < BOUNDARY_EPS)
  );
}

/** Trouve les runs d'arêtes fermées consécutives autour du contour. */
function findClosedSegments(points, cw, ch) {
  const n = points.length;
  const edgeOpen = new Array(n);
  for (let i = 0; i < n; i++) {
    edgeOpen[i] = isEdgeOnCellBoundary(points[i], points[(i + 1) % n], cw, ch);
  }

  // Toutes fermées → loop unique
  if (!edgeOpen.includes(true)) {
    return [{
      vertexIndices: Array.from({ length: n }, (_, i) => i),
      isLoop: true,
    }];
  }

  // Démarre après une arête ouverte pour gérer le wraparound
  const firstOpen = edgeOpen.indexOf(true);
  const segments = [];
  let inRun = false;
  let runVerts = null;

  for (let k = 0; k <= n; k++) {
    const idx = (firstOpen + k) % n;
    const open = (k === n) ? true : edgeOpen[idx];

    if (open) {
      if (inRun) {
        segments.push({ vertexIndices: runVerts, isLoop: false });
        inRun = false;
        runVerts = null;
      }
    } else {
      if (!inRun) {
        inRun = true;
        runVerts = [idx];
      }
      runVerts.push((idx + 1) % n);
    }
  }

  return segments;
}

/** Direction normalisée de a vers b. */
function edgeDir(a, b) {
  const dx = b.x - a.x, dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  return { x: dx / len, y: dy / len };
}

/** Build le swept chamfer mask pour un segment fermé. */
function buildSweptChamferMask(points, segment, L, pathH) {
  const vIndices = segment.vertexIndices;
  const isLoop = segment.isLoop;
  const M = vIndices.length;
  if (M < 2) return null;

  const positions = [];
  const indices = [];

  // 1. Cross-section (V1, V2, V3) pour chaque sommet du segment
  for (let k = 0; k < M; k++) {
    const p = points[vIndices[k]];

    let dPrev = null, dNext = null;
    if (isLoop) {
      dPrev = edgeDir(points[vIndices[(k - 1 + M) % M]], p);
      dNext = edgeDir(p, points[vIndices[(k + 1) % M]]);
    } else {
      if (k > 0) dPrev = edgeDir(points[vIndices[k - 1]], p);
      if (k < M - 1) dNext = edgeDir(p, points[vIndices[k + 1]]);
    }

    // Normales inward (CCW polygon : rotation 90° CCW de la direction)
    const nPrev = dPrev ? { x: -dPrev.y, y: dPrev.x } : null;
    const nNext = dNext ? { x: -dNext.y, y: dNext.x } : null;

    let uIn, perp;
    if (nPrev && nNext) {
      // Bisector inset avec distance perpendiculaire L exacte
      const dot = nPrev.x * nNext.x + nPrev.y * nNext.y;
      const sumX = nPrev.x + nNext.x;
      const sumY = nPrev.y + nNext.y;
      const kScale = L / (1 + dot);
      perp = { x: kScale * sumX, y: kScale * sumY };
      const bisLen = Math.hypot(sumX, sumY) || 1;
      uIn = { x: sumX / bisLen, y: sumY / bisLen };
    } else if (nPrev) {
      uIn = nPrev;
      perp = { x: L * nPrev.x, y: L * nPrev.y };
    } else if (nNext) {
      uIn = nNext;
      perp = { x: L * nNext.x, y: L * nNext.y };
    } else {
      uIn = { x: 1, y: 0 };
      perp = { x: 0, y: 0 };
    }

    // V1 : coin outer-top (légèrement outside outline, légèrement au-dessus pathH)
    positions.push(
      p.x - EPS * uIn.x,
      p.y - EPS * uIn.y,
      pathH + EPS,
    );
    // V2 : inset top, étendu de ε le long du bisector
    positions.push(
      p.x + perp.x + EPS * uIn.x,
      p.y + perp.y + EPS * uIn.y,
      pathH + EPS,
    );
    // V3 : coin outer-low (légèrement outside, légèrement en dessous pathH-L)
    positions.push(
      p.x - EPS * uIn.x,
      p.y - EPS * uIn.y,
      pathH - L - EPS,
    );
  }

  // 2. Faces reliant cross-sections consécutives
  const ringPairs = [];
  if (isLoop) {
    for (let k = 0; k < M; k++) ringPairs.push([k, (k + 1) % M]);
  } else {
    for (let k = 0; k < M - 1; k++) ringPairs.push([k, k + 1]);
  }

  const vIdx = (k, j) => k * 3 + j;

  for (const [a, b] of ringPairs) {
    // Top quad (z=pathH+ε, normale +Z) : V1_a, V1_b, V2_b, V2_a
    indices.push(vIdx(a, 0), vIdx(b, 0), vIdx(b, 1));
    indices.push(vIdx(a, 0), vIdx(b, 1), vIdx(a, 1));

    // Outer quad (à outline-ε, normale -inward) : V1_a, V3_a, V3_b, V1_b
    indices.push(vIdx(a, 0), vIdx(a, 2), vIdx(b, 2));
    indices.push(vIdx(a, 0), vIdx(b, 2), vIdx(b, 0));

    // Chamfer quad (hypothénuse 45°, normale +inward+downward dans le sens wedge)
    // : V2_a, V2_b, V3_b, V3_a
    indices.push(vIdx(a, 1), vIdx(b, 1), vIdx(b, 2));
    indices.push(vIdx(a, 1), vIdx(b, 2), vIdx(a, 2));
  }

  // 3. End caps pour les segments non-loop
  if (!isLoop) {
    // Start cap (k=0) : winding V1, V2, V3 → normale -segment_direction
    indices.push(vIdx(0, 0), vIdx(0, 1), vIdx(0, 2));
    // End cap (k=M-1) : winding V1, V3, V2 → normale +segment_direction
    indices.push(vIdx(M - 1, 0), vIdx(M - 1, 2), vIdx(M - 1, 1));
  }

  const geo = new BufferGeometry();
  geo.setAttribute('position', new Float32BufferAttribute(positions, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

/**
 * Build la geometry chanfreinée d'une tile.
 *
 * @param {object} opts
 * @param {(pathW, cw, ch, bs) => Shape} opts.buildShape
 * @param {number} opts.pathW
 * @param {number} opts.cw
 * @param {number} opts.ch
 * @param {number} opts.pathH
 * @param {number} opts.bevelSize  - L positive (slider chanfrein %)
 * @param {number} opts.bevelThickness  - ignoré (45° lock dans gallery)
 * @param {number} opts.bevelSegments  - ignoré en v6 (chanfrein plat)
 * @returns {BufferGeometry}
 */
export function buildClippedTileGeometry({
  buildShape, pathW, cw, ch, pathH,
  bevelSize, bevelThickness, bevelSegments,
}) {
  const L = bevelSize;

  // 1. Tile base : extrusion straight, pas de bevel, pas d'expand.
  //    buildShape(.., bs=0) → expandBoundary neutre, outline = pathW exact.
  const shape = buildShape(pathW, cw, ch, 0);
  const tileGeo = new ExtrudeGeometry(shape, {
    depth: pathH,
    bevelEnabled: false,
    steps: 1,
    curveSegments: CURVE_DIVISIONS,
  });

  if (L === 0) {
    applyVertexAO(tileGeo, 0);
    return tileGeo;
  }

  // 2. Discrétiser l'outline (matche le sampling d'ExtrudeGeometry).
  const points2D = shape.getPoints(CURVE_DIVISIONS);
  const points = points2D.map((p) => ({ x: p.x, y: p.y }));
  // Strip trailing duplicate (closePath ajoute parfois le premier sommet en fin).
  if (points.length > 1) {
    const last = points[points.length - 1];
    const first = points[0];
    if (Math.abs(last.x - first.x) < 1e-6 && Math.abs(last.y - first.y) < 1e-6) {
      points.pop();
    }
  }

  // 3. Trouver les segments fermés.
  const segments = findClosedSegments(points, cw, ch);

  // 4. CSG SUBTRACT séquentiel de chaque wedge, avec guards + diagnostic.
  //    Try/catch englobant : si TOUT le pipeline casse, on tombe sur le
  //    fallback (return tileGeo straight) plus bas — l'app continue.
  let resultBrush = new Brush(tileGeo);
  resultBrush.updateMatrixWorld();
  let segIdx = 0;

  try {
    for (const segment of segments) {
      const maskGeo = buildSweptChamferMask(points, segment, L, pathH);
      if (!maskGeo) { segIdx++; continue; }

      if (!isGeometryFinite(maskGeo)) {
        console.warn('[tile-factory] Skip wedge with non-finite positions', {
          segIdx, L, pathH, M: segment.vertexIndices.length, isLoop: segment.isLoop,
        });
        maskGeo.dispose();
        segIdx++;
        continue;
      }

      try {
        const maskBrush = new Brush(maskGeo);
        maskBrush.updateMatrixWorld();
        const previousGeo = resultBrush.geometry;
        resultBrush = evaluator.evaluate(resultBrush, maskBrush, SUBTRACTION);
        if (previousGeo !== tileGeo && previousGeo !== resultBrush.geometry) {
          previousGeo.dispose();
        }
      } catch (err) {
        console.error('[tile-factory] CSG SUBTRACT failed', err, {
          segIdx, L, pathH, M: segment.vertexIndices.length, isLoop: segment.isLoop,
        });
        // Continue avec resultBrush actuel (sans cette wedge appliquée)
      } finally {
        maskGeo.dispose();
      }
      segIdx++;
    }
  } catch (err) {
    console.error('[tile-factory] Pipeline chanfrein crashé, fallback straight tile', err);
    // Fallback : ignore le résultat partiel et renvoie le tile straight
    applyVertexAO(tileGeo, 0);
    return tileGeo;
  }

  const finalGeo = resultBrush.geometry;

  // 5. Vertex AO.
  applyVertexAO(finalGeo, L);

  if (finalGeo !== tileGeo) tileGeo.dispose();

  return finalGeo;
}
