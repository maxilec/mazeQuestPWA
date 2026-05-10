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

// True if path[i] is on a straight segment (no turn, no intersection)
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

  // If both candidates are too close, keep only the more central one
  if (candidates.length === 2) {
    const minSep = Math.max(4, path.length * 0.20);
    if (Math.abs(candidates[1].idx - candidates[0].idx) < minSep) {
      const mid  = Math.round(0.5 * (path.length - 1));
      const best = Math.abs(candidates[0].idx - mid) <= Math.abs(candidates[1].idx - mid)
        ? candidates[0] : candidates[1];
      return [best.cp];
    }
  }

  return candidates.map(c => c.cp);
}

export function computeCollectibles(path, checkpoints, count = 3) {
  if (path.length < 6) return [];
  const cpCells = new Set(checkpoints.map(c => `${c.r},${c.c}`));
  const candidates = [];
  const start = Math.ceil(path.length * 0.15);
  const end   = Math.floor(path.length * 0.85);
  for (let i = start; i < end; i++) {
    if (!isStraight(path, i)) continue;
    const { r, c } = path[i];
    if (cpCells.has(`${r},${c}`)) continue;
    candidates.push({ i, r, c });
  }
  if (candidates.length === 0) return [];

  // Pick `count` evenly spaced candidates
  const types = ['+5s', '+10s', '+30s'];
  const step   = Math.max(1, Math.floor(candidates.length / (count + 1)));
  const result = [];
  for (let k = 0; k < count; k++) {
    const idx = step * (k + 1);
    if (idx >= candidates.length) break;
    const { r, c } = candidates[idx];
    result.push({ r, c, type: types[k % types.length], collected: false, collectT: 0 });
  }
  return result;
}
