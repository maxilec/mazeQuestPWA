export const FRICTION = 0.96;
export const GRAVITY  = 0.45;

export function stepPhysics(g, dt, tilt) {
  const { ball } = g;
  ball.vx = (ball.vx + tilt.x * GRAVITY * dt) * FRICTION;
  ball.vy = (ball.vy + tilt.y * GRAVITY * dt) * FRICTION;
  ball.x += ball.vx * dt;
  ball.y += ball.vy * dt;
}

export function checkWallFall(ball, g) {
  const { maze, cw, ch, W, H, R, C, trackRatio } = g;
  const hw = Math.min(cw, ch) * trackRatio * 0.5;
  const bx = ball.x, by = ball.y;
  if (bx < 0 || bx > W || by < 0 || by > H) return true;
  const col = Math.max(0, Math.min(C - 1, (bx / cw) | 0));
  const row = Math.max(0, Math.min(R - 1, (by / ch) | 0));
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      const r = row + dr, c = col + dc;
      if (r < 0 || r >= R || c < 0 || c >= C) continue;
      const cx = c * cw + cw / 2, cy = r * ch + ch / 2;
      const ce = maze[r][c];
      if (Math.abs(bx - cx) <= hw && Math.abs(by - cy) <= hw) return false;
      if (c < C - 1 && !ce.R) {
        const nx = cx + cw;
        if (bx >= cx - hw && bx <= nx + hw && Math.abs(by - cy) <= hw) return false;
      }
      if (r < R - 1 && !ce.B) {
        const ny = cy + ch;
        if (by >= cy - hw && by <= ny + hw && Math.abs(bx - cx) <= hw) return false;
      }
    }
  }
  return true;
}
