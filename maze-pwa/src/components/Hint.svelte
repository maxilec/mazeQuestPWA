<script>
  import IconMobile   from './icons/IconMobile.svelte';
  import IconMouse    from './icons/IconMouse.svelte';
  import IconKeyboard from './icons/IconKeyboard.svelte';
  import IconJoystick from './icons/IconJoystick.svelte';

  /** @type {'gyro' | 'mouse' | 'keys' | 'joystick'} */
  export let mode = 'mouse';

  const messages = {
    gyro:     "Inclinez l'appareil",
    mouse:    'Déplacez la souris',
    keys:     'Touches fléchées',
    joystick: 'Glissez pour diriger',
  };
</script>

<p class="hint">
  <span class="hint__icon">
    {#if mode === 'gyro'}     <IconMobile />
    {:else if mode === 'mouse'}    <IconMouse />
    {:else if mode === 'keys'}     <IconKeyboard />
    {:else if mode === 'joystick'} <IconJoystick />
    {/if}
  </span>
  <span class="hint__text">{messages[mode]}</span>
</p>

<style>
  .hint {
    color: rgba(var(--color-primary-rgb), 0.35);
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: .5px;
    text-align: center;
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }

  .hint__icon {
    display: inline-flex;
  }

  @media (orientation: landscape) {
    .hint {
      writing-mode: vertical-rl;
      text-orientation: mixed;
      transform: rotate(180deg);
      font-size: 9px;
    }
  }
</style>
