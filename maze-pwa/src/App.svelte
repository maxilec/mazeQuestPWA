<script>
  import { onMount }        from 'svelte';
  import { screen, settings, audioMgrStore } from './stores.js';
  import { createAudioManager } from './lib/audio.js';
  import TitleScreen        from './components/TitleScreen.svelte';
  import GameOver           from './components/GameOver.svelte';
  import Game               from './components/Game.svelte';

  onMount(() => {
    const mgr = createAudioManager(import.meta.env.BASE_URL);
    mgr.init($settings.muted ? 0 : $settings.volume);
    audioMgrStore.set(mgr);
    return () => { mgr.destroy(); audioMgrStore.set(null); };
  });

  // Keep volume in sync whenever settings change
  $: if ($audioMgrStore) {
    $audioMgrStore.setVolume($settings.volume, !$settings.muted);
  }
</script>

<!-- Persistent full-screen nebula — visible behind all screens -->
<div class="bg-nebula"></div>

{#if $screen === 'title'}
  <TitleScreen />
{:else if $screen === 'gameover'}
  <GameOver />
{:else}
  <Game />
{/if}

<style>
  :global(*, *::before, *::after) { box-sizing: border-box; margin: 0; padding: 0; }
  :global(html, body) {
    width: 100%; height: 100%;
    background: #03000f; overflow: hidden;
    touch-action: none; user-select: none;
  }

  .bg-nebula {
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 70% 50% at 18% 28%, rgba(130,0,200,0.20) 0%, transparent 70%),
      radial-gradient(ellipse 60% 45% at 75% 65%, rgba(0,40,180,0.18) 0%, transparent 70%),
      radial-gradient(ellipse 50% 40% at 55% 85%, rgba(190,0,110,0.13) 0%, transparent 70%),
      radial-gradient(ellipse 55% 45% at 84% 18%, rgba(0,90,220,0.15) 0%, transparent 70%),
      #03000f;
  }
</style>
