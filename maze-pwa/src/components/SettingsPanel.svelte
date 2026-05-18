<script>
  import { settings } from '../stores.js';
  import { createEventDispatcher } from 'svelte';

  const hasHaptic = typeof navigator !== 'undefined' && 'vibrate' in navigator;
  const dispatch = createEventDispatcher();

  export let showClose = false;
  export let onClose = () => {};

  function enableGyro() {
    $settings.controlMode = 'gyro';
    dispatch('gyro-enable');
  }
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

    <label class="sp-row" class:sp-disabled={$settings.muted}>
      <span class="sp-lbl">Volume</span>
      <div class="sp-right">
        <input type="range" min="0" max="1" step="0.05"
          bind:value={$settings.volume}
          disabled={$settings.muted} />
        <span class="sp-val">{Math.round($settings.volume * 100)}%</span>
      </div>
    </label>
  </div>

  <!-- Gyroscope section -->
  <div class="sp-row sp-row--toggle">
    <span class="sp-lbl">Gyroscope</span>
    <div class="sp-onoff">
      <button
        class="sp-toggle-btn"
        class:active={$settings.controlMode === 'gyro'}
        on:click={enableGyro}>
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

  <!-- Sensitivity -->
  <label class="sp-row" class:sp-disabled={$settings.controlMode !== 'gyro'}>
    <span class="sp-lbl">Sensibilité</span>
    <div class="sp-right">
      <input type="range" min="0.1" max="1.5" step="0.05"
        bind:value={$settings.sensitivity}
        disabled={$settings.controlMode !== 'gyro'} />
      <span class="sp-val">{$settings.sensitivity.toFixed(2)}</span>
    </div>
  </label>

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

  <!-- Mode 3D expérimental (Threlte / WebGL). Hot-swap : bascule sans
       quitter la partie. Plus lourd à charger (~180 KB). -->
  <div class="sp-row sp-row--toggle">
    <span class="sp-lbl">Mode 3D <span class="sp-tag">beta</span></span>
    <div class="sp-onoff">
      <button
        class="sp-toggle-btn"
        class:active={$settings.engine3D}
        on:click={() => $settings.engine3D = true}>
        ON
      </button>
      <button
        class="sp-toggle-btn"
        class:active={!$settings.engine3D}
        on:click={() => $settings.engine3D = false}>
        OFF
      </button>
    </div>
  </div>

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
    color: var(--neon-color, #00c8ff);
    text-shadow: 0 0 12px var(--neon-color, #00c8ff);
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
    flex: 1; accent-color: var(--neon-color, #00c8ff); cursor: pointer; min-width: 80px;
  }
  .sp-val { color: var(--neon-color, #00c8ff); font-size: 11px; min-width: 36px; text-align: right; }
  .sp-right input[type=range]:disabled { opacity: 0.35; cursor: not-allowed; }
  .sp-disabled .sp-lbl { opacity: 0.35; }
  .sp-disabled .sp-val { opacity: 0.35; }

  .sp-onoff { display: flex; gap: 6px; }
  .sp-toggle-btn {
    padding: 5px 14px;
    background: transparent;
    border: 1px solid rgba(0,200,255,0.30);
    border: 1px solid color-mix(in srgb, var(--neon-color, #00c8ff) 30%, transparent);
    color: rgba(255,255,255,0.45);
    font-family: 'Courier New', monospace;
    font-size: 10px; letter-spacing: 1px; cursor: pointer;
    border-radius: 5px; transition: all 0.15s;
  }
  .sp-toggle-btn.active {
    border-color: var(--neon-color, #00c8ff); color: #fff;
    background: rgba(0,200,255,0.12);
    background: color-mix(in srgb, var(--neon-color, #00c8ff) 12%, transparent);
    text-shadow: 0 0 6px var(--neon-color, #00c8ff);
  }
  .sp-toggle-btn:active {
    background: rgba(0,200,255,0.20);
    background: color-mix(in srgb, var(--neon-color, #00c8ff) 20%, transparent);
  }

  .sp-close {
    align-self: center; margin-top: 4px;
    background: transparent;
    border: 1px solid rgba(0,200,255,0.35);
    border: 1px solid color-mix(in srgb, var(--neon-color, #00c8ff) 35%, transparent);
    color: rgba(255,255,255,0.60);
    font-family: 'Courier New', monospace;
    font-size: 11px; letter-spacing: 2px; cursor: pointer;
    padding: 8px 22px; border-radius: 5px;
    transition: all 0.15s;
  }
  .sp-close:active { color: #fff; border-color: var(--neon-color, #00c8ff); }

  .sp-tag {
    display: inline-block;
    margin-left: 6px;
    padding: 1px 5px;
    font-size: 8px;
    letter-spacing: 0.5px;
    border-radius: 3px;
    color: rgba(255,255,255,0.85);
    background: color-mix(in srgb, var(--neon-color, #00c8ff) 35%, transparent);
    background: rgba(0,200,255,0.35);
    text-transform: uppercase;
    vertical-align: middle;
  }
</style>
