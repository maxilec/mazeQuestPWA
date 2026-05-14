<script>
  export let text = 'MazeBall';
</script>

<div class="logo">{text}</div>

<style>
  .logo {
    font-family: var(--font-mono);
    font-weight: bold;
    font-size: clamp(12px, 2.2vw, 20px);
    color: var(--color-primary);
    letter-spacing: 2px;
    text-shadow: 0 0 18px var(--color-primary), 0 0 6px var(--color-primary);
    text-align: center;
  }

  @media (orientation: landscape) {
    .logo {
      writing-mode: vertical-rl;
      text-orientation: mixed;
      transform: rotate(180deg);
      font-size: clamp(14px, 1.8vh, 22px);
      letter-spacing: 4px;
    }
  }
</style>
