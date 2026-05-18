<script>
  // Lot 6.17 — Post-processing : Bloom + Environment map procédural.
  // Lot 6.26 v2.7 — Env map remplacé par gradient warm cream custom
  // (la RoomEnvironment grise rendait le métal de la bille trop sombre
  // sur les côtés). Maintenant le ball metalness=1.0 reflète des tons
  // crème/chauds → ne paraît plus "collé" sur le plateau.
  //
  // Composant inline DANS le <Canvas> Threlte pour avoir accès au
  // renderer/scene/camera via useThrelte().

  import { onMount, onDestroy }  from 'svelte';
  import { useThrelte, useRender } from '@threlte/core';
  import { Vector2, PMREMGenerator, CanvasTexture,
           EquirectangularReflectionMapping, SRGBColorSpace,
           LinearFilter } from 'three';
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

  // Construit une CanvasTexture equirectangulaire (2:1) avec gradient
  // vertical chaud : haut crème clair (sky), équateur crème chaud
  // (parois de "studio" virtuel), bas tan plus saturé (sol). Les surfaces
  // métalliques metalness=1.0 reflètent ce gradient → bille gold prend
  // des tons chauds plutôt que de paraître sombre/noire sur les côtés.
  function createWarmEnvTexture() {
    const c = document.createElement('canvas');
    c.width = 512; c.height = 256;
    const cx = c.getContext('2d');
    const g = cx.createLinearGradient(0, 0, 0, 256);
    g.addColorStop(0.00, '#fff5e0');  // north pole : sky warm white
    g.addColorStop(0.35, '#f5e5c5');  // upper hemisphere
    g.addColorStop(0.50, '#e8d0a5');  // equator (ce que reflètent les
                                       // côtés visibles de la bille)
    g.addColorStop(0.65, '#d5b585');  // lower hemisphere
    g.addColorStop(1.00, '#c89870');  // south pole : floor warm tan
    cx.fillStyle = g; cx.fillRect(0, 0, 512, 256);
    const tex = new CanvasTexture(c);
    tex.mapping     = EquirectangularReflectionMapping;
    tex.colorSpace  = SRGBColorSpace;
    tex.minFilter   = LinearFilter;
    tex.magFilter   = LinearFilter;
    tex.generateMipmaps = false;
    tex.needsUpdate = true;
    return tex;
  }

  onMount(() => {
    // 1. Env map procédural via PMREMGenerator + texture custom warm.
    const pmrem = new PMREMGenerator(renderer);
    pmrem.compileEquirectangularShader();
    const warmTex = createWarmEnvTexture();
    envMap = pmrem.fromEquirectangular(warmTex).texture;
    scene.environment = envMap;
    warmTex.dispose();
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
