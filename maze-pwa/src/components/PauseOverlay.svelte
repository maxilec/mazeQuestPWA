<script>
  // Modale pause : titre, infos niveau, boutons d'action.
  // Tap dans la zone autour de la modale (`backdrop`) → resume.
  import NeonButton from './NeonButton.svelte';

  export let lvl     = 1;
  export let chrono  = '';
  export let mode    = 'survie';   // 'survie' | 'hardcore' | 'zen'

  // Callbacks (préférés aux events pour la lisibilité côté Game.svelte)
  export let onResume   = () => {};
  export let onRestart  = () => {};
  export let onSettings = () => {};
  export let onMenu     = () => {};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="overlay" on:click|self={onResume}>
  <div class="panel">
    <div class="title">PAUSE</div>
    <div class="info">NVL {lvl}{mode !== 'zen' ? ' · ' + chrono : ''}</div>
    <NeonButton on:click={onResume}>▶&nbsp; REPRENDRE</NeonButton>
    <NeonButton variant="green" on:click={onRestart}>↺&nbsp; RECOMMENCER</NeonButton>
    <NeonButton variant="amber" on:click={onSettings}>⚙&nbsp; PARAMÈTRES</NeonButton>
    <NeonButton variant="dim"   on:click={onMenu}>⬅ MENU PRINCIPAL</NeonButton>
  </div>
</div>

<style>
  .overlay {
    position: fixed; inset: 0;
    background: rgba(0,0,10,0.85);
    display: flex; align-items: center; justify-content: center;
    z-index: 200;
    backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
  }
  .panel {
    background: rgba(0,5,20,0.98);
    border: 1.5px solid var(--neon-color, #00c8ff); border-radius: 14px;
    padding: 28px 32px;
    display: flex; flex-direction: column; align-items: center; gap: 14px;
    min-width: 220px;
    box-shadow: 0 0 50px rgba(0,200,255,0.28), inset 0 0 30px rgba(0,0,80,0.35);
  }
  .title {
    color: var(--neon-color, #00c8ff); font-size: 22px; letter-spacing: 8px;
    text-shadow: 0 0 20px var(--neon-color, #00c8ff);
  }
  .info {
    color: rgba(255,255,255,0.65);
    font-size: 11px; letter-spacing: 2px;
    margin-top: -4px;
    font-family: 'Courier New', monospace;
  }
</style>
