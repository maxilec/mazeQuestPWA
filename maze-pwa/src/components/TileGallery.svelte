<script>
  // Lot 8 — Environnement de test des tuiles "Lego" hors maze.
  // Accessible via le lien "intégration dev" du menu principal.
  //
  // 3 onglets :
  //  - Global   : grille 3×2 affichant les 5 types de tuiles côte à côte
  //  - Unitaire : une seule tuile au centre + OrbitControls (rotation/zoom)
  //  - Exemple  : assemblage 4×3 défini par wall flags, rendu via
  //               detectTileType (même path que Scene3D in-game) →
  //               jonctions cohérentes par construction.

  import { onDestroy } from 'svelte';
  import { Canvas, T } from '@threlte/core';
  import { OrbitControls } from '@threlte/extras';
  import { ExtrudeGeometry, VSMShadowMap } from 'three';
  import { screen } from '../stores.js';
  import Postprocess from './Postprocess.svelte';
  import {
    buildStraightShape, buildCornerShape, buildTShape,
    buildCrossShape, buildDeadEndShape,
    applyVertexAO, detectTileType,
    BEVEL_SIZE_RATIO, BEVEL_THICKNESS_RATIO,
    DEFAULT_PATH_H_RATIO, DEFAULT_BEVEL_SEGMENTS,
    DEFAULT_CHANFREIN_PERCENT, DEFAULT_RAIL_W, DEFAULT_RAIL_DEPTH,
    DEFAULT_NEON_W, DEFAULT_NEON_INTENSITY, DEFAULT_NEON_COLOR,
    NEON_HEIGHT_MARGIN,
  } from '../lib/tile-geometry.js';
  import { buildClippedTileGeometry } from '../lib/tile-factory.js';
  import {
    DEFAULT_HEMI_INTENSITY, DEFAULT_HEMI_SKY_COLOR, DEFAULT_HEMI_GROUND_COLOR,
    DEFAULT_KEY_INTENSITY,  DEFAULT_KEY_COLOR,
    DEFAULT_KEY_POS_X, DEFAULT_KEY_POS_Y, DEFAULT_KEY_POS_Z,
    DEFAULT_RIM_INTENSITY,  DEFAULT_RIM_COLOR,
    DEFAULT_RIM_POS_X, DEFAULT_RIM_POS_Y, DEFAULT_RIM_POS_Z,
    DEFAULT_SHADOW_BIAS, DEFAULT_SHADOW_NORMAL_BIAS,
    DEFAULT_SHADOW_RADIUS, DEFAULT_SHADOW_MAP_SIZE,
    DEFAULT_BLOOM_STRENGTH, DEFAULT_BLOOM_RADIUS, DEFAULT_BLOOM_THRESHOLD,
  } from '../lib/lighting-config.js';
  import { debugLog, clearDebug, pushDebug, formatArg } from '../lib/debug-log.js';

  // Intercepte console.error/warn pour capturer aussi les exceptions
  // tierces (three.js, three-bvh-csg) dans le panneau debug in-app.
  if (typeof window !== 'undefined' && !window.__galleryConsoleHooked) {
    const origError = console.error.bind(console);
    const origWarn  = console.warn.bind(console);
    window.__galleryConsoleHooked = true;
    console.error = (...args) => {
      origError(...args);
      pushDebug('error', args.map(formatArg).join(' '));
    };
    console.warn = (...args) => {
      origWarn(...args);
      pushDebug('warn', args.map(formatArg).join(' '));
    };
  }

  let showDebug = true;        // panneau debug visible par défaut
  $: log = $debugLog;          // store réactif

  let tab = 'global';          // 'global' | 'unitaire' | 'exemple'
  let unitType = 'cross';
  let cameraRef;
  let lightRef;
  // Lot 9 — Panneaux params : tabs au lieu de panneaux empilés.
  // Permet de toujours voir les 2 toggles "géométrie" et "lumière"
  // même quand un panneau est ouvert (sinon ça déborde du viewport
  // mobile sur iPhone et le toggle lumière était pushed off-screen).
  let paramsTab = 'geo';       // 'geo' | 'light' | null (fermé)

  // Lot 9 — Génère le contenu de lighting-config.js avec les valeurs
  // courantes des sliders et le copie dans le clipboard. L'user colle
  // dans le fichier pour figer les défauts.
  function copyLightingDefaults() {
    const snippet = `// Snippet généré par le panneau lumière de TileGallery.\nexport const DEFAULT_HEMI_INTENSITY    = ${hemiIntensity};\nexport const DEFAULT_HEMI_SKY_COLOR    = '${hemiSkyColor}';\nexport const DEFAULT_HEMI_GROUND_COLOR = '${hemiGroundColor}';\nexport const DEFAULT_KEY_INTENSITY = ${keyIntensity};\nexport const DEFAULT_KEY_COLOR     = '${keyColor}';\nexport const DEFAULT_KEY_POS_X     = ${keyPosX};\nexport const DEFAULT_KEY_POS_Y     = ${keyPosY};\nexport const DEFAULT_KEY_POS_Z     = ${keyPosZ};\nexport const DEFAULT_RIM_INTENSITY = ${rimIntensity};\nexport const DEFAULT_RIM_COLOR     = '${rimColor}';\nexport const DEFAULT_RIM_POS_X     = ${rimPosX};\nexport const DEFAULT_RIM_POS_Y     = ${rimPosY};\nexport const DEFAULT_RIM_POS_Z     = ${rimPosZ};\nexport const DEFAULT_SHADOW_BIAS         = ${shadowBias};\nexport const DEFAULT_SHADOW_NORMAL_BIAS  = ${shadowNormalBias};\nexport const DEFAULT_SHADOW_RADIUS       = ${shadowRadius};\nexport const DEFAULT_BLOOM_STRENGTH  = ${bloomStrength};\nexport const DEFAULT_BLOOM_RADIUS    = ${bloomRadius};\nexport const DEFAULT_BLOOM_THRESHOLD = ${bloomThreshold};\n`;
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(snippet).then(
        () => pushDebug('info', 'lighting defaults copiés dans le clipboard'),
        (err) => pushDebug('error', 'clipboard fail: ' + err.message),
      );
    } else {
      pushDebug('warn', 'clipboard API indisponible — snippet en log:\n' + snippet);
    }
  }

  function resetParams() {
    pathWRatio = 0.75;
    pathHRatio = DEFAULT_PATH_H_RATIO;
    bevelSegments = DEFAULT_BEVEL_SEGMENTS;
    chanfreinPercent = DEFAULT_CHANFREIN_PERCENT;
    railW = DEFAULT_RAIL_W;
    railDepth = DEFAULT_RAIL_DEPTH;
    neonW = DEFAULT_NEON_W;
    neonColor = DEFAULT_NEON_COLOR;
    neonIntensity = DEFAULT_NEON_INTENSITY;
    useBridge = true;
  }

  // OrbitControls (unitaire) prend la main sur la caméra → on désactive
  // notre lookAt manuel quand on est dans cet onglet pour ne pas
  // contre-balancer les rotations utilisateur à chaque frame.
  $: if (cameraRef && tab !== 'unitaire') cameraRef.lookAt(0, 0, 0);

  // Setup shadow camera. Bounds élargis pour couvrir le mode exemple
  // (4×3 cells = ±200 en Y, ±150 en X).
  $: if (lightRef) {
    const s = lightRef.shadow;
    s.mapSize.set(DEFAULT_SHADOW_MAP_SIZE, DEFAULT_SHADOW_MAP_SIZE);
    const half = 320;
    s.camera.left   = -half;
    s.camera.right  =  half;
    s.camera.top    =  half;
    s.camera.bottom = -half;
    s.camera.near   = 1;
    s.camera.far    = 2000;
    s.camera.updateProjectionMatrix();
    s.bias          = shadowBias;
    s.normalBias    = shadowNormalBias;
    s.radius        = shadowRadius;
    s.needsUpdate   = true;
  }

  // Reset caméra en quittant le mode unitaire (sinon OrbitControls
  // laisse la caméra dans une orientation arbitraire).
  let lastTab = tab;
  $: if (tab !== lastTab) {
    lastTab = tab;
    if (cameraRef && tab !== 'unitaire') {
      cameraRef.position.set(0, camY, camZ);
      cameraRef.lookAt(0, 0, 0);
    }
  }

  // Cell fixe (cw=ch=100). Les pistes sont paramétrables via sliders
  // (pathWRatio, pathHRatio). Valeurs par défaut = ratios de Scene3D
  // (trackRatio 0.65, pathH = DEFAULT_PATH_H_RATIO).
  const cw = 100, ch = 100;
  const cellSize = Math.min(cw, ch);
  let pathWRatio = 0.75;     // épaisseur piste (fraction de cw)
  let pathHRatio = DEFAULT_PATH_H_RATIO;  // hauteur extrusion (fraction de cellSize)
  let bevelSegments = DEFAULT_BEVEL_SEGMENTS;  // ignoré en v6 (chanfrein plat)
  // Lot 8.10 v6 — Mécanique chanfrein : rayon de cylindre centré sur l'arête.
  //   chanfrein % (0-100) : r = (P/100) × (pathW/2)
  //     0%   → r=0, arêtes vives, aucun chanfrein
  //     50%  → r=pathW/4, mange 1/4 de la largeur de chaque côté
  //     100% → r=pathW/2, chanfreins se rejoignent au centre (arête vive)
  //   bevelThickness = bevelSize (45° lock).
  //   Le chanfrein s'applique uniquement aux arêtes fermées (pas aux
  //   jonctions cell-boundary entre tiles adjacentes).
  let chanfreinPercent = DEFAULT_CHANFREIN_PERCENT;
  // Lot 8.11 — Rainure centrale (futur néon). railW=0 désactive.
  // Valeurs absolues (pas % de pathW) → épaisseur visuelle CONSTANTE
  // quel que soit pathW. Cohérent avec le rôle de néon de largeur fixe.
  let railW = DEFAULT_RAIL_W;
  let railDepth = DEFAULT_RAIL_DEPTH;
  // Lot 8.11 — Neon dans la rainure : mesh séparé extrudé du shape
  // de piste avec une largeur neonW < railW (slider dédié). Material
  // emissive pour le glow (le bloom du Postprocess amplifie la
  // luminance > 1). neonHeightMargin reste fixe pour ne pas toucher
  // le fond/haut de la rainure.
  let neonColor = DEFAULT_NEON_COLOR;
  let neonIntensity = DEFAULT_NEON_INTENSITY;
  let neonW = DEFAULT_NEON_W;
  const neonHeightMargin = NEON_HEIGHT_MARGIN;

  // ── Lot 9 — Lumières & post-process (panneau dev séparé) ──────────
  let hemiIntensity   = DEFAULT_HEMI_INTENSITY;
  let hemiSkyColor    = DEFAULT_HEMI_SKY_COLOR;
  let hemiGroundColor = DEFAULT_HEMI_GROUND_COLOR;
  let keyIntensity    = DEFAULT_KEY_INTENSITY;
  let keyColor        = DEFAULT_KEY_COLOR;
  let keyPosX         = DEFAULT_KEY_POS_X;
  let keyPosY         = DEFAULT_KEY_POS_Y;
  let keyPosZ         = DEFAULT_KEY_POS_Z;
  let rimIntensity    = DEFAULT_RIM_INTENSITY;
  let rimColor        = DEFAULT_RIM_COLOR;
  let rimPosX         = DEFAULT_RIM_POS_X;
  let rimPosY         = DEFAULT_RIM_POS_Y;
  let rimPosZ         = DEFAULT_RIM_POS_Z;
  let shadowBias        = DEFAULT_SHADOW_BIAS;
  let shadowNormalBias  = DEFAULT_SHADOW_NORMAL_BIAS;
  let shadowRadius      = DEFAULT_SHADOW_RADIUS;
  let bloomStrength     = DEFAULT_BLOOM_STRENGTH;
  let bloomRadius       = DEFAULT_BLOOM_RADIUS;
  let bloomThreshold    = DEFAULT_BLOOM_THRESHOLD;

  // Échelle locale pour les positions normalisées des dir lights.
  // En gallery, on utilise 300 (vs scaling G.W/G.H/cellSize en jeu).
  const LIGHT_POS_SCALE = 300;
  $: keyLightPos = [
    keyPosX * LIGHT_POS_SCALE,
    keyPosY * LIGHT_POS_SCALE,
    keyPosZ * 1400,            // facteur Z plus grand (key quasi-vertical)
  ];
  $: rimLightPos = [
    rimPosX * LIGHT_POS_SCALE,
    rimPosY * 700,             // facteur Y plus grand (rim rasant)
    rimPosZ * 250,
  ];

  // Toggle panneau lumière (séparé du panneau géométrie)
  let showLightParams = false;
  $: pathW = cw * pathWRatio;
  $: bevelSize = (chanfreinPercent / 100) * (pathW / 2);
  $: bevelThickness = bevelSize;
  let useBridge = true;
  $: pathH = cellSize * pathHRatio;
  // floorDepth comme Scene3D : sol creusé pour effet de profondeur
  // dans les fossés entre cellules de piste (visible dans le mode
  // exemple notamment).
  $: floorDepth = pathH * 0.4;
  // Lot 8.10 : en mode ponts (CSG), la géométrie est massicotée pile à
  // z=0 → on descend le mesh de floorDepth pour que la base de la tile
  // atterrisse exactement sur le sol (plus de lévitation). En mode
  // coussin, on garde z=0 (le bevel inférieur va naturellement dans le
  // fossé).
  $: tilePosZ = useBridge ? -floorDepth : 0;

  // Caméra téléobjectif (FOV 7, tilt 6°) comme Scene3D. VISIBLE_H
  // dépend de l'onglet pour cadrer chaque layout proprement :
  //  - global   : grille 2×3 portrait-friendly (Y ±180) → ~500
  //  - unitaire : 1 tuile au centre → 200 (tile ~50% de l'écran),
  //               l'user peut zoomer via OrbitControls
  //  - exemple  : maze 4×3 (X ±150, Y ±200) → ~620
  const FOV = 7;
  const DEG = Math.PI / 180;
  const TILT_DEG = 6;
  const VISIBLE_H_BY_TAB = { global: 500, unitaire: 200, exemple: 620 };
  $: visibleH   = VISIBLE_H_BY_TAB[tab] ?? 640;
  $: cameraDist = (visibleH / 2) / Math.tan((FOV * DEG) / 2) * 1.15;
  $: camY       = -cameraDist * Math.sin(TILT_DEG * DEG);
  $: camZ       =  cameraDist * Math.cos(TILT_DEG * DEG);

  // Construit les 5 geometries de façon réactive : à chaque changement
  // de pathW/pathH/bevels, on rebuild + dispose les anciennes (sinon
  // fuite mémoire WebGL). Coût d'un rebuild ≈ 5×ExtrudeGeometry ≈ 10ms,
  // négligeable pour un dev tool.
  const types = ['straight', 'corner', 'T', 'cross', 'deadEnd'];
  const builders = {
    straight: buildStraightShape,
    corner:   buildCornerShape,
    T:        buildTShape,
    cross:    buildCrossShape,
    deadEnd:  buildDeadEndShape,
  };
  let tileGeometries = {};
  $: {
    // Try/catch englobant : si le pipeline tile crash (CSG, geometry
    // invalide, etc.), on garde les anciennes geometries pour ne pas
    // figer le rendu Threlte.
    try {
      clearDebug();  // efface les logs du rebuild précédent
      // Dispose les anciennes geometries avant rebuild.
      for (const g of Object.values(tileGeometries)) g?.dispose?.();
      const next = {};
      if (useBridge) {
        for (const t of types) {
          next[t] = buildClippedTileGeometry({
            buildShape: builders[t],
            pathW, cw, ch, pathH,
            bevelSize, bevelThickness, bevelSegments,
            railW, railDepth,
          });
        }
      } else {
        // Système "coussin" historique : extrude avec bevel complet,
        // base flare hors-cellule (peut créer des overlaps aux jonctions).
        const extrudeSettings = {
          depth: pathH,
          bevelEnabled: true,
          bevelThickness, bevelSize,
          bevelOffset: 0,
          bevelSegments,
          steps: 1,
          curveSegments: 24,
        };
        for (const t of types) {
          const shape = builders[t](pathW, cw, ch, bevelSize);
          const geo = new ExtrudeGeometry(shape, extrudeSettings);
          applyVertexAO(geo, bevelThickness);
          next[t] = geo;
        }
      }
      tileGeometries = next;
    } catch (err) {
      pushDebug('error', '[TileGallery] rebuild failed: ' + (err?.message || err));
    }
  }

  // Lot 8.11 — Neon geometries (mesh séparé, pas de CSG). Extrude le
  // shape de piste avec une largeur railW - 2·neonInset (légèrement
  // plus étroit que la rainure pour ne pas toucher les parois). Z
  // position calculé à part dans neonPosZ.
  let neonGeometries = {};
  $: {
    for (const g of Object.values(neonGeometries)) g?.dispose?.();
    const next = {};
    if (useBridge && railW > 0 && railDepth > 0 && neonW > 0) {
      // Clamp pour ne jamais dépasser la rainure (l'utilisateur peut
      // mettre neonW > railW au slider, on borne ici).
      const w = Math.min(neonW, railW);
      const h = Math.max(0.1, railDepth - 2 * neonHeightMargin);
      for (const t of types) {
        const shape = builders[t](w, cw, ch, 0);
        next[t] = new ExtrudeGeometry(shape, {
          depth: h,
          bevelEnabled: false,
          steps: 1,
          curveSegments: 12,
        });
      }
    }
    neonGeometries = next;
  }

  // Position Z du mesh neon (offset relatif au tile group).
  // La rainure va de z=pathH-railDepth à z=pathH. Le neon mesh a une
  // hauteur railDepth-2·margin et son origine est au bas → on l'élève
  // pour le centrer dans la rainure.
  $: neonPosZ = tilePosZ + (pathH - railDepth) + neonHeightMargin;

  // ── Global : grille 2×3 portrait, 5 tuiles avec gap entre cases ──
  // 2 cols (gx ±cw*0.7 = ±70, spacing 140, gap 40) × 3 rows
  // (gy ±cw*1.3, spacing 130, gap 30). 5 tuiles → 6e case vide ;
  // mise en page : 2 tuiles top, 2 tuiles middle, 1 tuile bottom
  // centrée. Cadre la scène portrait nativement.
  const GLOBAL_LAYOUT = [
    { type: 'straight', gx: -cw * 0.7, gy:  cw * 1.3 },
    { type: 'corner',   gx:  cw * 0.7, gy:  cw * 1.3 },
    { type: 'T',        gx: -cw * 0.7, gy:  0 },
    { type: 'cross',    gx:  cw * 0.7, gy:  0 },
    { type: 'deadEnd',  gx:  0,        gy: -cw * 1.3 },
  ];

  // ── Exemple : maze 4×3 (rows × cols) défini par wall flags. ──────
  // Convention identique à Scene3D :
  //   cell = { T, R, B, L } où chaque flag = wall (true) ou ouverture
  //   (false). Row 0 = haut (Y high), col 0 = gauche (X low).
  //
  // Layout demandé par l'utilisateur :
  //   [DE]  [C]   [DE]      row 0
  //   [DE]  [+]   [T ]      row 1
  //   [  ]  [DE]  [S ]      row 2 (col 0 vide)
  //   [DE]  [S]   [C ]      row 3
  //
  // Wall flags calibrés pour produire ces types via detectTileType,
  // avec orientations cohérentes (cf. règles : si cell(r,c).R = false
  // alors cell(r,c+1).L = false aussi → maze graph valid).
  const EX_R = 4, EX_C = 3;
  // null = cellule vide (pas de tuile à cet emplacement)
  const EX_MAZE = [
    // row 0 : DE→R, C(B+L), DE↓
    [ { T:1, R:0, B:1, L:1 },   { T:1, R:1, B:0, L:0 },   { T:1, R:1, B:0, L:1 } ],
    // row 1 : DE→R, +, T (closed R)
    [ { T:1, R:0, B:1, L:1 },   { T:0, R:0, B:0, L:0 },   { T:0, R:1, B:0, L:0 } ],
    // row 2 : (empty), DE↑, S (vertical)
    [ null,                     { T:0, R:1, B:1, L:1 },   { T:0, R:1, B:0, L:1 } ],
    // row 3 : DE→R, S (horizontal), C (L+T)
    [ { T:1, R:0, B:1, L:1 },   { T:1, R:0, B:1, L:0 },   { T:0, R:1, B:1, L:0 } ],
  ];

  // Coordonnées monde pour la cellule (r, c). Centre du maze à (0,0,0).
  const MAZE_W = EX_C * cw;     // 300
  const MAZE_H = EX_R * ch;     // 400
  function cellCenter(r, c) {
    const x = c * cw + cw / 2 - MAZE_W / 2;
    const y = MAZE_H / 2 - r * ch - ch / 2;
    return [x, y];
  }

  // Pré-calcul des instances exemple via detectTileType (même fonction
  // que Scene3D pour le rendu in-game → orientations identiques).
  const EXAMPLE_INSTANCES = [];
  for (let r = 0; r < EX_R; r++) {
    for (let c = 0; c < EX_C; c++) {
      const cell = EX_MAZE[r][c];
      if (!cell) continue;
      const det = detectTileType(cell);
      if (!det) continue;
      const [x, y] = cellCenter(r, c);
      EXAMPLE_INSTANCES.push({ type: det.type, rotZ: det.rot, gx: x, gy: y });
    }
  }

  function back() { screen.set('title'); }

  onDestroy(() => {
    for (const g of Object.values(tileGeometries)) g.dispose();
    for (const g of Object.values(neonGeometries)) g?.dispose?.();
  });
