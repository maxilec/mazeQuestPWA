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
  const candidates = [];
  for (const frac of [0.33, 0.67]) {
    const base = Math.round(frac * (path.length - 1));
    let found = -1;
    for (let d = 0; d < path.length; d++) {
      if (base + d < path.length - 1 && isStraight(path, base + d)) { found = base + d; break; }
      if (d > 0 && base - d > 0 && isStraight(path, base - d))     { found = base - d; break; }
    }
    if (found < 0) continue;
    const cell = path[found], prev = path[found - 1];
    candidates.push({
      idx: found,
      cp: { r: cell.r, c: cell.c, horizontal: (cell.r - prev.r) !== 0, passed: false },
    });
  }

  // Si les deux checkpoints sont trop proches, garder seulement celui le plus central
  if (candidates.length === 2) {
    const minSep = Math.max(4, path.length * 0.20);
    if (Math.abs(candidates[1].idx - candidates[0].idx) < minSep) {
      const mid = Math.round(0.5 * (path.length - 1));
      const best = Math.abs(candidates[0].idx - mid) <= Math.abs(candidates[1].idx - mid)
        ? candidates[0] : candidates[1];
      return [best.cp];
    }
  }

  return candidates.map(c => c.cp);
}
