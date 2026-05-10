<script>
  import { screen }      from './stores.js';
  import TitleScreen     from './components/TitleScreen.svelte';
  import GameOver        from './components/GameOver.svelte';
  import Game            from './components/Game.svelte';
</script>

{#if $screen === 'title'}
  <TitleScreen />
{:else if $screen === 'gameover'}
  <GameOver />
{:else}
  <Game />
{/if}
