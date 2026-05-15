<script>
  // Lot 2 — Scène 3D : plateau + bille + world-lock + tilt 3D.
  //
  // Architecture :
  //   - <Canvas> Threlte : contexte WebGL.
  //   - <T.Group rotation.z={-deviceAngle}> : « world-lock » — la scène
  //     pivote pour rester orientée vers le joueur quelle que soit
  //     l'orientation physique de l'appareil. Équivalent 3D de l'ancienne
  //     CSS rotation `wlRot` sur .world-rotate.
  //   - <T.Group rotation.x/y={tiltY/X}> : tilt 3D de la planche, piloté
  //     par boardTiltX/Y (input gyro/joystick/clavier). Remplace l'ancien
  //     hack CSS `perspective(700px) rotateX/Y(...)`.
  //   - À l'intérieur : plateau (PlaneGeometry plat — la texture viendra
  //     en Lot 3), murs du labyrinthe (BoxGeometry par mur), bille
  //     (SphereGeometry métallique).
  //
  // Mapping coords G (canvas pixels) → 3D (centré origine, Y haut) :
  //   3D.x = G.x - G.W/2
  //   3D.y = G.H/2 - G.y          (Y inversé : pixel grandit vers le bas)
  //
  // L'élément hôte est `pointer-events: none` — les touch events tombent
  // sur le canvas 2D en arrière-plan, capturé par inputMgr.

  import { onDestroy }   from 'svelte';
  import { Canvas, T }   from '@threlte/core';
  import { CanvasTexture, SRGBColorSpace } from 'three';

  export let G            = null;
  export let deviceAngle  = 0;
  export let boardTiltX   = 0;
  export let boardTiltY   = 0;

  // ── Texture du plateau (Lot 3) ─────────────────────────────────────────
  // Game.svelte pré-rend les couches statiques du plateau (surface +
  // piste béton + ligne néon glacé) dans G.staticTexture, un offscreen
  // <canvas>. On l'enveloppe ici en THREE.CanvasTexture et on l'applique
  // au plateau via map. Régénérée à chaque changement de canvas source
  // (initLevel : nouveau maze, nouvelle palette néon, ou resize).
  let plateauTexture = null;
  $: if (G?.staticTexture && (plateauTexture?.image !== G.staticTexture)) {
    if (plateauTexture) plateauTexture.dispose();
    plateauTexture = new CanvasTexture(G.staticTexture);
    plateauTexture.colorSpace = SRGBColorSpace;
    plateauTexture.needsUpdate = true;
  }
  onDestroy(() => { if (plateauTexture) plateauTexture.dispose(); });

  const DEG          = Math.PI / 180;
  const MAX_TILT_DEG = 12;
  const FOV          = 35;

  // Scene3D occupe tout le viewport. Caméra dimensionnée pour englober
  // le maze (pivoté ou non par world-lock). En landscape, après rotation
  // -90°, la hauteur visible du maze = G.W ; en portrait c'est G.H.
  // +20 % de marge pour que le HUD à l'avant ne masque pas trop le maze.
  $: isLandscape = (deviceAngle === 90 || deviceAngle === 270);
  $: visibleH    = G ? (isLandscape ? G.W : G.H) : 660;
  $: cameraZ     = (visibleH / 2) / Math.tan((FOV * DEG) / 2) * 1.20;

  // World-lock : rotation Z = -deviceAngle.
  $: worldLockZ = -deviceAngle * DEG;

  // Tilt 3D : axes inversés/swappés pour matcher l'ancien rendu CSS
  // (rotateX d'un angle négatif sur Y du tilt, rotateY positif sur X).
  $: tiltX = -boardTiltY * MAX_TILT_DEG * DEG;
  $: tiltY =  boardTiltX * MAX_TILT_DEG * DEG;

  // Position et rayon de la bille.
  $: ballX  = G ? G.ball.x - G.W / 2 : 0;
  $: ballY  = G ? G.H / 2 - G.ball.y : 0;
  $: ballR  = G ? G.br : 10;
  // La bille « repose » sur le plateau (Z ≈ rayon, sphère tangente au plan).
</script>

<div class="threlte-host">
  <Canvas>
    <T.PerspectiveCamera makeDefault position={[0, 0, cameraZ]} fov={FOV} near={1} far={cameraZ * 3} />

    <T.AmbientLight intensity={0.45} />
    <T.DirectionalLight position={[200, 400, 600]} intensity={0.85} />

    <!-- World-lock root group -->
    <T.Group rotation.z={worldLockZ}>
      <!-- Tilt 3D group -->
      <T.Group rotation.x={tiltX} rotation.y={tiltY}>

        <!-- Plateau texturé (Lot 3) — la texture issue de render.js inclut
             surface, piste béton et ligne néon. Plus de murs séparés en
             3D (la texture les rend déjà visuellement). Lot 6 ajoutera
             du vrai relief 3D si on le souhaite. -->
        {#if G}
          <T.Mesh position={[0, 0, 0]}>
            <T.PlaneGeometry args={[G.W, G.H]} />
            {#if plateauTexture}
              <T.MeshStandardMaterial map={plateauTexture}
                                      roughness={0.85} metalness={0.05} />
            {:else}
              <T.MeshStandardMaterial color="#2a2e36"
                                      roughness={0.85} metalness={0.1} />
            {/if}
          </T.Mesh>
        {/if}

        <!-- Bille -->
        {#if G}
          <T.Mesh position={[ballX, ballY, ballR]}>
            <T.SphereGeometry args={[ballR, 32, 16]} />
            <T.MeshStandardMaterial color="#c08050" roughness={0.25} metalness={0.75} />
          </T.Mesh>
        {/if}

      </T.Group>
    </T.Group>
  </Canvas>
</div>

<style>
  .threlte-host {
    /* Plein viewport. La HUD a un z-index supérieur pour rester en avant. */
    position: fixed;
    inset: 0;
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
