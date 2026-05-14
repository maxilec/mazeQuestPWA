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
  while (cur) { path.unshift(cur); cur = prev[cur.r][cur.c]; }
  return path;
}

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

// Returns cells reachable from the path but not on it (sorted dead-ends first).
function offPathCells(path, maze, R, C) {
  const pathSet = new Set(path.map(p => `${p.r},${p.c}`));
  const dirs = [
    { dr: -1, dc: 0, wall: 'T' },
    { dr:  1, dc: 0, wall: 'B' },
    { dr:  0, dc: -1, wall: 'L' },
    { dr:  0, dc:  1, wall: 'R' },
  ];
  const seen = new Set();
  const result = [];
  for (const { r, c } of path) {
    const ce = maze[r][c];
    for (const { dr, dc, wall } of dirs) {
      const nr = r + dr, nc = c + dc;
      const key = `${nr},${nc}`;
      if (nr < 0 || nr >= R || nc < 0 || nc >= C) continue;
      if (ce[wall]) continue;           // wall blocks passage
      if (pathSet.has(key)) continue;   // on main path
      if (seen.has(key)) continue;
      seen.add(key);
      const cel = maze[nr][nc];
      const open = (!cel.T?1:0) + (!cel.B?1:0) + (!cel.L?1:0) + (!cel.R?1:0);
      result.push({ r: nr, c: nc, open });
    }
  }
  result.sort((a, b) => a.open - b.open);  // dead-ends (open=1) first
  return result;
}

export function computeCollectibles(path, maze, R, C, checkpoints) {
  if (path.length < 6) return [];
  const cpSet = new Set(checkpoints.map(c => `${c.r},${c.c}`));

  // On-path candidates: middle 70%, straight segments, avoiding checkpoints
  const start = Math.ceil(path.length * 0.15);
  const end   = Math.floor(path.length * 0.85);
  const onPath = [];
  for (let i = start; i < end; i++) {
    if (!isStraight(path, i)) continue;
    const { r, c } = path[i];
    if (cpSet.has(`${r},${c}`)) continue;
    onPath.push({ r, c });
  }

  const offPath = offPathCells(path, maze, R, C);
  const result = [];

  // Always 1× +5s on the main path (mid-point)
  if (onPath.length > 0) {
    const mid = onPath[Math.floor(onPath.length * 0.5)];
    result.push({ r: mid.r, c: mid.c, type: '+5s', collected: false, collectT: 0 });
  }

  // 60% chance: 1× +10s off the main path (prefer dead-ends)
  if (offPath.length > 0 && Math.random() < 0.60) {
    const p = offPath[0];
    result.push({ r: p.r, c: p.c, type: '+10s', collected: false, collectT: 0 });
  }

  // 15% chance: 1× +30s off path at a different dead-end
  if (offPath.length > 1 && Math.random() < 0.15) {
    const p = offPath[Math.min(2, offPath.length - 1)];
    result.push({ r: p.r, c: p.c, type: '+30s', collected: false, collectT: 0 });
  }

  return result;
}
