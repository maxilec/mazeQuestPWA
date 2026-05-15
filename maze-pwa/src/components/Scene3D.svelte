<script>
  // Lot 2 — Scène 3D : plateau + bille + world-lock + tilt 3D.
  //
  // Architecture :
  //   - <Canvas> Threlte : contexte WebGL.
  //   - <T.Group rotation.z={-deviceAngle}> : « world-lock » — la scène
  //     pivote pour rester orientée vers le joueur quelle que soit
  //     l'orientation physique de l'appareil. Équivalent 3D de l'ancienne
  //     CSS rotation `wlRot` sur .world-rotate.
  //   - <T.Group rotation.x/y={tiltY/X}> : tilt 3D de la planche, piloté
  //     par boardTiltX/Y (input gyro/joystick/clavier). Remplace l'ancien
  //     hack CSS `perspective(700px) rotateX/Y(...)`.
  //   - À l'intérieur : plateau (PlaneGeometry plat — la texture viendra
  //     en Lot 3), murs du labyrinthe (BoxGeometry par mur), bille
  //     (SphereGeometry métallique).
  //
  // Mapping coords G (canvas pixels) → 3D (centré origine, Y haut) :
  //   3D.x = G.x - G.W/2
  //   3D.y = G.H/2 - G.y          (Y inversé : pixel grandit vers le bas)
  //
  // L'élément hôte est `pointer-events: none` — les touch events tombent
  // sur le canvas 2D en arrière-plan, capturé par inputMgr.

  import { Canvas, T } from '@threlte/core';

  export let G            = null;
  export let deviceAngle  = 0;
  export let boardTiltX   = 0;
  export let boardTiltY   = 0;

  const DEG          = Math.PI / 180;
  const MAX_TILT_DEG = 12;
  const FOV          = 35;
  const WALL_H       = 12;   // épaisseur 3D des murs

  // Distance caméra : framing du plateau en hauteur (G.H domine en portrait).
  // tan(fov/2) × dist = H/2 → dist = (H/2) / tan(fov/2). +10 % de marge.
  $: cameraZ = ((G?.H ?? 660) / 2) / Math.tan((FOV * DEG) / 2) * 1.1;

  // World-lock : rotation Z = -deviceAngle.
  $: worldLockZ = -deviceAngle * DEG;

  // Tilt 3D : axes inversés/swappés pour matcher l'ancien rendu CSS
  // (rotateX d'un angle négatif sur Y du tilt, rotateY positif sur X).
  $: tiltX = -boardTiltY * MAX_TILT_DEG * DEG;
  $: tiltY =  boardTiltX * MAX_TILT_DEG * DEG;

  // Position et rayon de la bille.
  $: ballX  = G ? G.ball.x - G.W / 2 : 0;
  $: ballY  = G ? G.H / 2 - G.ball.y : 0;
  $: ballR  = G ? G.br : 10;
  // La bille « repose » sur le plateau (Z ≈ rayon, sphère tangente au plan).

  // Murs : un Box par mur ouvert/fermé selon ce.R / ce.B / ce.T (row 0) /
  // ce.L (col 0). Re-calculé à chaque changement de niveau (G.maze /
  // G.cw / G.ch).
  $: walls = G ? buildWalls(G) : [];

  function buildWalls(g) {
    const out = [];
    const { maze, R, C, cw, ch, W, H } = g;
    const wt = Math.max(3, Math.min(7, Math.min(cw, ch) * 0.14));
    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        const ce = maze[r][c];
        // Right wall (between this cell and the one to the right)
        if (ce.R) {
          const x = (c + 1) * cw - W / 2;
          const y = H / 2 - (r * ch + ch / 2);
          out.push({ x, y, w: wt, h: ch });
        }
        // Bottom wall
        if (ce.B) {
          const x = c * cw + cw / 2 - W / 2;
          const y = H / 2 - ((r + 1) * ch);
          out.push({ x, y, w: cw, h: wt });
        }
        // Top wall (perimeter only — row 0)
        if (r === 0 && ce.T) {
          const x = c * cw + cw / 2 - W / 2;
          const y = H / 2;
          out.push({ x, y, w: cw, h: wt });
        }
        // Left wall (perimeter only — col 0)
        if (c === 0 && ce.L) {
          const x = -W / 2;
          const y = H / 2 - (r * ch + ch / 2);
          out.push({ x, y, w: wt, h: ch });
        }
      }
    }
    return out;
  }
</script>

<div class="threlte-host">
  <Canvas>
    <T.PerspectiveCamera makeDefault position={[0, 0, cameraZ]} fov={FOV} near={1} far={cameraZ * 3} />

    <T.AmbientLight intensity={0.45} />
    <T.DirectionalLight position={[200, 400, 600]} intensity={0.85} />

    <!-- World-lock root group -->
    <T.Group rotation.z={worldLockZ}>
      <!-- Tilt 3D group -->
      <T.Group rotation.x={tiltX} rotation.y={tiltY}>

        <!-- Plateau (la texture concrete + icy neon viendra en Lot 3) -->
        {#if G}
          <T.Mesh position={[0, 0, 0]}>
            <T.PlaneGeometry args={[G.W, G.H]} />
            <T.MeshStandardMaterial color="#2a2e36" roughness={0.85} metalness={0.1} />
          </T.Mesh>
        {/if}

        <!-- Murs du labyrinthe — un Box par mur du maze -->
        {#each walls as wall}
          <T.Mesh position={[wall.x, wall.y, WALL_H / 2]}>
            <T.BoxGeometry args={[wall.w, wall.h, WALL_H]} />
            <T.MeshStandardMaterial color="#0c0f15" roughness={0.7} metalness={0.05} />
          </T.Mesh>
        {/each}

        <!-- Bille -->
        {#if G}
          <T.Mesh position={[ballX, ballY, ballR]}>
            <T.SphereGeometry args={[ballR, 32, 16]} />
            <T.MeshStandardMaterial color="#c08050" roughness={0.25} metalness={0.75} />
          </T.Mesh>
        {/if}

      </T.Group>
    </T.Group>
  </Canvas>
</div>

<style>
  .threlte-host {
    position: fixed;
    inset: 0;
    z-index: 1;
    /* Les touch events traversent vers le canvas 2D dessous, qui est
       toujours en charge de l'input via inputMgr. */
    pointer-events: none;
    background: transparent;
  }
  .threlte-host :global(canvas) {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
