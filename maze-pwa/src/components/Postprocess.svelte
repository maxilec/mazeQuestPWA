<script>
  // Lot 6.17 — Post-processing : Bloom + Environment map procédural.
  // Lot 9.11 — Ambient Occlusion temps réel (N8AO) réintroduite avec
  // la BONNE classe : N8AOPass (compatible three's EffectComposer
  // natif), pas N8AOPostPass (qui est pour la lib postprocessing de
  // vanruesc). Le pass est instancié au mount et toggle via .enabled
  // pour éviter toute manipulation runtime du pipeline (le Lot 9.5
  // crashait à cause de l'add/remove dynamique).
  //
  // Composant inline DANS le <Canvas> Threlte pour avoir accès au
  // renderer/scene/camera via useThrelte().

  import { onMount, onDestroy }  from 'svelte';
  import { useThrelte, useRender } from '@threlte/core';
  import { Vector2, PMREMGenerator, CanvasTexture, Color,
           EquirectangularReflectionMapping, SRGBColorSpace,
           LinearFilter } from 'three';
  import { EffectComposer }      from 'three/examples/jsm/postprocessing/EffectComposer.js';
  import { RenderPass }          from 'three/examples/jsm/postprocessing/RenderPass.js';
  import { UnrealBloomPass }     from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
  import { OutputPass }          from 'three/examples/jsm/postprocessing/OutputPass.js';
  import { N8AOPass }            from 'n8ao';

  export let bloomStrength  = 0.9;     // intensité du glow
  export let bloomRadius    = 0.5;     // étalement du halo
  export let bloomThreshold = 0.15;    // seuil luminance (emissive captured)
  export let aoRadius           = 2.0;
  export let aoDistanceFalloff  = 1.0;
  export let aoIntensity        = 3.0; // 0 = pass.enabled = false

  const ctx = useThrelte();
  const { size, scene, camera, renderer } = ctx;

  let composer    = null;
  let bloomPass   = null;
  let n8aoPass    = null;
  let envMap      = null;
  let sizeUnsub   = null;

  // Construit une CanvasTexture equirectangulaire (2:1) avec gradient
  // vertical : sky chaud → équateur crème → sol sombre/AO.
  function createWarmEnvTexture() {
    const c = document.createElement('canvas');
    c.width = 512; c.height = 256;
    const cx = c.getContext('2d');
    const g = cx.createLinearGradient(0, 0, 0, 256);
    g.addColorStop(0.00, '#fff5e0');
    g.addColorStop(0.30, '#f5e0c0');
    g.addColorStop(0.50, '#d4b58c');
    g.addColorStop(0.70, '#8a6242');
    g.addColorStop(0.85, '#4a2e1a');
    g.addColorStop(1.00, '#1a0c08');
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
    scene.background = new Color(0xf1e9d9);

    // 1. Env map procédural via PMREMGenerator + texture custom warm.
    const pmrem = new PMREMGenerator(renderer);
    pmrem.compileEquirectangularShader();
    const warmTex = createWarmEnvTexture();
    envMap = pmrem.fromEquirectangular(warmTex).texture;
    scene.environment = envMap;
    warmTex.dispose();
    pmrem.dispose();

    // 2. EffectComposer pipeline : Render → N8AO → Bloom → Output
    let w = window.innerWidth, h = window.innerHeight;
    const oneShot = size.subscribe(s => {
      if (s?.width)  w = s.width;
      if (s?.height) h = s.height;
    });
    oneShot();

    composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera.current));

    // N8AO inséré dès le mount à sa position correcte (avant Bloom).
    // Toggle via .enabled au lieu de manipuler composer.passes.
    n8aoPass = new N8AOPass(scene, camera.current, w, h);
    n8aoPass.configuration.aoRadius        = aoRadius;
    n8aoPass.configuration.distanceFalloff = aoDistanceFalloff;
    n8aoPass.configuration.intensity       = aoIntensity;
    n8aoPass.enabled                       = aoIntensity > 0;
    composer.addPass(n8aoPass);

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

    sizeUnsub = size.subscribe(s => {
      if (composer && s?.width && s?.height) {
        composer.setSize(s.width, s.height);
        if (n8aoPass) n8aoPass.setSize(s.width, s.height);
      }
    });
  });

  // Update bloom params reactively (after onMount, bloomPass exists)
  $: if (bloomPass) {
    bloomPass.strength  = bloomStrength;
    bloomPass.radius    = bloomRadius;
    bloomPass.threshold = bloomThreshold;
  }

  // Update N8AO params + enabled flag reactively. Slider à 0 → pass
  // désactivé (économise les passes GPU). Le pass reste dans le
  // composer, ré-activable instantanément.
  $: if (n8aoPass) {
    n8aoPass.enabled = aoIntensity > 0;
    if (n8aoPass.enabled) {
      n8aoPass.configuration.aoRadius        = aoRadius;
      n8aoPass.configuration.distanceFalloff = aoDistanceFalloff;
      n8aoPass.configuration.intensity       = aoIntensity;
    }
  }

  // Render via composer. try/catch reste comme filet de sécurité
  // (en cas de crash inattendu sur un device exotique, on retombe sur
  // un render direct).
  let composerErrorLogged = false;
  useRender((_, delta) => {
    if (!composer) {
      renderer.render(scene, camera.current);
      return;
    }
    try {
      composer.render(delta);
    } catch (err) {
      if (!composerErrorLogged) {
        // eslint-disable-next-line no-console
        console.error('[Postprocess] composer.render crash → fallback direct:', err);
        composerErrorLogged = true;
      }
      renderer.setRenderTarget(null);
      renderer.autoClear = true;
      renderer.render(scene, camera.current);
    }
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
