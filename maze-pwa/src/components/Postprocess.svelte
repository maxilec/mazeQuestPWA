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
  // vertical : sky chaud → équateur crème → sol sombre/AO. Le sol très
  // sombre simule l'ambient occlusion vue depuis la bille metalness=1.0
  // (le bord visible de la bille — silhouette vue de la caméra du dessus
  // — reflète le SUD du env map, donc en assombrissant cette zone on
  // crée un dégradé sombre sur les bords de la bille → effet AO).
  function createWarmEnvTexture() {
    const c = document.createElement('canvas');
    c.width = 512; c.height = 256;
    const cx = c.getContext('2d');
    const g = cx.createLinearGradient(0, 0, 0, 256);
    g.addColorStop(0.00, '#fff5e0');  // north pole : sky warm white
    g.addColorStop(0.30, '#f5e0c0');  // upper hemisphere
    g.addColorStop(0.50, '#d4b58c');  // equator (refl. au-dessus du ball)
    g.addColorStop(0.70, '#8a6242');  // lower hemisphere (refl. côtés)
    g.addColorStop(0.85, '#4a2e1a');  // near south (refl. silhouette)
    g.addColorStop(1.00, '#1a0c08');  // south pole : AO sombre (refl. bas)
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
    // Lot 7.2.d : transparence vraie du canvas (approche Gemini).
    // - scene.background = null (pas de fond opaque)
    // - renderer alpha:true (set côté <Canvas> rendererParameters)
    // - renderer.setClearAlpha(0) → clear avec alpha transparent
    // - renderPass.clearAlpha = 0 explicit → l'EffectComposer ne
    //   réinitialise pas le canal alpha à 1.0 lors du rendu
    // Le HUD .bg-cream du DOM transparait alors directement (avec
    // ses radial gradients) derrière la scène 3D, sans interférence
    // tone mapping ou color management de Three.js.
    scene.background = null;
    renderer.setClearColor(0x000000, 0);
    renderer.setClearAlpha(0);

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
    // Lot 7.2.d : RenderPass clearAlpha=0 explicit → l'EffectComposer
    // ne ré-opacifie pas le canal alpha à 1.0 lors du clear.
    const renderPass = new RenderPass(scene, camera.current);
    renderPass.clearAlpha = 0;
    composer.addPass(renderPass);
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
    if (scene) {
      scene.environment = null;
      scene.background  = null;
    }
  });
</script>
