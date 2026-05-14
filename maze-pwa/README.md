# 🎯 Labyrinthe — Bille de métal (PWA)

Jeu de labyrinthe procédural contrôlé par gyroscope.
Stack : **Svelte 4 + Vite 5 + vite-plugin-pwa**.

---

## ⚡ Installation rapide

### Prérequis
- [Node.js](https://nodejs.org) **v18+** (LTS recommandé)
- npm (inclus avec Node.js)

### 1. Installer les dépendances

```bash
npm install
```

### 2. Générer les icônes PWA

```bash
node scripts/gen-icons.mjs
```

Cela crée `public/icons/icon-192.png` et `public/icons/icon-512.png`
à partir de zéro, sans dépendance externe (Node.js natif uniquement).

### 3. Lancer en développement

```bash
npm run dev
```

Ouvre `http://localhost:5173` dans ton navigateur.

> **Note gyroscope en dev** : le gyroscope nécessite HTTPS.
> Sur desktop, utilise la souris (déplacer sur le plateau = incliner).
> Sur mobile, utilise `npm run preview` après un build, ou déploie.

### 4. Builder pour la production

```bash
npm run build
```

Le build (avec icônes + Service Worker) est généré dans `dist/`.

### 5. Tester le build localement

```bash
npm run preview
```

Ouvre `http://localhost:4173`.

---

## 📱 Installer l'app sur mobile

### Android (Chrome / Edge)
1. Ouvre l'app dans Chrome
2. Menu ⋮ → **"Ajouter à l'écran d'accueil"**
3. L'app se lance en plein écran, gyroscope actif

### iOS (Safari uniquement)
1. Ouvre l'app dans **Safari**
2. Bouton partage → **"Sur l'écran d'accueil"**
3. Au premier lancement : appuie sur **"Activer le gyroscope"**
   (iOS 13+ demande une permission explicite)

---

## 🌐 Déploiement

N'importe quel hébergement statique fonctionne.
L'app doit être servie en **HTTPS** pour que le gyroscope fonctionne.

### Vercel (recommandé, gratuit)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# puis glisse-dépose le dossier dist/ sur netlify.com/drop
```

### GitHub Pages
```bash
npm run build
# pousse dist/ sur la branche gh-pages
```

---

## 🎮 Contrôles

| Appareil | Contrôle |
|---|---|
| Mobile (gyroscope) | Inclinez physiquement l'appareil |
| Desktop | Déplacez la souris sur le plateau |
| Clavier | Touches fléchées ← ↑ → ↓ |

---

## ⚙ Personnalisation

Clique sur **⚙ Grille** dans l'app pour changer :
- **Rangs** : 3–16 (hauteur du labyrinthe)
- **Cols** : 3–12 (largeur du labyrinthe)

Modifie les constantes dans `src/App.svelte` :
```js
const FRICTION = 0.93;  // frottement (0-1, plus haut = plus lent)
const GRAVITY  = 0.40;  // sensibilité à l'inclinaison
const BOUNCE   = 0.22;  // rebond sur les murs (0 = aucun, 1 = élastique)
```

---

## 📁 Structure du projet

```
maze-pwa/
├── index.html              # Point d'entrée HTML
├── package.json
├── vite.config.js          # Vite + plugin PWA
├── scripts/
│   └── gen-icons.mjs       # Génération icônes PNG (Node natif)
├── public/
│   └── icons/
│       ├── icon.svg        # Icône SVG (fallback)
│       ├── icon-192.png    # Généré par gen-icons.mjs
│       └── icon-512.png    # Généré par gen-icons.mjs
└── src/
    ├── main.js             # Bootstrap Svelte
    ├── App.svelte          # Composant racine (orchestration)
    └── lib/
        ├── constants.js    # Constantes physique / gameplay
        ├── maze.js         # Algorithme DFS de génération
        ├── maze-utils.js   # Helpers grille (voisins, distance, etc.)
        ├── physics.js      # Intégration bille + collisions
        ├── render.js       # Dessin canvas (plateau, bille, FX)
        └── audio.js        # Gestion WebAudio (musique + SFX)
```

---

## 🧱 Refactor UI en cours — branche `claude/refactor-game-ui-wFfsk`

L'interface est en cours de modularisation. Objectifs :

- **Découper `App.svelte`** (≈850 lignes) en composants Svelte ciblés.
- **Factoriser** les motifs récurrents de l'UI (HUD, boutons, overlays, menus).
- **Réutiliser** les briques entre écrans (pause, fin de niveau, paramètres…).
- **Isoler** la logique gameplay (déjà sortie dans `lib/`) de la couche présentation.

### Composants visés

| Composant | Rôle |
|---|---|
| `GameCanvas.svelte` | Canvas + boucle de rendu, expose les events haut-niveau |
| `Hud.svelte` | Affichage niveau / chrono / essais |
| `Joystick.svelte` | Joystick virtuel tactile |
| `PauseMenu.svelte` | Overlay pause + actions |
| `SettingsPanel.svelte` | Réglages (grille, sensibilité, volume) |
| `RotateOverlay.svelte` | Invite à passer en paysage |
| `IconButton.svelte` | Bouton icône réutilisable (son, pause, etc.) |
| `Slider.svelte` | Slider stylé (sensibilité, volume…) |

> Note : les noms ci-dessus sont indicatifs et peuvent évoluer au fil du refactor.

---

## 🔧 Algorithme de génération

Le labyrinthe est généré par **DFS itératif (backtracking)** :
- Garantit un labyrinthe *parfait* : une seule solution, toutes cellules accessibles
- Paramétrable : `makeMaze(rows, cols)` → grille de cellules `{T, R, B, L}`
- Le trou est placé dans la cellule la plus éloignée du point de départ (distance Manhattan)

---

## 📜 Licence

MIT — libre de réutilisation et modification.
