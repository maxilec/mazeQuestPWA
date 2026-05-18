# Rapport de conception 3D — maze-pwa

> Branche `claude/carved-groove-tiles-fCz2l` — synthèse des décisions
> de design visuel après la migration Threlte/three.js et les itérations
> de polish (Lot 6.26 v2 → Lot 6.29).

---

## 1. Vue d'ensemble

Le jeu, à l'origine rendu en Canvas 2D, a été migré vers un pipeline 3D
**WebGL temps-réel via Threlte** (wrapper Svelte de three.js). L'objectif
visuel est un rendu *"Soft Clay × Néon Glacé"* inspiré de maquettes
mobile premium : matériau argile/bois clair chaud, néons délicats au
centre des pistes, bille dorée métallique, ombres douces.

La physique reste **strictement 2D** (sur la grille `maze[r][c]` via
`physics.js`). Le mesh 3D est purement visuel. Cette séparation permet
de polish le rendu sans toucher au gameplay.

---

## 2. Architecture rendu

### Composants
| Fichier | Rôle |
|---------|------|
| `Scene3D.svelte` | Scène complète : caméra, lumières, tiles, bille, néons, bonus, contact shadow, cadre |
| `Postprocess.svelte` | UnrealBloomPass + env map procédurale (CanvasTexture → PMREMGenerator) |
| `Game.svelte` | Calcule l'état `G` (position bille, maze, tilt input), passé en prop à Scene3D |

### Hiérarchie de la scène

```
<Canvas shadows={PCFSoftShadowMap}>
  <T.PerspectiveCamera position={[0, camY, camZ]} fov={6} ... />
  <Postprocess bloomStrength={0.24} bloomRadius={0.10} bloomThreshold={0.85} />
  <T.AmbientLight color="#fbe9c8" intensity={1.05} />
  <T.DirectionalLight color="#ffeec7" intensity={0.95} castShadow />
  <T.DirectionalLight color="#ffe0b0" intensity={0.45} />
  <T.Group rotation.z={worldLockZ} scale.y={1.00}>
    <T.Group rotation.x={tiltX} rotation.y={tiltY}>
      <!-- Plateau bas (sol creusé) -->
      <T.Mesh position={[0, 0, -floorDepth]} ... />
      <!-- 5 InstancedMesh : straight, corner, T, cross, deadEnd -->
      <!-- Shadow halo (rainure simulée par alphaMap gradient) -->
      <!-- Neon : white core + color halo + dots -->
      <!-- Checkpoints, collectibles, finish -->
      <!-- Bille + contact shadow + PointLights (top + bounce) -->
      <!-- Cadre néon (4 BoxGeometry boundary) -->
    </T.Group>
  </T.Group>
</Canvas>
```

### Système de tuiles "Lego" (Lot 6.22)

Au lieu de générer une ExtrudeGeometry par cellule (qui crashait mobile
en ~50ms par niveau), on génère **5 tuiles canoniques** (straight,
corner, T, cross, deadEnd) en orientation par défaut, puis on les
instancie dans chaque cellule du maze via `InstancedMesh` avec
rotation + position.

