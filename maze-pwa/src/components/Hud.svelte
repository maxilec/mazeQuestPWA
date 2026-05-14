<script>
  import IconButton  from './ui/IconButton.svelte';
  import IconPlay    from './icons/IconPlay.svelte';
  import IconPause   from './icons/IconPause.svelte';
  import IconSettings from './icons/IconSettings.svelte';

  import { createEventDispatcher } from 'svelte';

  export let lvl = 1;
  export let chrono = '0:00';
  export let paused = false;

  const dispatch = createEventDispatcher();
</script>

<div class="hud-timer">
  <div class="chrono">{chrono}</div>
  <div class="hud-label">TEMPS</div>
</div>

<div class="hud-level">NVL {lvl}</div>

<div class="hud-btns">
  <IconButton
    label={paused ? 'Reprendre' : 'Pause'}
    on:click={() => dispatch('togglePause')}
  >
    {#if paused}<IconPlay />{:else}<IconPause />{/if}
  </IconButton>

  <IconButton
    label="Paramètres"
    on:click={() => dispatch('toggleSettings')}
  >
    <IconSettings />
  </IconButton>
</div>

<slot name="settings" />

<style>
  .hud-timer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .chrono {
    color: var(--color-accent);
    font-family: var(--font-mono);
    font-size: clamp(20px, 3vw, 32px);
    font-weight: bold;
    letter-spacing: 3px;
    text-shadow: 0 0 14px var(--color-accent), 0 0 5px var(--color-accent);
    line-height: 1;
  }

  .hud-label {
    color: rgba(var(--color-accent-rgb), 0.40);
    font-family: var(--font-mono);
    font-size: 8px;
    letter-spacing: 4px;
    margin-top: 1px;
  }

  .hud-level {
    color: rgba(var(--color-primary-rgb), 0.50);
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 3px;
  }

  .hud-btns {
    display: flex;
    gap: 6px;
  }

  @media (orientation: landscape) {
    .hud-btns { margin-top: auto; }
  }
</style>
