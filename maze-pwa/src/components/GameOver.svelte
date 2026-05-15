<script>
  import { screen, gameMode, runStats, highScores, settings } from '../stores.js';
  import { get } from 'svelte/store';

  const mode  = get(gameMode);
  const stats = get(runStats);

  const totalSecs = Math.round((performance.now() - stats.startTime) / 1000);
  const totalMin  = Math.floor(totalSecs / 60);
  const totalS    = String(totalSecs % 60).padStart(2, '0');
  const totalTime = `${totalMin}:${totalS}`;

  const modeLabel = { survie: 'SURVIE', hardcore: 'HARDCORE', zen: 'ZEN' };
  const modeColor = { survie: '#00c8ff', hardcore: '#ff4444', zen: '#bb44ff' };

  let newRecord = false;
  highScores.update(hs => {
    const prev = hs[mode];
    if (!prev || stats.lvl > prev.lvl) {
      hs[mode] = { lvl: stats.lvl, falls: stats.falls, date: Date.now() };
      newRecord = true;
    }
    return hs;
  });

  const bestLvl = get(highScores)[mode]?.lvl ?? stats.lvl;

  const title = mode === 'hardcore' ? 'GAME OVER' : 'FIN DE MISSION';

  async function replay() {
    // On iOS, re-request gyro permission (session-wide: returns immediately if already granted)
    if (get(settings).controlMode === 'gyro' &&
        typeof DeviceOrientationEvent !== 'undefined' &&
        typeof DeviceOrientationEvent.requestPermission === 'function') {
      try {
        const res = await DeviceOrientationEvent.requestPermission();
        if (res !== 'granted') settings.update(s => ({ ...s, controlMode: 'joystick' }));
      } catch {
        settings.update(s => ({ ...s, controlMode: 'joystick' }));
      }
    }
    runStats.set({ lvl: 1, falls: 0, startTime: performance.now() });
    screen.set('game');
  }
  function toTitle() { screen.set('title'); }
</script>

<div class="go-root">
  <div class="go-panel">
    <div class="go-title" style="color: {modeColor[mode]}">{title}</div>
    <div class="go-mode">{modeLabel[mode]}</div>

    {#if newRecord}
      <div class="go-record-badge">🏆 NOUVEAU RECORD !</div>
    {/if}

    <div class="go-stats">
      <div class="stat-row">
        <span class="stat-label">Niveaux franchis</span>
        <span class="stat-val">{stats.lvl}</span>
      </div>
      <div class="stat-row">
        <span class="stat-label">Temps de session</span>
        <span class="stat-val">{totalTime}</span>
      </div>
      <div class="stat-row">
        <span class="stat-label">Chutes</span>
        <span class="stat-val">{stats.falls}</span>
      </div>
      <div class="stat-row">
        <span class="stat-label">Record personnel</span>
        <span class="stat-val record">NVL {bestLvl}</span>
      </div>
    </div>

    <div class="go-btns">
      <button class="neon-btn" on:click={replay}>↺&nbsp; REJOUER</button>
      <button class="neon-btn neon-btn--dim" on:click={toTitle}>⬅&nbsp; MENU</button>
    </div>
  </div>
</div>

<style>
  .go-root {
    position: fixed; inset: 0;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Orbitron', 'Courier New', monospace;
    overflow: hidden;
    z-index: 1;
  }

  .go-panel {
    background: rgba(0,5,20,0.96);
    border: 1.5px solid var(--neon-color, #00c8ff);
    border-radius: 16px;
    padding: 32px 36px;
    display: flex; flex-direction: column; align-items: center; gap: 16px;
    min-width: 260px; max-width: 360px; width: 90%;
    box-shadow: 0 0 50px rgba(0,200,255,0.25), inset 0 0 30px rgba(0,0,80,0.30);
    box-shadow:
      0 0 50px color-mix(in srgb, var(--neon-color, #00c8ff) 25%, transparent),
      inset 0 0 30px rgba(0,0,80,0.30);
  }

  .go-title {
    font-size: 22px; font-weight: 900;
    letter-spacing: 6px;
    text-shadow: 0 0 20px currentColor, 0 0 8px currentColor;
  }

  .go-mode {
    font-size: 9px; letter-spacing: 5px;
    color: rgba(0,200,255,0.40);
    color: color-mix(in srgb, var(--neon-color, #00c8ff) 40%, transparent);
    margin-top: -10px;
    font-family: 'Courier New', monospace;
  }

  .go-record-badge {
    font-family: 'Courier New', monospace;
    font-size: 12px;
    color: #ffe040;
    text-shadow: 0 0 12px #ffe040;
    letter-spacing: 1px;
    animation: pulse 1.2s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.55; }
  }

  .go-stats {
    width: 100%;
    display: flex; flex-direction: column; gap: 10px;
    border-top: 1px solid rgba(0,200,255,0.15);
    border-top: 1px solid color-mix(in srgb, var(--neon-color, #00c8ff) 15%, transparent);
    border-bottom: 1px solid rgba(0,200,255,0.15);
    border-bottom: 1px solid color-mix(in srgb, var(--neon-color, #00c8ff) 15%, transparent);
    padding: 14px 0;
  }

  .stat-row {
    display: flex; justify-content: space-between; align-items: baseline;
    font-size: 11px;
  }
  .stat-label {
    color: rgba(0,200,255,0.50);
    color: color-mix(in srgb, var(--neon-color, #00c8ff) 50%, transparent);
    font-family: 'Courier New', monospace;
    letter-spacing: 0.5px;
  }
  .stat-val {
    color: var(--neon-color, #00c8ff); font-weight: 700; letter-spacing: 2px;
    text-shadow: 0 0 8px var(--neon-color, #00c8ff);
  }
  .stat-val.record { color: #ffe040; text-shadow: 0 0 8px #ffe040; }

  .go-btns { display: flex; flex-direction: column; gap: 10px; width: 100%; }

  .neon-btn {
    border: 1.5px solid var(--neon-color, #00c8ff);
    background: transparent;
    color: var(--neon-color, #00c8ff);
    padding: 11px 16px; border-radius: 7px;
    font-family: 'Orbitron', monospace; font-size: 11px; cursor: pointer;
    letter-spacing: 3px; text-shadow: 0 0 8px var(--neon-color, #00c8ff);
    box-shadow: 0 0 10px rgba(0,200,255,0.20);
    box-shadow: 0 0 10px color-mix(in srgb, var(--neon-color, #00c8ff) 20%, transparent);
    width: 100%;
  }
  .neon-btn:active {
    background: rgba(0,200,255,0.13);
    background: color-mix(in srgb, var(--neon-color, #00c8ff) 13%, transparent);
  }

  .neon-btn--dim {
    border-color: rgba(0,200,255,0.35);
    border-color: color-mix(in srgb, var(--neon-color, #00c8ff) 35%, transparent);
    color: rgba(0,200,255,0.50);
    color: color-mix(in srgb, var(--neon-color, #00c8ff) 50%, transparent);
    text-shadow: none; box-shadow: none;
  }
  .neon-btn--dim:active {
    background: rgba(0,200,255,0.06);
    background: color-mix(in srgb, var(--neon-color, #00c8ff) 6%, transparent);
  }
</style>
