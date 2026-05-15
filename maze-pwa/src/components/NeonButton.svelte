<script>
  // Bouton néon réutilisable. Deux formes :
  //  - shape="pill"    → bouton rectangulaire arrondi (utilisé dans les overlays)
  //  - shape="capsule" → petite capsule (utilisée pour la pause en zone B)
  // Variantes de couleur : cyan (défaut), green, amber, dim, red.

  export let shape   = 'pill';   // 'pill' | 'capsule'
  export let variant = 'cyan';   // 'cyan' | 'green' | 'amber' | 'dim' | 'red'
  export let disabled = false;
</script>

<button
  class="neon-btn"
  class:capsule={shape === 'capsule'}
  class:v-green={variant === 'green'}
  class:v-amber={variant === 'amber'}
  class:v-dim={variant === 'dim'}
  class:v-red={variant === 'red'}
  {disabled}
  on:click
>
  <slot />
</button>

<style>
  /* Forme par défaut : pilule (variante cyan suit --neon-color) */
  .neon-btn {
    border: 1.5px solid var(--neon-color, #00c8ff);
    background: transparent;
    color: var(--neon-color, #00c8ff);
    padding: 10px 16px; border-radius: 7px;
    font-family: 'Orbitron', monospace;
    font-size: 11px; cursor: pointer;
    letter-spacing: 2px;
    text-shadow: 0 0 8px var(--neon-color, #00c8ff);
    box-shadow: 0 0 10px rgba(0,200,255,0.20);
    width: 100%;
  }
  .neon-btn:active { background: rgba(0,200,255,0.13); }
  .neon-btn:disabled { opacity: 0.4; cursor: not-allowed; }

  /* Variantes de couleur */
  .neon-btn.v-green {
    border-color: #00ff80; color: #00ff80;
    text-shadow: 0 0 8px #00ff80;
    box-shadow: 0 0 10px rgba(0,255,128,0.20);
  }
  .neon-btn.v-green:active { background: rgba(0,255,128,0.13); }

  .neon-btn.v-amber {
    border-color: #ffb300; color: #ffcc44;
    text-shadow: 0 0 8px #ffb300;
    box-shadow: 0 0 10px rgba(255,179,0,0.20);
  }
  .neon-btn.v-amber:active { background: rgba(255,179,0,0.13); }

  .neon-btn.v-red {
    border-color: #ff5555; color: #ff5555;
    text-shadow: 0 0 8px #ff5555;
    box-shadow: 0 0 10px rgba(255,85,85,0.20);
  }
  .neon-btn.v-red:active { background: rgba(255,85,85,0.13); }

  .neon-btn.v-dim {
    border-color: rgba(0,200,255,0.30);
    color: rgba(255,255,255,0.55);
    text-shadow: none;
    box-shadow: none;
  }
  .neon-btn.v-dim:active { background: rgba(0,200,255,0.06); }

  /* Forme capsule (utilisée pour le bouton pause de la HUD) */
  .neon-btn.capsule {
    width: 54px; height: 30px;
    padding: 0; border-radius: 15px;
    background: rgba(0,200,255,0.08);  /* fallback navigateurs anciens */
    background: color-mix(in srgb, var(--neon-color, #00c8ff) 8%, transparent);
    font-size: 14px;
    letter-spacing: 0;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .neon-btn.capsule:active {
    background: rgba(0,200,255,0.22);
    background: color-mix(in srgb, var(--neon-color, #00c8ff) 22%, transparent);
  }
</style>
