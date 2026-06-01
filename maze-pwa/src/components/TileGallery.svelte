<script>
  // Lot 8 — Environnement de test des tuiles "Lego" hors maze.
  // Accessible via le lien "intégration dev" du menu principal.
  //
  // 3 onglets :
  //  - Global   : grille 3×2 affichant les 5 types de tuiles côte à côte
  //  - Unitaire : une seule tuile au centre, selector pour switcher le type
  //  - Exemple  : assemblage représentatif (chaque type au moins une fois)
  //
  // Lighting / post-processing identiques à Scene3D pour valider en
  // conditions réelles. À terme : sliders pathW / pathH.

  import { onDestroy } from 'svelte';
  import { Canvas, T } from '@threlte/core';
  import { ExtrudeGeometry, PCFSoftShadowMap } from 'three';
  import { screen } from '../stores.js';
  import Postprocess from './Postprocess.svelte';
  import {
    buildStraightShape, buildCornerShape, buildTShape,
    buildCrossShape, buildDeadEndShape,
    applyVertexAO,
  } from '../lib/tile-geometry.js';

  let tab = 'global';          // 'global' | 'unitaire' | 'exemple'
  let unitType = 'straight';
  let cameraRef;
  let lightRef;

  // Critique : sans lookAt explicite, la caméra à (0, camY, camZ)
  // regarde droit le long de -Z (point d'origine (0, camY, 0)), pas
  // (0, 0, 0) où sont les tuiles. Forcer lookAt(0,0,0) à chaque
  // changement de ref → recadrage correct.
  $: if (cameraRef) cameraRef.lookAt(0, 0, 0);

  // Setup shadow camera identique à Scene3D (mapSize 2048, bias -0.001,
  // normalBias 2.0, radius 12). Bounds élargis pour couvrir le mode
  // "exemple" qui étend les tuiles jusqu'à ±cw*2.
  $: if (lightRef) {
    const s = lightRef.shadow;
    s.mapSize.set(2048, 2048);
    const half = 300;
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

  // Constantes locales (figées v1 — sliders à venir).
  // Reprennent les ratios de Scene3D :
  //  pathW = cell × trackRatio défaut (0.65)
  //  pathH = min(cw, ch) × 0.80
  const cw = 100, ch = 100;
  const pathW = cw * 0.65;
  const pathH = Math.min(cw, ch) * 0.80;
  const bevelSize      = pathH * 0.12;
  const bevelThickness = pathH * 0.15;

  // Caméra : on cadre une zone ~ 4 cells de large pour le mode global.
  // FOV 7 (téléobjectif comme Scene3D) → distance calculée pour faire
  // entrer ~440 unités de hauteur visible.
  const FOV = 7;
  const DEG = Math.PI / 180;
  const TILT_DEG = 6;
  const VISIBLE_H = 440;
  const cameraDist = (VISIBLE_H / 2) / Math.tan((FOV * DEG) / 2) * 1.15;
  const camY = -cameraDist * Math.sin(TILT_DEG * DEG);
  const camZ =  cameraDist * Math.cos(TILT_DEG * DEG);

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

  // Layout grille 3×2 (global) : straight | corner | T en haut,
  // cross | deadEnd en bas (centré).
  const GLOBAL_LAYOUT = [
    { type: 'straight', gx: -cw, gy:  cw * 0.55 },
    { type: 'corner',   gx:  0,  gy:  cw * 0.55 },
    { type: 'T',        gx:  cw, gy:  cw * 0.55 },
    { type: 'cross',    gx: -cw * 0.5, gy: -cw * 0.55 },
    { type: 'deadEnd',  gx:  cw * 0.5, gy: -cw * 0.55 },
  ];

  // Layout exemple : assemblage 4×3 où chaque type apparaît au moins
  // une fois, et les tiles adjacentes touchent (test seamless edges).
  // Le mapping est conçu pour que les ouvertures coïncident :
  //   col-1   col0   col+1   col+2
  //   ┌────┬────┬────┬────┐
  //   │    │ DE │ S  │ DE │  row +1 (deadEnd / straight V / deadEnd)
  //   ├────┼────┼────┼────┤
  //   │ DE │ +  │ ─  │ ┘  │  row 0  (deadEnd / cross / straight H / corner)
  //   ├────┼────┼────┼────┤
  //   │    │ ┬  │    │ │  │  row -1 (T / straight V)
  //   └────┴────┴────┴────┘
  //
  // (rotZ exprimé en radians ; 0 = orientation canonique)
  const EXAMPLE_LAYOUT = [
    // row +1
    { type: 'deadEnd',  gx: -cw * 0.5, gy:  cw,         rotZ: Math.PI },        // cap down → ouvre vers le bas
    { type: 'straight', gx:  cw * 0.5, gy:  cw,         rotZ: 0 },              // vertical
    { type: 'deadEnd',  gx:  cw * 1.5, gy:  cw,         rotZ: Math.PI },
    // row 0
    { type: 'deadEnd',  gx: -cw * 1.5, gy:  0,          rotZ: -Math.PI / 2 },   // cap left → ouvre droite
    { type: 'cross',    gx: -cw * 0.5, gy:  0,          rotZ: 0 },
    { type: 'straight', gx:  cw * 0.5, gy:  0,          rotZ: Math.PI / 2 },    // horizontale
    { type: 'corner',   gx:  cw * 1.5, gy:  0,          rotZ: Math.PI },        // coin TR pivoté → ouvre L+B
    // row -1
    { type: 'T',        gx: -cw * 0.5, gy: -cw,         rotZ: -Math.PI / 2 },   // T ouvre N+E+S → après rot -90° : ouvre W+N+E (top)
    { type: 'straight', gx:  cw * 1.5, gy: -cw,         rotZ: 0 },
  ];

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
      <T.PerspectiveCamera bind:ref={cameraRef} makeDefault
                           position={[0, camY, camZ]}
                           fov={FOV}
                           near={cameraDist * 0.5}
                           far={cameraDist * 1.5} />

      <Postprocess bloomStrength={0.15} bloomRadius={0.08} bloomThreshold={0.85} />

      <!-- Lighting identique à Scene3D (HemisphereLight + key + rim) -->
      <T.HemisphereLight skyColor="#ffffff"
                         groundColor="#e8d6bc"
                         intensity={1.15} />
      <!-- Key light : positions équivalentes à Scene3D (quasi-vertical,
           1400 unités au-dessus). Shadow camera setup via lightRef. -->
      <T.DirectionalLight bind:ref={lightRef}
                          position={[-5, 5, 1400]}
                          intensity={1.15}
                          color="#fff5e0"
                          castShadow />
      <!-- Rim light : même angle que Scene3D (rasante depuis +Y haut).
           Position absolue scaled pour scène compacte. -->
      <T.DirectionalLight position={[0, 700, 250]}
                          intensity={0.55}
                          color="#fff5e0" />

      <!-- Sol cream (reçoit les drop shadows des tuiles) -->
      <T.Mesh position={[0, 0, -1]} receiveShadow>
        <T.PlaneGeometry args={[cw * 8, ch * 8]} />
        <T.MeshStandardMaterial color="#f1e9d9"
                                roughness={0.8} metalness={0.0} />
      </T.Mesh>

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
        {#each EXAMPLE_LAYOUT as p, i (i)}
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
    <div class="caption">Type : <strong>{unitType}</strong> · pathW = {pathW.toFixed(1)} · pathH = {pathH.toFixed(1)}</div>
  {:else}
    <div class="caption">Assemblage représentatif — vérifier les seamless edges entre tuiles adjacentes.</div>
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
  .spacer { width: 70px; }   /* matches back-btn width to keep title centered */

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
  }

  .caption {
    padding: 8px 14px;
    background: rgba(241,233,217,0.85);
    border-top: 1px solid rgba(0,0,0,0.06);
    font-size: 11px; color: #6b5634;
    text-align: center; letter-spacing: 0.5px;
  }
  .caption strong { color: #3a2f24; }
</style>
