<script>
  import IconRotate from './icons/IconRotate.svelte';

  export let title = 'Tournez votre appareil';
  export let subtitle = 'MazeBall se joue en mode paysage';
</script>

<div class="overlay">
  <div class="icon"><IconRotate size={72} /></div>
  <div class="msg">{title}</div>
  <div class="sub">{subtitle}</div>
</div>

<style>
  .overlay {
    position: fixed;
    inset: 0;
    z-index: 500;
    background: var(--color-bg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .icon {
    color: var(--color-primary);
    filter: drop-shadow(0 0 12px var(--color-primary));
    display: inline-block;
    animation: spin90 1.8s ease-in-out infinite;
  }

  @keyframes spin90 {
    0%, 40%   { transform: rotate(0deg);  opacity: 1; }
    60%, 100% { transform: rotate(90deg); opacity: 0.5; }
  }

  .msg {
    color: var(--color-primary);
    font-family: var(--font-mono);
    font-size: 20px;
    letter-spacing: 3px;
    text-shadow: var(--glow-strong) var(--color-primary);
  }

  .sub {
    color: rgba(var(--color-primary-rgb), 0.45);
    font-family: var(--font-mono);
    font-size: 12px;
    letter-spacing: 1px;
  }
</style>
