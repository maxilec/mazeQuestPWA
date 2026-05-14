<script>
  // HUD : conteneur principal qui orchestre la mise en page.
  //  - Portrait : zone-a (logo+hint) au-dessus, gauge horizontale, board, zone-b (stats+pause)
  //  - Paysage  : zone-a à gauche, board centré, zone-b à droite avec jauge verticale
  //
  // Le board est passé en `<slot />` pour que la HUD reste indépendante du
  // rendu canvas. Le clic « tap container pour pauser en gyro » est forwardé
  // via on:click — Game.svelte décide s'il pause selon le mode et l'état.
  import Gauge      from './Gauge.svelte';
  import NeonButton from './NeonButton.svelte';

  export let lvl       = 1;
  export let chrono    = '';
  export let attempts  = 0;
  export let mode      = 'survie';
  export let hint      = 'mouse';
  export let timeLeft  = 120;
  export let paused    = false;
  export let onTogglePause = () => {};

  const hints = {
    gyro:     "📡 Inclinez l'appareil",
    mouse:    '🖱 Déplacez la souris',
    keys:     '⌨ Touches fléchées',
    joystick: '🕹 Glissez pour diriger',
  };

  const modeColor = { survie: '#00c8ff', hardcore: '#ff5555', zen: '#bb44ff' };

  $: gaugeOverflow = timeLeft > 120;
  $: gaugeAlert    = timeLeft <= 10 && timeLeft > 0;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="container" on:click>

  <!-- Zone A : logo + hint -->
  <div class="zone-a">
    <div class="logo">MazeBall</div>
    <p class="hint">{hints[hint]}</p>
  </div>

  <!-- Portrait gauge -->
  <div class="gauge-p">
    {#if mode !== 'zen'}
      <Gauge value={timeLeft} maxFill={120} label={chrono}
             alert={gaugeAlert} overflow={gaugeOverflow}
             orientation="horizontal" labelPosition="after" />
    {:else}
      <div class="zen-badge">∞ ZEN MODE</div>
    {/if}
  </div>

  <!-- Board slot (Canvas.svelte goes here) -->
  <div class="board-area">
    <slot />
  </div>

  <!-- Zone B : HUD (landscape gauge + stats + pause) -->
  <div class="zone-b">
    <div class="gauge-l">
      {#if mode !== 'zen'}
        <Gauge value={timeLeft} maxFill={120} label={chrono}
               alert={gaugeAlert} overflow={gaugeOverflow}
               orientation="vertical" labelPosition="before" />
      {:else}
        <div class="zen-badge-l">∞</div>
      {/if}
    </div>

    <div class="hud-stats">
      <div class="hud-level" style="color:{modeColor[mode]}">NVL {lvl}</div>
      <div class="hud-falls">⬇ {attempts}</div>
    </div>

    <div class="pause-slot">
      <NeonButton shape="capsule" on:click={(e) => { e.stopPropagation(); onTogglePause(); }}>
        {paused ? '▶' : '⏸'}
      </NeonButton>
    </div>
  </div>
</div>

<style>
  .container {
    position: relative; z-index: 1;
    width: 100vw; height: 100vh;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    font-family: 'Orbitron', 'Courier New', monospace;
    gap: 8px;
    padding-top:    max(8px, env(safe-area-inset-top));
    padding-bottom: max(8px, env(safe-area-inset-bottom));
    padding-left:   env(safe-area-inset-left);
    padding-right:  env(safe-area-inset-right);
    box-sizing: border-box;
  }

  .zone-a     { order: 0; flex-shrink: 0;
                display: flex; flex-direction: column;
                align-items: center; gap: 6px; justify-content: center; }
  .gauge-p    { order: 1; width: 100%; flex-shrink: 0;
                display: none; align-items: center; justify-content: center; padding: 0 12px; }
  .board-area { order: 2; flex-shrink: 0; position: relative;
                display: flex; align-items: center; justify-content: center; }
  .zone-b     { order: 3; flex-shrink: 0;
                display: flex; flex-direction: row;
                align-items: center; justify-content: space-between;
                gap: 10px; width: 100%; }

  @media (orientation: portrait) { .gauge-p { display: flex; } }

  @media (orientation: landscape) {
    .container {
      flex-direction: row; gap: 10px;
      padding-left:  max(10px, env(safe-area-inset-left));
      padding-right: max(10px, env(safe-area-inset-right));
    }
    .zone-a     { order: 0; width: 80px;  min-width: 60px;
                  align-self: stretch;
                  display: flex; flex-direction: column; justify-content: center; }
    .board-area { order: 1; }
    .zone-b     { order: 2; width: 110px; min-width: 90px;
                  align-self: stretch;
                  flex-direction: column; align-items: center;
                  justify-content: flex-start;
                  height: 100%; padding: 4px 0; }
  }

  /* Zone A — logo & hint */
  .logo {
    font-weight: 900; font-size: clamp(14px, 2.4vw, 20px);
    color: #00c8ff; letter-spacing: 2px;
    text-shadow: 0 0 18px #00c8ff, 0 0 6px #00c8ff;
    text-align: center;
  }
  .hint {
    color: rgba(255,255,255,0.55);
    font-size: 9px; text-align: center; letter-spacing: .4px;
    font-family: 'Courier New', monospace; margin: 0;
  }
  @media (orientation: landscape) {
    .logo { writing-mode: vertical-rl; text-orientation: mixed;
            transform: rotate(180deg);
            font-size: clamp(12px, 1.8vh, 20px); letter-spacing: 4px; }
    .hint { writing-mode: vertical-rl; text-orientation: mixed;
            transform: rotate(180deg); font-size: 9px; }
  }

  /* Zen badges */
  .zen-badge {
    font-family: 'Courier New', monospace;
    font-size: 11px; letter-spacing: 4px; color: #bb44ff;
    text-shadow: 0 0 10px #bb44ff;
  }
  .zen-badge-l {
    color: #bb44ff; font-size: 18px;
    text-shadow: 0 0 10px #bb44ff;
  }

  /* Landscape gauge wrapper */
  .gauge-l { display: none; }
  @media (orientation: landscape) {
    .gauge-l { display: flex; flex: 1; min-height: 0;
               flex-direction: column; align-items: center; }
  }

  /* Stats */
  .hud-stats { display: flex; flex-direction: row; gap: 10px; align-items: center; }
  @media (orientation: landscape) {
    .hud-stats { flex-direction: column; gap: 6px; align-items: center; }
  }
  .hud-level { font-size: 12px; letter-spacing: 3px; font-weight: 700; }
  .hud-falls {
    color: rgba(255,255,255,0.65);
    font-size: 11px; letter-spacing: 2px;
    font-family: 'Courier New', monospace;
  }

  /* The capsule pause button gets pushed to the bottom in landscape */
  .pause-slot { display: flex; }
  @media (orientation: landscape) {
    .pause-slot { margin-top: auto; }
  }
</style>
