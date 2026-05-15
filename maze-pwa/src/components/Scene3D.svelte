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
  import { tweened }            from 'svelte/motion';
  import { cubicOut }           from 'svelte/easing';
  import { Canvas, T }          from '@threlte/core';
  import { CanvasTexture, SRGBColorSpace } from 'three';
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

  // Élévation dynamique : tiltMag clamped 0..1 sur la magnitude du joystick.
  // camY = sin(elev), camZ = cos(elev). Au repos (tiltMag=0) : camera dead-on.
  // En tilt max : ~12° d'élévation, on voit les côtés des murs s'incliner.
  //
  // Lot 6.1 : tweened pour absorber les variations rapides → pas de rebond
  // au relâchement du joystick.
  const camElevTw = tweened(0, { duration: 220, easing: cubicOut });
  $: tiltMag = Math.min(Math.hypot(boardTiltX, boardTiltY), 1);
  $: camElevTw.set(tiltMag * CAM_MAX_ELEV_DEG * DEG);
  $: camY    = Math.sin($camElevTw) * cameraDist;
  $: camZ    = Math.cos($camElevTw) * cameraDist;
  // cameraZ utilisé pour le `far` plane (compat avec d'autres calculs).
  $: cameraZ     = cameraDist;

  // Camera ref + lookAt : Three.js ne met pas à jour la rotation de la
  // caméra automatiquement quand position change ; on rappelle lookAt
  // sur chaque changement des coords caméra.
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
  $: tiltY      = +boardTiltX * MAX_TILT_DEG * DEG;

  // ── Bille ──────────────────────────────────────────────────────────────
  $: ballX = G ? G.ball.x - G.W / 2 : 0;
  $: ballY = G ? G.H / 2 - G.ball.y : 0;
  $: ballR = G ? G.br : 10;

  // ── Murs 3D extrudés (Lot 6) ───────────────────────────────────────────
  // Itère sur G.maze[r][c] en dédoublonnant les murs partagés entre
  // cellules adjacentes : T uniquement si r=0, L uniquement si c=0,
  // R et B toujours.
  $: walls = G ? computeWalls(G) : [];
  $: wallT = G ? Math.min(G.cw, G.ch) * 0.18 : 10;
  // Lot 6.1 : wallH bumpé 0.40→0.55 pour relief plus visible.
  $: wallH = G ? Math.min(G.cw, G.ch) * 0.55 : 20;
  // Lot 6.1 : couleur de mur significativement plus claire que le sol
  // (theme.trackFloor #d6cebc) pour rendre l'extrusion visible en
  // vue top-down. Le theme.trackHi (#ece5d2) était trop proche.
  const WALL_COLOR_LIGHT = '#f5ecd9';

  function computeWalls(g) {
    const out = [];
    for (let r = 0; r < g.ROWS; r++) {
      for (let c = 0; c < g.COLS; c++) {
        const ce = g.maze[r][c];
        if (r === 0 && ce.T) out.push(horizWall(c, 0, g));
        if (c === 0 && ce.L) out.push(vertWall(0, r, g));
        if (ce.R)            out.push(vertWall(c + 1, r, g));
        if (ce.B)            out.push(horizWall(c, r + 1, g));
      }
    }
    return out;
  }
  function horizWall(c, r, g) {
    return { type: 'h', x: c * g.cw + g.cw / 2 - g.W / 2,
                        y: g.H / 2 - r * g.ch, length: g.cw };
  }
  function vertWall(c, r, g) {
    return { type: 'v', x: c * g.cw - g.W / 2,
                        y: g.H / 2 - r * g.ch - g.ch / 2, length: g.ch };
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
  <Canvas>
    <T.PerspectiveCamera bind:ref={cameraRef} makeDefault
                         position={[0, camY, camZ]}
                         fov={FOV} near={1} far={cameraZ * 3} />

    <!-- Lot 6 — lighting zen : ratio ambient/directional plus doux,
         le rendu se veut diffus comme une lumière studio sur papier
         crème. Plus de contraste agressif vs Lot 5. -->
    <T.AmbientLight intensity={0.55} />
    <T.DirectionalLight position={[200, 500, 800]} intensity={0.75} />
    <T.DirectionalLight position={[-200, -300, 400]} intensity={0.25} />

    <!-- World-lock root group -->
    <T.Group rotation.z={worldLockZ}>
      <!-- Tilt 3D group -->
      <T.Group rotation.x={tiltX} rotation.y={tiltY}>

        <!-- Sol (track) — texture clear : beige uniforme + ligne néon
             visible. Mat papier (rough 0.92, metal 0). -->
        {#if G}
          <T.Mesh position={[0, 0, 0]}>
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

        <!-- Murs 3D extrudés (Lot 6) — BoxGeometry simple par segment.
             Crème clair (Lot 6.1), mat, contraste plus marqué vs sol pour
             extrusion visible en vue top-down. wallT ajouté à la longueur
             pour overlap aux jonctions (pas de gap visible). -->
        {#each walls as wall, i (i)}
          <T.Mesh position={[wall.x, wall.y, wallH / 2]}>
            <T.BoxGeometry args={
              wall.type === 'h'
                ? [wall.length + wallT, wallT, wallH]
                : [wallT, wall.length + wallT, wallH]
            } />
            <T.MeshStandardMaterial color={WALL_COLOR_LIGHT}
                                    roughness={0.78} metalness={0.05} />
          </T.Mesh>
        {/each}

        <!-- Checkpoints (Lot 6.1) — barres émissives au centre des
             cellules, vertes (non passées) ou jaunes (passées). Reproduit
             le rendu de drawCheckpoints (render.js:399) en 3D. -->
        {#if G?.checkpoints}
          {#each G.checkpoints as cp, i (i)}
            {@const cx      = cp.c * G.cw + G.cw / 2 - G.W / 2}
            {@const cy      = G.H / 2 - (cp.r * G.ch + G.ch / 2)}
            {@const cpClr   = cp.passed ? '#ffcc00' : '#00ff80'}
            {@const cpLen   = Math.min(G.cw, G.ch) * 0.45}
            {@const cpThick = wallT * 0.45}
            {@const cpHigh  = wallH * 0.55}
            <T.Mesh position={[cx, cy, cpHigh / 2 + 0.3]}>
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

        <!-- Cadre néon (Lot 6) — 4 segments émissifs dans theme.neon,
             posés au-dessus des murs. emissiveIntensity haut +
             toneMapped:false → glow visible sans bloom post-process. -->
        {#if G}
          {@const frT  = Math.min(G.cw, G.ch) * 0.10}
          {@const frH  = Math.min(G.cw, G.ch) * 0.10}
          {@const frZ  = wallH * 0.95}
          {@const fw   = G.W + frT * 2}
          {@const fh   = G.H + frT * 2}
          <!-- top -->
          <T.Mesh position={[0, G.H / 2 + frT / 2, frZ]}>
            <T.BoxGeometry args={[fw, frT, frH]} />
            <T.MeshStandardMaterial color={neonColor}
                                    emissive={neonColor}
                                    emissiveIntensity={1.5}
                                    toneMapped={false} />
          </T.Mesh>
          <!-- bottom -->
          <T.Mesh position={[0, -G.H / 2 - frT / 2, frZ]}>
            <T.BoxGeometry args={[fw, frT, frH]} />
            <T.MeshStandardMaterial color={neonColor}
                                    emissive={neonColor}
                                    emissiveIntensity={1.5}
                                    toneMapped={false} />
          </T.Mesh>
          <!-- left -->
          <T.Mesh position={[-G.W / 2 - frT / 2, 0, frZ]}>
            <T.BoxGeometry args={[frT, fh, frH]} />
            <T.MeshStandardMaterial color={neonColor}
                                    emissive={neonColor}
                                    emissiveIntensity={1.5}
                                    toneMapped={false} />
          </T.Mesh>
          <!-- right -->
          <T.Mesh position={[G.W / 2 + frT / 2, 0, frZ]}>
            <T.BoxGeometry args={[frT, fh, frH]} />
            <T.MeshStandardMaterial color={neonColor}
                                    emissive={neonColor}
                                    emissiveIntensity={1.5}
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
              <T.Sprite position={[cx, cy, wallH * 1.1]}
                        scale={[size, size, 1]}>
                <T.SpriteMaterial map={tex} transparent={true}
                                  opacity={fade} depthWrite={false} />
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
          <T.Sprite position={[fx, fy, wallH * 1.1]}
                    scale={[fsize, fsize * fAspect, 1]}>
            <T.SpriteMaterial map={textures.finish} transparent={true}
                              depthWrite={false} />
          </T.Sprite>
        {/if}

        <!-- Ball shadow — disque sombre dans le tilt group, suit la
             pente du plateau. Scale + opacity réduits pendant la chute. -->
        {#if G && ballVisible}
          <T.Mesh position={[ballX, ballY, G.br * 0.05]}
                  scale={[fallScale, fallScale, 1]}>
            <T.CircleGeometry args={[ballR * 1.3, 24]} />
            <T.MeshBasicMaterial color="#000000" transparent={true}
                                 opacity={0.30 * fallScale}
                                 depthWrite={false} />
          </T.Mesh>
        {/if}

        <!-- Bille — bronze brillant (Lot 6.1 : couleur lumineuse +
             emissive subtil pour pop sur fond beige clair). -->
        {#if G && ballVisible}
          <T.Mesh position={[ballX, ballY, ballR * fallScale]}
                  scale={[fallScale, fallScale, fallScale]}>
            <T.SphereGeometry args={[ballR, 32, 16]} />
            <T.MeshStandardMaterial color="#e0a060"
                                    emissive="#3a1f08"
                                    emissiveIntensity={0.3}
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
