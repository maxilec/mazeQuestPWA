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
  $: pathW    = G ? Math.min(G.cw, G.ch) * 0.60 : 30;   // largeur de piste
  $: pathH    = G ? Math.min(G.cw, G.ch) * 0.28 : 15;   // hauteur d'extrusion
  $: neonW    = G ? Math.min(G.cw, G.ch) * 0.06 : 3;    // largeur ligne néon
  const PATH_COLOR = '#ece5d2';   // theme.trackHi cream — piste surélevée

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
  <Canvas shadows={PCFSoftShadowMap}>
    <T.PerspectiveCamera bind:ref={cameraRef} makeDefault
                         position={[0, camY, camZ]}
                         fov={FOV} near={1} far={cameraZ * 3} />

    <!-- Lighting (Lot 6.3) — bind:ref + config shadow programmatique
         (updateProjectionMatrix appelé explicitement, plus fiable que
         le dotted attrs parsing). Bonus visuel par-dessus le fake AO
         des walls — si shadows runtime marchent, ombres réelles, sinon
         on a déjà le cue géométrique. -->
    <T.AmbientLight intensity={0.55} />
    <T.DirectionalLight bind:ref={lightRef}
                        position={[G ? G.W * 0.35 : 200,
                                   G ? G.H * 0.20 : 100,
                                   (G ? Math.min(G.cw, G.ch) : 80) * 7]}
                        intensity={0.90}
                        castShadow />
    <T.DirectionalLight position={[-150, -200, 400]} intensity={0.20} />

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
          {#each computePathSegments(G) as seg, i (`s${i}-${seg.type}`)}
            <T.Mesh position={[seg.x, seg.y, pathH / 2 + 0.5]}
                    scale={
                      seg.type === 'h'
                        ? [seg.length, pathW, pathH]
                        : [pathW, seg.length, pathH]
                    }
                    castShadow receiveShadow>
              <T.BoxGeometry args={[1, 1, 1]} />
              <T.MeshStandardMaterial color={PATH_COLOR}
                                      roughness={0.78} metalness={0.05} />
            </T.Mesh>
          {/each}

          {#each computePathNodes(G) as node, i (`n${i}`)}
            <T.Mesh position={[node.x, node.y, pathH / 2 + 0.5]}
                    rotation={[Math.PI / 2, 0, 0]}
                    castShadow receiveShadow>
              <T.CylinderGeometry args={[pathW / 2, pathW / 2, pathH, 20]} />
              <T.MeshStandardMaterial color={PATH_COLOR}
                                      roughness={0.78} metalness={0.05} />
            </T.Mesh>
          {/each}

          <!-- Rainure néon sur le dessus de la piste : segments emissifs
               qui suivent les connexions, posés juste au-dessus de la
               piste (z = pathH + 0.5). theme.neon dynamique. -->
          {#each computePathSegments(G) as seg, i (`ns${i}`)}
            <T.Mesh position={[seg.x, seg.y, pathH + 0.6]}>
              <T.PlaneGeometry args={
                seg.type === 'h'
                  ? [seg.length, neonW]
                  : [neonW, seg.length]
              } />
              <T.MeshStandardMaterial color={neonColor}
                                      emissive={neonColor}
                                      emissiveIntensity={1.2}
                                      transparent={true}
                                      toneMapped={false} />
            </T.Mesh>
          {/each}

          <!-- Points d'intersection lumineux (cellules avec >=3 sorties).
               Petit disque émissif plus brillant aux jonctions. -->
          {#each computePathNodes(G) as node, i (`ni${i}`)}
            {#if node.isIntersection}
              <T.Mesh position={[node.x, node.y, pathH + 0.7]}>
                <T.CircleGeometry args={[neonW * 1.4, 16]} />
                <T.MeshStandardMaterial color={neonColor}
                                        emissive={neonColor}
                                        emissiveIntensity={1.8}
                                        transparent={true}
                                        toneMapped={false} />
              </T.Mesh>
            {/if}
          {/each}
        {/if}

        <!-- Checkpoints (Lot 6.1) — barres émissives au centre des
             cellules, vertes (non passées) ou jaunes (passées). Reproduit
             le rendu de drawCheckpoints (render.js:399) en 3D. -->
        {#if G?.checkpoints}
          {#each G.checkpoints as cp, i (i)}
            {@const cx      = cp.c * G.cw + G.cw / 2 - G.W / 2}
            {@const cy      = G.H / 2 - (cp.r * G.ch + G.ch / 2)}
            {@const cpClr   = cp.passed ? '#ffcc00' : '#00ff80'}
            {@const cpLen   = Math.min(G.cw, G.ch) * 0.40}
            {@const cpThick = Math.min(G.cw, G.ch) * 0.08}
            {@const cpHigh  = pathH * 0.35}
            <!-- Lot 6.9 : checkpoint posé sur le dessus de la piste
                 (z = pathH + cpHigh/2 + 0.5). -->
            <T.Mesh position={[cx, cy, pathH + cpHigh / 2 + 0.5]}>
              <T.BoxGeometry args={
                cp.horizontal
                  ? [cpLen, cpThick, cpHigh]
                  : [cpThick, cpLen, cpHigh]
              } />
              <T.MeshStandardMaterial color={cpClr} emissive={cpClr}
                                      emissiveIntensity={1.4}
                                      toneMapped={false} />
            </T.Mesh>
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
              <!-- Lot 6.9 : z = pathH + 1.5 (juste au-dessus de la
                   piste extrudée) + depthTest=false → toujours visible
                   par-dessus tout. -->
              <T.Sprite position={[cx, cy, pathH + 1.5]}
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
          <T.Sprite position={[fx, fy, pathH + 1.5]}
                    scale={[fsize, fsize * fAspect, 1]}>
            <T.SpriteMaterial map={textures.finish} transparent={true}
                              depthWrite={false} depthTest={false} />
          </T.Sprite>
        {/if}

        <!-- Bille — bronze brillant. Lot 6.9 : pose SUR le dessus de
             la piste extrudée (z = pathH + ballR), plus sur le sol
             entre murs. -->
        {#if G && ballVisible}
          <T.Mesh position={[ballX, ballY, (pathH + ballR) * fallScale]}
                  scale={[fallScale, fallScale, fallScale]}
                  castShadow>
            <T.SphereGeometry args={[ballR, 32, 16]} />
            <T.MeshStandardMaterial color="#f4c267"
                                    emissive="#5a3010"
                                    emissiveIntensity={0.4}
                                    roughness={0.16} metalness={0.85} />
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
