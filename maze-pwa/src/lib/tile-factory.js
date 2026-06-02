// Lot 8.10 — Factory de géométries clippées (système "ponts" via CSG).
//
// Workflow :
//  1. Génère la géométrie complète (extrude avec bevel "soft clay"
//     comme avant — base flare hors-cellule via expandBoundary)
//  2. Découpe par INTERSECTION 3D avec un cube de la taille EXACTE
//     d'une case (cw × ch × tallEnough)
//  3. Résultat : le bevel survit sur les parois (côtés fermés où la
//     piste ne touche pas la cell boundary), mais aux jonctions
//     (côtés ouverts où la piste sort de la case), la base biseautée
//     est massicotée verticalement à 90° → assemblage seamless
//     entre tuiles adjacentes.
//
// Coût : 5 CSG au mount d'un set de tuiles. three-bvh-csg utilise
// three-mesh-bvh sous le capot → quelques ms par intersection,
// pas de re-calcul runtime nécessaire.

import { BoxGeometry, ExtrudeGeometry } from 'three';
import { Brush, Evaluator, INTERSECTION } from 'three-bvh-csg';
import { applyVertexAO } from './tile-geometry.js';

// Un seul Evaluator partagé : il a un cache interne et bénéficie
// de la réutilisation entre appels successifs.
const evaluator = new Evaluator();
// Carry over position + normal. La couleur (vertex AO) est ré-appliquée
// APRÈS le clip — c'est plus propre que d'interpoler les couleurs aux
// points d'intersection.
evaluator.attributes = ['position', 'normal'];

/**
 * Construit une géométrie de tuile pré-découpée selon la cell box.
 *
 * @param {object} opts
 * @param {(pathW, cw, ch, bs) => Shape} opts.buildShape - builder de la tile
 * @param {number} opts.pathW - largeur de piste
 * @param {number} opts.cw - cell width
 * @param {number} opts.ch - cell height
 * @param {number} opts.pathH - depth d'extrusion
 * @param {number} opts.bevelSize - inset horizontal du bevel
 * @param {number} opts.bevelThickness - hauteur verticale du bevel
 * @param {number} opts.bevelSegments - finesse de la courbe bevel
 * @returns {BufferGeometry} géométrie clippée + AO vertex appliqué
 */
export function buildClippedTileGeometry({
  buildShape, pathW, cw, ch, pathH,
  bevelSize, bevelThickness, bevelSegments,
}) {
  // 1. Geometry complète avec bevel "cushion" (cf. build*Shape +
  //    expandBoundary : la base flare hors-cellule par bevelSize).
  const shape = buildShape(pathW, cw, ch, bevelSize);
  const fullGeo = new ExtrudeGeometry(shape, {
    depth: pathH,
    bevelEnabled: true,
    bevelThickness, bevelSize,
    bevelOffset: 0,
    bevelSegments,
    steps: 1,
    curveSegments: 24,
  });

  // 2. Cube gabarit de la taille EXACTE d'une cellule.
  //    BoxGeometry est centré à l'origine : sizing [cw, ch, z] avec z
  //    suffisamment large pour englober verticalement toute la tile.
  //    La tile occupe z ∈ [0, pathH + bevelThickness] approximativement.
  //    On centre la box à z = pathH/2 pour cadrer la tile.
  const zSpan = (pathH + bevelThickness * 4) * 2;
  const cubeGeo = new BoxGeometry(cw, ch, zSpan);
  cubeGeo.translate(0, 0, pathH / 2);

  // 3. CSG INTERSECTION : ne garde que la matière commune aux deux
  //    volumes → tout ce qui dépasse de la cellule en X/Y est coupé
  //    verticalement à 90°.
  const tileBrush = new Brush(fullGeo);
  const cubeBrush = new Brush(cubeGeo);
  tileBrush.updateMatrixWorld();
  cubeBrush.updateMatrixWorld();
  const result = evaluator.evaluate(tileBrush, cubeBrush, INTERSECTION);
  const clippedGeo = result.geometry;

  // 4. Re-applique l'AO vertex sur la géométrie clippée (les nouveaux
  //    vertices créés aux plans de coupe ont besoin d'être colorés
  //    pour le gradient soft clay sur les parois).
  applyVertexAO(clippedGeo, bevelThickness);

  // Cleanup intermediates.
  fullGeo.dispose();
  cubeGeo.dispose();

  return clippedGeo;
}
