<script>
  /** @type {'primary' | 'success' | 'warning' | 'info'} */
  export let variant = 'primary';
  export let label = undefined;
  export let wide = true;
</script>

<button
  class="neon-btn neon-btn--{variant}"
  class:neon-btn--wide={wide}
  aria-label={label}
  on:click
>
  <slot />
</button>

<style>
  .neon-btn {
    --neon-color: var(--color-primary);
    --neon-rgb: var(--color-primary-rgb);
    --neon-text: var(--color-primary);

    border: 1.5px solid var(--neon-color);
    background: transparent;
    color: var(--neon-text);
    padding: 10px 16px;
    border-radius: var(--radius-md);
    font-family: var(--font-mono);
    font-size: 12px;
    cursor: pointer;
    letter-spacing: 2px;
    text-shadow: var(--glow-soft) var(--neon-color);
    box-shadow: 0 0 10px rgba(var(--neon-rgb), 0.20);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .neon-btn--wide { width: 100%; }

  .neon-btn:active {
    background: rgba(var(--neon-rgb), 0.13);
  }

  .neon-btn--primary {
    --neon-color: var(--color-primary);
    --neon-rgb:   var(--color-primary-rgb);
    --neon-text:  var(--color-primary);
  }

  .neon-btn--success {
    --neon-color: var(--color-success);
    --neon-rgb:   var(--color-success-rgb);
    --neon-text:  var(--color-success);
  }

  .neon-btn--warning {
    --neon-color: var(--color-warning);
    --neon-rgb:   var(--color-warning-rgb);
    --neon-text:  var(--color-warning-light);
  }

  .neon-btn--info {
    --neon-color: var(--color-info);
    --neon-rgb:   var(--color-info-rgb);
    --neon-text:  var(--color-info-light);
  }
</style>
