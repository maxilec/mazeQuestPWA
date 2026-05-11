<script>
  import { settings } from '../stores.js';

  const hasHaptic = typeof navigator !== 'undefined' && 'vibrate' in navigator;

  export let showClose = false;
  export let onClose = () => {};
</script>

<div class="sp-wrap">
  <div class="sp-title">PARAMÈTRES</div>

  <!-- Music section -->
  <div class="sp-section">
    <div class="sp-row sp-row--toggle">
      <span class="sp-lbl">Musique</span>
      <div class="sp-onoff">
        <button
          class="sp-toggle-btn"
          class:active={!$settings.muted}
          on:click={() => $settings.muted = false}>
          ON
        </button>
        <button
          class="sp-toggle-btn"
          class:active={$settings.muted}
          on:click={() => $settings.muted = true}>
          OFF
        </button>
      </div>
    </div>

    {#if !$settings.muted}
      <label class="sp-row">
        <span class="sp-lbl">Volume</span>
        <div class="sp-right">
          <input type="range" min="0" max="1" step="0.05"
            bind:value={$settings.volume} />
          <span class="sp-val">{Math.round($settings.volume * 100)}%</span>
        </div>
      </label>
    {/if}
  </div>

  <!-- Gyroscope section -->
  <div class="sp-row sp-row--toggle">
    <span class="sp-lbl">Gyroscope</span>
    <div class="sp-onoff">
      <button
        class="sp-toggle-btn"
        class:active={$settings.controlMode === 'gyro'}
        on:click={() => $settings.controlMode = 'gyro'}>
        ON
      </button>
      <button
        class="sp-toggle-btn"
        class:active={$settings.controlMode === 'joystick'}
        on:click={() => $settings.controlMode = 'joystick'}>
        OFF
      </button>
    </div>
  </div>

  <!-- Sensitivity (only when gyro ON) -->
  {#if $settings.controlMode === 'gyro'}
    <label class="sp-row">
      <span class="sp-lbl">Sensibilité</span>
      <div class="sp-right">
        <input type="range" min="0.1" max="1.5" step="0.05"
          bind:value={$settings.sensitivity} />
        <span class="sp-val">{$settings.sensitivity.toFixed(2)}</span>
      </div>
    </label>
  {/if}

  {#if hasHaptic}
    <div class="sp-row sp-row--toggle">
      <span class="sp-lbl">Vibrations</span>
      <div class="sp-onoff">
        <button
          class="sp-toggle-btn"
          class:active={$settings.haptics}
          on:click={() => $settings.haptics = true}>
          ON
        </button>
        <button
          class="sp-toggle-btn"
          class:active={!$settings.haptics}
          on:click={() => $settings.haptics = false}>
          OFF
        </button>
      </div>
    </div>
  {/if}

  {#if showClose}
    <button class="sp-close" on:click={onClose}>✕ Fermer</button>
  {/if}
</div>

<style>
  .sp-wrap {
    display: flex; flex-direction: column; gap: 14px;
    font-family: 'Courier New', monospace;
    width: 100%; max-width: 320px;
  }

  .sp-title {
    font-family: 'Orbitron', monospace;
    font-size: 13px; letter-spacing: 6px;
    color: #00c8ff;
    text-shadow: 0 0 12px #00c8ff;
    text-align: center; margin-bottom: 4px;
  }

  .sp-section { display: flex; flex-direction: column; gap: 10px; }

  .sp-row {
    display: flex; align-items: center;
    justify-content: space-between;
    gap: 12px; cursor: default;
  }
  .sp-row--toggle { gap: 8px; }

  .sp-lbl {
    color: rgba(255,255,255,0.85);
    font-size: 12px; letter-spacing: 1px;
    white-space: nowrap; min-width: 80px;
  }

  .sp-right { display: flex; align-items: center; gap: 8px; flex: 1; }
  .sp-right input[type=range] {
    flex: 1; accent-color: #00c8ff; cursor: pointer; min-width: 80px;
  }
  .sp-val { color: #00c8ff; font-size: 11px; min-width: 36px; text-align: right; }

  .sp-onoff { display: flex; gap: 6px; }
  .sp-toggle-btn {
    padding: 5px 14px;
    background: transparent;
    border: 1px solid rgba(0,200,255,0.30);
    color: rgba(255,255,255,0.45);
    font-family: 'Courier New', monospace;
    font-size: 10px; letter-spacing: 1px; cursor: pointer;
    border-radius: 5px; transition: all 0.15s;
  }
  .sp-toggle-btn.active {
    border-color: #00c8ff; color: #fff;
    background: rgba(0,200,255,0.12);
    text-shadow: 0 0 6px #00c8ff;
  }
  .sp-toggle-btn:active { background: rgba(0,200,255,0.20); }

  .sp-close {
    align-self: center; margin-top: 4px;
    background: transparent; border: 1px solid rgba(0,200,255,0.35);
    color: rgba(255,255,255,0.60);
    font-family: 'Courier New', monospace;
    font-size: 11px; letter-spacing: 2px; cursor: pointer;
    padding: 8px 22px; border-radius: 5px;
    transition: all 0.15s;
  }
  .sp-close:active { color: #fff; border-color: #00c8ff; }
</style>
