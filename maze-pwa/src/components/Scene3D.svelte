<script>
  // Lot 2–4 — Scène 3D Threlte : plateau texturé, bille, world-lock, tilt,
  // collectibles et finish en sprites billboardés (face caméra).
  //
  // Architecture :
  //   <Canvas> Threlte — contexte WebGL.
  //   <T.Group rotation.z={worldLockZ}> — world-lock (compense rotation device).
  //   <T.Group rotation.x={tiltX} rotation.y={tiltY}> — tilt 3D du plateau.
  //   Dedans : plateau (PlaneGeometry + CanvasTexture), bille (Sphere),
  //   sprites collectibles + sprite finish (faces caméra, labels lisibles).
  //
  // Mapping G (canvas pixels) → 3D (centré origine, Y haut) :
  //   3D.x = G.x - G.W/2
  //   3D.y = G.H/2 - G.y      (Y inversé : canvas y+ = écran bas = 3D Y-)
  //
  // Cadrage : Game.svelte passe `rect` (rect on-screen de .world-rotate)
  // chaque frame ; on l'applique au host pour cadrer la scène sur la zone
  // canvas exactement (HUD intacte autour).
  //
  // `pointer-events: none` côté host — touches vers le canvas 2D dessous
  // (capturé par inputMgr).

  import { onMount, onDestroy } from 'svelte';
  import { Canvas, T }          from '@threlte/core';
  import { InstancedMesh, Instance } from '@threlte/extras';
  import { CanvasTexture, SRGBColorSpace, PCFSoftShadowMap, Shape, Path, ExtrudeGeometry, LinearFilter } from 'three';
  import { getSvgSource, svgReady } from '../lib/render.js';
  import Postprocess            from './Postprocess.svelte';

  export let G            = null;
  export let deviceAngle  = 0;
  export let boardTiltX   = 0;
  export let boardTiltY   = 0;
  export let rect         = null;    // { top, left, width, height } CSS px

  const DEG              = Math.PI / 180;
  const MAX_TILT_DEG     = 12;
  const FOV              = 7;
  // Lot 6 : élévation dynamique de la caméra — top-down au repos,
  // ramp jusqu'à CAM_MAX_ELEV_DEG quand l'input tilt est non nul. Donne
  // un cue 3D pendant le mouvement sans imposer d'angle au repos.
  const CAM_MAX_ELEV_DEG = 12;
  // Lot 6.27 : tilt caméra fixe cavalier — expose la face avant des
  // parois inférieures des tiles. Combiné au FOV réduit (téléobjectif),
  // donne le rendu "iso-tilt soft" de la maquette.
  // Lot 6.27.c : 22→18° + pathH 0.32→0.40
  // Lot 6.27.d : 18→12° + pathH 0.40→0.55
  // Lot 6.27.e : 12→8° + FOV 12→8
  // Lot 6.27.f : 8→12° + FOV 8→6 (téléobjectif encore plus fort
  // compense le tilt remonté → top reste droit, parois bien marquées)
  // Lot 6.27.h : 12→11° (final tune)
  // Lot 6.31 : 11→10°
  // Lot 6.31.b : 10→7° + FOV 6→7 → plateau quasi rectangle parfait
  // Lot 7.1.e : 7→6° (encore plus orthographique)
  const CAM_TILT_DEG     = 6;
  // Précalcul de sin(tilt) pour positionner les Sprites (billboards face
  // caméra) en z assez haut pour que leur bord bas ne plonge pas dans
  // les parois 3D quand pathH est grand.
  const CAM_TILT_SIN     = Math.sin(6 * Math.PI / 180);
  // Lot 6.27.f : anamorphose verticale ×1.10 → étire le maze en Y pour
  // remplir mieux le canvas portrait sans toucher au framing horizontal.
  // Cells deviennent légèrement rectangulaires (10% plus haut que large).
  // Lot 6.27.g : revert à 1.00 — la déformation était visible sur la
  // bille (elliptique au lieu de ronde). On compense par pathH augmenté.
  const WORLD_STRETCH_Y  = 1.00;

  // ── Host positioning (cadrage sur la zone canvas) ──────────────────────
  let host;
  $: if (host && rect) {
    host.style.top    = rect.top    + 'px';
    host.style.left   = rect.left   + 'px';
    host.style.width  = rect.width  + 'px';
    host.style.height = rect.height + 'px';
  }

  // ── Camera Z ───────────────────────────────────────────────────────────
  // visibleH = hauteur visible du maze (post world-lock) dans le repère
  // caméra. En portrait c'est G.H, en landscape G.W (le maze pivote 90°).
  // Lot 6.19 : ajoute cadreGap pour que le cadre néon (déporté) reste
  // dans le frustum caméra.
  $: isLandscape = (deviceAngle === 90 || deviceAngle === 270);
  $: cadreGap    = G ? Math.min(G.cw, G.ch) * 0.15 : 0;
  $: visibleH    = G
      ? (isLandscape ? G.W : G.H) + cadreGap * 2 + 8
      : 660;
  $: cameraDist  = (visibleH / 2) / Math.tan((FOV * DEG) / 2) * 1.15;

  // Lot 6.27 : position caméra cavalier — reculée en -Y (côté
  // spectateur), élevée en +Z, regardant l'origine. Le tilt fixe expose
  // la face avant des parois. Le board tilt input continue d'agir
  // indépendamment sur <T.Group rotation.x/y>.
  $: camY    = -cameraDist * Math.sin(CAM_TILT_DEG * DEG);
  $: camZ    =  cameraDist * Math.cos(CAM_TILT_DEG * DEG);
  // cameraZ utilisé pour le `far` plane (compat avec d'autres calculs).
  $: cameraZ     = cameraDist;

  // Camera ref + lookAt : Three.js ne met pas à jour la rotation de la
  // caméra automatiquement quand position change ; on rappelle lookAt
  // sur chaque changement des coords caméra.
  let cameraRef;
  $: if (cameraRef && Number.isFinite(camY) && Number.isFinite(camZ)) {
    cameraRef.lookAt(0, 0, 0);
  }

  // Lot 6.3 : config shadow par ref pour être SÛR que les bounds de
  // la shadow camera + updateProjectionMatrix sont appliqués (le
  // dotted attrs Threlte ne le fait pas systématiquement).
  let lightRef;
  $: if (lightRef && G) {
    const s = lightRef.shadow;
    // Lot 6.19 : mapSize 1024 → 2048 (shadows plus précises + douces),
    // bias -0.002 → -0.0001 (moins de "peter-panning" sur sol).
    s.mapSize.set(2048, 2048);
    s.camera.left   = -G.W * 0.7;
    s.camera.right  =  G.W * 0.7;
    s.camera.top    =  G.H * 0.7;
    s.camera.bottom = -G.H * 0.7;
    s.camera.near   = 1;
    s.camera.far    = Math.min(G.cw, G.ch) * 18;
    s.camera.updateProjectionMatrix();
    s.bias          = -0.0001;
    s.radius        = 10;
    s.needsUpdate   = true;
  }

  // ── Rotations (signs flipped pour compenser la chiralité Three.js ↔ CSS) ─
  // CSS (Y down) et Three.js (Y up) ont des sens de rotation opposés autour
  // des 3 axes. Sans flip, on obtenait portrait→tilt X inversé, landscape→
  // plateau pivoté 180°. Les signes ci-dessous matchent visuellement le
  // rendu 2D historique.
  $: worldLockZ = +deviceAngle * DEG;
  $: tiltX      = +boardTiltY * MAX_TILT_DEG * DEG;
  $: tiltY      = +boardTiltX * MAX_TILT_DEG * DEG;

  // ── Bille ──────────────────────────────────────────────────────────────
  $: ballX = G ? G.ball.x - G.W / 2 : 0;
  $: ballY = G ? G.H / 2 - G.ball.y : 0;
  $: ballR = G ? G.br : 10;

  // ── Pistes 3D — Lot 6.21 : largeur dynamique selon G.trackRatio (sync 2D).
  // Pour chaque cellule du maze avec ≥1 ouverture, construire un Shape 2D
  // polygonal qui représente la vue top-down de la piste dans cette cellule.
  // ExtrudeGeometry verticale (depth = pathH) avec bevels intégrés + arrondis
  // appliqués via smoothShape sur le polygone.
  // Sol abaissé à -floorDepth pour effet de profondeur dans les fossés.
  $: pathW      = G ? Math.min(G.cw, G.ch) * (G.trackRatio ?? 0.65) : 30;
  $: pathH      = G ? Math.min(G.cw, G.ch) * 0.80 : 15;   // hauteur extrusion
  $: floorDepth = pathH * 0.4;                            // profondeur sol creusé
  // Lot 6.30 : bevel soft clay — coefficients hissés au niveau global
  // (réactifs) pour que pathTop puisse se caler EXACTEMENT au-dessus
  // du top bevel. Sinon les neon/checkpoints/bonus se retrouvent
  // enterrés quand bevelThickness augmente.
  $: bevelSize      = pathH * 0.12;   // inset horizontal du bevel
  $: bevelThickness = pathH * 0.15;   // hauteur verticale du bevel
  // pathTop : z juste au-dessus du top du bevel de la piste (avec marge
  // 0.5). Utilisé pour positionner les neon stripes, dots, checkpoints
  // et sprites. ExtrudeGeometry étend la géométrie de bevelThickness
  // au-dessus de depth=pathH → top réel à pathH + bevelThickness.
  $: pathTop    = pathH + bevelThickness + 0.5;
  $: neonW      = G ? Math.min(G.cw, G.ch) * 0.07 : 3.5;
  const PATH_COLOR  = '#F0D9B8';
  // Lot 7.1.e : couleur du sol plus claire que les tiles (réduit le
  // contraste chasms→cream et harmonise avec le BG #f1e9d9).
  const FLOOR_COLOR = '#F5E2C5';

  // ── Système de tuiles Lego (Lot 6.22) ─────────────────────────────────
  // 5 tile types (straight, corner, T, cross, deadEnd) construits une fois
  // par niveau avec la pathW du niveau courant. Pour chaque cellule du maze,
  // on identifie le type + la rotation et on instancie via InstancedMesh.
  //
  // Discrimination arrondis :
  //   - straight : sharp rectangle, AUCUN arrondi
  //   - corner/T/cross : arrondi UNIQUEMENT sur internal corners (pas sur
  //     les boundary edges qui connectent aux tuiles adjacentes)
  //   - deadEnd : cap arrondi (radius = pathW/2) pour semi-circulaire
  //
  // Bevel "soft clay" sans seams :
  //   Trick d'expansion : avant ExtrudeGeometry, on EXPAND les vertices
  //   boundary (sur cell boundary) vers l'extérieur de bevelSize.
  //   ExtrudeGeometry shrink ensuite ce polygone de bevelSize au top face
  //   → le top face boundary atterrit pile sur la cell boundary
  //   → tiles adjacentes connectent sans gap visible.

  function expandBoundary(pts, cw, ch, bs) {
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
  function smoothShape(points, smoothIndices, radius) {
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

  // 5 build*Shape functions (orientations canoniques) :
  // - straight : opens +Y et -Y (vertical)
  // - corner   : opens +Y et +X (default TR)
  // - T        : opens T+R+B (default closed L = -X)
  // - cross    : opens 4 côtés
  // - deadEnd  : opens +Y seul

  // Lot 6.31 : cadre néon en rounded rectangle frame (un seul Shape
  // avec un trou rectangulaire arrondi pour creuser le centre).
  // W,H = dimensions extérieures, t = épaisseur du frame, r = radius coins.
  function buildFrameShape(W, H, t, r) {
    const ox = W / 2, oy = H / 2;
    const shape = new Shape();
    // Rectangle extérieur arrondi (CCW)
    shape.moveTo(ox - r,  oy);
    shape.lineTo(-ox + r, oy);
    shape.quadraticCurveTo(-ox, oy, -ox, oy - r);
    shape.lineTo(-ox, -oy + r);
    shape.quadraticCurveTo(-ox, -oy, -ox + r, -oy);
    shape.lineTo(ox - r, -oy);
    shape.quadraticCurveTo(ox, -oy, ox, -oy + r);
    shape.lineTo(ox, oy - r);
    shape.quadraticCurveTo(ox, oy, ox - r, oy);
    // Trou intérieur arrondi (CW pour winding opposé = three.js Path)
    const ix = ox - t, iy = oy - t;
    const ir = Math.max(r - t * 0.5, 0.5);
    const hole = new Path();
    hole.moveTo(ix - ir, iy);
    hole.quadraticCurveTo(ix, iy, ix, iy - ir);
    hole.lineTo(ix, -iy + ir);
    hole.quadraticCurveTo(ix, -iy, ix - ir, -iy);
    hole.lineTo(-ix + ir, -iy);
    hole.quadraticCurveTo(-ix, -iy, -ix, -iy + ir);
    hole.lineTo(-ix, iy - ir);
    hole.quadraticCurveTo(-ix, iy, -ix + ir, iy);
    hole.lineTo(ix - ir, iy);
    shape.holes.push(hole);
    return shape;
  }

  function buildStraightShape(pathW, cw, ch, bs) {
    const hp = pathW / 2, hh = ch / 2;
    let pts = [
      {x:  hp, y:  hh}, {x: -hp, y:  hh},
      {x: -hp, y: -hh}, {x:  hp, y: -hh},
    ];
    pts = expandBoundary(pts, cw, ch, bs);
    return smoothShape(pts, [], 0);
  }

  function buildCornerShape(pathW, cw, ch, bs) {
    const hp = pathW / 2, hw = cw / 2, hh = ch / 2;
    // Lot 6.30 : suppression du point colinéaire (anciennement pt 3
    // = (hp, -hp)) qui se trouvait sur la ligne droite reliant
    // (-hp, -hp) → (hw, -hp). Avec un bevel plus volumineux (Lot 6.30)
    // ce vertex superflu amplifiait le risque de z-fighting de
    // normales sur le top de la tuile (Gemini warning §4).
    let pts = [
      {x:  hp, y:  hh},  // 0 boundary
      {x: -hp, y:  hh},  // 1 boundary
      {x: -hp, y: -hp},  // 2 INTERNAL SW outer convex
      {x:  hw, y: -hp},  // 3 boundary (était 4)
      {x:  hw, y:  hp},  // 4 boundary (était 5)
      {x:  hp, y:  hp},  // 5 INTERNAL NE elbow concave (était 6)
    ];
    pts = expandBoundary(pts, cw, ch, bs);
    return smoothShape(pts, [2, 5], pathW * 0.30);
  }

  function buildTShape(pathW, cw, ch, bs) {
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

  function buildCrossShape(pathW, cw, ch, bs) {
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

  function buildDeadEndShape(pathW, cw, ch, bs) {
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

  // Détermine le type de tuile + la rotation Z pour une cellule.
  // Retourne null si openCount === 0 (cellule isolée, skip).
  function detectTileType(cell) {
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
      // closed side (cell.X = 1 means wall, opening on the 3 others)
      if (cell.L) return { type: 'T', rot: 0 };
      if (cell.B) return { type: 'T', rot:  Math.PI / 2 };
      if (cell.R) return { type: 'T', rot:  Math.PI };
      if (cell.T) return { type: 'T', rot: -Math.PI / 2 };
    }
    return null;
  }

  // Pour chaque cellule, push {x, y, rot} dans le bucket de son type.
  function computeTileInstances(g) {
    const out = { straight: [], corner: [], T: [], cross: [], deadEnd: [] };
    for (let r = 0; r < g.R; r++) {
      for (let c = 0; c < g.C; c++) {
        const det = detectTileType(g.maze[r][c]);
        if (!det) continue;
        out[det.type].push({
          x: c * g.cw + g.cw / 2 - g.W / 2,
          y: g.H / 2 - r * g.ch - g.ch / 2,
          rot: det.rot,
        });
      }
    }
    return out;
  }

  // ── Cache geometries + instances (rebuild only when level changes) ─────
  // Sans cache, on recompile 5 ExtrudeGeometry par frame → crash mobile.
  let tileGeometries = null;
  let tileInstances  = null;
  let neonSegments   = [];
  let neonNodes      = [];
  let frameGeometry  = null;   // Lot 6.31 : cadre néon rounded
  let muretGeometry  = null;   // Lot 7.1.d : muret extrudé sous le cadre
  let lastMazeLvl    = -1;
  $: if (G?.maze && G.lvl !== lastMazeLvl) {
    // Lot 6.30 : soft clay bevel — bevelSize/bevelThickness définis
    // au niveau global (lignes 148-149) pour que pathTop puisse s'y
    // référer. bevelSize est passé aux build*Shape pour l'expansion
    // boundary (trick seamless Lot 6.22) ; bevelThickness est purement
    // vertical donc n'affecte pas le shape 2D.
    const extrudeSettings = {
      depth: pathH,
      bevelEnabled: true,
      bevelThickness,
      bevelSize,
      bevelOffset: 0,
      bevelSegments: 5,     // courbe lissée vs chanfrein plat (était 2)
      steps: 1,
      curveSegments: 24,    // arrondis fluides des virages (était 6)
    };
    const shapes = {
      straight: buildStraightShape(pathW, G.cw, G.ch, bevelSize),
      corner:   buildCornerShape  (pathW, G.cw, G.ch, bevelSize),
      T:        buildTShape       (pathW, G.cw, G.ch, bevelSize),
      cross:    buildCrossShape   (pathW, G.cw, G.ch, bevelSize),
      deadEnd:  buildDeadEndShape (pathW, G.cw, G.ch, bevelSize),
    };
    // Dispose previous geometries to free GPU memory.
    if (tileGeometries) {
      for (const k of Object.keys(tileGeometries)) tileGeometries[k].dispose();
    }
    tileGeometries = {
      straight: new ExtrudeGeometry(shapes.straight, extrudeSettings),
      corner:   new ExtrudeGeometry(shapes.corner,   extrudeSettings),
      T:        new ExtrudeGeometry(shapes.T,        extrudeSettings),
      cross:    new ExtrudeGeometry(shapes.cross,    extrudeSettings),
      deadEnd:  new ExtrudeGeometry(shapes.deadEnd,  extrudeSettings),
    };
    tileInstances = computeTileInstances(G);
    neonSegments  = computeNeonSegments(G);
    neonNodes     = computeNeonNodes(G);

    // Lot 6.31 : cadre néon avec coins arrondis — un seul ExtrudeGeometry
    // depuis un Shape rounded-rectangle avec un hole rounded-rectangle.
    // Lot 6.31.b : frT 2.5→4.5 (fix moirage : la fine ligne emissive
    // aliaisait à l'écran ; +épaisseur = trame stable + plus de pixels
    // pour le bloom). frR ajusté en conséquence.
    if (frameGeometry) frameGeometry.dispose();
    const frT_   = 4.5;
    const frH_   = 2;
    const frGap_ = Math.min(G.cw, G.ch) * 0.15;
    const frW_   = G.W + (frT_ + frGap_) * 2;
    const frHd_  = G.H + (frT_ + frGap_) * 2;
    const frR_   = Math.min(G.cw, G.ch) * 0.22;
    frameGeometry = new ExtrudeGeometry(
      buildFrameShape(frW_, frHd_, frT_, frR_),
      { depth: frH_, bevelEnabled: false }
    );

    // Lot 7.1.d : muret extrudé SOUS le cadre néon (matière clay).
    // Même shape que le cadre mais avec une épaisseur murale plus
    // large (frTMur ~ frT*2.5) et extrusion verticale jusqu'au
    // niveau de la piste pathH. Le cadre néon (cyan emissive) sit
    // sur le top de ce muret comme une LED encastrée sur une
    // structure clay. bevel doux pour matcher les tiles soft clay.
    if (muretGeometry) muretGeometry.dispose();
    const muretT_ = frT_ * 2.5;     // épaisseur muret plus large que le cadre
    const muretW_ = G.W + (muretT_ + frGap_) * 2;
    const muretHd_= G.H + (muretT_ + frGap_) * 2;
    const muretR_ = Math.min(G.cw, G.ch) * 0.26;  // radius légèrement plus grand
    muretGeometry = new ExtrudeGeometry(
      buildFrameShape(muretW_, muretHd_, muretT_, muretR_),
      {
        depth: pathH,
        bevelEnabled: true,
        bevelThickness,
        bevelSize,
        bevelOffset: 0,
        bevelSegments: 5,
        steps: 1,
        curveSegments: 24,
      }
    );

    lastMazeLvl   = G.lvl;
  }

  // Path neon segments (rainures) — réutilisation de l'ancienne logique pour
  // poser les neon stripes au centre des couloirs. Build une fois par changement
  // de niveau.
  function computeNeonSegments(g) {
    const out = [];
    for (let r = 0; r < g.R; r++) {
      for (let c = 0; c < g.C; c++) {
        const ce = g.maze[r][c];
        const cx = c * g.cw + g.cw / 2 - g.W / 2;
        const cy = g.H / 2 - r * g.ch - g.ch / 2;
        if (!ce.R && c < g.C - 1) {
          out.push({ type: 'h', x: cx + g.cw / 2, y: cy, length: g.cw });
        }
        if (!ce.B && r < g.R - 1) {
          out.push({ type: 'v', x: cx, y: cy - g.ch / 2, length: g.ch });
        }
      }
    }
    return out;
  }

  function computeNeonNodes(g) {
    const out = [];
    for (let r = 0; r < g.R; r++) {
      for (let c = 0; c < g.C; c++) {
        const ce = g.maze[r][c];
        const openCount = (!ce.T?1:0) + (!ce.R?1:0) + (!ce.B?1:0) + (!ce.L?1:0);
        if (openCount === 0) continue;
        out.push({
          x: c * g.cw + g.cw / 2 - g.W / 2,
          y: g.H / 2 - r * g.ch - g.ch / 2,
          isIntersection: openCount >= 3,
        });
      }
    }
    return out;
  }

  // ── Couleur néon dynamique (theme.neon) pour cadre + accent ────────────
  $: neonColor = G?.theme?.neon ?? '#00c8ff';

  // Animation de chute (port du sc2 de render.js:422) : pendant la phase
  // 'falling' (bille dans un trou ou aspirée par le finish), la bille
  // shrink de 1 à 0 sur 480 ms, puis disparaît. Sans ça, en 3D la bille
  // restait stationnaire jusqu'au respawn — pas de feedback visuel.
  $: fallScale = (G?.phase === 'falling')
    ? Math.max(0, 1 - (now - G.fallT) / 480)
    : 1;
  $: ballVisible = fallScale > 0.03;

  // ── Plateau texture (Lot 3) ────────────────────────────────────────────
  let plateauTexture = null;
  $: if (G?.staticTexture && (plateauTexture?.image !== G.staticTexture)) {
    if (plateauTexture) plateauTexture.dispose();
    plateauTexture = new CanvasTexture(G.staticTexture);
    plateauTexture.colorSpace = SRGBColorSpace;
    plateauTexture.needsUpdate = true;
  }

  // ── Sprite textures (Lot 4) ────────────────────────────────────────────
  // Les 4 SVGs sont rasterisés à la volée par render.js (svgCanvasCache).
  // On poll jusqu'à ce qu'ils soient prêts, puis on emballe en CanvasTexture.
  const SPRITE_KEYS = ['+5s', '+10s', '+30s', 'finish'];
  let textures = {};
  let textureCheckRaf = null;
  function checkTextures() {
    let allReady = true;
    let changed  = false;
    for (const key of SPRITE_KEYS) {
      if (!textures[key] && svgReady(key)) {
        const src = getSvgSource(key);
        const tex = new CanvasTexture(src);
        tex.colorSpace  = SRGBColorSpace;
        tex.needsUpdate = true;
        textures[key]   = tex;
        changed = true;
      }
      if (!textures[key]) allReady = false;
    }
    if (changed) textures = textures;  // triggers Svelte reactivity
    if (!allReady) {
      textureCheckRaf = requestAnimationFrame(checkTextures);
    } else {
      textureCheckRaf = null;
    }
  }

  // ── rAF local pour animations (pulse, fade) ────────────────────────────
  let now = (typeof performance !== 'undefined') ? performance.now() : 0;
  let animRaf = null;

  // ── Trail history buffer (Lot 6.16) ────────────────────────────────────
  // Stocke les dernières positions de la bille à intervalle régulier.
  // Le trail render basé sur cet historique → suit la trajectoire courbe
  // de la bille (pas la velocity instantanée). Démarre court et s'allonge,
  // se vide progressivement à l'arrêt.
  const TRAIL_MAX        = 10;
  const TRAIL_SAMPLE_MS  = 22;     // sample rate du trail
  let trailHistory       = [];     // [{x, y}, ...] le plus récent en [0]
  let lastTrailSampleT   = 0;

  function animTick() {
    now = performance.now();
    // Sample du trail à intervalle fixe (indépendant du framerate)
    if (G && G.ball && now - lastTrailSampleT >= TRAIL_SAMPLE_MS) {
      const bx = G.ball.x - G.W / 2;
      const by = G.H / 2 - G.ball.y;
      // Reactive trigger : new array assignment, capped à TRAIL_MAX
      trailHistory = [{ x: bx, y: by }, ...trailHistory].slice(0, TRAIL_MAX);
      lastTrailSampleT = now;
    }
    animRaf = requestAnimationFrame(animTick);
  }

  // ── Ball glow texture (Lot 6.14) ───────────────────────────────────────
  // Texture circulaire procédurale (radial gradient) pour les trail
  // sprites de la bille. Sans cette texture, T.SpriteMaterial rendait
  // un carré coloré solide → bug visuel (carré jaune au centre de la
  // bille immobile).
  let ballGlowTexture = null;
  function createBallGlowTexture() {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0,    'rgba(212,175,55,1)');
    g.addColorStop(0.5,  'rgba(212,175,55,0.5)');
    g.addColorStop(1,    'rgba(212,175,55,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
    const tex = new CanvasTexture(c);
    tex.colorSpace = SRGBColorSpace;
    tex.needsUpdate = true;
    return tex;
  }

  // ── Contact shadow sous la bille (Lot 6.26 v2.6) ──────────────────────
  // Disque radial noir/transparent rendu via Sprite au niveau du sol,
  // suit la bille en XY. Grounding indépendant de la light directionnelle.
  let ballContactShadowTex = null;
  function createBallContactShadow() {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0.00, 'rgba(0,0,0,0.78)');
    g.addColorStop(0.20, 'rgba(0,0,0,0.65)');
    g.addColorStop(0.50, 'rgba(0,0,0,0.38)');
    g.addColorStop(0.80, 'rgba(0,0,0,0.12)');
    g.addColorStop(1.00, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 128, 128);
    const tex = new CanvasTexture(c);
    tex.minFilter = LinearFilter;
    tex.magFilter = LinearFilter;
    tex.generateMipmaps = false;
    tex.needsUpdate = true;
    return tex;
  }

  // ── Groove shadow gradient (Lot 6.26 v2) ──────────────────────────────
  // alphaMap qui simule la lèvre haute d'une rainure 3D vue de dessus :
  // sombre sur la bande centrale (fond du creux), fade vers transparent
  // aux bords (haut des parois). Trois variantes : H/V pour segments
  // linéaires, radiale pour intersections.
  let grooveAlphaH = null;
  let grooveAlphaV = null;
  let grooveAlphaR = null;

  function createGrooveLinearAlpha() {
    const c = document.createElement('canvas');
    c.width = 8; c.height = 64;
    const ctx = c.getContext('2d');
    const g = ctx.createLinearGradient(0, 0, 0, 64);
    g.addColorStop(0.00, 'rgba(0,0,0,0)');
    g.addColorStop(0.35, 'rgba(0,0,0,0.55)');
    g.addColorStop(0.50, 'rgba(0,0,0,0.85)');
    g.addColorStop(0.65, 'rgba(0,0,0,0.55)');
    g.addColorStop(1.00, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 8, 64);
    const tex = new CanvasTexture(c);
    tex.minFilter = LinearFilter;
    tex.magFilter = LinearFilter;
    tex.generateMipmaps = false;
    tex.needsUpdate = true;
    return tex;
  }

  function createGrooveRadialAlpha() {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0.0,  'rgba(0,0,0,0.85)');
    g.addColorStop(0.55, 'rgba(0,0,0,0.45)');
    g.addColorStop(1.0,  'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64);
    const tex = new CanvasTexture(c);
    tex.minFilter = LinearFilter;
    tex.magFilter = LinearFilter;
    tex.generateMipmaps = false;
    tex.needsUpdate = true;
    return tex;
  }

  onMount(() => {
    ballGlowTexture = createBallGlowTexture();
    grooveAlphaH = createGrooveLinearAlpha();
    grooveAlphaV = createGrooveLinearAlpha();
    grooveAlphaV.center.set(0.5, 0.5);
    grooveAlphaV.rotation = Math.PI / 2;
    grooveAlphaV.needsUpdate = true;
    grooveAlphaR = createGrooveRadialAlpha();
    ballContactShadowTex = createBallContactShadow();
    checkTextures();
    animRaf = requestAnimationFrame(animTick);
  });

  onDestroy(() => {
    if (textureCheckRaf) cancelAnimationFrame(textureCheckRaf);
    if (animRaf)         cancelAnimationFrame(animRaf);
    if (plateauTexture)  plateauTexture.dispose();
    if (ballGlowTexture) ballGlowTexture.dispose();
    grooveAlphaH?.dispose();
    grooveAlphaV?.dispose();
    grooveAlphaR?.dispose();
    ballContactShadowTex?.dispose();
    frameGeometry?.dispose();
    muretGeometry?.dispose();
    if (tileGeometries) {
      for (const k of Object.keys(tileGeometries)) tileGeometries[k].dispose();
    }
    for (const tex of Object.values(textures)) tex.dispose();
  });
</script>

<div class="threlte-host" bind:this={host}>
  <Canvas shadows={PCFSoftShadowMap}>
    <T.PerspectiveCamera bind:ref={cameraRef} makeDefault
                         position={[0, camY, camZ]}
                         fov={FOV} near={cameraDist * 0.5} far={cameraDist * 1.5} />

    <!-- Post-process (Lot 6.17) — Bloom + Env map procédural.
         Lot 6.17 hotfix 2 : threshold 1.0 + strength 0.4 pour ne
         capturer QUE les emissive HDR (toneMapped:false). Lights
         ambient/directional réduits car RoomEnvironment fournit
         maintenant l'illumination globale. -->
    <Postprocess bloomStrength={0.24} bloomRadius={0.10} bloomThreshold={0.85} />

    <!-- Lighting (Lot 6.19) — setup "Soft Clay" per Gemini :
         - Ambient 0.80 (blanc très légèrement chaud), pas d'ombres noires
         - Directional key 1.50 (puissante), positionnée top-gauche-avant
         - Directional fill 0.30 (warm subtle pour les zones d'ombre) -->
    <T.AmbientLight intensity={1.05} color="#fbe9c8" />
    <T.DirectionalLight bind:ref={lightRef}
                        position={[G ? -G.W * 0.4 : -200,
                                   G ? G.H * 0.5 : 250,
                                   (G ? Math.min(G.cw, G.ch) : 80) * 8]}
                        intensity={0.95}
                        color="#ffeec7"
                        castShadow />
    <T.DirectionalLight position={[G ? G.W * 0.3 : 150, G ? -G.H * 0.3 : -150, 400]}
                        intensity={0.45} color="#ffe0b0" />
    <!-- Lot 7.1.e : rim light rasante depuis le haut du plateau (+Y) à
         hauteur modérée → éclaire la bordure haute du muret et des
         parois ; la bordure basse reçoit moins de lumière → contraste
         haut/bas qui souligne le volume arrondi (cf. maquette). -->
    <T.DirectionalLight position={[0,
                                   G ? G.H * 1.1 : 400,
                                   (G ? Math.min(G.cw, G.ch) : 80) * 2.5]}
                        intensity={0.55}
                        color="#fff5e0" />

    <!-- Lot 7.1.d : surface 2D cream qui remplit le fond derrière toute
         la scène. Placée HORS des groupes world-lock/tilt → reste fixe
         dans le frustum caméra peu importe les rotations device/input.
         MeshBasicMaterial + toneMapped=false → couleur exacte #f1e9d9
         identique au HUD .bg-cream du DOM, sans interférence
         lighting/tonemapping. renderOrder très bas pour dessiner en
         premier (avant tout autre mesh). -->
    {#if G}
      {@const bgZ = -Math.min(G.cw, G.ch) * 4}
      <T.Mesh position={[0, 0, bgZ]} renderOrder={-1000}>
        <T.PlaneGeometry args={[G.W * 8, G.H * 8]} />
        <T.MeshBasicMaterial color="#f1e9d9" toneMapped={false} />
      </T.Mesh>
    {/if}

    <!-- World-lock root group. scale.y={WORLD_STRETCH_Y} : anamorphose
         verticale Lot 6.27.f → étire le maze en Y pour remplir le canvas
         portrait sans changer la largeur. -->
    <T.Group rotation.z={worldLockZ} scale.y={WORLD_STRETCH_Y}>
      <!-- Tilt 3D group -->
      <T.Group rotation.x={tiltX} rotation.y={tiltY}>

        <!-- Sol creusé (Lot 6.20) — abaissé à z = -floorDepth pour effet
             de profondeur dans les fossés entre cellules de piste.
             Lot 7.1.e : étendu jusqu'au muret (+cellSize*2 en X/Y) pour
             éliminer le gap visible entre l'ancien edge du floor et
             le muret. Couleur FLOOR_COLOR (plus claire que PATH_COLOR). -->
        {#if G}
          {@const floorExt = Math.min(G.cw, G.ch) * 2}
          <T.Mesh position={[0, 0, -floorDepth]} receiveShadow>
            <T.PlaneGeometry args={[G.W + floorExt, G.H + floorExt]} />
            {#if plateauTexture}
              <T.MeshStandardMaterial map={plateauTexture}
                                      color={FLOOR_COLOR}
                                      roughness={0.92} metalness={0.0}
                                      envMapIntensity={0.15} />
            {:else}
              <T.MeshStandardMaterial color={FLOOR_COLOR}
                                      roughness={0.92} metalness={0.0}
                                      envMapIntensity={0.15} />
            {/if}
          </T.Mesh>
        {/if}

        <!-- Pistes 3D — Lot 6.22 : système de tuiles Lego avec InstancedMesh.
             5 tuiles (straight, corner, T, cross, deadEnd) générées une fois
             par niveau avec la pathW courante. Chaque cellule du maze est
             instanciée dans son bucket selon le type détecté. -->
        {#if G && G.maze && tileGeometries && tileInstances}
          {#each ['straight', 'corner', 'T', 'cross', 'deadEnd'] as tileType (tileType)}
            <InstancedMesh geometry={tileGeometries[tileType]} castShadow receiveShadow>
              <T.MeshStandardMaterial color={PATH_COLOR}
                                      roughness={0.65} metalness={0.02}
                                      envMapIntensity={0.40} />
              {#each tileInstances[tileType] as inst, i (`${tileType}-${i}`)}
                <Instance position={[inst.x, inst.y, 0]}
                          rotation={[0, 0, inst.rot]} />
              {/each}
            </InstancedMesh>
          {/each}

          <!-- Shadow groove (Lot 6.26 v2) : alphaMap gradient (sombre au
               centre, fade aux bords) qui simule la lèvre haute d'une
               rainure 3D. MeshBasicMaterial = pas de réaction à la light
               (creux reste sombre quel que soit le tilt). renderOrder=1
               + depthWrite=false : invariants anti-flicker Lot 6.24. -->
          {#if grooveAlphaH && grooveAlphaV}
            {#each neonSegments as seg, i (`sh${i}`)}
              <T.Mesh position={[seg.x, seg.y, pathTop - 0.05]} renderOrder={1}>
                <T.PlaneGeometry args={
                  seg.type === 'h'
                    ? [seg.length, neonW * 2.8]
                    : [neonW * 2.8, seg.length]
                } />
                <T.MeshBasicMaterial color="#1a0e08"
                                     alphaMap={seg.type === 'h' ? grooveAlphaH : grooveAlphaV}
                                     transparent={true}
                                     opacity={0.55}
                                     depthWrite={false} />
              </T.Mesh>
            {/each}
          {/if}
          {#if grooveAlphaR}
            {#each neonNodes as node, i (`shn${i}`)}
              {#if node.isIntersection}
                <T.Mesh position={[node.x, node.y, pathTop - 0.05]} renderOrder={1}>
                  <T.CircleGeometry args={[neonW * 2.2, 24]} />
                  <T.MeshBasicMaterial color="#1a0e08"
                                       alphaMap={grooveAlphaR}
                                       transparent={true}
                                       opacity={0.55}
                                       depthWrite={false} />
                </T.Mesh>
              {/if}
            {/each}
          {/if}

          <!-- Rainure néon sur le dessus de la piste (Lot 6.21 : z = pathTop
               pour être au-dessus du bevel + toneMapped=false pour bloom).
               Dual-layer : white core + color halo pour match ref 2D. -->
          {#each neonSegments as seg, i (`ns${i}`)}
            <!-- White core (intense emissive) — Lot 6.24 : transparent=false
                 (opacity 1.0 → opaque, écrit dans depth buffer) + renderOrder=2. -->
            <T.Mesh position={[seg.x, seg.y, pathTop]} renderOrder={2}>
              <T.PlaneGeometry args={
                seg.type === 'h'
                  ? [seg.length, neonW * 0.32]
                  : [neonW * 0.32, seg.length]
              } />
              <T.MeshStandardMaterial color="#ffffff"
                                      emissive="#ffffff"
                                      emissiveIntensity={2.2}
                                      toneMapped={false}
                                      transparent={false} />
            </T.Mesh>
            <!-- Color halo (liseré bleu crisp) — Lot 6.24 : renderOrder=3 +
                 depthWrite=false (fix flicker tilt). Lot 6.26 v2.2 : largeur
                 resserrée + emissive haute + opacity haute → liseré net sans
                 bloom diffus. -->
            <T.Mesh position={[seg.x, seg.y, pathTop + 0.1]} renderOrder={3}>
              <T.PlaneGeometry args={
                seg.type === 'h'
                  ? [seg.length, neonW * 0.85]
                  : [neonW * 0.85, seg.length]
              } />
              <T.MeshStandardMaterial color={neonColor}
                                      emissive={neonColor}
                                      emissiveIntensity={2.4}
                                      toneMapped={false}
                                      transparent={true}
                                      opacity={0.95}
                                      depthWrite={false} />
            </T.Mesh>
          {/each}

          <!-- Dots aux INTERSECTIONS (>=3 sorties) — SphereGeometry pour
               soft glow naturel (falloff sphérique). Lot 6.24 : renderOrder=4
               + depthWrite=false (fix flicker tilt). -->
          {#each neonNodes as node, i (`nb${i}`)}
            {#if node.isIntersection}
              <T.Mesh position={[node.x, node.y, pathTop + 0.3]} renderOrder={4}>
                <T.SphereGeometry args={[neonW * 0.6, 16, 8]} />
                <T.MeshStandardMaterial color={neonColor}
                                        emissive={neonColor}
                                        emissiveIntensity={1.5}
                                        transparent={true}
                                        opacity={0.95}
                                        toneMapped={false}
                                        depthWrite={false} />
              </T.Mesh>
            {/if}
          {/each}
        {/if}

        <!-- Checkpoints (Lot 6.13) — thin luminous stripes (PlaneGeometry)
             vertes (non passées) ou jaunes (passées). Match du rendu
             2D luminous fin. -->
        {#if G?.checkpoints}
          {#each G.checkpoints as cp, i (i)}
            {@const cx      = cp.c * G.cw + G.cw / 2 - G.W / 2}
            {@const cy      = G.H / 2 - (cp.r * G.ch + G.ch / 2)}
            {@const cpClr   = cp.passed ? '#ffcc00' : '#88ff66'}
            {@const cpLen   = pathW * 1.20}
            {@const cpThick = neonW * 1.3}
            <T.Mesh position={[cx, cy, pathTop + 0.5]}>
              <T.PlaneGeometry args={
                cp.horizontal
                  ? [cpLen, cpThick]
                  : [cpThick, cpLen]
              } />
              <T.MeshStandardMaterial color={cpClr}
                                      emissive={cpClr}
                                      emissiveIntensity={1.5}
                                      toneMapped={false}
                                      transparent={true}
                                      opacity={1.0} />
            </T.Mesh>
          {/each}
        {/if}

        <!-- Cadre néon — Lot 6.31 : un seul ExtrudeGeometry rounded
             rectangle frame (au lieu de 4 BoxGeometry à angles droits).
             Coins arrondis match maquette. Cache `frameGeometry`
             reconstruit uniquement au changement de niveau. -->
        <!-- Lot 7.1.d : muret extrudé sous le cadre néon, matière clay
             cream. Donne du volume au cadre comme sur la maquette
             (LED encastrée sur structure clay) au lieu d'une simple
             ligne flottante. -->
        {#if G && muretGeometry}
          <T.Mesh geometry={muretGeometry} position={[0, 0, 0]}
                  castShadow receiveShadow>
            <T.MeshStandardMaterial color={PATH_COLOR}
                                    roughness={0.65}
                                    metalness={0.02}
                                    envMapIntensity={0.40} />
          </T.Mesh>
        {/if}
        {#if G && frameGeometry}
          <!-- Lot 7.1.e : cadre néon repositionné AU-DESSUS du muret
               (le muret extrude jusqu'à pathH + bevelThickness). -->
          <T.Mesh geometry={frameGeometry} position={[0, 0, pathH + bevelThickness]}>
            <T.MeshStandardMaterial color={neonColor}
                                    emissive={neonColor}
                                    emissiveIntensity={2.0}
                                    toneMapped={false} />
          </T.Mesh>
        {/if}

        <!-- Collectibles (Lot 4) — sprites billboardés, labels baked-in -->
        {#if G?.collectibles}
          {#each G.collectibles as col (col.r + '-' + col.c)}
            {@const tex     = textures[col.type]}
            {@const cx      = col.c * G.cw + G.cw / 2 - G.W / 2}
            {@const cy      = G.H / 2 - (col.r * G.ch + G.ch / 2)}
            {@const age     = col.collected ? now - col.collectT : 0}
            {@const visible = !col.collected || age < 400}
            {#if tex && visible}
              {@const base   = G.br * 4.2}
              {@const fade   = col.collected ? Math.max(0, 1 - age / 400) : 1}
              {@const pulse  = col.collected
                ? 1 + (age / 400) * 0.45
                : 1 + Math.sin(now * 0.004 + col.c + col.r) * 0.06}
              {@const size   = base * pulse}
              <!-- Lot 6.28.c : z dynamique pour éviter que le sprite
                   (billboard face caméra tiltée) plonge dans les parois.
                   Le bord bas du sprite descend en world-Z de
                   size/2 * sin(tilt) ; on rajoute ce delta + une marge
                   au pathTop pour garantir que le bord reste au-dessus
                   du sommet des parois quelle que soit la taille. -->
              {@const spriteZ = pathTop + size * CAM_TILT_SIN * 0.5 + 2}
              <T.Sprite position={[cx, cy, spriteZ]}
                        scale={[size, size, 1]}
                        renderOrder={5}>
                <T.SpriteMaterial map={tex} transparent={true}
                                  opacity={fade}
                                  depthWrite={false} depthTest={true} />
              </T.Sprite>
            {/if}
          {/each}
        {/if}

        <!-- Finish portal (Lot 4) — anneaux + label FINISH baked-in.
             Lot 6.1 : aspect-corrected (raster 256×303 → ratio 1.184)
             pour ne pas distordre l'anneau et le label. -->
        {#if G?.hole && textures.finish}
          {@const fx      = G.hole.c * G.cw + G.cw / 2 - G.W / 2}
          {@const fy      = G.H / 2 - (G.hole.r * G.ch + G.ch / 2)}
          {@const fbase   = G.br * 4}
          {@const fpulse  = 1 + Math.sin(now * 0.003) * 0.05}
          {@const fsize   = fbase * fpulse}
          {@const fAspect = 303 / 256}
          <T.Sprite position={[fx, fy, pathTop + 1.5]}
                    scale={[fsize, fsize * fAspect, 1]}>
            <T.SpriteMaterial map={textures.finish} transparent={true}
                              depthWrite={false} depthTest={false} />
          </T.Sprite>
        {/if}

        <!-- Bille — Lot 6.15 : retour à métal pur (sans emissive).
             L'emissive du Lot 6.13 saturait le matériau et masquait
             les reflections du metalness=1.0. Avec emissive retirée,
             la bille reflète correctement les neon PointLights aux
             intersections (teintes cyan/rose/vert selon theme). -->
        {#if G && ballVisible}
          <!-- Contact shadow (Lot 6.26 v2.6) : disque sombre fade au sol
               suivant la bille en XY. Grounding fort indépendant de la
               light directionnelle (la real shadow reste utile mais
               compense mal sous tilt). -->
          {#if ballContactShadowTex}
            <!-- Lot 6.31.d : Mesh+PlaneGeometry au lieu de Sprite. Un
                 Sprite est un billboard qui s'incline avec la caméra,
                 donc son bord bas descend sous le top du bevel et se
                 fait couper par les parois adjacentes (depthTest). Une
                 PlaneGeometry à plat reste parallèle au sol → bord
                 toujours au-dessus du bevel. -->
            <T.Mesh position={[ballX, ballY, pathTop + 0.05]}
                    renderOrder={0}>
              <T.PlaneGeometry args={[ballR * 3.4, ballR * 3.4]} />
              <T.MeshBasicMaterial map={ballContactShadowTex}
                                   transparent={true}
                                   opacity={fallScale}
                                   depthTest={true}
                                   depthWrite={false} />
            </T.Mesh>
          {/if}
          <T.Mesh position={[ballX, ballY, (pathTop + ballR) * fallScale]}
                  scale={[fallScale, fallScale, fallScale]}
                  castShadow>
            <T.SphereGeometry args={[ballR, 32, 16]} />
            <T.MeshStandardMaterial color="#D4AF37"
                                    metalness={1.0}
                                    roughness={0.15}
                                    envMapIntensity={1.6} />
          </T.Mesh>

          <!-- PointLight locale qui suit la bille (Lot 6.26 v2.1) :
               teinte du néon courant, courte portée → reflet bleu sur
               la bille métallique + groove lighting effect autour.
               v2.5 : intensity 1.6→2.4 + distance 2.0→2.6 cells →
               highlight spéculaire visible sur la sphère metalness=1.0
               + spill cyan plus présent sur la piste autour. -->
          <T.PointLight position={[ballX, ballY, pathTop + ballR * 1.5]}
                        color={neonColor}
                        intensity={2.4}
                        distance={Math.min(G.cw, G.ch) * 2.6}
                        decay={2.0} />

          <!-- Bounce light (Lot 6.26 v2.7) : PointLight cyan juste au
               niveau de la piste, sous la bille. Simule la lumière
               rebondie par le rail néon → highlight cyan sur le bas
               de la sphère métallique. Distance courte mais suffisante
               pour atteindre l'équateur de la bille où le highlight
               apparaît côté caméra. v2.8 : intensity 1.4→2.6 +
               distance 0.7→1.5 cells → reflet cyan visible. -->
          <T.PointLight position={[ballX, ballY, pathTop + ballR * 0.25]}
                        color={neonColor}
                        intensity={3.6}
                        distance={Math.min(G.cw, G.ch) * 1.5}
                        decay={2.0}
                        castShadow={false} />

          <!-- Ball trail — Lot 6.16 : history buffer (positions
               échantillonnées dans animTick). Le trail suit la
               trajectoire courbe de la bille, pas la velocity
               instantanée. Démarre court et grandit progressivement,
               se vide à l'arrêt (les positions historiques sortent
               du buffer naturellement quand la bille bouge ailleurs).
               Skip le premier point (i==0) pour ne pas overlap la
               bille au centre. -->
          {#if ballGlowTexture && trailHistory.length > 1}
            {#each trailHistory as pos, i (`trail-${i}`)}
              {#if i > 0}
                {@const t = (i - 1) / (TRAIL_MAX - 1)}
                {@const opacity = Math.max(0, (1 - t) * 0.55)}
                {@const scale = ballR * 1.6 * (1 - t * 0.5)}
                <T.Sprite position={[pos.x, pos.y, pathTop + ballR * 0.5]}
                          scale={[scale, scale, 1]}>
                  <T.SpriteMaterial map={ballGlowTexture}
                                    transparent={true}
                                    opacity={opacity}
                                    depthTest={true}
                                    depthWrite={false} />
                </T.Sprite>
              {/if}
            {/each}
          {/if}
        {/if}

      </T.Group>
    </T.Group>
  </Canvas>
</div>

<style>
  .threlte-host {
    /* Position pilotée par Game.svelte via la prop `rect` — la 3D occupe
       exactement la zone du canvas 2D, HUD intacte autour. Les défauts
       top/left/width/height couvrent le viewport avant que rect arrive,
       pour que Threlte initialise son renderer avec des dims valides
       (un mount à 0×0 ne récupère pas via ResizeObserver dans tous les cas). */
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    z-index: 1;
    pointer-events: none;
    background: transparent;
  }
  .threlte-host :global(canvas) {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