</script>

<div class="gallery-root">
  <header class="top-bar">
    <button class="back-btn" on:click={back}>← Retour</button>
    <div class="title">Tile Gallery <span class="dev-tag">DEV</span></div>
    <div class="spacer"></div>
  </header>

  <div class="tab-bar">
    <button class:active={tab==='global'}   on:click={() => tab='global'}>Global</button>
    <button class:active={tab==='unitaire'} on:click={() => tab='unitaire'}>Unitaire</button>
    <button class:active={tab==='exemple'}  on:click={() => tab='exemple'}>Exemple</button>
  </div>

  {#if tab === 'unitaire'}
    <div class="type-bar">
      {#each types as t}
        <button class:active={unitType===t} on:click={() => unitType=t}>{t}</button>
      {/each}
    </div>
  {/if}

  <div class="canvas-wrap">
    <Canvas shadows={VSMShadowMap}
            rendererParameters={{ alpha: true, premultipliedAlpha: false }}>
      <!-- near/far : en mode unitaire OrbitControls laisse la caméra
           zoomer de 0.2× à 2.0× cameraDist du target. Le near tight
           (0.5×cd) coupait la géométrie au zoom proche → "plan gris"
           qui semblait traverser la pièce. Élargi (near=10) pour
           encaisser le zoom-in, far × 5 pour le zoom-out. -->
      <T.PerspectiveCamera bind:ref={cameraRef} makeDefault
                           position={[0, camY, camZ]}
                           fov={FOV}
                           near={tab === 'unitaire' ? 10 : cameraDist * 0.5}
                           far={tab === 'unitaire' ? cameraDist * 5 : cameraDist * 1.5}>
        {#if tab === 'unitaire'}
          <!-- OrbitControls DOIT être enfant de la caméra (sinon
               throw "Parent missing"). Rotation tactile + pinch zoom. -->
          <OrbitControls enableDamping
                         enableZoom enablePan={false}
                         minDistance={cameraDist * 0.2}
                         maxDistance={cameraDist * 2.0}
                         target={[0, 0, pathH * 0.5]} />
        {/if}
      </T.PerspectiveCamera>

      <Postprocess bloomStrength={bloomStrength}
                   bloomRadius={bloomRadius}
                   bloomThreshold={bloomThreshold} />

      <T.HemisphereLight skyColor={hemiSkyColor}
                         groundColor={hemiGroundColor}
                         intensity={hemiIntensity} />
      <T.DirectionalLight bind:ref={lightRef}
                          position={keyLightPos}
                          intensity={keyIntensity}
                          color={keyColor}
                          castShadow />
      <T.DirectionalLight position={rimLightPos}
                          intensity={rimIntensity}
                          color={rimColor} />

      <!-- Sol cream creusé à -floorDepth (comme Scene3D) → fossés
           visibles entre les pistes en mode exemple, et points de
           contact avec le fond visibles en unitaire (utile pour le
           paramétrage à venir des lumières / ombres). -->
      <T.Mesh position={[0, 0, -floorDepth]} receiveShadow>
        <T.PlaneGeometry args={[cw * 12, ch * 12]} />
        <T.MeshStandardMaterial color="#f1e9d9"
                                roughness={0.8} metalness={0.0} />
      </T.Mesh>

      {#if tab === 'global'}
        {#each GLOBAL_LAYOUT as p (p.type)}
          <T.Mesh position={[p.gx, p.gy, tilePosZ]}
                  geometry={tileGeometries[p.type]}
                  castShadow receiveShadow>
            <T.MeshStandardMaterial vertexColors color="#ffffff"
                                    roughness={0.65} metalness={0.02}
                                    envMapIntensity={0.40} />
          </T.Mesh>
          {#if neonGeometries[p.type]}
            <T.Mesh position={[p.gx, p.gy, neonPosZ]}
                    geometry={neonGeometries[p.type]}>
              <T.MeshStandardMaterial color={neonColor}
                                      emissive={neonColor}
                                      emissiveIntensity={neonIntensity}
                                      roughness={0.4} metalness={0.0}
                                      toneMapped={false} />
            </T.Mesh>
          {/if}
        {/each}
      {:else if tab === 'unitaire'}
        <T.Mesh position={[0, 0, tilePosZ]}
                geometry={tileGeometries[unitType]}
                castShadow receiveShadow>
          <T.MeshStandardMaterial vertexColors color="#ffffff"
                                  roughness={0.65} metalness={0.02}
                                  envMapIntensity={0.40} />
        </T.Mesh>
        {#if neonGeometries[unitType]}
          <T.Mesh position={[0, 0, neonPosZ]}
                  geometry={neonGeometries[unitType]}>
            <T.MeshStandardMaterial color={neonColor}
                                    emissive={neonColor}
                                    emissiveIntensity={neonIntensity}
                                    roughness={0.4} metalness={0.0}
                                    toneMapped={false} />
          </T.Mesh>
        {/if}
      {:else}
        {#each EXAMPLE_INSTANCES as p, i (i)}
          <T.Mesh position={[p.gx, p.gy, tilePosZ]}
                  rotation={[0, 0, p.rotZ]}
                  geometry={tileGeometries[p.type]}
                  castShadow receiveShadow>
            <T.MeshStandardMaterial vertexColors color="#ffffff"
                                    roughness={0.65} metalness={0.02}
                                    envMapIntensity={0.40} />
          </T.Mesh>
          {#if neonGeometries[p.type]}
            <T.Mesh position={[p.gx, p.gy, neonPosZ]}
                    rotation={[0, 0, p.rotZ]}
                    geometry={neonGeometries[p.type]}>
              <T.MeshStandardMaterial color={neonColor}
                                      emissive={neonColor}
                                      emissiveIntensity={neonIntensity}
                                      roughness={0.4} metalness={0.0}
                                      toneMapped={false} />
            </T.Mesh>
          {/if}
        {/each}
      {/if}
    </Canvas>
  </div>

  <!-- Lot 9 — Tabs params : géométrie / lumière. Un seul panneau
       visible à la fois → permet de toujours afficher les deux
       toggles, même sur écran mobile compact. -->
  <div class="params-tabs">
    <button class="params-tab" class:active={paramsTab === 'geo'}
            on:click={() => paramsTab = paramsTab === 'geo' ? null : 'geo'}>
      ⚙ géométrie {paramsTab === 'geo' ? '▴' : '▾'}
    </button>
    <button class="params-tab" class:active={paramsTab === 'light'}
            on:click={() => paramsTab = paramsTab === 'light' ? null : 'light'}>
      ☀ lumière {paramsTab === 'light' ? '▴' : '▾'}
    </button>
  </div>

  {#if paramsTab === 'geo'}
    <div class="params">
      <div class="params-body">
        <label class="slider">
          <span class="lbl">épaisseur piste</span>
          <input type="range" min="0.30" max="0.90" step="0.01"
                 bind:value={pathWRatio} />
          <span class="val">{(pathWRatio * 100).toFixed(0)}%</span>
        </label>
        <label class="slider">
          <span class="lbl">hauteur</span>
          <input type="range" min="0.25" max="1.50" step="0.01"
                 bind:value={pathHRatio} />
          <span class="val">{(pathHRatio * 100).toFixed(0)}%</span>
        </label>
        <label class="slider">
          <span class="lbl">bevel segments</span>
          <input type="range" min="1" max="10" step="1"
                 bind:value={bevelSegments} />
          <span class="val">{bevelSegments}</span>
        </label>
        <label class="slider">
          <span class="lbl">chanfrein %</span>
          <input type="range" min="0" max="100" step="1"
                 bind:value={chanfreinPercent} />
          <span class="val">{chanfreinPercent}</span>
        </label>
        <label class="slider">
          <span class="lbl">rail largeur</span>
          <input type="range" min="0" max="30" step="1"
                 bind:value={railW} />
          <span class="val">{railW}</span>
        </label>
        <label class="slider">
          <span class="lbl">rail profondeur</span>
          <input type="range" min="0" max="20" step="0.5"
                 bind:value={railDepth} />
          <span class="val">{railDepth.toFixed(1)}</span>
        </label>
        <label class="slider">
          <span class="lbl">neon épaisseur</span>
          <input type="range" min="0" max="30" step="0.5"
                 bind:value={neonW} />
          <span class="val">{neonW.toFixed(1)}</span>
        </label>
        <label class="slider">
          <span class="lbl">neon intensité</span>
          <input type="range" min="0" max="10" step="0.5"
                 bind:value={neonIntensity} />
          <span class="val">{neonIntensity.toFixed(1)}</span>
        </label>
        <label class="color-pick">
          <span class="lbl">neon couleur</span>
          <input type="color" bind:value={neonColor} />
          <span class="val">{neonColor}</span>
        </label>
        <label class="toggle">
          <input type="checkbox" bind:checked={useBridge} />
          <span>jonctions <strong>{useBridge ? 'ponts (CSG)' : 'coussin'}</strong></span>
        </label>
        <button class="reset-btn" on:click={resetParams}>reset</button>
      </div>
    </div>
  {:else if paramsTab === 'light'}
    <div class="params">
      <div class="params-body light-body">
      <div class="light-section">hémisphère</div>
      <label class="slider">
        <span class="lbl">intensité</span>
        <input type="range" min="0" max="3" step="0.05" bind:value={hemiIntensity} />
        <span class="val">{hemiIntensity.toFixed(2)}</span>
      </label>
      <label class="color-pick">
        <span class="lbl">sky</span>
        <input type="color" bind:value={hemiSkyColor} />
        <span class="val">{hemiSkyColor}</span>
      </label>
      <label class="color-pick">
        <span class="lbl">ground</span>
        <input type="color" bind:value={hemiGroundColor} />
        <span class="val">{hemiGroundColor}</span>
      </label>

      <div class="light-section">key directional</div>
      <label class="slider">
        <span class="lbl">intensité</span>
        <input type="range" min="0" max="3" step="0.05" bind:value={keyIntensity} />
        <span class="val">{keyIntensity.toFixed(2)}</span>
      </label>
      <label class="color-pick">
        <span class="lbl">color</span>
        <input type="color" bind:value={keyColor} />
        <span class="val">{keyColor}</span>
      </label>
      <label class="slider">
        <span class="lbl">pos X</span>
        <input type="range" min="-1" max="1" step="0.05" bind:value={keyPosX} />
        <span class="val">{keyPosX.toFixed(2)}</span>
      </label>
      <label class="slider">
        <span class="lbl">pos Y</span>
        <input type="range" min="-1" max="1" step="0.05" bind:value={keyPosY} />
        <span class="val">{keyPosY.toFixed(2)}</span>
      </label>
      <label class="slider">
        <span class="lbl">pos Z</span>
        <input type="range" min="0" max="1" step="0.05" bind:value={keyPosZ} />
        <span class="val">{keyPosZ.toFixed(2)}</span>
      </label>

      <div class="light-section">rim directional</div>
      <label class="slider">
        <span class="lbl">intensité</span>
        <input type="range" min="0" max="3" step="0.05" bind:value={rimIntensity} />
        <span class="val">{rimIntensity.toFixed(2)}</span>
      </label>
      <label class="color-pick">
        <span class="lbl">color</span>
        <input type="color" bind:value={rimColor} />
        <span class="val">{rimColor}</span>
      </label>
      <label class="slider">
        <span class="lbl">pos X</span>
        <input type="range" min="-1" max="1" step="0.05" bind:value={rimPosX} />
        <span class="val">{rimPosX.toFixed(2)}</span>
      </label>
      <label class="slider">
        <span class="lbl">pos Y</span>
        <input type="range" min="-2" max="2" step="0.05" bind:value={rimPosY} />
        <span class="val">{rimPosY.toFixed(2)}</span>
      </label>
      <label class="slider">
        <span class="lbl">pos Z</span>
        <input type="range" min="0" max="1" step="0.05" bind:value={rimPosZ} />
        <span class="val">{rimPosZ.toFixed(2)}</span>
      </label>

      <div class="light-section">ombres</div>
      <label class="slider">
        <span class="lbl">bias</span>
        <input type="range" min="-0.01" max="0.01" step="0.0001" bind:value={shadowBias} />
        <span class="val">{shadowBias.toFixed(4)}</span>
      </label>
      <label class="slider">
        <span class="lbl">normalBias</span>
        <input type="range" min="0" max="10" step="0.5" bind:value={shadowNormalBias} />
        <span class="val">{shadowNormalBias.toFixed(1)}</span>
      </label>
      <label class="slider">
        <span class="lbl">radius</span>
        <input type="range" min="0" max="20" step="1" bind:value={shadowRadius} />
        <span class="val">{shadowRadius}</span>
      </label>

      <div class="light-section">bloom</div>
      <label class="slider">
        <span class="lbl">strength</span>
        <input type="range" min="0" max="2" step="0.05" bind:value={bloomStrength} />
        <span class="val">{bloomStrength.toFixed(2)}</span>
      </label>
      <label class="slider">
        <span class="lbl">radius</span>
        <input type="range" min="0" max="1" step="0.05" bind:value={bloomRadius} />
        <span class="val">{bloomRadius.toFixed(2)}</span>
      </label>
      <label class="slider">
        <span class="lbl">threshold</span>
        <input type="range" min="0" max="1" step="0.05" bind:value={bloomThreshold} />
        <span class="val">{bloomThreshold.toFixed(2)}</span>
      </label>

        <button class="reset-btn" on:click={copyLightingDefaults}>copier defaults</button>
      </div>
    </div>
  {/if}

  <!-- Panneau debug in-app (capture console.warn/error). Permet de
       diagnostiquer crashes sur mobile sans DevTools. Visible par
       défaut tant qu'on debug l'algo chanfrein v6. -->
  <div class="debug-bar">
    <button class="debug-toggle" on:click={() => showDebug = !showDebug}>
      {showDebug ? '▼' : '▶'} debug log ({log.length})
    </button>
    {#if showDebug && log.length > 0}
      <button class="debug-clear" on:click={clearDebug}>clear</button>
    {/if}
  </div>
  {#if showDebug}
    <div class="debug-panel">
      {#if log.length === 0}
        <div class="debug-empty">aucun message</div>
      {:else}
        {#each log as entry}
          <div class="debug-line debug-{entry.level}">{entry.msg}</div>
        {/each}
      {/if}
    </div>
  {/if}

  {#if tab === 'global'}
    <div class="caption">
      Les 5 types de tuiles avec vertex AO. Top = PATH_COLOR pur, parois latérales en dégradé vers AO_SHADOW.
    </div>
  {:else if tab === 'unitaire'}
    <div class="caption">Type : <strong>{unitType}</strong> · pathW = {pathW.toFixed(1)} · pathH = {pathH.toFixed(1)} · <em>glisser pour pivoter, pincer pour zoomer</em></div>
  {:else}
    <div class="caption">Assemblage 4×3 généré via <strong>detectTileType</strong> (même path que le jeu) — jonctions cohérentes par construction.</div>
  {/if}
</div>

<style>
  .gallery-root {
    position: fixed; inset: 0;
    display: flex; flex-direction: column;
    font-family: 'Courier New', monospace;
    color: #3a2f24;
    z-index: 1;
  }

  .top-bar {
    display: flex; align-items: center;
    padding: 10px 14px;
    padding-top: calc(10px + env(safe-area-inset-top, 0px));
    padding-left:  calc(14px + env(safe-area-inset-left, 0px));
    padding-right: calc(14px + env(safe-area-inset-right, 0px));
    border-bottom: 1px solid rgba(0,0,0,0.08);
    background: rgba(241,233,217,0.85);
    backdrop-filter: blur(6px);
  }
  .back-btn {
    background: transparent; border: 1px solid rgba(0,0,0,0.20);
    border-radius: 6px; padding: 6px 12px;
    font-family: inherit; font-size: 12px; letter-spacing: 1px;
    color: #4b4032; cursor: pointer;
  }
  .back-btn:active { background: rgba(0,0,0,0.06); }
  .title {
    flex: 1; text-align: center;
    font-size: 13px; letter-spacing: 3px;
    color: #4b4032; font-weight: 700;
  }
  .dev-tag {
    display: inline-block; margin-left: 6px;
    padding: 1px 6px; border-radius: 3px;
    background: rgba(154,126,84,0.20);
    color: #6b5634; font-size: 9px; letter-spacing: 1.5px;
  }
  .spacer { width: 70px; }

  .tab-bar {
    display: flex; gap: 4px;
    padding: 8px 14px;
    background: rgba(241,233,217,0.65);
    border-bottom: 1px solid rgba(0,0,0,0.06);
  }
  .tab-bar button {
    flex: 1;
    background: transparent;
    border: 1px solid rgba(0,0,0,0.15);
    border-radius: 5px; padding: 7px 10px;
    font-family: inherit; font-size: 11px; letter-spacing: 1.5px;
    color: #6b5634; cursor: pointer;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .tab-bar button.active {
    background: rgba(154,126,84,0.15);
    border-color: #9a7e54;
    color: #3a2f24; font-weight: 700;
  }

  .type-bar {
    display: flex; gap: 4px; flex-wrap: wrap;
    padding: 6px 14px;
    background: rgba(241,233,217,0.45);
  }
  .type-bar button {
    background: transparent;
    border: 1px solid rgba(0,0,0,0.10);
    border-radius: 4px; padding: 5px 10px;
    font-family: inherit; font-size: 10px;
    color: #6b5634; cursor: pointer;
  }
  .type-bar button.active {
    background: rgba(154,126,84,0.20);
    border-color: #9a7e54;
    color: #3a2f24; font-weight: 700;
  }

  .canvas-wrap {
    flex: 1; position: relative; min-height: 0;
  }
  .canvas-wrap :global(canvas) {
    display: block; width: 100% !important; height: 100% !important;
    touch-action: none;
  }

  /* Params panel : sliders pathW + pathH */
  .params {
    background: rgba(241,233,217,0.85);
    border-top: 1px solid rgba(0,0,0,0.08);
  }
  .params-toggle {
    width: 100%;
    background: transparent; border: none;
    padding: 5px 14px;
    font-family: inherit; font-size: 10px;
    letter-spacing: 1.5px; color: #6b5634;
    text-align: center; cursor: pointer;
    border-bottom: 1px solid rgba(0,0,0,0.06);
  }
  .params-toggle:active { color: #3a2f24; }

  /* Lot 9 — Tabs params (géométrie / lumière) toujours visibles */
  .params-tabs {
    display: flex;
    background: rgba(241,233,217,0.85);
    border-top: 1px solid rgba(0,0,0,0.08);
  }
  .params-tab {
    flex: 1;
    background: transparent; border: none;
    padding: 7px 8px;
    font-family: inherit; font-size: 11px; font-weight: 600;
    letter-spacing: 1.5px; color: #6b5634;
    cursor: pointer;
    border-right: 1px solid rgba(0,0,0,0.06);
  }
  .params-tab:last-child { border-right: none; }
  .params-tab:active { color: #3a2f24; }
  .params-tab.active {
    background: rgba(154,126,84,0.18);
    color: #3a2f24;
    box-shadow: inset 0 -2px 0 #9a7e54;
  }
  .params-body {
    display: flex; flex-direction: column; gap: 6px;
    padding: 8px 14px;
  }
  /* Lot 9.2 — Le panneau lumière a beaucoup de sliders (~22) → on
     cap la hauteur et active le scroll vertical. -webkit-overflow-
     scrolling pour iOS Safari momentum. */
  .params-body.light-body {
    max-height: 45vh;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  .slider {
    display: grid;
    grid-template-columns: 110px 1fr 44px;
    align-items: center; gap: 10px;
    font-size: 10px; color: #4b4032;
    letter-spacing: 0.5px;
  }
  .slider .lbl { text-align: right; }
  .slider input[type="range"] {
    width: 100%;
    accent-color: #9a7e54;
    height: 24px;
  }
  .slider .val {
    text-align: right; font-weight: 700;
    color: #3a2f24; font-variant-numeric: tabular-nums;
  }
  .color-pick {
    display: grid;
    grid-template-columns: 110px 1fr 80px;
    align-items: center; gap: 10px;
    font-size: 10px; color: #4b4032;
    letter-spacing: 0.5px;
  }
  .color-pick .lbl { text-align: right; }
  .color-pick input[type="color"] {
    width: 100%; height: 28px;
    border: 1px solid rgba(0,0,0,0.15);
    border-radius: 4px;
    padding: 0; cursor: pointer;
    background: transparent;
  }
  .color-pick .val {
    text-align: right; font-family: monospace; font-size: 9px;
    color: #3a2f24;
  }
  /* Lot 9 — Section titles in lighting panel */
  .light-section {
    margin-top: 8px;
    padding: 4px 0 2px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    font-size: 10px; font-weight: 700;
    letter-spacing: 1px; text-transform: uppercase;
    color: #6b5634;
  }
  .light-section:first-child { margin-top: 0; }
  .toggle {
    display: flex; align-items: center; gap: 8px;
    font-size: 10px; color: #4b4032;
    letter-spacing: 0.5px;
    padding-left: 110px;
  }
  .toggle input { accent-color: #9a7e54; }
  .toggle strong { color: #3a2f24; }

  .reset-btn {
    align-self: flex-end;
    background: transparent;
    border: 1px solid rgba(0,0,0,0.20);
    border-radius: 4px;
    padding: 3px 10px;
    font-family: inherit; font-size: 9px;
    letter-spacing: 1.5px; color: #6b5634;
    cursor: pointer;
  }
  .reset-btn:active { background: rgba(0,0,0,0.06); }

  .caption {
    padding: 8px 14px;
    background: rgba(241,233,217,0.85);
    border-top: 1px solid rgba(0,0,0,0.06);
    font-size: 11px; color: #6b5634;
    text-align: center; letter-spacing: 0.5px;
  }
  .caption strong { color: #3a2f24; }
  .caption em { color: #6b5634; font-style: normal; opacity: 0.75; }

  /* Lot 8.10 v6.1 : panneau debug in-app */
  .debug-bar {
    display: flex; align-items: center; gap: 8px;
    padding: 4px 10px;
    background: rgba(40, 30, 20, 0.04);
    border-top: 1px solid rgba(0,0,0,0.06);
  }
  .debug-toggle, .debug-clear {
    background: transparent;
    border: 1px solid rgba(0,0,0,0.15);
    border-radius: 3px;
    padding: 2px 8px;
    font: 10px monospace;
    color: #6b5634;
    cursor: pointer;
  }
  .debug-clear { margin-left: auto; }
  .debug-panel {
    max-height: 140px; overflow-y: auto;
    padding: 4px 10px 8px;
    background: rgba(0,0,0,0.03);
    border-top: 1px solid rgba(0,0,0,0.06);
    font: 10px/1.4 monospace;
    color: #3a2f24;
  }
  .debug-empty { color: #9a8466; opacity: 0.6; }
  .debug-line {
    padding: 2px 4px;
    border-left: 2px solid transparent;
    white-space: pre-wrap; word-break: break-word;
  }
  .debug-warn  { border-left-color: #c89c4a; background: rgba(200,156,74,0.06); }
  .debug-error { border-left-color: #b85440; background: rgba(184,84,64,0.08); color: #6f2818; }
</style>
