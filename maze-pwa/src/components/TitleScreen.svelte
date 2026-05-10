<script>
  import { screen, gameMode, runStats, highScores, settings, audioMgrStore } from '../stores.js';
  import SettingsPanel from './SettingsPanel.svelte';

  let selected  = 'survie';
  let showCfg   = false;

  const modes = [
    { id: 'survie',   label: 'SURVIE',   icon: '❤️',
      desc: '120s · Réapparition aux checkpoints · Collecte des bonus' },
    { id: 'hardcore', label: 'HARDCORE', icon: '💀',
      desc: '120s · Une chute = Game Over · Aucune pitié' },
    { id: 'zen',      label: 'ZEN',      icon: '∞',
      desc: 'Sans limite · Exploration libre · Couleur au choix' },
  ];

  const modeColor = { survie: '#00c8ff', hardcore: '#ff5555', zen: '#bb44ff' };

  const ZEN_COLORS = [
    '#00c8ff', '#ff44cc', '#44ff99', '#ffaa00',
    '#bb44ff', '#ff5555', '#44ffff', '#ffff55',
  ];

  function startGame() {
    $audioMgrStore?.start();
    gameMode.set(selected);
    runStats.set({ lvl: 1, falls: 0, startTime: performance.now() });
    screen.set('game');
  }

  function bestLvl(mode) { return $highScores[mode]?.lvl ?? null; }
</script>

