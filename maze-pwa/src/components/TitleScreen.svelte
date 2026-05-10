<script>
  import { screen, gameMode, runStats, highScores, settings } from '../stores.js';

  let selected  = 'survie';
  let showCfg   = false;
  const hasHaptic = typeof navigator !== 'undefined' && 'vibrate' in navigator;

  const modes = [
    { id: 'survie',   label: 'SURVIE',   icon: '❤️',
      desc: '120s chrono · Réapparition aux checkpoints · Collecte des bonus' },
    { id: 'hardcore', label: 'HARDCORE', icon: '💀',
      desc: '120s chrono · Une chute = Game Over · Aucune pitié' },
    { id: 'zen',      label: 'ZEN',      icon: '∞',
      desc: 'Sans limite · Exploration libre · Aucune pression' },
  ];

  const modeColor = { survie: '#00c8ff', hardcore: '#ff4444', zen: '#bb44ff' };

  function startGame() {
    gameMode.set(selected);
    runStats.set({ lvl: 1, falls: 0, startTime: performance.now() });
    screen.set('game');
  }

  // Best score helpers
  function bestLvl(mode) {
    return $highScores[mode]?.lvl ?? null;
  }
</script>

<div class="title-root">

  <!-- Nebula background -->
  <div class="nebula"></div>

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

    <!-- Play button -->
    <button class="play-btn" style="--mc: {modeColor[selected]}" on:click={startGame}>
      JOUER
    </button>

    <!-- Settings toggle -->
    <button class="cfg-toggle" on:click={() => showCfg = !showCfg} aria-label="Paramètres">
      ⚙ Paramètres
    </button>

  </div>

  <!-- Settings panel -->
  {#if showCfg}
    <div class="cfg-panel">
      <div class="cfg-title">PARAMÈTRES</div>

      <label class="cfg-row">
        <span>Volume</span>
        <div class="cfg-right">
          <input type="range" min="0" max="1" step="0.05"
            bind:value={$settings.volume}
            disabled={$settings.muted} />
          <span class="cfg-val">{Math.round($settings.volume * 100)}%</span>
        </div>
      </label>

      <label class="cfg-row cfg-check">
        <span>Muet</span>
        <input type="checkbox" bind:checked={$settings.muted} />
      </label>

      <label class="cfg-row">
        <span>Sensibilité</span>
        <div class="cfg-right">
          <input type="range" min="0.1" max="1.5" step="0.05"
            bind:value={$settings.sensitivity} />
          <span class="cfg-val">{$settings.sensitivity.toFixed(2)}</span>
        </div>
      </label>

      <label class="cfg-row">
        <span>Contrôle</span>
        <div class="cfg-toggle-row">
          <button
            class="cfg-mode-btn"
            class:active={$settings.controlMode === 'gyro'}
            on:click={() => $settings.controlMode = 'gyro'}>
            📡 Gyroscope
          </button>
          <button
            class="cfg-mode-btn"
            class:active={$settings.controlMode === 'joystick'}
            on:click={() => $settings.controlMode = 'joystick'}>
            🕹 Joystick
          </button>
        </div>
      </label>

      {#if hasHaptic}
        <label class="cfg-row cfg-check">
          <span>Vibrations</span>
          <input type="checkbox" bind:checked={$settings.haptics} />
        </label>
      {/if}

      <button class="cfg-close" on:click={() => showCfg = false}>✕ Fermer</button>
    </div>
  {/if}

</div>

<style>
  :global(*, *::before, *::after) { box-sizing: border-box; margin: 0; padding: 0; }
  :global(html, body) {
    width: 100%; height: 100%;
    background: #000; overflow: hidden;
    touch-action: none; user-select: none;
  }

  .title-root {
    position: fixed; inset: 0;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Orbitron', 'Courier New', monospace;
    overflow: hidden;
  }

  /* Nebula background */
  .nebula {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 70% 50% at 20% 30%, rgba(130,0,200,0.22) 0%, transparent 70%),
      radial-gradient(ellipse 60% 45% at 75% 65%, rgba(0,40,180,0.20) 0%, transparent 70%),
      radial-gradient(ellipse 50% 40% at 55% 85%, rgba(190,0,110,0.14) 0%, transparent 70%),
      radial-gradient(ellipse 55% 45% at 85% 20%, rgba(0,90,220,0.16) 0%, transparent 70%),
      #03000f;
    z-index: 0;
  }

  .title-inner {
    position: relative; z-index: 1;
    display: flex; flex-direction: column;
    align-items: center; gap: 24px;
    padding: 24px 16px;
    max-width: 520px; width: 100%;
  }

  /* Logo */
  .logo-block { text-align: center; }
  .logo-text {
    font-size: clamp(32px, 8vw, 56px);
    font-weight: 900;
    color: #00c8ff;
    letter-spacing: 6px;
    text-shadow: 0 0 30px #00c8ff, 0 0 10px #00c8ff;
  }
  .logo-sub {
    font-size: clamp(9px, 2vw, 12px);
    color: rgba(0,200,255,0.45);
    letter-spacing: 6px;
    margin-top: 4px;
    font-family: 'Courier New', monospace;
  }

  /* Mode cards */
  .mode-grid {
    display: flex; gap: 10px;
    width: 100%;
  }
  @media (max-width: 480px) {
    .mode-grid { flex-direction: column; }
  }

  .mode-card {
    flex: 1;
    border: 1.5px solid rgba(var(--mc-rgb, 0,200,255), 0.30);
    border-color: color-mix(in srgb, var(--mc) 30%, transparent);
    border-radius: 10px;
    padding: 14px 10px;
    cursor: pointer;
    display: flex; flex-direction: column; align-items: center; gap: 6px;
    text-align: center;
    background: rgba(0,5,20,0.60);
    transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
  }
  .mode-card:active { opacity: 0.85; }
  .mode-card.selected {
    border-color: var(--mc);
    background: rgba(0,5,20,0.92);
    box-shadow: 0 0 18px color-mix(in srgb, var(--mc) 35%, transparent),
                inset 0 0 12px color-mix(in srgb, var(--mc) 8%, transparent);
  }
  .mode-icon { font-size: 22px; }
  .mode-label {
    font-size: 11px; font-weight: 700; letter-spacing: 3px;
    color: var(--mc);
    text-shadow: 0 0 10px var(--mc);
  }
  .mode-desc {
    font-size: 9px; color: rgba(255,255,255,0.45);
    font-family: 'Courier New', monospace;
    line-height: 1.4; letter-spacing: 0.3px;
  }
  .mode-record {
    font-size: 8px; color: rgba(255,224,64,0.60);
    font-family: 'Courier New', monospace;
    letter-spacing: 0.5px;
    margin-top: 2px;
  }

  /* Play button */
  .play-btn {
    width: 100%; max-width: 240px;
    padding: 14px 0;
    border: 2px solid var(--mc);
    background: transparent; color: var(--mc);
    font-family: 'Orbitron', monospace;
    font-size: 15px; font-weight: 700;
    letter-spacing: 6px; cursor: pointer;
    border-radius: 8px;
    text-shadow: 0 0 12px var(--mc);
    box-shadow: 0 0 16px color-mix(in srgb, var(--mc) 25%, transparent);
    transition: background 0.15s, box-shadow 0.15s;
  }
  .play-btn:active {
    background: color-mix(in srgb, var(--mc) 15%, transparent);
  }

  /* Settings toggle */
  .cfg-toggle {
    background: transparent; border: none;
    color: rgba(0,200,255,0.35);
    font-family: 'Courier New', monospace;
    font-size: 11px; letter-spacing: 2px; cursor: pointer;
    padding: 4px 8px;
  }
  .cfg-toggle:active { color: rgba(0,200,255,0.70); }

  /* Settings panel (overlay) */
  .cfg-panel {
    position: fixed; inset: 0;
    background: rgba(0,2,15,0.95);
    z-index: 50;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    gap: 16px;
    padding: 32px 24px;
    font-family: 'Courier New', monospace;
  }
  .cfg-title {
    font-family: 'Orbitron', monospace;
    font-size: 14px; letter-spacing: 6px;
    color: #00c8ff;
    text-shadow: 0 0 12px #00c8ff;
    margin-bottom: 8px;
  }
  .cfg-row {
    display: flex; align-items: center;
    justify-content: space-between;
    width: 100%; max-width: 340px;
    color: rgba(0,200,255,0.80);
    font-size: 11px; letter-spacing: 1px;
    gap: 12px;
  }
  .cfg-row span { white-space: nowrap; }
  .cfg-right { display: flex; align-items: center; gap: 8px; flex: 1; }
  .cfg-right input[type=range] { flex: 1; accent-color: #00c8ff; cursor: pointer; }
  .cfg-val { color: #00c8ff; font-size: 10px; min-width: 32px; text-align: right; }
  .cfg-check { cursor: pointer; }
  .cfg-check input[type=checkbox] { accent-color: #00c8ff; width: 16px; height: 16px; }

  .cfg-toggle-row { display: flex; gap: 8px; flex: 1; }
  .cfg-mode-btn {
    flex: 1; padding: 6px 4px;
    background: transparent;
    border: 1px solid rgba(0,200,255,0.30);
    color: rgba(0,200,255,0.50);
    font-family: 'Courier New', monospace;
    font-size: 9px; letter-spacing: 0.5px; cursor: pointer;
    border-radius: 4px;
    transition: all 0.15s;
  }
  .cfg-mode-btn.active {
    border-color: #00c8ff; color: #00c8ff;
    background: rgba(0,200,255,0.08);
    text-shadow: 0 0 6px #00c8ff;
  }

  .cfg-close {
    margin-top: 8px;
    background: transparent; border: 1px solid rgba(0,200,255,0.30);
    color: rgba(0,200,255,0.50);
    font-family: 'Courier New', monospace;
    font-size: 10px; letter-spacing: 2px; cursor: pointer;
    padding: 8px 20px; border-radius: 5px;
  }
  .cfg-close:active { color: #00c8ff; border-color: #00c8ff; }
</style>
