<script>
  import { createEventDispatcher } from 'svelte';
  import NeonButton  from './ui/NeonButton.svelte';
  import IconPlay    from './icons/IconPlay.svelte';
  import IconRestart from './icons/IconRestart.svelte';
  import IconJoystick from './icons/IconJoystick.svelte';
  import IconGyro    from './icons/IconGyro.svelte';
  import IconSoundOn from './icons/IconSoundOn.svelte';
  import IconSoundOff from './icons/IconSoundOff.svelte';

  export let lvl = 1;
  export let chrono = '0:00';
  /** @type {'gyro' | 'joystick'} */
  export let controlMode = 'gyro';
  export let soundEnabled = true;

  const dispatch = createEventDispatcher();

  function onBackdropClick(e) {
    if (e.target === e.currentTarget) dispatch('resume');
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="overlay" on:click={onBackdropClick}>
  <div class="panel">
    <div class="title">PAUSE</div>
    <div class="info">NVL {lvl} · {chrono}</div>

    <NeonButton variant="primary" on:click={() => dispatch('resume')}>
      <IconPlay /> REPRENDRE
    </NeonButton>

    <NeonButton variant="success" on:click={() => dispatch('restart')}>
      <IconRestart /> RECOMMENCER
    </NeonButton>

    <NeonButton variant="warning" on:click={() => dispatch('toggleControl')}>
      {#if controlMode === 'gyro'}
        <IconJoystick /> MODE JOYSTICK
      {:else}
        <IconGyro /> MODE GYROSCOPE
      {/if}
    </NeonButton>

    <NeonButton variant="info" on:click={() => dispatch('toggleSound')}>
      {#if soundEnabled}
        <IconSoundOn /> SON ACTIVÉ
      {:else}
        <IconSoundOff /> SON COUPÉ
      {/if}
    </NeonButton>
  </div>
</div>

<style>
  .overlay {
    position: fixed;
    inset: 0;
    background: var(--color-overlay);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 200;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }

  .panel {
    background: var(--color-surface-strong);
    border: 1.5px solid var(--color-primary);
    border-radius: var(--radius-lg);
    padding: 28px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    min-width: 220px;
    box-shadow:
      0 0 50px rgba(var(--color-primary-rgb), 0.30),
      inset 0 0 30px rgba(0, 0, 80, 0.35);
  }

  .title {
    color: var(--color-primary);
    font-family: var(--font-mono);
    font-size: 24px;
    letter-spacing: 8px;
    text-shadow:
      var(--glow-strong) var(--color-primary),
      var(--glow-soft)  var(--color-primary);
  }

  .info {
    color: rgba(var(--color-primary-rgb), 0.55);
    font-family: var(--font-mono);
    font-size: 12px;
    letter-spacing: 2px;
    margin-top: -4px;
  }
</style>
