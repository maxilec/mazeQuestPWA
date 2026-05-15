<script>
  // Scaffold minimal pour la migration 3D (Lot 1).
  //
  // Affiche une scène Threlte avec un cube rotatif au centre. Aucune
  // interaction avec G ni inputMgr — c'est juste pour valider que :
  //   1. Threlte + Three.js bundlent et tournent dans le PWA.
  //   2. Le code-splitting via dynamic import fonctionne (chunk séparé).
  //   3. Le rendu WebGL démarre correctement sur le browser cible.
  //
  // Les Lots 2+ remplaceront progressivement ce cube par le board, la bille,
  // la piste, etc., et intègreront la HUD HTML par-dessus.

  import { onMount, onDestroy } from 'svelte';
  import { Canvas, T }          from '@threlte/core';

  let rotX = 0;
  let rotY = 0;
  let raf  = null;

  onMount(() => {
    let last = performance.now();
    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      rotX += dt * 0.6;
      rotY += dt * 0.85;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
  });

  onDestroy(() => { if (raf) cancelAnimationFrame(raf); });
</script>

<div class="threlte-host">
  <Canvas>
    <T.PerspectiveCamera makeDefault position={[0, 0, 6]} />
    <T.AmbientLight intensity={0.55} />
    <T.DirectionalLight position={[3, 5, 4]} intensity={0.9} />

    <!-- Cube de test — sera remplacé par le board en Lot 2 -->
    <T.Mesh rotation.x={rotX} rotation.y={rotY}>
      <T.BoxGeometry args={[1.8, 1.8, 1.8]} />
      <T.MeshStandardMaterial
        color="#1ad8ff"
        emissive="#0a4060"
        emissiveIntensity={0.35}
        roughness={0.4}
        metalness={0.2} />
    </T.Mesh>
  </Canvas>
</div>

<style>
  .threlte-host {
    position: fixed;
    inset: 0;
    z-index: 1;
    background: transparent;
  }
  .threlte-host :global(canvas) {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
