<script>
  // HUD (Lot 6) : nouvelle structure « zen / clear ».
  //  - Top bar : 3 colonnes [Niveau N | Timer + horloge | Record: Niveau M],
  //              barre de progression cyan en-dessous (toute largeur).
  //  - Maze area : <slot /> pour Canvas/Scene3D.
  //  - Bottom bar : icône bille + « x N CHUTES » à gauche, bouton MENU à droite.
  //
  // Le logo MazeBall et le bouton pause iconé ont été retirés. Le bouton MENU
  // appelle onTogglePause (qui ouvre le PauseOverlay existant : Resume /
  // Settings / Retour titre).

  import NeonButton from './NeonButton.svelte';
  import { highScores } from '../stores.js';

  export let lvl       = 1;
  export let chrono    = '';
  export let attempts  = 0;
  export let mode      = 'survie';
  export let timeLeft  = 120;
  export let paused    = false;
  export let onTogglePause = () => {};

  // Record (meilleur niveau atteint dans le mode courant).
  $: bestLvl = $highScores?.[mode]?.lvl ?? 0;

  // Pourcentage de remplissage de la barre (0..1 pour ≤120s ; overflow >1
  // si bonus pousse au-delà — clamp visuel à 1, l'overflow est rendu plus
  // brillant). En mode zen le timer compte à l'envers, pas de gauge utile.
  $: gaugePct = mode === 'zen' ? 1 : Math.max(0, Math.min(1, timeLeft / 120));
  $: gaugeAlert = timeLeft <= 10 && timeLeft > 0 && mode !== 'zen';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="container" on:click>

  <!-- Top bar : Niveau / Timer / Record + gauge -->
  <div class="top-bar">
    <div class="top-row">
      <div class="top-left">
        <span class="label">Niveau</span>
        <span class="value">{lvl}</span>
      </div>
      <div class="top-center">
        <span class="timer">{chrono}</span>
        <span class="timer-icon">⏱</span>
      </div>
      <div class="top-right">
        {#if bestLvl > 0}
          <span class="label">Record:</span>
          <span class="record-value">Niveau {bestLvl}</span>
        {/if}
      </div>
    </div>
    <div class="progress" class:alert={gaugeAlert}>
      <div class="progress-fill" style="width: {gaugePct * 100}%"></div>
    </div>
  </div>

  <!-- Board slot (Canvas + Scene3D montés par Game.svelte) -->
  <div class="board-area">
    <slot />
  </div>

  <!-- Bottom bar : chutes counter à gauche, MENU à droite -->
  <div class="bottom-bar">
    <div class="bottom-left">
      <span class="ball-icon"></span>
      <span class="chutes-label">x {attempts}</span>
      <span class="chutes-text">CHUTES</span>
    </div>
    <div class="bottom-right">
      <NeonButton shape="pill" on:click={(e) => { e.stopPropagation(); onTogglePause(); }}>
        MENU
      </NeonButton>
    </div>
  </div>
</div>

<style>
  .container {
    position: relative; z-index: 10;
    /* Lot 6.4 : 100dvh (dynamic viewport height) au lieu de 100vh.
       iOS Safari : 100vh = viewport avec URL bar collapsed → quand
       URL bar visible, le content du bas tombe hors écran. 100dvh
       s'adapte à la viewport réelle visible. */
    width: 100vw; height: 100dvh;
    display: flex; flex-direction: column;
    align-items: stretch;
    /* Lot 6.1 — Montserrat Light pour le look papier doux du ref */
    font-family: 'Montserrat', 'Helvetica Neue', sans-serif;
    font-weight: 300;
    gap: 6px;
    padding-top:    max(8px, env(safe-area-inset-top));
    padding-bottom: max(8px, env(safe-area-inset-bottom));
    padding-left:   max(12px, env(safe-area-inset-left));
    padding-right:  max(12px, env(safe-area-inset-right));
    box-sizing: border-box;
  }

  /* ── Top bar ───────────────────────────────────────────────────────── */
  .top-bar {
    flex-shrink: 0;
    display: flex; flex-direction: column; gap: 4px;
    width: 100%;
  }
  .top-row {
    display: grid;
    grid-template-columns: 1fr 1.6fr 1fr;
    align-items: center;
    gap: 8px;
  }
  .top-left, .top-right {
    display: flex; flex-direction: column;
    color: #6b6f7a;
    font-size: clamp(10px, 2.2vw, 13px);
    line-height: 1.15;
  }
  .top-right  { align-items: flex-end; text-align: right; }
  .top-left   { align-items: flex-start; text-align: left; }
  .label { color: #6b6f7a; letter-spacing: 0.5px; font-weight: 300; }
  .value, .record-value {
    color: #2d3138; font-weight: 500;
    font-size: clamp(12px, 2.6vw, 16px);
  }

  .top-center {
    display: flex; align-items: center; justify-content: center;
    gap: 8px;
    color: #2d3138;
  }
  .timer {
    font-weight: 500;
    font-size: clamp(22px, 5.5vw, 36px);
    letter-spacing: 0;
    line-height: 1;
  }
  .timer-icon {
    font-size: clamp(16px, 4vw, 26px);
    opacity: 0.65;
  }

  /* ── Progress bar (gauge horizontal) ─────────────────────────────── */
  .progress {
    height: 7px;
    width: 100%;
    border-radius: 4px;
    background: rgba(0,0,0,0.06);
    overflow: hidden;
  }
  .progress-fill {
    height: 100%;
    background: var(--neon-color, #00c8ff);
    box-shadow: 0 0 8px var(--neon-color, #00c8ff);
    transition: width 200ms linear;
  }
  .progress.alert .progress-fill {
    background: #ff5555;
    box-shadow: 0 0 10px #ff5555;
    animation: pulse 700ms ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50%      { opacity: 0.5; }
  }

  /* ── Board area ──────────────────────────────────────────────────── */
  .board-area {
    flex: 1 1 auto; min-height: 0;
    position: relative;
    display: flex; align-items: center; justify-content: center;
  }

  /* ── Bottom bar ──────────────────────────────────────────────────── */
  .bottom-bar {
    flex-shrink: 0;
    display: flex; flex-direction: row;
    align-items: center; justify-content: space-between;
    gap: 12px;
    width: 100%;
  }
  .bottom-left {
    display: flex; align-items: center; gap: 8px;
    color: #6b6f7a;
    font-size: clamp(11px, 2.4vw, 14px);
    letter-spacing: 1px;
    font-weight: 300;
  }
  .ball-icon {
    display: inline-block; width: 18px; height: 18px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%,
                                #f5d28a 0%, #c08050 55%, #7a4928 100%);
    box-shadow: 0 1px 3px rgba(0,0,0,0.25);
    flex-shrink: 0;
  }
  .chutes-label { color: #2d3138; font-weight: 500; }
  .chutes-text  { color: #6b6f7a; font-weight: 300; }
  .bottom-right { flex-shrink: 0; }

  /* Override : le NeonButton pill prend une largeur auto ici (pas 100%). */
  .bottom-right :global(.neon-btn) {
    width: auto; min-width: 88px;
    padding: 9px 22px;
    font-family: 'Montserrat', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    font-size: 13px;
    letter-spacing: 2px;
  }

  /* ── Landscape : on garde la même structure verticale top→board→bottom,
        juste compactée (le board prend toute la place horizontale). ──── */
  @media (orientation: landscape) and (max-height: 500px) {
    .container { gap: 6px; padding-top: 6px; padding-bottom: 6px; }
    .top-row   { grid-template-columns: 1fr 1.4fr 1fr; }
    .timer     { font-size: clamp(20px, 5vh, 32px); }
    .timer-icon { font-size: clamp(16px, 4vh, 24px); }
  }
</style>
