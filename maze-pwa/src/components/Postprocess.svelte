<script>
  // Lot 6.17 — Post-processing : Bloom + Environment map procédural.
  //
  // Composant inline DANS le <Canvas> Threlte pour avoir accès au
  // renderer/scene/camera via useThrelte().
  //
  // Effets appliqués :
  //  1. **Env map** : PMREMGenerator + RoomEnvironment → cube map
  //     procédural appliqué à scene.environment. La bille metalness=1.0
  //     reflète maintenant un studio diffus au lieu d'être noire.
  //  2. **Bloom** : EffectComposer + RenderPass + UnrealBloomPass +
  //     OutputPass. Capture les pixels emissive (neon stripes, dots,
  //     cadre) et applique un halo gaussien autour → glow lumineux
  //     comme le ref 2D.

  import { onMount, onDestroy }  from 'svelte';
  import { useThrelte, useRender } from '@threlte/core';
  import { Vector2, PMREMGenerator } from 'three';
  import { RoomEnvironment }     from 'three/examples/jsm/environments/RoomEnvironment.js';
  import { EffectComposer }      from 'three/examples/jsm/postprocessing/EffectComposer.js';
  import { RenderPass }          from 'three/examples/jsm/postprocessing/RenderPass.js';
  import { UnrealBloomPass }     from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
  import { OutputPass }          from 'three/examples/jsm/postprocessing/OutputPass.js';

  export let bloomStrength  = 0.9;     // intensité du glow
  export let bloomRadius    = 0.5;     // étalement du halo
  export let bloomThreshold = 0.15;    // seuil luminance (emissive captured)

  const ctx = useThrelte();
  const { size, scene, camera, renderer } = ctx;

  let composer    = null;
  let bloomPass   = null;
  let envMap      = null;
  let sizeUnsub   = null;

  onMount(() => {
    // 1. Env map procédural via RoomEnvironment + PMREMGenerator
    const pmrem = new PMREMGenerator(renderer);
    pmrem.compileEquirectangularShader();
    envMap = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envMap;
    pmrem.dispose();

    // 2. EffectComposer pipeline : Render → Bloom → Output
    // Lire size initiale via subscribe une-shot
    let w = window.innerWidth, h = window.innerHeight;
    const oneShot = size.subscribe(s => {
      if (s?.width)  w = s.width;
      if (s?.height) h = s.height;
    });
    oneShot();   // unsub immédiatement (valeurs capturées)

    composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera.current));
    bloomPass = new UnrealBloomPass(
      new Vector2(w, h),
      bloomStrength,
      bloomRadius,
      bloomThreshold
    );
    composer.addPass(bloomPass);
    composer.addPass(new OutputPass());
    composer.setSize(w, h);
    composer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Resize : subscribe persistent au size store
    sizeUnsub = size.subscribe(s => {
      if (composer && s?.width && s?.height) {
        composer.setSize(s.width, s.height);
      }
    });
  });

  // Update bloom params reactively (after onMount, bloomPass exists)
  $: if (bloomPass) {
    bloomPass.strength  = bloomStrength;
    bloomPass.radius    = bloomRadius;
    bloomPass.threshold = bloomThreshold;
  }

  // Render via composer — useRender remplace automatiquement le default
  // renderer.render(scene, camera). Threlte détecte useRender instances
  // et skip son autoRenderTask.
  useRender((_, delta) => {
    if (composer) composer.render(delta);
  });

  onDestroy(() => {
    if (sizeUnsub) sizeUnsub();
    if (envMap)   envMap.dispose();
    if (composer) {
      composer.passes.forEach(p => p.dispose?.());
      composer.dispose?.();
    }
    if (scene) scene.environment = null;
  });
</script>
