# 🎯 Labyrinthe — Bille de métal (PWA 3D)

Jeu de labyrinthe procédural contrôlé par gyroscope, rendu **3D temps-réel**
via Threlte (wrapper Svelte de three.js).

Stack : **Svelte 4 + Vite 5 + Threlte 7 + three.js 0.160 + vite-plugin-pwa**.

> **Branche en cours :** `claude/carved-groove-tiles-fCz2l`
> Polish visuel 3D : matières, lumières, post-processing, géométrie tuiles.
> Voir le [Rapport de conception 3D](docs/3D_DESIGN_REPORT.md) pour
> l'historique détaillé des décisions et leur justification.

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
> Sur desktop, utilise la souris (déplacer sur le plateau = incliner)
> ou le joystick virtuel (réglages → mode de contrôle).
> Sur mobile, utilise `npm run preview` après un build, ou déploie.

### 4. Builder pour la production

```bash
npm run build
```

Le build (avec icônes + Service Worker + WebGL Threlte) est généré
dans `dist/`. Note : le chunk `Scene3D` fait ~775 KB (gzip 204 KB)
incluant three.js et threlte.

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

GitHub Pages est configuré via `.github/workflows/deploy.yml` —
push sur les branches listées déclenche le build + déploiement automatique.

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

---

## 🎮 Contrôles

| Appareil | Contrôle |
|---|---|
| Mobile (gyroscope) | Inclinez physiquement l'appareil |
| Mobile (joystick)  | Joystick virtuel à l'écran (réglages) |
| Desktop | Déplacez la souris sur le plateau |
| Clavier | Touches fléchées ← ↑ → ↓ |

---

## 🕹️ Modes de jeu

- **Survie** — niveaux successifs, compteur de chutes, jauge de temps.
- **Hardcore** — une seule chute autorisée.
- **Zen** — pas de chrono, exploration libre, couleur personnalisable.

---

## ⚙ Personnalisation

Le panneau **Réglages** permet d'ajuster :
- Volume / muet
- Sensibilité du contrôle
- Mode de contrôle (gyro ↔ joystick virtuel)
- Retour haptique (vibration)
- Couleur du mode Zen

Constantes physiques côté code → `src/lib/constants.js` :
```js
export const FRICTION = 0.93;  // frottement (0-1, plus haut = plus lent)
export const GRAVITY  = 0.40;  // sensibilité à l'inclinaison
export const BOUNCE   = 0.22;  // rebond sur les murs (0 = aucun, 1 = élastique)
```

Constantes visuelles 3D → `src/components/Scene3D.svelte` (haut du
script) :
```js
const FOV              = 7;     // téléobjectif (perspective aplatie)
const CAM_TILT_DEG     = 6;     // angle caméra cavalier léger
const WORLD_STRETCH_Y  = 1.00;  // anamorphose verticale (1.0 = aucune)
// pathH = min(cw,ch) * 0.80    // hauteur d'extrusion des tiles
const PATH_COLOR       = '#f1e9d9'; // cream uniforme (match HUD bg)
```

Setup lighting (3 sources, Lot 7.2+) :
```js
HemisphereLight  sky #fff, ground #e8d6bc, intensity 1.15
DirectionalLight key #fff5e0 quasi-vertical, castShadow, intensity 1.15
DirectionalLight rim #fff5e0 depuis le haut du plateau, intensity 0.55
```

Shadow setup (Lot 7.3.c) :
```js
shadow.mapSize     = 2048×2048  // précision depth
shadow.bias        = -0.001     // marge depth
shadow.normalBias  = 5.0        // offset normal (anti-acne soft clay)
shadow.radius      = 12         // PCF blur soft
```

---

## 📁 Structure du projet

