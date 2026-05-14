<script>
  export let label = '';
  export let min = 0;
  export let max = 1;
  export let step = 0.05;
  export let value = 0;
  /** @type {(v: number) => string} */
  export let format = (v) => v.toFixed(2);
</script>

<label class="slider">
  <span class="slider__label">{label}</span>
  <input
    type="range"
    {min}
    {max}
    {step}
    bind:value
  />
  <span class="slider__value">{format(value)}</span>
</label>

<style>
  .slider {
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: rgba(var(--color-primary-rgb), 0.80);
    font-family: var(--font-mono);
    font-size: 11px;
  }

  .slider__label {
    letter-spacing: 1px;
  }

  .slider input[type='range'] {
    width: 100%;
    accent-color: var(--color-primary);
    cursor: pointer;
  }

  .slider__value {
    color: var(--color-primary);
    font-size: 10px;
    letter-spacing: 1px;
    text-shadow: 0 0 6px var(--color-primary);
  }
</style>
