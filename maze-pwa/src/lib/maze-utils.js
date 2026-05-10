export function getTrackRatio(lvl) {
  return Math.max(0.35, 0.65 - Math.floor((lvl - 1) / 5) * 0.05);
}

export function bfsPath(maze, R, C, spawn, hole) {
  const dist = Array.from({ length: R }, () => Array(C).fill(-1));
  const prev = Array.from({ length: R }, () => Array(C).fill(null));
  const queue = [{ r: spawn.r, c: spawn.c }];
  dist[spawn.r][spawn.c] = 0;
  while (queue.length > 0) {
    const { r, c } = queue.shift();
    const ce = maze[r][c];
    const dirs = [
      { dr: -1, dc: 0, wall: 'T' },
      { dr:  1, dc: 0, wall: 'B' },
      { dr:  0, dc: -1, wall: 'L' },
      { dr:  0, dc:  1, wall: 'R' },
    ];
    for (const { dr, dc, wall } of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr < 0 || nr >= R || nc < 0 || nc >= C) continue;
      if (ce[wall]) continue;
      if (dist[nr][nc] !== -1) continue;
      dist[nr][nc] = dist[r][c] + 1;
      prev[nr][nc] = { r, c };
      queue.push({ r: nr, c: nc });
    }
  }
  const path = [];
  let cur = { r: hole.r, c: hole.c };
  while (cur) {
    path.unshift(cur);
    cur = prev[cur.r][cur.c];
  }
  return path;
}

// Retourne true si la cellule path[i] est sur une ligne droite
// (direction entrante == direction sortante — ni angle ni intersection)
function isStraight(path, i) {
  if (i <= 0 || i >= path.length - 1) return false;
  const a = path[i - 1], b = path[i], c = path[i + 1];
  return (b.r - a.r) === (c.r - b.r) && (b.c - a.c) === (c.c - b.c);
}

export function computeCheckpoints(path) {
  if (path.length < 4) return [];
  const checkpoints = [];
  for (const frac of [0.33, 0.67]) {
    const base = Math.round(frac * (path.length - 1));
    let found = -1;
    // Recherche en spirale depuis la position cible
    for (let d = 0; d < path.length; d++) {
      if (base + d < path.length - 1 && isStraight(path, base + d)) { found = base + d; break; }
      if (d > 0 && base - d > 0 && isStraight(path, base - d))     { found = base - d; break; }
    }
    if (found < 0) continue;
    const cell = path[found], prev = path[found - 1];
    checkpoints.push({
      r: cell.r, c: cell.c,
      horizontal: (cell.r - prev.r) !== 0, // deplacement vertical → barre horizontale
      passed: false,
    });
  }
  return checkpoints;
}