Bénéfices :
- 5 `ExtrudeGeometry` au lieu de 60 par niveau
- ~60 FPS sustained sur iPhone (au lieu de freeze à l'init)
- Bevels et arrondis pré-calculés une seule fois

Le "soft clay bevel sans seams" est obtenu via un trick d'expansion
des vertices boundary avant `ExtrudeGeometry` : on les pousse de
`bevelSize` vers l'extérieur, puis ExtrudeGeometry rétracte le top
face de `bevelSize` → le top face boundary atterrit pile sur la cell
boundary → tuiles adjacentes se connectent sans gap visible (Lot 6.22).

---

## 3. Caméra — recherche de la rectangularité

C'est le sujet qui a demandé le plus d'itérations. Objectif : voir la
**face avant** des parois (effet cavalier) tout en gardant un plateau
**rectangulaire** (pas trapézoïdal par effet de perspective).

### Évolution

| Lot | FOV | Tilt | pathH (× cell) | Multiplicateur cameraDist | Commentaire |
|-----|-----|------|----------------|---------------------------|-------------|
| 6.26 (origine) | 35 | 0° (top-down) | 0.32 | 1.05 | Aucun relief visible, plateau plat. |
| 6.27 | 25 | 22° | 0.32 | 1.18 | Cavalier marqué mais trapèze fort. |
| 6.27.b | 12 | 22° | 0.32 | 1.10 | Téléobjectif → trapèze fortement réduit. |
| 6.27.c | 12 | 18° | 0.40 | 1.10 | Tilt allégé, parois plus hautes. |
| 6.27.d | 12 | 12° | 0.55 | 1.10 | Presque orthographique, parois dominantes. |
| 6.27.e | 8 | 8° | 0.55 | 1.10 | Top redressé via FOV plus serré. |
| 6.27.f | 6 | 12° | 0.55 | 1.10 | Tilt remonté, FOV compense (rectangle parfait). |
| 6.27.g | 6 | 12° | 0.70 | 1.10 | Anamorphose enlevée (bille déformée), pathH↑. |
| 6.27.h | 6 | 11° | 0.80 | 1.10 | Final tune. |

### Mécanisme du téléobjectif

À FOV très bas, la caméra doit reculer fortement (`cameraDist ∝ 1/tan(FOV/2)`).
Pour FOV = 6, `cameraDist ≈ 10.5 × visibleH/2`. À cette distance, la
différence de scale entre les points proches et lointains du maze
devient négligeable (~1% pour un maze de hauteur ~700 unités). Résultat :
les bords du plateau apparaissent quasi-parallèles, le trapèze disparaît,
**mais le volume 3D des objets (parois, bille) est préservé** car la
perspective sur leur épaisseur reste normale.

C'est le même principe qu'un téléobjectif 600mm en photographie qui
"aplatit" les arrière-plans.

### Frustum near/far

Avec cameraDist devenu très grand, le `near=1 / far=cameraDist*3` initial
donnait un ratio de précision depth-buffer désastreux (1:11000+). On a
resserré à `near = cameraDist*0.5, far = cameraDist*1.5` (ratio 1:3),
plage suffisante pour englober tout le scène (~80 unités de profondeur
totale) avec marge.

### Position caméra

```js
camY = -cameraDist * sin(CAM_TILT_DEG * DEG)  // recule vers -Y
camZ =  cameraDist * cos(CAM_TILT_DEG * DEG)  // élève en +Z
lookAt(0, 0, 0)                                // regarde l'origine
```

`CAM_MAX_ELEV_DEG = 12` (constante héritée Lot 6) reste définie mais
non câblée — réserve pour un futur tilt dynamique top-down → cavalier.

### Anamorphose (essayée puis retirée)

Lot 6.27.f a tenté un `scale.y = 1.10` sur le root group pour étirer
le maze en Y et remplir mieux le canvas portrait. **Retiré au Lot
6.27.g** car la bille (enfant du même groupe) devenait elliptique.
Compensation : augmenter `pathH` à la place (0.55 → 0.80) pour des
parois plus hautes qui occupent plus de surface verticale.

---

## 4. Matériau de la piste — "Soft Clay"

```js
<T.MeshStandardMaterial color="#E5C29C"     // beige warm/dark
                        roughness={0.72}
                        metalness={0.04}
                        envMapIntensity={0.28} />
```

- `PATH_COLOR = '#E5C29C'` : warm cream légèrement assombri pour
  contraste avec le néon cyan
- Bevel size = `pathH × 0.04` (proportionnel à l'extrusion)
- Bevel segments = 2 (suffisant pour soft, économe en triangles)
- `expandBoundary` trick pour seamless connection entre tiles

### Sol creusé
Plane à `z = -floorDepth` (avec `floorDepth = pathH × 0.4`) en couleur
plus sombre `#a08770` → effet de profondeur dans les fossés entre les
tiles.

---

## 5. Néons — du carved groove abandonné à l'alphaMap

### Le piège du carved groove
Le Lot 6.26 v1 avait tenté une vraie **rainure géométrique** (deux
`ExtrudeGeometry` empilées avec `Shape.holes`) pour creuser le centre
de la piste. **Abandonné** : provoquait des flickers sur tilt (z-fighting
entre les deux layers au top du bevel). Reset au commit `abf9ebc`.

### Solution actuelle (Lot 6.26 v2.x)
Pas de géométrie creusée. Le néon est composé de **trois couches
planes** au-dessus de la piste, avec `renderOrder` explicite pour
éviter le flicker :

| Couche | Géométrie | Z | renderOrder | Material |
|--------|-----------|---|-------------|----------|
| Shadow halo (groove illusion) | Plane `[len, neonW × 2.8]` | `pathTop - 0.05` | 1 | MeshBasicMaterial color=`#1a0e08`, alphaMap=gradient (CanvasTexture) |
| White core | Plane `[len, neonW × 0.32]` | `pathTop` | 2 | MeshStandardMaterial opaque, emissive `#ffffff` intensity 2.2, toneMapped=false |
| Color halo | Plane `[len, neonW × 0.7]` | `pathTop + 0.1` | 3 | MeshStandardMaterial transparent, emissive `neonColor` intensity 1.9 |
| Dot (aux intersections) | SphereGeometry `[neonW × 0.6]` | `pathTop + 0.3` | 4 | emissive `neonColor` intensity 1.5 |

L'**alphaMap gradient** sur le shadow halo donne l'illusion d'une
rainure 3D vue de dessus : sombre au centre (fond du creux), fade
transparent aux bords (lèvre haute des parois). Trois textures
procédurales (`createGrooveLinearAlpha` H + V via texture rotation,
`createGrooveRadialAlpha` pour intersections).

### Invariants anti-flicker
- White core opaque (`transparent=false`) → écrit le depth buffer
- Color halo / dots / shadow halo : `depthWrite=false`
- `renderOrder` explicite garantit l'ordre de dessin malgré les Z
  proches

---

## 6. Bloom — luminance-based, couleur-agnostique

Pipeline : `RenderPass → UnrealBloomPass → OutputPass`.

Paramètres finaux :
```js
bloomStrength  = 0.24   // intensité globale
bloomRadius    = 0.10   // étalement (resserré → lignes crisp)
bloomThreshold = 0.85   // seuil de luminance
```

### Pourquoi threshold = 0.85
UnrealBloomPass utilise une formule de luminance pondérée
(`0.299R + 0.587G + 0.114B`). Avec threshold = 1.0 (originel), les
emissive colorés trop "froids" passaient sous le seuil :
- Cyan `#00c8ff` luma ≈ 0.61 × emissive 1.5 = 0.92 < 1.0 → quasi pas
  de bloom
- Pink `#ff44cc` luma ≈ 0.51 × emissive 1.5 = 0.77 < 1.0 → **aucun bloom**
- Violet `#bb44ff` luma ≈ 0.45 × emissive 1.5 = 0.68 → idem

Le cadre rose en mode zen perdait son halo. Solution : threshold à 0.85
+ bump des emissive (cadre 1.6→2.0, color halo 1.5→1.9) pour garantir
que toutes les teintes du panel passent, sans pour autant exploser le
blanc (qui est déjà très au-dessus).

---

## 7. Lumières — warm atmosphere

Setup final :
```js
<T.AmbientLight color="#fbe9c8" intensity={1.05} />
<T.DirectionalLight color="#ffeec7" intensity={0.95} castShadow ... />  // key
<T.DirectionalLight color="#ffe0b0" intensity={0.45} ... />              // fill
```

### Shadows
- `PCFSoftShadowMap`, mapSize 2048×2048
- `radius=6` (sharp, donne contact défini sous la bille)
- bias `-0.0001`, bounds `±G.W/H × 0.7`

### PointLights de la bille
Deux lights suivent la bille pour le reflet néon local :

```js
// Top : éclaire le top de la bille + spill warm cyan sur la piste
<T.PointLight position={[ballX, ballY, pathTop + ballR * 1.5]}
              color={neonColor} intensity={2.4} distance={cell × 2.6} />

// Bounce (Lot 6.26 v2.7) : sous la bille, simule lumière rebondie
// par le rail néon → highlight cyan sur le bas de la sphère
<T.PointLight position={[ballX, ballY, pathTop + ballR * 0.25]}
              color={neonColor} intensity={3.6} distance={cell × 1.5}
              castShadow={false} />
```

Les PointLights aux **intersections** ont été supprimées (Lot 6.26 v2)
car elles refroidissaient l'ambiance globale. Le bounce light qui
suit la bille fournit le reflet néon là où il compte sans pollution
distante.

---

## 8. Bille métallique

```js
<T.MeshStandardMaterial color="#D4AF37"
                        metalness={1.0}
                        roughness={0.15}
                        envMapIntensity={1.6} />
```

### Env map procédurale chaude (Lot 6.26 v2.7+)
Au lieu de `RoomEnvironment` (procédural three.js, neutre/gris),
une **CanvasTexture equirectangulaire** custom est passée à
`PMREMGenerator.fromEquirectangular` :

```
Gradient vertical (north pole → south pole) :
  0.00 #fff5e0  (sky warm white)
  0.30 #f5e0c0  (upper hemisphere)
  0.50 #d4b58c  (equator, ce que reflète le top de la bille)
  0.70 #8a6242  (lower hemisphere)
  0.85 #4a2e1a  (near south)
  1.00 #1a0c08  (south pole — réflexion sur les bords visibles)
```

Le sud très sombre simule l'**ambient occlusion** : les bords visibles
de la bille (silhouette vue caméra-dessus) reflètent géométriquement
le sud de l'env map (vecteur réflexion → -Z), ce qui crée naturellement
un assombrissement périphérique sans calcul d'AO réel.

### Contact shadow
Sprite radial-gradient (CanvasTexture noire fade) au sol (`z = pathTop + 0.05`)
qui suit la bille en XY. Scale `ballR × 3.4`, opacity ×fallScale.
Ancre fortement la bille au sol indépendamment de la lumière
directionnelle.

---

## 9. Bonus (+5s, +10s, +30s)

### Asset SVG
Fichiers `public/assets/svg/+5s.svg` etc. URL-encodés (`%2B5s.svg`)
côté loader pour éviter toute ambiguïté `+` ↔ espace.

Chaque SVG = 1 cercle + texte simple :
- Background sombre `#2b3b4a`
- Halo coloré flouté (feGaussianBlur stdDeviation=4) sur le ring
- Texte coloré flouté (stdDeviation=3) en arrière
- Ring blanc crisp par-dessus
- Texte blanc crisp (font-size 50, `dominant-baseline="central"`)

Couleurs : cyan `#38bdf8` (5s), violet `#a855f7` (10s), pink `#ec4899` (30s).

### Rendu Threlte
```svelte
<T.Sprite position={[cx, cy, spriteZ]} scale={[size, size, 1]} renderOrder={5}>
  <T.SpriteMaterial map={tex} transparent depthWrite={false} depthTest={true} />
</T.Sprite>
```

#### z-order
`renderOrder={5}` (au-dessus du neon renderOrder 2-4) + `depthTest={true}` :
- Le bonus passe **au-dessus** du néon (via renderOrder + depth)
- La bille (renderOrder=0, opaque, depthWrite=true) passe **au-dessus**
  du bonus quand elle le survole (depth test rejette le bonus là où
  la bille a écrit)

#### z dynamique (Lot 6.28.c)
Le Sprite est un billboard incliné avec la caméra. À tilt = 11°, le
bord bas du sprite descend de `size/2 × sin(11°) ≈ 9 unités` sous
le centre. Avec pathH = cell × 0.80 (~64), les parois occludaient
la moitié basse du bonus. Solution :

```js
spriteZ = pathTop + size × CAM_TILT_SIN / 2 + 2
```

Le bord bas se retrouve ainsi toujours à `pathTop + 2`, quelle que
soit la taille du sprite ou les variations futures de tilt/pulse.

---

## 10. Spécificité levels 16-20 — fix trackRatio (Lot 6.29)

`getTrackRatio(lvl) = max(0.35, 0.65 - floor((lvl-1)/5) × 0.05)`
donne `0.50` exactement pour lvl ∈ [16, 20].

À cette valeur précise, on a la coïncidence géométrique :
- `hp = pathW/2 = 0.25cs`
- `hw - hp = (cs - pathW)/2 = 0.25cs`
- **pathW = wallWidth** ET **hp = hw - hp** simultanément

Dans `buildCornerShape`, le point 3 `(hp, -hp)` est colinéaire avec
les points 2 et 4 (tous sur `y = -hp`). À trackRatio = 0.50 le
clamping de `smoothShape` calcule `r = 0.125 = hp/2` exactement, et
la `quadraticCurveTo` dégénère symétriquement autour du point 3.
Earcut produit des triangles quasi zéro-aire → bords flous visibles.

Fix : nudge à 0.48 quand raw = 0.50 (5 lignes dans `maze-utils.js`).
Préserve la progression décroissante (0.55 → 0.48 → 0.45).

---

## 11. Performance — bilan mobile

Pipeline final tient ~60 FPS sustained sur iPhone testé :
- **10 InstancedMesh** par niveau (5 tile types × 1 instanced array)
- **3-4 Sprites** par bonus + 1 par checkpoint + 1 par collectible
- **~10-20 Mesh planes** par segment de néon (white core + color halo)
- **2 PointLights** dynamiques (top + bounce, suivent la bille)
- **0 PointLight statique** aux intersections (retirées Lot 6.26 v2)
- **Bloom** unique pass (UnrealBloomPass)
- **Shadow map** 2048×2048 unique
- **Cache geometries** : 5 ExtrudeGeometry par niveau, disposés à
  chaque changement de niveau

Bundle Scene3D : ~775 KB (gzip 204 KB) — domination de three.js
(envisageable de tree-shake plus tard si besoin).

---

## 12. Décisions abandonnées (pour mémoire)

| Tentative | Verdict | Pourquoi |
|-----------|---------|----------|
| Carved groove via Shape.holes (Lot 6.26 v1) | Reverted | Flickers tilt par z-fighting entre 2 ExtrudeGeometry |
| SSAOPass post-process (Lot 6.25.x) | Reverted | Artefacts rectangulaires iOS |
| Anamorphose vertical scale.y=1.10 | Reverted | Bille déformée (elliptique) |
| PointLights aux intersections | Retirées | Refroidissaient l'ambiance globale |
| HemisphereLight | Reverted | Artefacts iOS Lot 6.25.x |
| MeshPhysicalMaterial + clearcoat | Non implémenté | Compromis coût/gain pas convaincant à ce stade |

---

## 13. Roadmap

- **Lot 6.30 (si nécessaire)** : investigation earcut sur la
  colinéarité de pt 3 dans `buildCornerShape` (cause racine du fix
  6.29)
- **Lot 6.31 (optionnel)** : ball rotation synchronisée vitesse →
  défile l'env map sur la sphère pour effet "ça roule" sans moteur
  physique 3D
- **Lot 7** : cleanup du engine flag 2D legacy (le canvas 2D reste
  pour capturer l'input, mais le rendu 2D fallback peut être retiré)
- **Lot 8** : polish (particules trail, sons additionnels, haptic
  patterns)

---

## 14. Pointeurs de code clés

| Sujet | Fichier:ligne |
|-------|---------------|
| Constantes caméra/FOV/tilt | `src/components/Scene3D.svelte:38-43` |
| Calcul cameraDist + position | `src/components/Scene3D.svelte:63-74` |
| pathH / pathTop / floorDepth | `src/components/Scene3D.svelte:128-132` |
| buildCornerShape (collinéarité) | `src/components/Scene3D.svelte:237-250` |
| Cache geometries par niveau | `src/components/Scene3D.svelte:355-383` |
| Env map warm | `src/components/Postprocess.svelte:30-55` |
| Bloom params | `src/components/Scene3D.svelte:584` |
| getTrackRatio + nudge 0.50 | `src/lib/maze-utils.js:1-12` |
| Bonus Sprite + z dynamique | `src/components/Scene3D.svelte:855-880` |
| Bille material + bounce light | `src/components/Scene3D.svelte:900-940` |
