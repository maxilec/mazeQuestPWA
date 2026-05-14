<script>
  import { createEventDispatcher } from 'svelte';
  import NeonButton from './ui/NeonButton.svelte';
  import IconPlay   from './icons/IconPlay.svelte';

  export let text = '';
  export let showIosButton = false;

  const dispatch = createEventDispatcher();
</script>

{#if text}
  <div class="overlay">
    {#if showIosButton}
      <NeonButton
        variant="primary"
        wide={false}
        on:click={() => dispatch('requestGyro')}
      >
        <span class="ios-btn"><IconPlay /> ACTIVER &amp; JOUER</span>
      </NeonButton>
    {:else}
      {#key text}
        <div class="text">{text}</div>
      {/key}
    {/if}
  </div>
{/if}

<style>
  .overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-overlay-soft);
    border-radius: var(--radius-xs);
    pointer-events: none;
  }

  .text {
    font-family: var(--font-mono);
    font-size: clamp(36px, 14vw, 72px);
    font-weight: bold;
    letter-spacing: 4px;
    color: var(--color-primary);
    text-shadow:
      0 0 40px var(--color-primary),
      0 0 14px var(--color-primary),
      0 0 4px #fff;
    animation: cdPulse 0.72s cubic-bezier(.2, .8, .4, 1) both;
  }

  @keyframes cdPulse {
    from { transform: scale(2.2); opacity: 0; }
    to   { transform: scale(1);   opacity: 1; }
  }

  .ios-btn {
    font-size: 16px;
    letter-spacing: 4px;
    padding: 4px 12px;
    pointer-events: all;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .overlay :global(.neon-btn) {
    pointer-events: all;
  }
</style>
