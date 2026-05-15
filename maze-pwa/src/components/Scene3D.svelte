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
  import { CanvasTexture, SRGBColorSpace } from 'three';
  import { getSvgSource, svgReady } from '../lib/render.js';

  export let G            = null;
  export let deviceAngle  = 0;
  export let boardTiltX   = 0;
  export let boardTiltY   = 0;
  export let rect         = null;    // { top, left, width, height } CSS px

  const DEG               = Math.PI / 180;
  const MAX_TILT_DEG      = 12;
  const FOV               = 35;
  // Caméra légèrement surélevée : passe d'une vue 100% top-down (où le
  // tilt sur X est ambigu visuellement — l'œil lit le déplacement en Z
  // comme un changement de profondeur, pas comme une pente) à une vue
  // 3/4 plongeante très subtile. Le bord du plateau qui s'élève passe
  // clairement HAUT sur l'écran, celui qui s'enfonce passe clairement BAS.
  const CAM_ELEVATION_DEG = 10;

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
  $: isLandscape = (deviceAngle === 90 || deviceAngle === 270);
  $: visibleH    = G ? (isLandscape ? G.W : G.H) : 660;
  $: cameraDist  = (visibleH / 2) / Math.tan((FOV * DEG) / 2) * 1.05;
  $: camY        = Math.sin(CAM_ELEVATION_DEG * DEG) * cameraDist;
  $: camZ        = Math.cos(CAM_ELEVATION_DEG * DEG) * cameraDist;
  // cameraZ encore exposé pour le `far` plane (compat).
  $: cameraZ     = cameraDist;

  // Camera ref + lookAt : Three.js ne met pas à jour la rotation de la
  // caméra automatiquement quand position change ; il faut rappeler
  // lookAt(target) à chaque changement de position.
  let cameraRef;
  $: if (cameraRef && Number.isFinite(camY) && Number.isFinite(camZ)) {
    cameraRef.lookAt(0, 0, 0);
  }

  // ── Rotations (signs flipped pour compenser la chiralité Three.js ↔ CSS) ─
  // CSS (Y down) et Three.js (Y up) ont des sens de rotation opposés autour
  // des 3 axes. Sans flip, on obtenait portrait→tilt X inversé, landscape→
  // plateau pivoté 180°. Les signes ci-dessous matchent visuellement le
  // rendu 2D historique.
  $: worldLockZ = +deviceAngle * DEG;
  $: tiltX      = +boardTiltY * MAX_TILT_DEG * DEG;
  $: tiltY      = -boardTiltX * MAX_TILT_DEG * DEG;

  // ── Bille ──────────────────────────────────────────────────────────────
  $: ballX = G ? G.ball.x - G.W / 2 : 0;
  $: ballY = G ? G.H / 2 - G.ball.y : 0;
  $: ballR = G ? G.br : 10;

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
  function animTick() {
    now = performance.now();
    animRaf = requestAnimationFrame(animTick);
  }

  onMount(() => {
    checkTextures();
    animRaf = requestAnimationFrame(animTick);
  });

  onDestroy(() => {
    if (textureCheckRaf) cancelAnimationFrame(textureCheckRaf);
    if (animRaf)         cancelAnimationFrame(animRaf);
    if (plateauTexture)  plateauTexture.dispose();
    for (const tex of Object.values(textures)) tex.dispose();
  });
</script>

<div class="threlte-host" bind:this={host}>
  <Canvas>
    <T.PerspectiveCamera bind:ref={cameraRef} makeDefault
                         position={[0, camY, camZ]} fov={FOV}
                         near={1} far={cameraZ * 3} />

    <!-- Lighting renforcé : ratio ambient/directional baissé pour plus
         de contraste (les ombres et highlights ressortent), fill light
         côté gauche pour adoucir les ombres dures. -->
    <T.AmbientLight intensity={0.35} />
    <T.DirectionalLight position={[200, 500, 600]} intensity={1.2}  />
    <T.DirectionalLight position={[-300, 200, 300]} intensity={0.35} />

    <!-- World-lock root group -->
    <T.Group rotation.z={worldLockZ}>
      <!-- Tilt 3D group -->
      <T.Group rotation.x={tiltX} rotation.y={tiltY}>

        <!-- Plateau texturé (Lot 3) — roughness/metalness affinés pour
             un look béton patiné plus que mat plastique. -->
        {#if G}
          <T.Mesh position={[0, 0, 0]}>
            <T.PlaneGeometry args={[G.W, G.H]} />
            {#if plateauTexture}
              <T.MeshStandardMaterial map={plateauTexture}
                                      roughness={0.65} metalness={0.15}
                                      envMapIntensity={0.8} />
            {:else}
              <T.MeshStandardMaterial color="#2a2e36"
                                      roughness={0.85} metalness={0.1} />
            {/if}
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
              {@const base   = G.br * 2.8}
              {@const fade   = col.collected ? Math.max(0, 1 - age / 400) : 1}
              {@const pulse  = col.collected
                ? 1 + (age / 400) * 0.45
                : 1 + Math.sin(now * 0.004 + col.c + col.r) * 0.06}
              {@const size   = base * pulse}
              <T.Sprite position={[cx, cy, G.br * 0.4]}
                        scale={[size, size, 1]}>
                <T.SpriteMaterial map={tex} transparent={true}
                                  opacity={fade} depthWrite={false} />
              </T.Sprite>
            {/if}
          {/each}
        {/if}

        <!-- Finish portal (Lot 4) — anneaux + label FINISH baked-in -->
        {#if G?.hole && textures.finish}
          {@const fx     = G.hole.c * G.cw + G.cw / 2 - G.W / 2}
          {@const fy     = G.H / 2 - (G.hole.r * G.ch + G.ch / 2)}
          {@const fbase  = G.br * 4}
          {@const fpulse = 1 + Math.sin(now * 0.003) * 0.05}
          {@const fsize  = fbase * fpulse}
          <T.Sprite position={[fx, fy, G.br * 0.4]}
                    scale={[fsize, fsize, 1]}>
            <T.SpriteMaterial map={textures.finish} transparent={true}
                              depthWrite={false} />
          </T.Sprite>
        {/if}

        <!-- Ball shadow (Lot 5) — disque sombre projeté sur le plateau,
             dans le tilt group donc il suit la pente. Donne un cue de
             profondeur immédiat : quand le plateau bascule, l'ombre
             reste collée à la surface et la bille semble en flotter,
             ce qui rend la direction de la pente VISIBLE. Pas une vraie
             shadow map (trop coûteux pour ce qu'on en tire). -->
        {#if G}
          <T.Mesh position={[ballX, ballY, G.br * 0.05]}>
            <T.CircleGeometry args={[ballR * 1.3, 24]} />
            <T.MeshBasicMaterial color="#000000" transparent={true}
                                 opacity={0.42} depthWrite={false} />
          </T.Mesh>
        {/if}

        <!-- Bille — finish brass légèrement plus poli. -->
        {#if G}
          <T.Mesh position={[ballX, ballY, ballR]}>
            <T.SphereGeometry args={[ballR, 32, 16]} />
            <T.MeshStandardMaterial color="#c08050"
                                    roughness={0.18} metalness={0.85} />
          </T.Mesh>
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
