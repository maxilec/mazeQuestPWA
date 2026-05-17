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
  import { CanvasTexture, SRGBColorSpace, PCFSoftShadowMap, Shape, ExtrudeGeometry } from 'three';
  import { getSvgSource, svgReady } from '../lib/render.js';
  import Postprocess            from './Postprocess.svelte';

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
  // Lot 6.19 : ajoute cadreGap pour que le cadre néon (déporté) reste
  // dans le frustum caméra.
  $: isLandscape = (deviceAngle === 90 || deviceAngle === 270);
  $: cadreGap    = G ? Math.min(G.cw, G.ch) * 0.15 : 0;
  $: visibleH    = G
      ? (isLandscape ? G.W : G.H) + cadreGap * 2 + 8
      : 660;
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
    // Lot 6.19 : mapSize 1024 → 2048 (shadows plus précises + douces),
    // bias -0.002 → -0.0001 (moins de "peter-panning" sur sol).
    s.mapSize.set(2048, 2048);
    s.camera.left   = -G.W * 0.7;
    s.camera.right  =  G.W * 0.7;
    s.camera.top    =  G.H * 0.7;
    s.camera.bottom = -G.H * 0.7;
    s.camera.near   = 1;
    s.camera.far    = Math.min(G.cw, G.ch) * 18;
    s.camera.updateProjectionMatrix();
    s.bias          = -0.0001;
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

  // ── Pistes 3D — Lot 6.20 : ExtrudeGeometry par cellule.
  // Pour chaque cellule du maze avec ≥1 ouverture, construire un Shape 2D
  // polygonal qui représente la vue top-down de la piste dans cette cellule.
  // ExtrudeGeometry verticale (depth = pathH) avec bevels intégrés.
  // Plus de cylindres / half-cylindres / segments séparés → géométrie unifiée.
  // Sol abaissé à -floorDepth pour effet de profondeur dans les fossés.
  $: pathW      = G ? Math.min(G.cw, G.ch) * 0.75 : 30;   // largeur de piste
  $: pathH      = G ? Math.min(G.cw, G.ch) * 0.32 : 15;   // hauteur extrusion
  $: floorDepth = pathH * 0.4;                            // profondeur sol creusé
  $: neonW      = G ? Math.min(G.cw, G.ch) * 0.05 : 2.5;
  const PATH_COLOR = '#F2E8D2';

  // ── Cell Shape builder (Lot 6.20) ──────────────────────────────────────
  // Construit un THREE.Shape 2D représentant la vue top-down de la piste
  // dans une cellule du maze, selon ses ouvertures T/R/B/L.
  // Tracé CCW autour de la cellule (4 quadrants externes).
  // CCW (Y-up math conv) = LEFT along top → DOWN along left → RIGHT along
  // bottom → UP along right. Three.js Shape requiert CCW pour outer boundary
  // (sinon normales du top face inversées → invisible depuis caméra +Z).
  function buildCellShape(cell, pathW, cw, ch) {
    const oT = !cell.T, oR = !cell.R, oB = !cell.B, oL = !cell.L;
    const hp = pathW / 2;
    const hw = cw / 2;
    const hh = ch / 2;
    const s = new Shape();

    // Point de départ : top-right du T-arm si présent, sinon coin (hp, hp).
    // Puis on va à GAUCHE le long du top (sens CCW).
    if (oT) { s.moveTo( hp,  hh); s.lineTo(-hp,  hh); s.lineTo(-hp,  hp); }
    else    { s.moveTo( hp,  hp); s.lineTo(-hp,  hp); }

    // NW → SW quadrant : passer autour de L-arm s'il existe.
    if (oL) { s.lineTo(-hw,  hp); s.lineTo(-hw, -hp); s.lineTo(-hp, -hp); }
    else    { s.lineTo(-hp, -hp); }

    // SW → SE quadrant : passer autour de B-arm.
    if (oB) { s.lineTo(-hp, -hh); s.lineTo( hp, -hh); s.lineTo( hp, -hp); }
    else    { s.lineTo( hp, -hp); }

    // SE → NE quadrant : passer autour de R-arm.
    if (oR) { s.lineTo( hw, -hp); s.lineTo( hw,  hp); s.lineTo( hp,  hp); }
    else    { s.lineTo( hp,  hp); }

    // NE → top-right (fermeture si T-arm présent).
    if (oT) { s.lineTo( hp,  hh); }

    s.closePath();
    return s;
  }

  function computeCellShapes(g) {
    const out = [];
    for (let r = 0; r < g.R; r++) {
      for (let c = 0; c < g.C; c++) {
        const ce = g.maze[r][c];
        const openCount = (!ce.T?1:0) + (!ce.R?1:0) + (!ce.B?1:0) + (!ce.L?1:0);
        if (openCount === 0) continue;
        out.push({
          shape: buildCellShape(ce, pathW, g.cw, g.ch),
          x: c * g.cw + g.cw / 2 - g.W / 2,
          y: g.H / 2 - r * g.ch - g.ch / 2,
        });
      }
    }
    return out;
  }

  // Lot 6.20 hotfix — cache des shapes/segments/nodes + extrudeSettings.
  // Sans cache, `{#each computeCellShapes(G)}` recompile 120 ExtrudeGeometry
  // par frame → crash mobile Safari + freeze main thread (menu inactif).
  // On reconstruit seulement quand le maze change (G.lvl).
  let cellShapes      = [];
  let neonSegments    = [];
  let neonNodes       = [];
  let extrudeSettings = null;
  let lastMazeLvl     = -1;
  $: if (G?.maze && G.lvl !== lastMazeLvl) {
    cellShapes      = computeCellShapes(G);
    neonSegments    = computeNeonSegments(G);
    neonNodes       = computeNeonNodes(G);
    // Lot 6.20 hotfix 3 — crash test : bevels désactivés pour isoler la
    // cause du freeze. Si rendu OK sans bevels, on les réactivera plus tard.
    extrudeSettings = {
      depth: pathH,
      bevelEnabled: false,
      steps: 1,
      curveSegments: 3,
    };
    lastMazeLvl     = G.lvl;
  }

  // Path neon segments (rainures) — réutilisation de l'ancienne logique pour
  // poser les neon stripes au centre des couloirs. Build une fois par changement
  // de niveau.
  function computeNeonSegments(g) {
    const out = [];
    for (let r = 0; r < g.R; r++) {
      for (let c = 0; c < g.C; c++) {
        const ce = g.maze[r][c];
        const cx = c * g.cw + g.cw / 2 - g.W / 2;
        const cy = g.H / 2 - r * g.ch - g.ch / 2;
        if (!ce.R && c < g.C - 1) {
          out.push({ type: 'h', x: cx + g.cw / 2, y: cy, length: g.cw });
        }
        if (!ce.B && r < g.R - 1) {
          out.push({ type: 'v', x: cx, y: cy - g.ch / 2, length: g.ch });
        }
      }
    }
    return out;
  }

  function computeNeonNodes(g) {
    const out = [];
    for (let r = 0; r < g.R; r++) {
      for (let c = 0; c < g.C; c++) {
        const ce = g.maze[r][c];
        const openCount = (!ce.T?1:0) + (!ce.R?1:0) + (!ce.B?1:0) + (!ce.L?1:0);
        if (openCount === 0) continue;
        out.push({
          x: c * g.cw + g.cw / 2 - g.W / 2,
          y: g.H / 2 - r * g.ch - g.ch / 2,
          isIntersection: openCount >= 3,
        });
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

  // ── Trail history buffer (Lot 6.16) ────────────────────────────────────
  // Stocke les dernières positions de la bille à intervalle régulier.
  // Le trail render basé sur cet historique → suit la trajectoire courbe
  // de la bille (pas la velocity instantanée). Démarre court et s'allonge,
  // se vide progressivement à l'arrêt.
  const TRAIL_MAX        = 10;
  const TRAIL_SAMPLE_MS  = 22;     // sample rate du trail
  let trailHistory       = [];     // [{x, y}, ...] le plus récent en [0]
  let lastTrailSampleT   = 0;

  function animTick() {
    now = performance.now();
    // Sample du trail à intervalle fixe (indépendant du framerate)
    if (G && G.ball && now - lastTrailSampleT >= TRAIL_SAMPLE_MS) {
      const bx = G.ball.x - G.W / 2;
      const by = G.H / 2 - G.ball.y;
      // Reactive trigger : new array assignment, capped à TRAIL_MAX
      trailHistory = [{ x: bx, y: by }, ...trailHistory].slice(0, TRAIL_MAX);
      lastTrailSampleT = now;
    }
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

    <!-- Post-process (Lot 6.17) — Bloom + Env map procédural.
         Lot 6.17 hotfix 2 : threshold 1.0 + strength 0.4 pour ne
         capturer QUE les emissive HDR (toneMapped:false). Lights
         ambient/directional réduits car RoomEnvironment fournit
         maintenant l'illumination globale. -->
    <Postprocess bloomStrength={0.4} bloomRadius={0.2} bloomThreshold={1.0} />

    <!-- Lighting (Lot 6.19) — setup "Soft Clay" per Gemini :
         - Ambient 0.80 (blanc très légèrement chaud), pas d'ombres noires
         - Directional key 1.50 (puissante), positionnée top-gauche-avant
         - Directional fill 0.30 (warm subtle pour les zones d'ombre) -->
    <T.AmbientLight intensity={0.80} color="#fffdf9" />
    <T.DirectionalLight bind:ref={lightRef}
                        position={[G ? -G.W * 0.4 : -200,
                                   G ? G.H * 0.5 : 250,
                                   (G ? Math.min(G.cw, G.ch) : 80) * 8]}
                        intensity={1.50}
                        color="#fff5e0"
                        castShadow />
    <T.DirectionalLight position={[G ? G.W * 0.3 : 150, G ? -G.H * 0.3 : -150, 400]}
                        intensity={0.30} color="#fff0d0" />

    <!-- World-lock root group -->
    <T.Group rotation.z={worldLockZ}>
      <!-- Tilt 3D group -->
      <T.Group rotation.x={tiltX} rotation.y={tiltY}>

        <!-- Sol creusé (Lot 6.20) — abaissé à z = -floorDepth pour effet
             de profondeur dans les fossés entre cellules de piste. La
             piste extrudée part de z=0 → fossés visibles entre piste et sol. -->
        {#if G}
          <T.Mesh position={[0, 0, -floorDepth]} receiveShadow>
            <T.PlaneGeometry args={[G.W, G.H]} />
            {#if plateauTexture}
              <T.MeshStandardMaterial map={plateauTexture}
                                      color="#bdb19c"
                                      roughness={0.92} metalness={0.0}
                                      envMapIntensity={0.15} />
            {:else}
              <T.MeshStandardMaterial color="#bdb19c"
                                      roughness={0.92} metalness={0.0}
                                      envMapIntensity={0.15} />
            {/if}
          </T.Mesh>
        {/if}

        <!-- Pistes 3D — Lot 6.20 : ExtrudeGeometry par cellule.
             Un seul mesh par cellule avec Shape polygonale (selon ouvertures
             T/R/B/L), extrudé verticalement avec bevels intégrés.
             Plus de bug d'orientation dead-ends (cap inclus dans la Shape).
             Plus de pétales aux jonctions (un seul polygone par cellule). -->
        {#if G && G.maze && extrudeSettings}
          {#each cellShapes as cell, i (`cell-${i}`)}
            <T.Mesh position={[cell.x, cell.y, 0]}
                    castShadow receiveShadow>
              <T is={ExtrudeGeometry} args={[cell.shape, extrudeSettings]} />
              <T.MeshStandardMaterial color={PATH_COLOR}
                                      roughness={0.55} metalness={0.08}
                                      envMapIntensity={0.4} />
            </T.Mesh>
          {/each}

          <!-- Rainure néon sur le dessus de la piste (Lot 6.20 : z = pathH).
               Dual-layer : white core + color halo pour match ref 2D. -->
          {#each neonSegments as seg, i (`ns${i}`)}
            <!-- White core (intense emissive) -->
            <T.Mesh position={[seg.x, seg.y, pathH + 0.35]}>
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
            <T.Mesh position={[seg.x, seg.y, pathH + 0.40]}>
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

          <!-- Petits dots de continuité néon aux nodes non-intersection
               (corners L + straight passages). Couvre le gap au centre
               de cellule sans créer de croix lumineuses. -->
          {#each neonNodes as node, i (`nc${i}`)}
            {#if !node.isIntersection}
              <T.Mesh position={[node.x, node.y, pathH + 0.42]}>
                <T.CircleGeometry args={[neonW * 0.55, 16]} />
                <T.MeshStandardMaterial color={neonColor}
                                        emissive={neonColor}
                                        emissiveIntensity={0.6}
                                        transparent={true}
                                        opacity={0.85}
                                        toneMapped={false} />
              </T.Mesh>
            {/if}
          {/each}

          <!-- Dots aux INTERSECTIONS (>=3 sorties) — SphereGeometry pour
               soft glow naturel (falloff sphérique). -->
          {#each neonNodes as node, i (`nb${i}`)}
            {#if node.isIntersection}
              <T.Mesh position={[node.x, node.y, pathH + 0.50]}>
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
            <T.Mesh position={[cx, cy, pathH + 0.8]}>
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
              <T.PointLight position={[node.x, node.y, pathH + 2]}
                            intensity={1.6}
                            distance={Math.min(G.cw, G.ch) * 2.5}
                            color={neonColor}
                            decay={1.5} />
            {/if}
          {/each}
        {/if}

        <!-- Cadre néon — Lot 6.19 : frGap 0.35 → 0.15 (cadre était sorti
             du frustum caméra à 0.35). Maintenant visible avec un léger
             écart entre maze et cadre. -->
        {#if G}
          {@const frT   = 2.5}
          {@const frH   = 2}
          {@const frZ   = pathH}
          {@const frGap = Math.min(G.cw, G.ch) * 0.15}
          {@const frW   = G.W + (frT + frGap) * 2}
          {@const frHd  = G.H + (frT + frGap) * 2}
          <!-- top : Y = +H/2 + gap + frT/2 (au-dessus du maze) -->
          <T.Mesh position={[0, G.H / 2 + frGap + frT / 2, frZ]}>
            <T.BoxGeometry args={[frW, frT, frH]} />
            <T.MeshStandardMaterial color={neonColor}
                                    emissive={neonColor}
                                    emissiveIntensity={1.6}
                                    toneMapped={false} />
          </T.Mesh>
          <!-- bottom -->
          <T.Mesh position={[0, -G.H / 2 - frGap - frT / 2, frZ]}>
            <T.BoxGeometry args={[frW, frT, frH]} />
            <T.MeshStandardMaterial color={neonColor}
                                    emissive={neonColor}
                                    emissiveIntensity={1.6}
                                    toneMapped={false} />
          </T.Mesh>
          <!-- left -->
          <T.Mesh position={[-G.W / 2 - frGap - frT / 2, 0, frZ]}>
            <T.BoxGeometry args={[frT, G.H + frGap * 2, frH]} />
            <T.MeshStandardMaterial color={neonColor}
                                    emissive={neonColor}
                                    emissiveIntensity={1.6}
                                    toneMapped={false} />
          </T.Mesh>
          <!-- right -->
          <T.Mesh position={[G.W / 2 + frGap + frT / 2, 0, frZ]}>
            <T.BoxGeometry args={[frT, G.H + frGap * 2, frH]} />
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
              <!-- Lot 6.10 : z = pathH + 1.5 (au-dessus de
                   la piste surélevée) + depthTest=false → toujours
                   visible par-dessus tout. -->
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

        <!-- Bille — Lot 6.15 : retour à métal pur (sans emissive).
             L'emissive du Lot 6.13 saturait le matériau et masquait
             les reflections du metalness=1.0. Avec emissive retirée,
             la bille reflète correctement les neon PointLights aux
             intersections (teintes cyan/rose/vert selon theme). -->
        {#if G && ballVisible}
          <T.Mesh position={[ballX, ballY, (pathH + ballR) * fallScale]}
                  scale={[fallScale, fallScale, fallScale]}
                  castShadow>
            <T.SphereGeometry args={[ballR, 32, 16]} />
            <T.MeshStandardMaterial color="#D4AF37"
                                    metalness={1.0}
                                    roughness={0.15} />
          </T.Mesh>

          <!-- Ball trail — Lot 6.16 : history buffer (positions
               échantillonnées dans animTick). Le trail suit la
               trajectoire courbe de la bille, pas la velocity
               instantanée. Démarre court et grandit progressivement,
               se vide à l'arrêt (les positions historiques sortent
               du buffer naturellement quand la bille bouge ailleurs).
               Skip le premier point (i==0) pour ne pas overlap la
               bille au centre. -->
          {#if ballGlowTexture && trailHistory.length > 1}
            {#each trailHistory as pos, i (`trail-${i}`)}
              {#if i > 0}
                {@const t = (i - 1) / (TRAIL_MAX - 1)}
                {@const opacity = Math.max(0, (1 - t) * 0.55)}
                {@const scale = ballR * 1.6 * (1 - t * 0.5)}
                <T.Sprite position={[pos.x, pos.y, pathH + ballR * 0.5]}
                          scale={[scale, scale, 1]}>
                  <T.SpriteMaterial map={ballGlowTexture}
                                    transparent={true}
                                    opacity={opacity}
                                    depthTest={false}
                                    depthWrite={false} />
                </T.Sprite>
              {/if}
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
