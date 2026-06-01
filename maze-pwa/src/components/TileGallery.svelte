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
  import { ExtrudeGeometry, PCFSoftShadowMap } from 'three';
  import { screen } from '../stores.js';
  import Postprocess from './Postprocess.svelte';
  import {
    buildStraightShape, buildCornerShape, buildTShape,
    buildCrossShape, buildDeadEndShape,
    applyVertexAO, detectTileType,
  } from '../lib/tile-geometry.js';

  let tab = 'global';          // 'global' | 'unitaire' | 'exemple'
  let unitType = 'cross';
  let cameraRef;
  let lightRef;

  // OrbitControls (unitaire) prend la main sur la caméra → on désactive
  // notre lookAt manuel quand on est dans cet onglet pour ne pas
  // contre-balancer les rotations utilisateur à chaque frame.
  $: if (cameraRef && tab !== 'unitaire') cameraRef.lookAt(0, 0, 0);

  // Setup shadow camera. Bounds élargis pour couvrir le mode exemple
  // (4×3 cells = ±200 en Y, ±150 en X).
  $: if (lightRef) {
    const s = lightRef.shadow;
    s.mapSize.set(2048, 2048);
    const half = 320;
    s.camera.left   = -half;
    s.camera.right  =  half;
    s.camera.top    =  half;
    s.camera.bottom = -half;
    s.camera.near   = 1;
    s.camera.far    = 2000;
    s.camera.updateProjectionMatrix();
    s.bias          = -0.001;
    s.normalBias    = 2.0;
    s.radius        = 12;
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

  // Reprennent les ratios de Scene3D :
  //  pathW = cell × trackRatio défaut (0.65)
  //  pathH = min(cw, ch) × 0.80
  const cw = 100, ch = 100;
  const pathW = cw * 0.65;
  const pathH = Math.min(cw, ch) * 0.80;
  const bevelSize      = pathH * 0.12;
  const bevelThickness = pathH * 0.15;

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

  // Construit les 5 geometries une fois.
  const types = ['straight', 'corner', 'T', 'cross', 'deadEnd'];
  const builders = {
    straight: buildStraightShape,
    corner:   buildCornerShape,
    T:        buildTShape,
    cross:    buildCrossShape,
    deadEnd:  buildDeadEndShape,
  };
  const extrudeSettings = {
    depth: pathH,
    bevelEnabled: true,
    bevelThickness, bevelSize,
    bevelOffset: 0,
    bevelSegments: 5,
    steps: 1,
    curveSegments: 24,
  };
  const tileGeometries = {};
  for (const t of types) {
    const shape = builders[t](pathW, cw, ch, bevelSize);
    const geo = new ExtrudeGeometry(shape, extrudeSettings);
    applyVertexAO(geo, bevelThickness);
    tileGeometries[t] = geo;
  }

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
    <Canvas shadows={PCFSoftShadowMap}
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

      <Postprocess bloomStrength={0.15} bloomRadius={0.08} bloomThreshold={0.85} />

      <T.HemisphereLight skyColor="#ffffff"
                         groundColor="#e8d6bc"
                         intensity={1.15} />
      <T.DirectionalLight bind:ref={lightRef}
                          position={[-5, 5, 1400]}
                          intensity={1.15}
                          color="#fff5e0"
                          castShadow />
      <T.DirectionalLight position={[0, 700, 250]}
                          intensity={0.55}
                          color="#fff5e0" />

      <!-- Sol cream — masqué en unitaire pour une vue isolée propre.
           Sinon en dézoomant l'utilisateur voyait le plan de sol à
           des angles bizarres / piece le traversant. -->
      {#if tab !== 'unitaire'}
        <T.Mesh position={[0, 0, -1]} receiveShadow>
          <T.PlaneGeometry args={[cw * 12, ch * 12]} />
          <T.MeshStandardMaterial color="#f1e9d9"
                                  roughness={0.8} metalness={0.0} />
        </T.Mesh>
      {/if}

      {#if tab === 'global'}
        {#each GLOBAL_LAYOUT as p (p.type)}
          <T.Mesh position={[p.gx, p.gy, 0]}
                  geometry={tileGeometries[p.type]}
                  castShadow receiveShadow>
            <T.MeshStandardMaterial vertexColors color="#ffffff"
                                    roughness={0.65} metalness={0.02}
                                    envMapIntensity={0.40} />
          </T.Mesh>
        {/each}
      {:else if tab === 'unitaire'}
        <T.Mesh geometry={tileGeometries[unitType]}
                castShadow receiveShadow>
          <T.MeshStandardMaterial vertexColors color="#ffffff"
                                  roughness={0.65} metalness={0.02}
                                  envMapIntensity={0.40} />
        </T.Mesh>
      {:else}
        {#each EXAMPLE_INSTANCES as p, i (i)}
          <T.Mesh position={[p.gx, p.gy, 0]}
                  rotation={[0, 0, p.rotZ]}
                  geometry={tileGeometries[p.type]}
                  castShadow receiveShadow>
            <T.MeshStandardMaterial vertexColors color="#ffffff"
                                    roughness={0.65} metalness={0.02}
                                    envMapIntensity={0.40} />
          </T.Mesh>
        {/each}
      {/if}
    </Canvas>
  </div>

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

  .caption {
    padding: 8px 14px;
    background: rgba(241,233,217,0.85);
    border-top: 1px solid rgba(0,0,0,0.06);
    font-size: 11px; color: #6b5634;
    text-align: center; letter-spacing: 0.5px;
  }
  .caption strong { color: #3a2f24; }
  .caption em { color: #6b5634; font-style: normal; opacity: 0.75; }
</style>
