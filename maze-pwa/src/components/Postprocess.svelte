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
  import { Vector2, PMREMGenerator, CanvasTexture, Color,
           EquirectangularReflectionMapping, SRGBColorSpace,
           LinearFilter } from 'three';
  import { EffectComposer }      from 'three/examples/jsm/postprocessing/EffectComposer.js';
  import { RenderPass }          from 'three/examples/jsm/postprocessing/RenderPass.js';
  import { UnrealBloomPass }     from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
  import { OutputPass }          from 'three/examples/jsm/postprocessing/OutputPass.js';
  // n8ao : import dynamique différé pour ne pas crasher Postprocess si
  // le module n8ao a un souci de chargement (peer dep three / WebGL2
  // unsupported). Loaded only when aoIntensity > 0 au mount.

  export let bloomStrength  = 0.9;     // intensité du glow
  export let bloomRadius    = 0.5;     // étalement du halo
  export let bloomThreshold = 0.15;    // seuil luminance (emissive captured)
  // Lot 9 — Ambient Occlusion temps réel (N8AO). aoIntensity=0 désactive
  // le pass complètement (perf mobile fallback).
  export let aoRadius           = 2.0;
  export let aoDistanceFalloff  = 1.0;
  export let aoIntensity        = 3.0;

  const ctx = useThrelte();
  const { size, scene, camera, renderer } = ctx;

  let composer    = null;
  let bloomPass   = null;
  let n8aoPass    = null;
  let n8aoLoading = false;
  let currentW    = 0;
  let currentH    = 0;
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
    // Lot 7.2.e : scene.background = Color cream restauré après test
    // transparence concluant que l'EffectComposer/Bloom écrasait
    // l'alpha malgré renderPass.clearAlpha=0. Triple safety net :
    // - scene.background = Color #f1e9d9 (fond cream uniforme)
    // - Floor mesh restauré côté Scene3D (color #f1e9d9)
    // - BG plane 2D restauré côté Scene3D (color #f1e9d9)
    scene.background = new Color(0xf1e9d9);

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
    currentW = w;
    currentH = h;

    // Resize : subscribe persistent au size store
    sizeUnsub = size.subscribe(s => {
      if (composer && s?.width && s?.height) {
        composer.setSize(s.width, s.height);
        currentW = s.width;
        currentH = s.height;
        if (n8aoPass?.setSize) n8aoPass.setSize(s.width, s.height);
      }
    });
  });

  // Lot 9 — N8AO lazy reactive : on crée le pass à la demande quand
  // aoIntensity passe de 0 à >0 (slider gallery). Le default est 0 pour
  // éviter le crash mobile au mount. Import dynamique pour isoler les
  // erreurs de module (peer deps fragiles).
  // Lot 9.5 — Auto-disable si crash : si composer.render throw après
  // insertion N8AO, on retire le pass et on bloque toute re-création
  // (n8aoBroken=true) pour éviter le ping-pong infini insert/crash.
  let n8aoBroken = false;
  function removeN8aoPass() {
    if (!n8aoPass || !composer) return;
    const idx = composer.passes.indexOf(n8aoPass);
    if (idx >= 0) composer.passes.splice(idx, 1);
    n8aoPass.dispose?.();
    n8aoPass = null;
  }
  $: if (composer && !n8aoPass && !n8aoLoading && !n8aoBroken && aoIntensity > 0) {
    n8aoLoading = true;
    import('n8ao')
      .then(({ N8AOPostPass }) => {
        if (!composer || n8aoPass || n8aoBroken) { n8aoLoading = false; return; }
        try {
          const pass = new N8AOPostPass(scene, camera.current, currentW, currentH);
          pass.configuration.aoRadius        = aoRadius;
          pass.configuration.distanceFalloff = aoDistanceFalloff;
          pass.configuration.intensity       = aoIntensity;
          // Insère AVANT bloom (passes[1])
          composer.insertPass(pass, 1);
          // Smoke test : render une frame pour vérifier que le pipeline
          // tient avec N8AO. Si ça throw → on retire et on marque broken
          // pour éviter de re-tenter à chaque mouvement de slider.
          try {
            composer.render(0.016);
            n8aoPass = pass;   // OK, on garde
          } catch (renderErr) {
            const i = composer.passes.indexOf(pass);
            if (i >= 0) composer.passes.splice(i, 1);
            pass.dispose?.();
            n8aoBroken = true;
            // eslint-disable-next-line no-console
            console.error('[Postprocess] N8AO render smoke test failed → disabled:', renderErr);
          }
        } catch (err) {
          n8aoBroken = true;
          // eslint-disable-next-line no-console
          console.error('[Postprocess] N8AO init failed:', err);
        }
        n8aoLoading = false;
      })
      .catch((err) => {
        n8aoBroken = true;
        // eslint-disable-next-line no-console
        console.error('[Postprocess] n8ao module load failed:', err);
        n8aoLoading = false;
      });
  }

  // Update bloom params reactively (after onMount, bloomPass exists)
  $: if (bloomPass) {
    bloomPass.strength  = bloomStrength;
    bloomPass.radius    = bloomRadius;
    bloomPass.threshold = bloomThreshold;
  }

  // Update N8AO params reactively (le pass est créé lazy ci-dessus).
  $: if (n8aoPass) {
    n8aoPass.configuration.aoRadius        = aoRadius;
    n8aoPass.configuration.distanceFalloff = aoDistanceFalloff;
    n8aoPass.configuration.intensity       = aoIntensity;
  }

  // Render via composer — useRender remplace automatiquement le default
  // renderer.render(scene, camera). Threlte détecte useRender instances
  // et skip son autoRenderTask.
  // Lot 9.5 — si composer.render throw, on suspecte d'abord N8AO : on
  // retire le pass et on retry composer.render. Si ça crash encore, on
  // fallback sur renderer.render direct (avec autoClear remis et
  // renderTarget=null pour réparer l'état GL corrompu par le pass).
  let composerErrorLogged = false;
  useRender((_, delta) => {
    if (!composer) {
      renderer.render(scene, camera.current);
      return;
    }
    try {
      composer.render(delta);
    } catch (err) {
      // 1ère tentative de remediation : N8AO suspect → retire-le.
      if (n8aoPass) {
        removeN8aoPass();
        n8aoBroken = true;
        if (!composerErrorLogged) {
          // eslint-disable-next-line no-console
          console.error('[Postprocess] composer.render crash → N8AO removed:', err);
          composerErrorLogged = true;
        }
        try {
          composer.render(delta);
          return;
        } catch (err2) {
          // composer encore cassé après retrait N8AO → fallback direct.
          err = err2;
        }
      }
      if (!composerErrorLogged) {
        // eslint-disable-next-line no-console
        console.error('[Postprocess] composer.render crash → fallback direct:', err);
        composerErrorLogged = true;
      }
      // Répare l'état GL avant fallback (N8AO laisse souvent un
      // renderTarget actif et autoClear=false).
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