<div class="title-root">
  <div class="title-inner">

    <!-- Logo -->
    <div class="logo-block">
      <div class="logo-text">MazeBall</div>
      <div class="logo-sub">Navigate the void</div>
    </div>

    <!-- Mode cards -->
    <div class="mode-grid">
      {#each modes as m}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
          class="mode-card"
          class:selected={selected === m.id}
          style="--mc: {modeColor[m.id]}"
          on:click={() => selected = m.id}
        >
          <div class="mode-icon">{m.icon}</div>
          <div class="mode-label">{m.label}</div>
          <div class="mode-desc">{m.desc}</div>
          {#if bestLvl(m.id) !== null}
            <div class="mode-record">Meilleur : NVL {bestLvl(m.id)}</div>
          {/if}
        </div>
      {/each}
    </div>

    <!-- Zen colour picker -->
    {#if selected === 'zen'}
      <div class="zen-palette">
        <span class="zen-palette-lbl">Couleur de la piste</span>
        <div class="swatches">
          {#each ZEN_COLORS as zc}
            <button
              class="swatch"
              class:swatch-active={$settings.zenColor === zc}
              style="background:{zc}; box-shadow: 0 0 {$settings.zenColor === zc ? 14 : 4}px {zc}"
              on:click={() => $settings.zenColor = zc}
              aria-label={zc}
            ></button>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Play button -->
    <button class="play-btn" style="--mc: {modeColor[selected]}" on:click={startGame}>
      JOUER
    </button>

    <!-- Settings toggle -->
    <button class="cfg-toggle" on:click={() => showCfg = !showCfg}>
      ⚙ Paramètres
    </button>

  </div>

  <!-- Settings panel overlay -->
  {#if showCfg}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="cfg-overlay" on:click|self={() => showCfg = false}>
      <div class="cfg-panel">
        <SettingsPanel showClose={true} onClose={() => showCfg = false} />
      </div>
    </div>
  {/if}

</div>

<style>
  .title-root {
    position: fixed; inset: 0;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Orbitron', 'Courier New', monospace;
    overflow: hidden;
    z-index: 1;
  }

  .title-inner {
    position: relative; z-index: 1;
    display: flex; flex-direction: column;
    align-items: center; gap: 20px;
    padding: 20px 16px;
    max-width: 520px; width: 100%;
    max-height: 100vh; overflow-y: auto;
  }

  /* Logo */
  .logo-block { text-align: center; }
  .logo-text {
    font-size: clamp(32px, 8vw, 56px); font-weight: 900;
    color: #00c8ff; letter-spacing: 6px;
    text-shadow: 0 0 30px #00c8ff, 0 0 10px #00c8ff;
  }
  .logo-sub {
    font-size: clamp(9px, 2vw, 11px); color: rgba(0,200,255,0.50);
    letter-spacing: 6px; margin-top: 4px;
    font-family: 'Courier New', monospace;
  }

  /* Mode cards */
  .mode-grid { display: flex; gap: 10px; width: 100%; }
  @media (max-width: 480px) { .mode-grid { flex-direction: column; } }

  .mode-card {
    flex: 1;
    border: 1.5px solid rgba(0,0,0,0);
    border-color: color-mix(in srgb, var(--mc) 30%, transparent);
    border-radius: 10px; padding: 14px 10px;
    cursor: pointer;
    display: flex; flex-direction: column; align-items: center; gap: 6px;
    text-align: center;
    background: rgba(0,5,20,0.60);
    transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
  }
  .mode-card:active { opacity: 0.80; }
  .mode-card.selected {
    border-color: var(--mc);
    background: rgba(0,5,20,0.92);
    box-shadow: 0 0 18px color-mix(in srgb, var(--mc) 35%, transparent),
                inset 0 0 12px color-mix(in srgb, var(--mc) 8%, transparent);
  }
  .mode-icon  { font-size: 22px; }
  .mode-label {
    font-size: 11px; font-weight: 700; letter-spacing: 3px;
    color: var(--mc); text-shadow: 0 0 10px var(--mc);
  }
  .mode-desc {
    font-size: 10px; color: rgba(255,255,255,0.80);
    font-family: 'Courier New', monospace; line-height: 1.45;
    letter-spacing: 0.2px;
  }
  .mode-record {
    font-size: 9px; color: rgba(255,224,64,0.85);
    font-family: 'Courier New', monospace; letter-spacing: 0.5px;
    margin-top: 2px;
  }

  /* Zen colour picker */
  .zen-palette {
    display: flex; flex-direction: column; align-items: center; gap: 10px;
    width: 100%;
  }
  .zen-palette-lbl {
    font-family: 'Courier New', monospace;
    font-size: 10px; letter-spacing: 2px; color: rgba(255,255,255,0.70);
  }
  .swatches { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; }
  .swatch {
    width: 28px; height: 28px; border-radius: 50%;
    border: 2px solid transparent; cursor: pointer;
    transition: transform 0.15s, box-shadow 0.15s;
  }
  .swatch:active { transform: scale(0.88); }
  .swatch-active { border-color: #fff; transform: scale(1.15); }

  /* Play button */
  .play-btn {
    width: 100%; max-width: 240px; padding: 14px 0;
    border: 2px solid var(--mc); background: transparent; color: var(--mc);
    font-family: 'Orbitron', monospace; font-size: 15px; font-weight: 700;
    letter-spacing: 6px; cursor: pointer; border-radius: 8px;
    text-shadow: 0 0 12px var(--mc);
    box-shadow: 0 0 16px color-mix(in srgb, var(--mc) 25%, transparent);
    transition: background 0.15s;
  }
  .play-btn:active { background: color-mix(in srgb, var(--mc) 18%, transparent); }

  /* Settings toggle */
  .cfg-toggle {
    background: transparent; border: none;
    color: rgba(255,255,255,0.50);
    font-family: 'Courier New', monospace;
    font-size: 11px; letter-spacing: 2px; cursor: pointer; padding: 4px 8px;
  }
  .cfg-toggle:active { color: rgba(255,255,255,0.90); }

  /* Settings overlay */
  .cfg-overlay {
    position: fixed; inset: 0;
    background: rgba(0,2,15,0.92);
    z-index: 50;
    display: flex; align-items: center; justify-content: center;
    padding: 32px 24px;
  }
  .cfg-panel {
    background: rgba(0,5,25,0.98);
    border: 1.5px solid rgba(0,200,255,0.50);
    border-radius: 14px; padding: 28px 28px;
    box-shadow: 0 0 40px rgba(0,200,255,0.20);
  }
</style>
