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
  import { CanvasTexture, SRGBColorSpace, PCFSoftShadowMap } from 'three';
  import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
  import { getSvgSource, svgReady } from '../lib/render.js';

  export let G            = null;
  export let deviceAngle  = 0;
  export let boardTiltX   = 0;
  export let boardTiltY   = 0;
  export let rect         = null;    // { top, left, width, height } CSS px

  const DEG              = Math.PI / 180;
  const MAX_TILT_DEG     = 12;
  const FOV              = 35;
  // Lot 6 : élévation dynamique de la caméra — top-down au repos,
  // ramp jusqu'à CAM_MAX_ELEV_DEG quand l'input tilt est non nul. Donne
  // un cue 3D pendant le mouvement sans imposer d'angle au repos.
  const CAM_MAX_ELEV_DEG = 12;

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

  // Lot 6.2 — retour caméra dead-on PERMANENT. L'utilisateur reportait
  // un « rebond » : avec l'élévation dynamique, l'origine restait centrée
  // mais le centre visuel de la maze (qui n'est pas le même point que
  // l'origine 3D pour une projection perspective tilted) se décalait
  // vers le bas. Avec dead-on, pas de shift. Le relief 3D vient
  // désormais des shadows (cf. <Canvas shadows={...}>).
  $: camY    = 0;
  $: camZ    = cameraDist;
  // cameraZ utilisé pour le `far` plane (compat avec d'autres calculs).
  $: cameraZ     = cameraDist;

  // Camera ref + lookAt : Three.js ne met pas à jour la rotation de la
  // caméra automatiquement quand position change ; on rappelle lookAt
  // sur chaque changement des coords caméra.
  let cameraRef;
  $: if (cameraRef && Number.isFinite(camY) && Number.isFinite(camZ)) {
    cameraRef.lookAt(0, 0, 0);
  }

  // Lot 6.3 : config shadow par ref pour être SÛR que les bounds de
  // la shadow camera + updateProjectionMatrix sont appliqués (le
  // dotted attrs Threlte ne le fait pas systématiquement).
  let lightRef;
  $: if (lightRef && G) {
    const s = lightRef.shadow;
    s.mapSize.set(1024, 1024);
    s.camera.left   = -G.W * 0.7;
    s.camera.right  =  G.W * 0.7;
    s.camera.top    =  G.H * 0.7;
    s.camera.bottom = -G.H * 0.7;
    s.camera.near   = 1;
    s.camera.far    = Math.min(G.cw, G.ch) * 18;
    s.camera.updateProjectionMatrix();
    s.bias          = -0.002;
    // Lot 6.11 : softer shadow edges (PCFSoftShadowMap blur radius).
    s.radius        = 4;
    s.needsUpdate   = true;
  }

  // ── Rotations (signs flipped pour compenser la chiralité Three.js ↔ CSS) ─
  // CSS (Y down) et Three.js (Y up) ont des sens de rotation opposés autour
  // des 3 axes. Sans flip, on obtenait portrait→tilt X inversé, landscape→
  // plateau pivoté 180°. Les signes ci-dessous matchent visuellement le
  // rendu 2D historique.
  $: worldLockZ = +deviceAngle * DEG;
  $: tiltX      = +boardTiltY * MAX_TILT_DEG * DEG;
  $: tiltY      = +boardTiltX * MAX_TILT_DEG * DEG;

  // ── Bille ──────────────────────────────────────────────────────────────
  $: ballX = G ? G.ball.x - G.W / 2 : 0;
  $: ballY = G ? G.H / 2 - G.ball.y : 0;
  $: ballR = G ? G.br : 10;

  // ── Pistes 3D extrudées (Lot 6.9) — refonte vs Lot 6.8 ───────────────
  // Le ref montre la PISTE comme structure SURÉLEVÉE (où la bille roule),
  // pas les murs. On extrude donc les CONNEXIONS entre cellules ouvertes :
  //  - Segments : boxes entre paires de cellules adjacentes ouvertes
  //  - Nodes    : cylindres aux centres de cellules (extrémités arrondies
  //               + jonctions, intersections lumineuses).
  // Les "murs" deviennent juste l'absence de piste (zones de void).
  // Lot 6.13 : pathW +25% (0.60→0.75), pathBase +100% (0.10→0.20)
  // pour renforcer le sentiment d'extrusion 3D.
  $: pathW    = G ? Math.min(G.cw, G.ch) * 0.75 : 30;   // largeur de piste
  $: pathH    = G ? Math.min(G.cw, G.ch) * 0.32 : 15;   // hauteur d'extrusion
  // Lot 6.10 : gap entre le sol et le BAS de la piste — donne l'effet
  // « piste qui flotte au-dessus du plateau ». Le shadow casté par la
  // piste sur le sol renforce l'effet floating.
  $: pathBase = G ? Math.min(G.cw, G.ch) * 0.20 : 5;
  $: neonW    = G ? Math.min(G.cw, G.ch) * 0.05 : 2.5;
  // Lot 6.11 : couleur piste teinte plus chaude #EADFCF (vs #ece5d2).
  const PATH_COLOR = '#EADFCF';

  function computePathSegments(g) {
    const out = [];
    for (let r = 0; r < g.R; r++) {
      for (let c = 0; c < g.C; c++) {
        const ce = g.maze[r][c];
        const cx = c * g.cw + g.cw / 2 - g.W / 2;
        const cy = g.H / 2 - r * g.ch - g.ch / 2;
        // Connexion droite (segment horizontal vers le voisin de droite)
        if (!ce.R && c < g.C - 1) {
          out.push({ type: 'h',
                     x: cx + g.cw / 2,
                     y: cy,
                     length: g.cw });
        }
        // Connexion basse (segment vertical vers le voisin du bas)
        if (!ce.B && r < g.R - 1) {
          out.push({ type: 'v',
                     x: cx,
                     y: cy - g.ch / 2,
                     length: g.ch });
        }
      }
    }
    return out;
  }

  function computePathNodes(g) {
    const out = [];
    for (let r = 0; r < g.R; r++) {
      for (let c = 0; c < g.C; c++) {
        const ce = g.maze[r][c];
        // Une cellule a un node dès qu'au moins un côté est ouvert. Dans
        // un maze parfait c'est toujours le cas, mais on garde la garde.
        const openCount = (!ce.T?1:0) + (!ce.R?1:0) + (!ce.B?1:0) + (!ce.L?1:0);
        if (openCount > 0) {
          out.push({
            x: c * g.cw + g.cw / 2 - g.W / 2,
            y: g.H / 2 - r * g.ch - g.ch / 2,
            openCount,
            isIntersection: openCount >= 3,
          });
        }
      }
    }
    return out;
  }

  // ── Couleur néon dynamique (theme.neon) pour cadre + accent ────────────
  $: neonColor = G?.theme?.neon ?? '#00c8ff';

  // Animation de chute (port du sc2 de render.js:422) : pendant la phase
  // 'falling' (bille dans un trou ou aspirée par le finish), la bille
  // shrink de 1 à 0 sur 480 ms, puis disparaît. Sans ça, en 3D la bille
  // restait stationnaire jusqu'au respawn — pas de feedback visuel.
  $: fallScale = (G?.phase === 'falling')
    ? Math.max(0, 1 - (now - G.fallT) / 480)
    : 1;
  $: ballVisible = fallScale > 0.03;

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

  // ── Ball glow texture (Lot 6.14) ───────────────────────────────────────
  // Texture circulaire procédurale (radial gradient) pour les trail
  // sprites de la bille. Sans cette texture, T.SpriteMaterial rendait
  // un carré coloré solide → bug visuel (carré jaune au centre de la
  // bille immobile).
  let ballGlowTexture = null;
  function createBallGlowTexture() {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0,    'rgba(212,175,55,1)');
    g.addColorStop(0.5,  'rgba(212,175,55,0.5)');
    g.addColorStop(1,    'rgba(212,175,55,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
    const tex = new CanvasTexture(c);
    tex.colorSpace = SRGBColorSpace;
    tex.needsUpdate = true;
    return tex;
  }

  onMount(() => {
    ballGlowTexture = createBallGlowTexture();
    checkTextures();
    animRaf = requestAnimationFrame(animTick);
  });

  onDestroy(() => {
    if (textureCheckRaf) cancelAnimationFrame(textureCheckRaf);
    if (animRaf)         cancelAnimationFrame(animRaf);
    if (plateauTexture)  plateauTexture.dispose();
    if (ballGlowTexture) ballGlowTexture.dispose();
    for (const tex of Object.values(textures)) tex.dispose();
  });
