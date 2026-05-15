<script>
  // Wrapper du plateau de jeu :
  //  - .world-rotate : taille de l'espace visuel (sized par Game.svelte chaque frame)
  //  - .board-wrap   : reçoit la transform 3D (perspective + rotateX/Y) — c'est ça
  //                    qui donne l'effet « wow » de bascule du plateau.
  //  - <canvas>      : surface de rendu 2D (toujours en orientation portrait pixels)
  //  - .countdown    : overlay « NVL X / 3 / 2 / 1 » au démarrage de niveau
  //
  // Game.svelte récupère les refs DOM via bind: et continue à muter
  // boardWrap.style.transform / worldRotateEl.style.width|height chaque
  // frame (perf : direct DOM > réactivité Svelte à 60 FPS).

  export let canvas         = null;  // ref DOM (bindable)
  export let worldRotateEl  = null;  // ref DOM (bindable)
  export let boardWrap      = null;  // ref DOM (bindable)
  export let countdownText  = '';
  export let deviceAngle    = 0;
  // Quand la scène Threlte est superposée, on masque la bordure néon du
  // canvas 2D (le canvas reste en DOM pour les touch events, mais devient
  // visuellement transparent — la 3D occupe l'espace par-dessus).
  export let hidden         = false;
</script>

<div class="world-rotate" bind:this={worldRotateEl}>
  <!-- Slot par défaut : utilisé pour superposer la scène Threlte EXACTEMENT
       dans la même zone visuelle que le canvas 2D. Le slot est positionné
       absolu sur .world-rotate (qui est sized par Game.svelte aux dims du
       canvas), donc la 3D n'empiète pas sur la HUD à côté. -->
  <slot />

  <div class="board-wrap" bind:this={boardWrap}>
    <canvas bind:this={canvas} class:hidden on:click></canvas>

    {#if countdownText}
      <div class="countdown-overlay">
        <div class="countdown-rot" style="transform: rotate({deviceAngle}deg)">
          {#key countdownText}
            <div class="countdown-text">{countdownText}</div>
          {/key}
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  .world-rotate {
    flex-shrink: 0; position: relative;
    display: flex; align-items: center; justify-content: center;
  }

  .board-wrap {
    position: absolute; top: 50%; left: 50%;
    border-radius: 4px;
  }

  canvas {
    display: block; border-radius: 3px;
    border: 1.5px solid var(--neon-color, #00c8ff);
    opacity: 1;
    cursor: pointer;
  }
  canvas.hidden {
    border-color: transparent;
    /* opacity 0.01 plutôt que 0 → certains navigateurs ignorent les
       events pointer sur opacity:0. On garde la zone touchable. */
    opacity: 0.01;
  }

  .countdown-overlay {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    background: rgba(0,0,10,0.55); border-radius: 3px; pointer-events: none;
  }
  .countdown-rot { display: flex; align-items: center; justify-content: center; }
  .countdown-text {
    font-size: clamp(36px, 14vw, 72px); font-weight: 900; letter-spacing: 4px;
    color: var(--neon-color, #00c8ff);
    text-shadow: 0 0 40px var(--neon-color, #00c8ff),
                 0 0 14px var(--neon-color, #00c8ff),
                 0 0 4px #fff;
    animation: cdPulse 0.72s cubic-bezier(.2,.8,.4,1) both;
  }
  @keyframes cdPulse {
    from { transform: scale(2.2); opacity: 0; }
    to   { transform: scale(1);   opacity: 1; }
  }
</style>
