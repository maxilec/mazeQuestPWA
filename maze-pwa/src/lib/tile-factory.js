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
  BufferGeometry, BoxGeometry, ExtrudeGeometry, Float32BufferAttribute,
  Shape, Path,
} from 'three';
import { Brush, Evaluator, SUBTRACTION, ADDITION, INTERSECTION } from 'three-bvh-csg';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { applyVertexAO } from './tile-geometry.js';
import { pushDebug, formatArg } from './debug-log.js';

const evaluator = new Evaluator();
// 'uv' retiré : le mask construit manuellement n'a pas d'UVs, three-bvh-csg
// throw "Attribute uv not available on geometry". On n'utilise pas les UVs
// (vertex AO via colors uniquement) → sans intérêt de les carry over.
evaluator.attributes = ['position', 'normal'];
evaluator.useGroups = false;

const EPS = 0.05;             // anti-coplanarité + slight wedge oversize
const CURVE_DIVISIONS = 24;   // matche curveSegments d'ExtrudeGeometry
const BOUNDARY_EPS = 1e-3;    // tolérance pour test cell boundary

function logFactory(level, msg, details) {
  const detailsStr = details === undefined ? '' : ' ' + formatArg(details);
  pushDebug(level, msg + detailsStr);
  // Garde aussi console pour debug desktop
  // eslint-disable-next-line no-console
  console[level](`[tile-factory] ${msg}`, details);
}

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

/**
 * Build le swept chamfer mask pour un segment fermé.
 *
 * Pour N=1 le chanfrein est plat 45° (look "tampon usiné").
 * Pour N>1 le chanfrein est un arc quart-de-cercle discrétisé en N
 * facettes → look "soft clay" avec dégradé de lumière lisse.
 *
 * Vertices par cross-section : V1 (coin outer-top) + N+1 arc points
 * (arc_0 = outer-low = V3, ..., arc_N = inset-top = V2). Total N+2.
 */
