<script>
  import Slider from './ui/Slider.svelte';

  export let sensitivity = 0.55;
  export let musicVolume = 0.5;
</script>

<div class="settings">
  <Slider
    label="Sensibilité"
    min={0.1}
    max={1.5}
    step={0.05}
    bind:value={sensitivity}
    format={(v) => v.toFixed(2)}
  />
  <Slider
    label="Volume"
    min={0}
    max={1}
    step={0.05}
    bind:value={musicVolume}
    format={(v) => `${Math.round(v * 100)}%`}
  />
</div>

<style>
  .settings {
    background: var(--color-surface);
    border: 1px solid var(--color-primary);
    border-radius: var(--radius-md);
    padding: 10px 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: 0 0 20px rgba(var(--color-primary-rgb), 0.18);
    margin-top: 4px;
  }
</style>
