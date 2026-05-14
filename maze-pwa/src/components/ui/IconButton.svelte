<script>
  export let label;
  export let size = 30;
</script>

<button
  class="icon-btn"
  style="--size: {size}px"
  aria-label={label}
  on:click
>
  <slot />
</button>

<style>
  .icon-btn {
    background: transparent;
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
    width: var(--size);
    height: var(--size);
    border-radius: var(--radius-sm);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 8px rgba(var(--color-primary-rgb), 0.20);
    filter: drop-shadow(0 0 6px var(--color-primary));
    font-family: inherit;
    padding: 0;
  }

  .icon-btn:active {
    background: rgba(var(--color-primary-rgb), 0.15);
  }
</style>