function buildSweptChamferMask(points, segment, L, pathH, segCount) {
  const vIndices = segment.vertexIndices;
  const isLoop = segment.isLoop;
  const M = vIndices.length;
  if (M < 2) return null;

  const N = Math.max(1, Math.floor(segCount));
  const VERTS_PER_RING = N + 2;
  const IDX_V1 = 0;
  const IDX_ARC0 = 1;       // arc index 0 (= V3 dans le cas plat)
  const IDX_ARCN = N + 1;   // arc index N (= V2 dans le cas plat)

  const positions = [];
  const indices = [];

  // 1. Cross-section pour chaque sommet du segment
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

    // V1 : coin outer-top (outline-ε, pathH+ε)
    positions.push(p.x - EPS * uIn.x, p.y - EPS * uIn.y, pathH + EPS);

    // arc_0 : outer-low (outline-ε, pathH-L-ε)
    positions.push(p.x - EPS * uIn.x, p.y - EPS * uIn.y, pathH - L - EPS);

    // arc_1..arc_{N-1} : points exacts sur l'arc quart-de-cercle
    //   θ_i = i * π/(2N)
    //   xy = p + (1 - cos θ_i) * perp     (perp = L perpendiculaire)
    //   z  = (pathH - L) + L * sin θ_i
    for (let i = 1; i < N; i++) {
      const theta = (i / N) * Math.PI * 0.5;
      const insetFrac = 1 - Math.cos(theta);
      const insetZ = L * Math.sin(theta);
      positions.push(
        p.x + insetFrac * perp.x,
        p.y + insetFrac * perp.y,
        pathH - L + insetZ,
      );
    }

    // arc_N : inset top étendu (outline + (L+ε)*uIn, pathH+ε)
    positions.push(
      p.x + perp.x + EPS * uIn.x,
      p.y + perp.y + EPS * uIn.y,
      pathH + EPS,
    );
  }

  // 2. Faces reliant cross-sections consécutives
  const ringPairs = [];
  if (isLoop) {
    for (let k = 0; k < M; k++) ringPairs.push([k, (k + 1) % M]);
  } else {
    for (let k = 0; k < M - 1; k++) ringPairs.push([k, k + 1]);
  }

  const vIdx = (k, j) => k * VERTS_PER_RING + j;

  for (const [a, b] of ringPairs) {
    // TOP face (z=pathH+ε plane, normale +Z) : V1-arcN band
    indices.push(vIdx(a, IDX_V1),   vIdx(b, IDX_V1),   vIdx(b, IDX_ARCN));
    indices.push(vIdx(a, IDX_V1),   vIdx(b, IDX_ARCN), vIdx(a, IDX_ARCN));

    // OUTER face (outline-ε plane, normale -inward) : V1-arc0 band
    indices.push(vIdx(a, IDX_V1),   vIdx(a, IDX_ARC0), vIdx(b, IDX_ARC0));
    indices.push(vIdx(a, IDX_V1),   vIdx(b, IDX_ARC0), vIdx(b, IDX_V1));

    // ARC face : N quads de arc_i à arc_{i+1}, i ∈ [0, N-1]
    // Winding direct (corrigé v6.4) : a_i → b_{i+1} → b_i pour normales
    // pointant outward depuis le wedge.
    for (let i = 0; i < N; i++) {
      const ai = IDX_ARC0 + i;
      const bi = IDX_ARC0 + i + 1;
      indices.push(vIdx(a, ai), vIdx(b, bi), vIdx(b, ai));
      indices.push(vIdx(a, ai), vIdx(a, bi), vIdx(b, bi));
    }
  }

  // 3. End caps pour segments non-loop : fan de triangles depuis V1
  //    autour de l'arc. Polygon (N+2) sommets → N triangles.
  if (!isLoop) {
    // Start cap (ring 0) : winding inversé (corrigé v6.4) → normale BACKWARD
    for (let i = 0; i < N; i++) {
      indices.push(vIdx(0, IDX_V1),
                   vIdx(0, IDX_ARC0 + i + 1),
                   vIdx(0, IDX_ARC0 + i));
    }
    // End cap (ring M-1) : winding direct (corrigé v6.4) → normale FORWARD
    for (let i = 0; i < N; i++) {
      indices.push(vIdx(M - 1, IDX_V1),
                   vIdx(M - 1, IDX_ARC0 + i),
                   vIdx(M - 1, IDX_ARC0 + i + 1));
    }
  }

  const geo = new BufferGeometry();
  geo.setAttribute('position', new Float32BufferAttribute(positions, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

// ── Lot 10 — Finish portal helpers ─────────────────────────────────
const FINISH_CIRCLE_SEGMENTS = 48;   // résolution des cylindres (hole, perim, ring rail)
const FINISH_EPS = 0.1;              // overshoot anti-coplanarité (= EPS effectif local)

/** Shape circulaire pleine de rayon r. */
function circleShape(radius) {
  const s = new Shape();
  s.absarc(0, 0, radius, 0, Math.PI * 2, false);
  return s;
}

/** Shape annulaire (anneau) : disque outer avec hole inner. */
function annularShape(innerRadius, outerRadius) {
  const s = circleShape(outerRadius);
  const h = new Path();
  h.absarc(0, 0, innerRadius, 0, Math.PI * 2, true);
  s.holes.push(h);
  return s;
}

/**
 * Build la geometry d'un anneau néon pour le rim du trou finish.
 * Extrusion d'une shape annulaire, centrée à z=0, hauteur =
 * railDepth - 2 × neonHeightMargin. À positionner par le caller à
 * z = pathH - railDepth + neonHeightMargin.
 *
 * @param {object} opts
 * @param {number} opts.holeRadius
 * @param {number} opts.railW
 * @param {number} opts.railDepth
 * @param {number} opts.neonW
 * @param {number} opts.neonHeightMargin
 * @returns {BufferGeometry}
 */
export function buildFinishNeonRingGeometry({
  holeRadius, railW, railDepth, neonW, neonHeightMargin,
}) {
  // Néon centré dans la rainure : milieu = holeRadius + railW/2,
  // largeur = neonW. Un micro-margin (0.2) sur le bord interne évite
  // que l'emissive bave dans le trou via rim leakage.
  const RIM_LEAK_MARGIN = 0.2;
  const center  = holeRadius + railW / 2;
  const inner   = Math.max(holeRadius + RIM_LEAK_MARGIN, center - neonW / 2);
  const outer   = center + neonW / 2;
  const height  = Math.max(0.01, railDepth - 2 * neonHeightMargin);

  const shape = annularShape(inner, outer);
  const geo = new ExtrudeGeometry(shape, {
    depth: height,
    bevelEnabled: false,
    steps: 1,
    curveSegments: FINISH_CIRCLE_SEGMENTS,
  });
  return geo;
}

/**
 * Build la geometry complète du néon pour une tile finish :
 *   (straight neon ∖ cylindre R_inner) ∪ ring néon.
 *
 * Le néon droit est clippé à l'intérieur du rayon R_inner (= bord
 * interne du néon anneau) pour qu'il ne traverse plus le trou. Puis
 * unioné avec l'anneau pour ne former qu'un seul mesh continu.
 *
 * @param {object} opts
 * @param {(w, cw, ch, bs) => Shape} opts.buildShape - shape du path
 * @param {number} opts.cw
 * @param {number} opts.ch
 * @param {number} opts.neonW
 * @param {number} opts.railW
 * @param {number} opts.railDepth
 * @param {number} opts.holeRadius
 * @param {number} opts.neonHeightMargin
 * @returns {BufferGeometry}
 */
export function buildFinishNeonGeometry({
  buildShape, cw, ch,
  neonW, railW, railDepth, holeRadius, neonHeightMargin,
}) {
  const RIM_LEAK_MARGIN = 0.2;
  const neonHeight = Math.max(0.01, railDepth - 2 * neonHeightMargin);
  const center  = holeRadius + railW / 2;
  // R_inner = bord interne du néon anneau. Le néon droit est coupé
  // par un cylindre du même rayon → strip ends exactly at ring inner.
  const R_inner = Math.max(holeRadius + RIM_LEAK_MARGIN, center - neonW / 2);

  // 1. Néon droit standard (clamp w ≤ railW pour ne pas dépasser le rail).
  const w = Math.min(neonW, railW);
  const straightShape = buildShape(w, cw, ch, 0);
  const straightGeo = new ExtrudeGeometry(straightShape, {
    depth: neonHeight,
    bevelEnabled: false,
    steps: 1,
    curveSegments: 12,
  });

  // 2. Cylindre de clip (R_inner exact) — traverse en Z avec overshoot
  //    pour éviter coplanarité avec les faces top/bottom du néon droit.
  const clipGeo = new ExtrudeGeometry(circleShape(R_inner), {
    depth: neonHeight + 2 * FINISH_EPS,
    bevelEnabled: false,
    steps: 1,
    curveSegments: FINISH_CIRCLE_SEGMENTS,
  });
  clipGeo.translate(0, 0, -FINISH_EPS);

  // 3. Anneau néon.
  const ringGeo = buildFinishNeonRingGeometry({
    holeRadius, railW, railDepth, neonW, neonHeightMargin,
  });

  // 4. SUBTRACT clip from straight, puis UNION avec ring.
  try {
    let resultBrush = new Brush(straightGeo); resultBrush.updateMatrixWorld();
    const clipBrush = new Brush(clipGeo);     clipBrush.updateMatrixWorld();
    const ringBrush = new Brush(ringGeo);     ringBrush.updateMatrixWorld();

    resultBrush = evaluator.evaluate(resultBrush, clipBrush, SUBTRACTION);
    resultBrush = evaluator.evaluate(resultBrush, ringBrush, ADDITION);

    straightGeo.dispose();
    clipGeo.dispose();
    ringGeo.dispose();
    return resultBrush.geometry;
  } catch (err) {
    logFactory('error', 'Finish neon CSG failed: ' + (err?.message || err));
    // Fallback : retourne au moins l'anneau seul (le néon droit a déjà
    // été disposé en cas de crash CSG → on rebuild un anneau propre).
    straightGeo.dispose();
    clipGeo.dispose();
    return ringGeo;
  }
}

/**
 * Build la geometry chanfreinée d'une tile.
 *
 * @param {object} opts
 * @param {(pathW, cw, ch, bs) => Shape} opts.buildShape
 *   Shape principal de la tile. Si finish=true, c'est une buildFinish*Shape
 *   qui inclut déjà la fusion 2D path + cercle périmètre.
 * @param {(pathW, cw, ch, bs) => Shape} [opts.buildPathShape]
 *   Shape de la piste régulière (sans périm circle). Utilisé pour le
 *   masque rail → la rainure linéaire ne suit que les bras, pas le moyeu.
 *   Défaut: buildShape (rétro-compat finish=false).
 * @param {number} opts.pathW
 * @param {number} opts.cw
 * @param {number} opts.ch
 * @param {number} opts.pathH
 * @param {number} opts.bevelSize  - L positive (slider chanfrein %)
 * @param {number} opts.bevelThickness  - ignoré (45° lock dans gallery)
 * @param {number} opts.bevelSegments  - segments de l'arc soft clay (2 par défaut)
 * @param {boolean} [opts.finish=false]  - tile variant avec trou cylindrique
 * @param {number}  [opts.holeRadius]   - rayon du trou (requis si finish)
 * @returns {BufferGeometry}
 */
export function buildClippedTileGeometry({
  buildShape, buildPathShape, pathW, cw, ch, pathH,
  bevelSize, bevelThickness, bevelSegments,
  railW = 0, railDepth = 0,
  finish = false, holeRadius = 0, perimRadius = 0,
}) {
  const L = bevelSize;
  const railShapeBuilder = buildPathShape || buildShape;

  // 1. Tile base — deux pipelines selon `finish` :
  //
  //  - finish=false : extrusion straight, pas de bevel. La pipeline wedge
  //    plus bas applique le chanfrein soft-clay sur les arêtes fermées.
  //
  //  - finish=true  : la shape (buildFinish*Shape) fusionne déjà piste +
  //    cercle périmètre en 2D, avec fillets aux jonctions et expandBoundary
  //    sur les cell-boundary verts. ExtrudeGeometry applique le NATIVE
  //    BEVEL → soft clay uniforme et continu (pas de seam de jonction
  //    bras↔moyeu). La pipeline wedge est sautée. Un CSG INTERSECT cell
  //    box ensuite clip les parois étendues à la cell exacte → jonctions
  //    droites flush aux tiles adjacentes, ET drop du bottom bevel (z<0).
  const shape = buildShape(pathW, cw, ch, finish ? L : 0);
  let tileGeo = new ExtrudeGeometry(shape, {
    depth: pathH,
    bevelEnabled: finish,
    bevelSize:      finish ? L : 0,
    bevelThickness: finish ? L : 0,   // 45° lock cohérent avec wedge
    bevelOffset: 0,
    bevelSegments: finish ? Math.max(1, bevelSegments | 0) : 0,
    // steps: 4 sur la pipeline wedge → subdivisions horizontales pour
    // shards CSG plus symétriques (cf. Lot 7.3.h). Inutile en native
    // bevel : steps=1 suffit, le bevel a sa propre subdivision.
    steps: finish ? 1 : 4,
    curveSegments: CURVE_DIVISIONS,
  });

  // Early exit : ni chanfrein, ni rail, ni finish → tile straight + AO.
  if (L === 0 && (railW === 0 || railDepth === 0) && !finish) {
    applyVertexAO(tileGeo, 0);
    return tileGeo;
  }

  let resultBrush = new Brush(tileGeo);
  resultBrush.updateMatrixWorld();

  // 2. Pipeline wedge — uniquement quand !finish && L > 0.
  if (!finish && L > 0) {
    const points2D = shape.getPoints(CURVE_DIVISIONS);
    const points = points2D.map((p) => ({ x: p.x, y: p.y }));
    if (points.length > 1) {
      const last = points[points.length - 1];
      const first = points[0];
      if (Math.abs(last.x - first.x) < 1e-6 && Math.abs(last.y - first.y) < 1e-6) {
        points.pop();
      }
    }
    const segments = findClosedSegments(points, cw, ch);
    let segIdx = 0;
    try {
      for (const segment of segments) {
        const maskGeo = buildSweptChamferMask(points, segment, L, pathH, bevelSegments);
        if (!maskGeo) { segIdx++; continue; }

        if (!isGeometryFinite(maskGeo)) {
          logFactory('warn', 'Skip wedge non-finite positions', {
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
          logFactory('error', 'CSG SUBTRACT failed: ' + (err?.message || err), {
            segIdx, L, pathH, M: segment.vertexIndices.length, isLoop: segment.isLoop,
          });
        } finally {
          maskGeo.dispose();
        }
        segIdx++;
      }
    } catch (err) {
      logFactory('error', 'Pipeline crash, fallback straight: ' + (err?.message || err));
      applyVertexAO(tileGeo, 0);
      return tileGeo;
    }
  }

  // 3. Finish — CSG INTERSECT avec une boîte cell pour :
  //    (a) clipper les parois étendues par expandBoundary → walls verticales
  //        à cw/ch exact → jonctions droites flush aux tiles voisines ;
  //    (b) clipper le bottom bevel (z<0) → base plate à z=0.
  //    La boîte couvre Z ∈ [0, pathH + L + ε] pour englober le top bevel.
  if (finish) {
    try {
      const Zmax = pathH + L + FINISH_EPS;
      const cellBox = new BoxGeometry(cw, ch, Zmax);
      cellBox.translate(0, 0, Zmax / 2);
      const cellBrush = new Brush(cellBox); cellBrush.updateMatrixWorld();
      const previousGeo = resultBrush.geometry;
      resultBrush = evaluator.evaluate(resultBrush, cellBrush, INTERSECTION);
      if (previousGeo !== tileGeo && previousGeo !== resultBrush.geometry) {
        previousGeo.dispose();
      }
      cellBox.dispose();
    } catch (err) {
      logFactory('error', 'Finish cell INTERSECT failed: ' + (err?.message || err));
    }
  }

  // 4. Rainure centrale (Lot 8.11) : SUBTRACT d'un masque rail qui suit
  //    la TOPOLOGIE PISTE (jamais finish) → la rainure linéaire ne
  //    pénètre que dans les bras, pas dans le moyeu. La rainure descend
  //    depuis le top de la tile sur railDepth, avec overshoot ε en haut.
  if (railW > 0 && railDepth > 0) {
    const RAIL_OVERSHOOT = 0.1;
    const railShape = railShapeBuilder(railW, cw, ch, 0);
    const railMaskGeo = new ExtrudeGeometry(railShape, {
      depth: railDepth + RAIL_OVERSHOOT,
      bevelEnabled: false,
      steps: 1,
      curveSegments: CURVE_DIVISIONS,
    });
    railMaskGeo.translate(0, 0, pathH - railDepth);

    try {
      const railBrush = new Brush(railMaskGeo);
      railBrush.updateMatrixWorld();
      const previousGeo = resultBrush.geometry;
      resultBrush = evaluator.evaluate(resultBrush, railBrush, SUBTRACTION);
      if (previousGeo !== tileGeo && previousGeo !== resultBrush.geometry) {
        previousGeo.dispose();
      }
    } catch (err) {
      logFactory('error', 'Rail SUBTRACT failed: ' + (err?.message || err));
    } finally {
      railMaskGeo.dispose();
    }
  }

  // 4.ter Lot 10 — Finish : SUBTRACT du trou central + de la rainure
  //       circulaire. L'opération combinée crée naturellement un anneau
  //       de section rectangulaire (railW × railDepth) au top, autour
  //       du trou cylindrique qui traverse toute la tile.
  if (finish && holeRadius > 0) {
    const RAIL_OVERSHOOT = 0.1;

    // a) Trou central : cylindre traversant (z ∈ [-ε, pathH+ε])
    try {
      const holeShape = circleShape(holeRadius);
      const holeGeo = new ExtrudeGeometry(holeShape, {
        depth: pathH + 2 * FINISH_EPS,
        bevelEnabled: false,
        steps: 1,
        curveSegments: FINISH_CIRCLE_SEGMENTS,
      });
      holeGeo.translate(0, 0, -FINISH_EPS);

      const holeBrush = new Brush(holeGeo); holeBrush.updateMatrixWorld();
      const previousGeo = resultBrush.geometry;
      resultBrush = evaluator.evaluate(resultBrush, holeBrush, SUBTRACTION);
      if (previousGeo !== tileGeo && previousGeo !== resultBrush.geometry) {
        previousGeo.dispose();
      }
      holeGeo.dispose();
    } catch (err) {
      logFactory('error', 'Finish hole SUBTRACT failed: ' + (err?.message || err));
    }

    // b) Rainure circulaire : large cylindre peu profond depuis le top
    //    (z ∈ [pathH - railDepth, pathH + ε]). Combiné au trou (a) ça
    //    forme un anneau de largeur railW autour du trou.
    if (railW > 0 && railDepth > 0) {
      try {
        const rimOuterR = holeRadius + railW;
        const rimShape = circleShape(rimOuterR);
        const rimGeo = new ExtrudeGeometry(rimShape, {
          depth: railDepth + RAIL_OVERSHOOT,
          bevelEnabled: false,
          steps: 1,
          curveSegments: FINISH_CIRCLE_SEGMENTS,
        });
        rimGeo.translate(0, 0, pathH - railDepth);

        const rimBrush = new Brush(rimGeo); rimBrush.updateMatrixWorld();
        const previousGeo = resultBrush.geometry;
        resultBrush = evaluator.evaluate(resultBrush, rimBrush, SUBTRACTION);
        if (previousGeo !== tileGeo && previousGeo !== resultBrush.geometry) {
          previousGeo.dispose();
        }
        rimGeo.dispose();
      } catch (err) {
        logFactory('error', 'Finish rim SUBTRACT failed: ' + (err?.message || err));
      }
    }
  }

  let finalGeo = resultBrush.geometry;

  // 5. Smooth normals : three-bvh-csg crée des vertices uniques par
  //    face (non-indexé) → normales toutes plates. Pour retrouver le
  //    look "soft clay" sur les arcs du chanfrein (bevelSegments > 1),
  //    on merge les vertices à position identique puis on recompute
  //    les normales (moyennes des faces adjacentes).
  try {
    // Tolérance 1e-2 (au lieu de 1e-3) pour absorber les
    // micro-imprécisions flottantes de three-bvh-csg aux points
    // d'intersection. Sans ça, des sommets co-localisés à 1e-4 près
    // ne fusionnent pas → normales restent plates par face → bandes
    // visibles. 1e-2 ≈ 0.01 unité sur un cell de 100, invisible.
    const merged = mergeVertices(finalGeo, 1e-2);
    merged.computeVertexNormals();
    if (merged !== finalGeo) finalGeo.dispose();
    finalGeo = merged;
  } catch (err) {
    logFactory('warn', 'mergeVertices/recompute failed: ' + (err?.message || err));
  }

  // 6. Vertex AO.
  applyVertexAO(finalGeo, L);

  if (finalGeo !== tileGeo) tileGeo.dispose();

  return finalGeo;
}