</script>

<div class="threlte-host" bind:this={host}>
  <Canvas shadows={PCFSoftShadowMap}>
    <T.PerspectiveCamera bind:ref={cameraRef} makeDefault
                         position={[0, camY, camZ]}
                         fov={FOV} near={1} far={cameraZ * 3} />

    <!-- Bloom post-process (Lot 6.14) — TODO : ajouter UnrealBloomPass via
         EffectComposer pour amplifier les emissive. Pour l'instant, les
         PointLights + emissive donnent déjà un bon glow. -->

    <!-- Lighting (Lot 6.3) — bind:ref + config shadow programmatique
         (updateProjectionMatrix appelé explicitement, plus fiable que
         le dotted attrs parsing). Bonus visuel par-dessus le fake AO
         des walls — si shadows runtime marchent, ombres réelles, sinon
         on a déjà le cue géométrique. -->
    <!-- Lot 6.12 : lighting « jour ensoleillé » — bumper toutes les
         intensités + tint chaud (#fff8e6) sur la key directional pour
         évoquer un soleil chaud. -->
    <T.AmbientLight intensity={0.95} color="#fff5e0" />
    <T.DirectionalLight bind:ref={lightRef}
                        position={[G ? G.W * 0.35 : 200,
                                   G ? G.H * 0.20 : 100,
                                   (G ? Math.min(G.cw, G.ch) : 80) * 7]}
                        intensity={1.40}
                        color="#fff8e6"
                        castShadow />
    <T.DirectionalLight position={[-150, -200, 400]}
                        intensity={0.35} color="#f4eddb" />

    <!-- World-lock root group -->
    <T.Group rotation.z={worldLockZ}>
      <!-- Tilt 3D group -->
      <T.Group rotation.x={tiltX} rotation.y={tiltY}>

        <!-- Sol (track) — texture clear : beige uniforme + ligne néon
             visible. Mat papier (rough 0.92, metal 0). Reçoit les
             ombres projetées par les murs (Lot 6.2). -->
        {#if G}
          <T.Mesh position={[0, 0, 0]} receiveShadow>
            <T.PlaneGeometry args={[G.W, G.H]} />
            {#if plateauTexture}
              <T.MeshStandardMaterial map={plateauTexture}
                                      roughness={0.92} metalness={0.0} />
            {:else}
              <T.MeshStandardMaterial color={G?.theme?.trackFloor ?? '#d6cebc'}
                                      roughness={0.92} metalness={0.0} />
            {/if}
          </T.Mesh>
        {/if}

        <!-- Pistes 3D extrudées (Lot 6.9) — refonte structurelle.
             On extrude les CONNEXIONS entre cellules ouvertes (piste
             surélevée où la bille roule), pas les murs. Les "murs"
             sont l'absence de piste (zones de void cream-floor).
             1) Path segments : box entre paires de cellules ouvertes.
             2) Path nodes    : cylindres aux centres → caps arrondies
                aux extrémités + jonctions T/+/etc. -->
        {#if G && G.maze}
          <!-- Path segments — Lot 6.11 : RoundedBoxGeometry pour des
               bords arrondis (au lieu de BoxGeometry vif). Args :
               [w, h, d, segments=3, radius=0.18 (en unités unité)].
               Scale s'applique ensuite, les corners restent doux. -->
          {#each computePathSegments(G) as seg, i (`s${i}-${seg.type}`)}
            <T.Mesh position={[seg.x, seg.y, pathBase + pathH / 2]}
                    scale={
                      seg.type === 'h'
                        ? [seg.length + pathW * 0.3, pathW, pathH]
                        : [pathW, seg.length + pathW * 0.3, pathH]
                    }
                    castShadow receiveShadow>
              <T is={RoundedBoxGeometry} args={[1, 1, 1, 3, 0.18]} />
              <T.MeshStandardMaterial color={PATH_COLOR}
                                      roughness={0.82} metalness={0.04} />
            </T.Mesh>
          {/each}

          <!-- Path nodes (cell centers) — Lot 6.14 : revert à
               CylinderGeometry pour TOUS les nodes (Lot 6.13 selective
               geometry a créé des « blocs » visibles aux dead-ends et
               passages droits). Cylinder = caps parfaitement circulaires
               vue du dessus, blend lisse avec segments adjacents. -->
          {#each computePathNodes(G) as node, i (`n${i}`)}
            <T.Mesh position={[node.x, node.y, pathBase + pathH / 2]}
                    rotation={[Math.PI / 2, 0, 0]}
                    castShadow receiveShadow>
              <T.CylinderGeometry args={[pathW / 2, pathW / 2, pathH, 32]} />
              <T.MeshStandardMaterial color={PATH_COLOR}
                                      roughness={0.82} metalness={0.04} />
            </T.Mesh>
          {/each}

          <!-- Rainure néon sur le dessus de la piste — Lot 6.13 :
               dual-layer (white core + color halo) pour match ref 2D.
               White core : fine bright stripe au centre.
               Color halo : teinte colorée + glow émissif autour. -->
          {#each computePathSegments(G) as seg, i (`ns${i}`)}
            <!-- White core (intense emissive) -->
            <T.Mesh position={[seg.x, seg.y, pathBase + pathH + 0.35]}>
              <T.PlaneGeometry args={
                seg.type === 'h'
                  ? [seg.length, neonW * 0.3]
                  : [neonW * 0.3, seg.length]
              } />
              <T.MeshStandardMaterial color="#ffffff"
                                      emissive="#ffffff"
                                      emissiveIntensity={1.0}
                                      transparent={true}
                                      opacity={1.0} />
            </T.Mesh>
            <!-- Color halo (glow coloré) -->
            <T.Mesh position={[seg.x, seg.y, pathBase + pathH + 0.40]}>
              <T.PlaneGeometry args={
                seg.type === 'h'
                  ? [seg.length, neonW * 0.7]
                  : [neonW * 0.7, seg.length]
              } />
              <T.MeshStandardMaterial color={neonColor}
                                      emissive={neonColor}
                                      emissiveIntensity={0.6}
                                      transparent={true}
                                      opacity={0.75} />
            </T.Mesh>
          {/each}

          <!-- Neon dots aux INTERSECTIONS UNIQUEMENT — Lot 6.13 :
               SphereGeometry pour soft glow naturel (falloff sphérique).
               Seules les vraies intersections (>=3 sorties) ont des dots. -->
          {#each computePathNodes(G) as node, i (`nb${i}`)}
            {#if node.isIntersection}
              <T.Mesh position={[node.x, node.y, pathBase + pathH + 0.50]}>
                <T.SphereGeometry args={[neonW * 0.8, 16, 8]} />
                <T.MeshStandardMaterial color={neonColor}
                                        emissive={neonColor}
                                        emissiveIntensity={1.2}
                                        transparent={true}
                                        opacity={0.95}
                                        toneMapped={false} />
              </T.Mesh>
            {/if}
          {/each}
        {/if}

        <!-- Checkpoints (Lot 6.13) — thin luminous stripes (PlaneGeometry)
             vertes (non passées) ou jaunes (passées). Match du rendu
             2D luminous fin. -->
        {#if G?.checkpoints}
          {#each G.checkpoints as cp, i (i)}
            {@const cx      = cp.c * G.cw + G.cw / 2 - G.W / 2}
            {@const cy      = G.H / 2 - (cp.r * G.ch + G.ch / 2)}
            {@const cpClr   = cp.passed ? '#ffcc00' : '#00ff80'}
            {@const cpLen   = Math.min(G.cw, G.ch) * 0.50}
            {@const cpThick = neonW * 0.6}
            <T.Mesh position={[cx, cy, pathBase + pathH + 0.8]}>
              <T.PlaneGeometry args={
                cp.horizontal
                  ? [cpLen, cpThick]
                  : [cpThick, cpLen]
              } />
              <T.MeshStandardMaterial color={cpClr}
                                      emissive={cpClr}
                                      emissiveIntensity={1.5}
                                      toneMapped={false}
                                      transparent={true}
                                      opacity={0.95} />
            </T.Mesh>
          {/each}
        {/if}

        <!-- PointLights pour neon real light — Lot 6.14 :
             UNIQUEMENT aux intersections (5-8 lights total par niveau)
             pour préserver les perf mobile. Lot 6.13 avait 15-20 lights
             (segments + intersections) qui saturaient le GPU iOS.
             Trade-off : illumination pas continue, mais 60 FPS sustained.
             Compensation : intensity bumped 1.4→1.6, distance 1.5x→2.5x. -->
        {#if G && G.maze}
          {#each computePathNodes(G) as node, i (`light-node-${i}`)}
            {#if node.isIntersection}
              <T.PointLight position={[node.x, node.y, pathBase + pathH + 2]}
                            intensity={1.6}
                            distance={Math.min(G.cw, G.ch) * 2.5}
                            color={neonColor}
                            decay={1.5} />
            {/if}
          {/each}
        {/if}

        <!-- Cadre néon — Lot 6.5 : frame au RAS du sol (z=0.5) avec
             extrusion minimale (frH=2) pour éviter la parallaxe avec
             le sol pendant le tilt. Le cadre suit le sol au pixel
             près. emissive donne le glow sans dépendre du Z. -->
        {#if G}
          {@const frT  = 2.5}
          {@const frH  = 2}
          {@const frZ  = 0.5}
          <!-- top : edge à G.H/2, frame inside vers Y descendant -->
          <T.Mesh position={[0, G.H / 2 - frT / 2, frZ]}>
            <T.BoxGeometry args={[G.W, frT, frH]} />
            <T.MeshStandardMaterial color={neonColor}
                                    emissive={neonColor}
                                    emissiveIntensity={1.6}
                                    toneMapped={false} />
          </T.Mesh>
          <!-- bottom -->
          <T.Mesh position={[0, -G.H / 2 + frT / 2, frZ]}>
            <T.BoxGeometry args={[G.W, frT, frH]} />
            <T.MeshStandardMaterial color={neonColor}
                                    emissive={neonColor}
                                    emissiveIntensity={1.6}
                                    toneMapped={false} />
          </T.Mesh>
          <!-- left -->
          <T.Mesh position={[-G.W / 2 + frT / 2, 0, frZ]}>
            <T.BoxGeometry args={[frT, G.H - frT * 2, frH]} />
            <T.MeshStandardMaterial color={neonColor}
                                    emissive={neonColor}
                                    emissiveIntensity={1.6}
                                    toneMapped={false} />
          </T.Mesh>
          <!-- right -->
          <T.Mesh position={[G.W / 2 - frT / 2, 0, frZ]}>
            <T.BoxGeometry args={[frT, G.H - frT * 2, frH]} />
            <T.MeshStandardMaterial color={neonColor}
                                    emissive={neonColor}
                                    emissiveIntensity={1.6}
                                    toneMapped={false} />
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
              <!-- Lot 6.10 : z = pathBase + pathH + 1.5 (au-dessus de
                   la piste surélevée) + depthTest=false → toujours
                   visible par-dessus tout. -->
              <T.Sprite position={[cx, cy, pathBase + pathH + 1.5]}
                        scale={[size, size, 1]}>
                <T.SpriteMaterial map={tex} transparent={true}
                                  opacity={fade}
                                  depthWrite={false} depthTest={false} />
              </T.Sprite>
            {/if}
          {/each}
        {/if}

        <!-- Finish portal (Lot 4) — anneaux + label FINISH baked-in.
             Lot 6.1 : aspect-corrected (raster 256×303 → ratio 1.184)
             pour ne pas distordre l'anneau et le label. -->
        {#if G?.hole && textures.finish}
          {@const fx      = G.hole.c * G.cw + G.cw / 2 - G.W / 2}
          {@const fy      = G.H / 2 - (G.hole.r * G.ch + G.ch / 2)}
          {@const fbase   = G.br * 4}
          {@const fpulse  = 1 + Math.sin(now * 0.003) * 0.05}
          {@const fsize   = fbase * fpulse}
          {@const fAspect = 303 / 256}
          <T.Sprite position={[fx, fy, pathBase + pathH + 1.5]}
                    scale={[fsize, fsize * fAspect, 1]}>
            <T.SpriteMaterial map={textures.finish} transparent={true}
                              depthWrite={false} depthTest={false} />
          </T.Sprite>
        {/if}

        <!-- Bille — Lot 6.13 : métal pur gold avec emissive pour
             luminosité accrue. Le metal reflète les neon PointLights,
             l'emissive ajoute du brillant. -->
        {#if G && ballVisible}
          <T.Mesh position={[ballX, ballY, (pathBase + pathH + ballR) * fallScale]}
                  scale={[fallScale, fallScale, fallScale]}
                  castShadow>
            <T.SphereGeometry args={[ballR, 32, 16]} />
            <T.MeshStandardMaterial color="#D4AF37"
                                    emissive="#f4c267"
                                    emissiveIntensity={0.3}
                                    metalness={1.0}
                                    roughness={0.15} />
          </T.Mesh>

          <!-- Ball trail — Lot 6.14 : 8 sprites circulaires (texture
               procédurale radial gradient) qui fade derrière le vecteur
               de mouvement. Velocity gate : ne render que si la bille
               bouge (vmag > 0.5) → pas de carré jaune au centre quand
               immobile. -->
          {@const vmag = Math.hypot(G.ball.vx || 0, G.ball.vy || 0)}
          {#if vmag > 0.5 && ballGlowTexture}
            {#each Array(8) as _, i}
              {@const trailPos = {
                  x: ballX - (i / 8) * (G.ball.vx || 0) * 0.5,
                  y: ballY - (i / 8) * (G.ball.vy || 0) * 0.5,
                  z: pathBase + pathH + ballR * 0.8,
                }}
              {@const opacity = (1 - i / 8) * 0.5}
              {@const scale = ballR * 1.4 * (1 - i / 8 * 0.3)}
              <T.Sprite position={[trailPos.x, trailPos.y, trailPos.z]}
                        scale={[scale, scale, 1]}>
                <T.SpriteMaterial map={ballGlowTexture}
                                  transparent={true}
                                  opacity={opacity}
                                  depthTest={false}
                                  depthWrite={false} />
              </T.Sprite>
            {/each}
          {/if}
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