```
maze-pwa/
├── index.html                  # Point d'entrée HTML
├── package.json
├── vite.config.js              # Vite + plugin PWA
├── scripts/
│   └── gen-icons.mjs           # Génération icônes PNG (Node natif)
├── public/
│   ├── assets/                 # Musique, sons, SVG bonus (+5s, +10s, +30s)
│   └── icons/                  # Icônes PWA
├── docs/
│   └── 3D_DESIGN_REPORT.md     # Rapport de conception 3D détaillé
└── src/
    ├── main.js                 # Bootstrap Svelte
    ├── App.svelte              # Aiguillage écran (title / game / gameover)
    ├── stores.js               # État global (Svelte stores + persistance)
    ├── components/             # Composants UI
    │   ├── TitleScreen.svelte
    │   ├── Game.svelte         # Game loop, input, physics
    │   ├── Scene3D.svelte      # Rendu 3D Threlte (tiles, bille, bonus...)
    │   ├── Postprocess.svelte  # Bloom + env map (PMREMGenerator)
    │   ├── Canvas.svelte       # Canvas 2D legacy (capture input)
    │   ├── HUD.svelte          # UI top : niveau, chrono, record
    │   ├── GameOver.svelte
    │   ├── SettingsPanel.svelte
    │   └── PauseOverlay.svelte
    └── lib/                    # Logique pure (sans Svelte)
        ├── constants.js        # Palette néon, ratios, constantes physiques
        ├── theme.js            # Thèmes par niveau / zen color
        ├── maze.js             # Génération DFS du labyrinthe
        ├── maze-utils.js       # bfsPath, trackRatio, collectibles
        ├── physics.js          # Intégration bille (friction, rebonds)
        ├── render.js           # SVG loader + rasterizer (bonus textures)
        └── audio.js            # Gestionnaire audio (musique + SFX)
```

---

## 🏗️ Architecture

### Séparation logique / rendu
- **Logique métier** (`src/lib/`) : modules JS purs, aucune dépendance
  Svelte ni three.js. Physique 2D, génération maze, audio.
- **UI 2D** (`src/components/HUD.svelte`, etc.) : composants Svelte
  classiques pour les surcouches (HUD, menus, overlays).
- **Rendu 3D** (`src/components/Scene3D.svelte`, `Postprocess.svelte`) :
  Threlte + three.js. Lit l'état `G` (game state) calculé par
  `Game.svelte` et le matérialise en 3D. **Le mesh 3D est purement
  visuel — la physique reste 2D** (sur la grille `maze[r][c]`).

### Système de tuiles "Lego" (Lot 6.22+)
Le labyrinthe est composé de 5 types de tuiles ré-utilisables :
`straight`, `corner`, `T`, `cross`, `deadEnd`. Chacune est extrudée
une fois par niveau (avec la `pathW` courante) puis instanciée via
`InstancedMesh` dans chaque cellule du maze. Permet de tenir 60 FPS
mobile avec un maze 10×6 et des bevels arrondis.

### Pipeline de rendu
1. **Géométrie** : `ExtrudeGeometry` par tile, avec bevel "soft clay"
   et arrondis sélectifs sur les coins INTERNES (les coins boundary
   restent sharp pour seamless connection entre tiles adjacentes).
2. **Matériaux** : `MeshStandardMaterial` pour les tiles
   (`vertexColors=true` → AO procédural cuit dans les vertex pour
   le dégradé soft clay du dessus vers le bas), ball en
   metalness=1.0 / roughness=0.15.
3. **Lumières** : `HemisphereLight` (ciel chaud + sol cream) +
   2 `DirectionalLight` (key quasi-vertical avec `castShadow`,
   rim depuis le haut du plateau) + `PointLight` bounce sous la
   bille (suit la bille pour reflet néon local).
4. **Post-processing** : Bloom (UnrealBloomPass) + env map procédurale
   chaude (PMREMGenerator sur CanvasTexture gradient vertical).

Voir [`docs/3D_DESIGN_REPORT.md`](docs/3D_DESIGN_REPORT.md) pour le
détail des choix et leurs itérations.

### État partagé
`src/stores.js` centralise :
- `screen` — écran actif (`title` / `game` / `gameover`)
- `gameMode` — mode courant
- `runStats` — stats de la partie en cours
- `settings` — préférences persistées (`localStorage`)
- `highScores` — meilleurs scores persistés
- `audioMgrStore` — instance partagée du gestionnaire audio

---

## 🔧 Algorithme de génération

Le labyrinthe est généré par **DFS itératif (backtracking)** :
- Garantit un labyrinthe *parfait* : une seule solution, toutes
  cellules accessibles
- `makeMaze(rows, cols)` → grille de cellules `{T, R, B, L}` (walls)
- Le trou est placé dans la cellule la plus éloignée du point de
  départ (BFS distance)

La fonction `getTrackRatio(lvl)` détermine la largeur de la piste :
`0.65 - floor((lvl-1)/5) × 0.05`, plancher 0.35. Note : le sweet-spot
`0.50` (lvl 16-20) est nudgé à `0.48` pour éviter une dégénérescence
géométrique (cf. Lot 6.29 dans le rapport).

---

## 📜 Licence

MIT — libre de réutilisation et modification.
