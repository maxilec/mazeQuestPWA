<script>
  // Jauge générique horizontale ou verticale, avec libellé optionnel.
  // Couvre les anciennes gauge-p (portrait, horizontale) et gauge-l (paysage, verticale).

  export let value = 0;          // 0..maxFill (peut dépasser → overflow)
  export let maxFill = 100;      // valeur pour 100 %
  export let label = '';         // texte (chrono) ; vide → libellé masqué
  export let orientation = 'horizontal'; // 'horizontal' | 'vertical'
  export let alert = false;      // < 10 s → rouge clignotant
  export let overflow = false;   // bonus reçus → vert pulsé
  export let labelPosition = 'after'; // 'before' | 'after' (utile en vertical)

  $: pct = Math.min(100, Math.max(0, (value / maxFill) * 100));
  $: fillStyle = orientation === 'vertical' ? `height:${pct}%` : `width:${pct}%`;
</script>

<div class="gauge" class:vertical={orientation === 'vertical'}>
  {#if label && labelPosition === 'before'}
    <div class="time" class:g-alert={alert}>{label}</div>
  {/if}

  <div class="track">
    <div class="fill" style={fillStyle}
         class:g-overflow={overflow}
         class:g-alert={alert}></div>
  </div>

  {#if label && labelPosition === 'after'}
    <div class="time" class:g-alert={alert}>{label}</div>
  {/if}
</div>

<style>
  .gauge {
    display: flex; flex-direction: column;
    align-items: center; gap: 4px;
    width: 100%;
  }
  .gauge.vertical {
    flex-direction: column;
    flex: 1; min-height: 0; gap: 6px;
  }

  /* Track horizontal (portrait) */
  .track {
    width: 100%; height: 10px;
    background: rgba(255,255,255,0.08);
    border-radius: 5px; overflow: hidden;
    border: 1px solid rgba(255,224,64,0.20);
  }
  .gauge.vertical .track {
    flex: 1; width: 10px; height: auto;
    display: flex; flex-direction: column; justify-content: flex-end;
  }

  .fill {
    height: 100%;
    background: #ffe040;
    border-radius: 5px;
    transition: width 0.4s linear, height 0.4s linear;
    box-shadow: 0 0 6px #ffe040;
  }
  .gauge.vertical .fill {
    width: 100%; height: 0;
  }

  .fill.g-overflow {
    background: #00ff80;
    box-shadow: 0 0 14px #00ff80, 0 0 28px rgba(0,255,128,0.40);
    animation: gaugeGlow 1.2s ease-in-out infinite;
  }
  .fill.g-alert { background: #ff5555; box-shadow: 0 0 8px #ff5555; }

  .time {
    font-family: 'Orbitron', monospace;
    font-weight: 700; color: #ffe040;
    text-shadow: 0 0 12px #ffe040;
    line-height: 1; white-space: nowrap;
    font-size: clamp(20px, 3vw, 30px); letter-spacing: 3px;
  }
  .gauge.vertical .time {
    font-size: clamp(16px, 2.2vh, 24px); letter-spacing: 2px;
  }
  .time.g-alert {
    color: #ff5555; text-shadow: 0 0 14px #ff5555;
    animation: timerFlash 0.6s ease-in-out infinite;
  }

  @keyframes gaugeGlow {
    0%, 100% { opacity: 1; box-shadow: 0 0 14px #00ff80, 0 0 28px rgba(0,255,128,0.40); }
    50%      { opacity: 0.80; box-shadow: 0 0 22px #00ff80, 0 0 44px rgba(0,255,128,0.60); }
  }
  @keyframes timerFlash { 0%, 100% { opacity: 1; } 50% { opacity: 0.40; } }
</style>
