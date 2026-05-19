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

  <!-- Top bar : Niveau / Timer / Record (sans gauge) -->
  <div class="top-bar">
    <div class="top-row">
      <div class="top-left">
        <span class="label">Niveau</span>
        <span class="value">{lvl}</span>
      </div>
      <div class="top-center">
        <span class="timer">{chrono}</span>
        <!-- Lot 7.0.b : icône timer style Material Symbol (solid fill) -->
        <svg class="timer-icon" viewBox="0 -960 960 960" fill="currentColor"
             aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm-99.5 291.5Q275-137 226-186t-77.5-114.5Q120-366 120-440t28.5-139.5Q177-645 226-694t114.5-77.5Q406-800 480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80q-74 0-139.5-28.5ZM678-242q82-82 82-198t-82-198q-82-82-198-82t-198 82q-82 82-82 198t82 198q82 82 198 82t198-82ZM480-440Z"/>
        </svg>
      </div>
      <div class="top-right">
        {#if bestLvl > 0}
          <span class="label">Record:</span>
          <span class="record-value">Niveau {bestLvl}</span>
        {/if}
      </div>
    </div>
  </div>
  <!-- Lot 7.0.c : jauge gauge sortie du top-bar pour pouvoir être :
       - Portrait : horizontale juste au-dessus du canvas (rapprochée)
       - Landscape : verticale, positionnée côté gauche du canvas
       Le pct est passé via CSS var --fill pour permettre l'alternance
       width vs height en CSS uniquement (pas de double binding JS). -->
  <div class="progress" class:alert={gaugeAlert}
       style="--fill: {gaugePct * 100}%">
    <div class="progress-fill"></div>
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
    /* Lot 7.0.b : police Gruppo (Google Fonts), import via index.html.
       Style display "tech" qui s'aligne avec la signalétique néon. */
    font-family: 'Gruppo', 'Montserrat', sans-serif;
    font-weight: 400;          /* Gruppo n'existe qu'en regular */
    font-size: clamp(52px, 14vw, 88px);   /* encore + grand */
    letter-spacing: 0;
    line-height: 1;
  }
  .timer-icon {
    /* SVG inline Material Symbol, dimensions via width/height.
       currentColor hérite du parent (#2d3138). */
    width:  clamp(28px, 7.5vw, 44px);
    height: clamp(28px, 7.5vw, 44px);
    color: #2d3138;
    opacity: 0.65;
    flex-shrink: 0;
  }

  /* ── Progress bar (gauge) ─────────────────────────────────────────
     Lot 7.0.c : sortie du top-bar pour pouvoir être positionnée près
     du canvas (portrait : juste au-dessus / landscape : sur le côté).
     Le pct vient via --fill (CSS var inline) → la même structure
     fonctionne en width (portrait) ou height (landscape). ─────────── */
  .progress {
    height: 7px;
    width: 100%;
    border-radius: 4px;
    background: rgba(0,0,0,0.06);
    overflow: hidden;
    flex-shrink: 0;
    /* Marge négative pour rapprocher du board-area (override le gap
       container 6-8px). */
    margin-bottom: -2px;
  }
  .progress-fill {
    width: var(--fill, 0%);
    height: 100%;
    background: var(--neon-color, #00c8ff);
    box-shadow: 0 0 8px var(--neon-color, #00c8ff);
    transition: width 200ms linear, height 200ms linear;
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
    /* Lot 6.5 : align-items flex-end → le canvas est aligné AU BAS
       du board-area, juste au-dessus du bottom-bar. L'espace vide
       inhérent à l'aspect ratio non-fitté apparaît AU-DESSUS du
       canvas (vers le top-bar) plutôt qu'en bas. Bouton MENU au
       plus près du maze. */
    flex: 1 1 auto; min-height: 0;
    position: relative;
    display: flex; align-items: flex-end; justify-content: center;
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
    .timer     { font-size: clamp(40px, 11vh, 64px); }
    .timer-icon {
      width:  clamp(24px, 7vh, 38px);
      height: clamp(24px, 7vh, 38px);
    }

    /* Lot 7.0.c : jauge verticale sur le côté gauche du canvas
       (positionnée absolument, alignée avec la zone du board).
       La hauteur s'adapte via top/bottom et le fill grandit en
       height au lieu de width. */
    .progress {
      position: absolute;
      left: max(6px, env(safe-area-inset-left));
      /* top : juste sous le top-bar (~52px en landscape compact) */
      top: 56px;
      /* bottom : juste au-dessus du bottom-bar (~48px) */
      bottom: 52px;
      width: 7px;
      height: auto;
      margin: 0;
      /* Fill grandit du bas vers le haut */
      display: flex;
      align-items: flex-end;
    }
    .progress-fill {
      width: 100%;
      height: var(--fill, 0%);
    }
  }
</style>
