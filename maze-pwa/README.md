# 🎯 Labyrinthe — Bille de métal (PWA)

Jeu de labyrinthe procédural contrôlé par gyroscope.
Stack : **Svelte 4 + Vite 5 + vite-plugin-pwa**.

> **Branche en cours :** `claude/refactor-game-ui-JacOS`
> Refonte progressive de l'interface graphique : on continue de **factoriser**
> ce qui peut l'être et de **découper en composants Svelte** réutilisables
> (HUD, boutons, panneaux, jauges…). Voir la section
> [Architecture & refactoring](#-architecture--refactoring).

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
│   ├── assets/                 # Musique, sons, SVG
│   └── icons/                  # Icônes PWA
└── src/
    ├── main.js                 # Bootstrap Svelte
    ├── App.svelte              # Aiguillage écran (title / game / gameover)
    ├── stores.js               # État global (Svelte stores + persistance)
    ├── components/             # Composants UI
    │   ├── TitleScreen.svelte
    │   ├── Game.svelte         # ⚠️ gros composant — cible de découpage
    │   ├── GameOver.svelte
    │   └── SettingsPanel.svelte
    └── lib/                    # Logique pure (sans Svelte)
        ├── constants.js        # Constantes physiques et de jeu
        ├── maze.js             # Génération DFS du labyrinthe
        ├── maze-utils.js       # Helpers maze (distance, solution…)
        ├── physics.js          # Intégration bille (friction, rebonds)
        ├── render.js           # Dessin canvas
        └── audio.js            # Gestionnaire audio (musique + SFX)
```

---

## 🏗️ Architecture & refactoring

Cette branche poursuit deux objectifs :

### 1. Modularité
La logique métier vit dans `src/lib/` sous forme de **modules JS purs**
(aucune dépendance Svelte). Cela rend chaque brique testable, remplaçable
et réutilisable hors du composant.

### 2. Composants réutilisables
L'écran de jeu (`Game.svelte`, ~1000 lignes) reste le plus gros morceau
à éclater. Cibles de découpage à venir :

- **HUD** — niveau, chutes, jauge de temps, mode courant
- **Boutons d'action** — pause, settings, retour (style commun)
- **Jauges** — composant générique (temps, énergie, etc.)
- **Overlay pause / permission gyro** — modales réutilisables
- **Joystick virtuel** — composant isolé
- **Panneau de réglages** — déjà extrait, à affiner

Règle générale : **dès qu'un bloc visuel est utilisé à 2 endroits
ou dépasse ~80 lignes**, on en fait un composant dans `src/components/`.

### 3. État partagé
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
- Garantit un labyrinthe *parfait* : une seule solution, toutes cellules accessibles
- Paramétrable : `makeMaze(rows, cols)` → grille de cellules `{T, R, B, L}`
- Le trou est placé dans la cellule la plus éloignée du point de départ (distance Manhattan)

---

## 📜 Licence

MIT — libre de réutilisation et modification.
