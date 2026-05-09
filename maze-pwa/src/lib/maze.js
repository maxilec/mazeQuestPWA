/**
 * Génération de labyrinthe par DFS itératif (backtracking).
 * Retourne une grille de cellules, chaque cellule ayant 4 murs :
 *   T (top), R (right), B (bottom), L (left)
 *   1 = mur présent, 0 = passage
 * Le labyrinthe généré est "parfait" : une seule solution,
 * toutes les cellules accessibles.
 *
 * @param {number} R - nombre de rangs
 * @param {number} C - nombre de colonnes
 * @returns {Array<Array<{T,R,B,L}>>}
 */

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function makeMaze(R, C) {
  const grid = Array.from({ length: R }, () =>
    Array.from({ length: C }, () => ({ T: 1, R: 1, B: 1, L: 1 }))
  );
  const vis = Array.from({ length: R }, () => new Array(C).fill(0));

  // [dRow, dCol, mur_courant, mur_voisin]
  const dirs = [
    [-1, 0, 'T', 'B'],
    [ 1, 0, 'B', 'T'],
    [ 0,-1, 'L', 'R'],
    [ 0, 1, 'R', 'L'],
  ];

  const stk = [[0, 0]];
  vis[0][0] = 1;

  while (stk.length) {
    const [r, c] = stk[stk.length - 1];
    const nbrs = shuffle(dirs).filter(([dr, dc]) => {
      const nr = r + dr, nc = c + dc;
      return nr >= 0 && nr < R && nc >= 0 && nc < C && !vis[nr][nc];
    });
    if (nbrs.length) {
      const [dr, dc, w, ow] = nbrs[0];
      grid[r][c][w]             = 0;
      grid[r + dr][c + dc][ow]  = 0;
      vis[r + dr][c + dc]       = 1;
      stk.push([r + dr, c + dc]);
    } else {
      stk.pop();
    }
  }
  return grid;
}
