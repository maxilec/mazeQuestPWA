// Gestionnaire d'entrées : gyroscope, souris, clavier, touch (joystick).
// Module pur — Game.svelte instancie un manager via createInputManager(opts),
// l'attache au montage et le détache au démontage. Le manager expose un objet
// `state` mis à jour en place et lu par la game loop chaque frame.

import { clamp, screenToCanvas } from './utils.js';

export const JOY_RADIUS = 70;

/**
 * @param {Object} opts
 * @param {HTMLCanvasElement} opts.canvas
 * @param {() => number} opts.getDeviceAngle
 * @param {() => 'gyro'|'joystick'} opts.getControlMode
 * @param {() => number} opts.getSensitivity
 * @param {() => void} [opts.onCanvasTap]   tap canvas (start intro / toggle pause gyro)
 * @param {() => void} [opts.onEscape]      touche Échap
 * @param {() => void} [opts.onTouchStart]  premier doigt (pour audio.start, perm iOS…)
 * @param {(hint: string) => void} [opts.onHintChange]
 * @param {() => void} [opts.onGyroReady]
 */
export function createInputManager(opts) {
  const state = {
    tilt: { x: 0, y: 0 },
    gyroParallaxX: 0,
    gyroParallaxY: 0,
    gyroOk: false,
    gyroPermissionRequested: false,
    joystick: { active: false, cx: 0, cy: 0, dx: 0, dy: 0, radius: JOY_RADIUS },
    hint: 'mouse',
    lastOrient: { beta: 0, gamma: 0 },
    gyroOffset:  { beta: 0, gamma: 0 },
  };

  const held = { l: 0, r: 0, u: 0, d: 0 };
  let keyInt = null;

  function setHint(h) {
    if (state.hint === h) return;
    state.hint = h;
    opts.onHintChange?.(h);
  }

  // ── Gyroscope ──
  function onOrient(e) {
    if (e.beta == null) return;
    state.lastOrient = { beta: e.beta || 0, gamma: e.gamma || 0 };
    if (!state.gyroOk) {
      state.gyroOffset = { ...state.lastOrient };
      state.gyroOk = true;
      setHint('gyro');
      opts.onGyroReady?.();
    }
    const normAngle = opts.getDeviceAngle();
    const dB = (e.beta  || 0) - state.gyroOffset.beta;
    const dG = (e.gamma || 0) - state.gyroOffset.gamma;

    state.gyroParallaxX = clamp(dG / 20, -1, 1);
    state.gyroParallaxY = clamp(dB / 20, -1, 1);

    if (opts.getControlMode() !== 'gyro') return;

    const s25 = 25 / opts.getSensitivity();
    let tx, ty;
    if (normAngle === 180 || normAngle === 270) {
      tx = -dG / s25;
      ty = -dB / s25;
    } else {
      tx =  dG / s25;
      ty =  dB / s25;
    }
    state.tilt = { x: clamp(tx, -1, 1), y: clamp(ty, -1, 1) };
  }

  // ── Souris ──
  function onMouse(e) {
    if (state.gyroOk || opts.getControlMode() === 'joystick') return;
    setHint('mouse');
    const r = opts.canvas.getBoundingClientRect();
    state.tilt = {
      x: clamp((e.clientX - r.left - r.width  / 2) / (r.width  * 0.4), -1, 1),
      y: clamp((e.clientY - r.top  - r.height / 2) / (r.height * 0.4), -1, 1),
    };
  }

  // ── Clavier ──
  function onKD(e) {
    if (['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)) e.preventDefault();
    if (e.key === 'Escape') { opts.onEscape?.(); return; }
    if (e.key === 'ArrowLeft')  { held.l = 1; setHint('keys'); }
    if (e.key === 'ArrowRight') { held.r = 1; setHint('keys'); }
    if (e.key === 'ArrowUp')    { held.u = 1; setHint('keys'); }
    if (e.key === 'ArrowDown')  { held.d = 1; setHint('keys'); }
  }
  function onKU(e) {
    if (e.key === 'ArrowLeft')  held.l = 0;
    if (e.key === 'ArrowRight') held.r = 0;
    if (e.key === 'ArrowUp')    held.u = 0;
    if (e.key === 'ArrowDown')  held.d = 0;
  }
  function keyTick() {
    if (state.gyroOk || opts.getControlMode() === 'joystick') return;
    const s = opts.getSensitivity();
    state.tilt = { x: (held.r - held.l) * s, y: (held.d - held.u) * s };
  }

  // ── Touch / joystick ──
  function onTouchStart(e) {
    e.preventDefault();
    opts.onTouchStart?.();
    if (opts.getControlMode() === 'gyro' && !state.gyroOk) requestGyroPermission();
    if (opts.getControlMode() !== 'joystick') return;
    const t = e.changedTouches[0];
    const r = opts.canvas.getBoundingClientRect();
    const cp = screenToCanvas(
      t.clientX - r.left, t.clientY - r.top,
      opts.canvas.width, opts.canvas.height, opts.getDeviceAngle()
    );
    state.joystick.cx = cp.x;
    state.joystick.cy = cp.y;
    state.joystick.dx = 0;
    state.joystick.dy = 0;
    state.joystick.active = true;
  }
  function onTouchMove(e) {
    e.preventDefault();
    if (!state.joystick.active || opts.getControlMode() !== 'joystick') return;
    const t = e.changedTouches[0];
    const r = opts.canvas.getBoundingClientRect();
    const cp = screenToCanvas(
      t.clientX - r.left, t.clientY - r.top,
      opts.canvas.width, opts.canvas.height, opts.getDeviceAngle()
    );
    const dx = cp.x - state.joystick.cx, dy = cp.y - state.joystick.cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const c = Math.min(dist, JOY_RADIUS);
    state.joystick.dx = dist > 0 ? (dx / dist) * c : 0;
    state.joystick.dy = dist > 0 ? (dy / dist) * c : 0;
    const s = opts.getSensitivity();
    state.tilt = {
      x: clamp(state.joystick.dx / JOY_RADIUS * s, -1, 1),
      y: clamp(state.joystick.dy / JOY_RADIUS * s, -1, 1),
    };
  }
  function onTouchEnd() {
    if (opts.getControlMode() !== 'joystick') { opts.onCanvasTap?.(); return; }
    const scale = opts.canvas.width / opts.canvas.getBoundingClientRect().width;
    if (Math.hypot(state.joystick.dx, state.joystick.dy) < 8 * scale) opts.onCanvasTap?.();
    state.joystick.active = false;
    state.joystick.dx = 0;
    state.joystick.dy = 0;
    state.tilt = { x: 0, y: 0 };
  }

  // ── Permission gyro iOS ──
  async function requestGyroPermission() {
    if (state.gyroPermissionRequested) return;
    state.gyroPermissionRequested = true;
    if (typeof DeviceOrientationEvent !== 'undefined' &&
        typeof DeviceOrientationEvent.requestPermission === 'function') {
      try {
        const res = await DeviceOrientationEvent.requestPermission();
        if (res === 'granted') { state.gyroOk = true; setHint('gyro'); }
      } catch {}
    }
  }

  // Variante : appelée explicitement depuis le panneau de réglages.
  // Si la permission est refusée, le caller peut basculer en joystick.
  async function requestGyroPermissionFromUserGesture() {
    if (typeof DeviceOrientationEvent !== 'undefined' &&
        typeof DeviceOrientationEvent.requestPermission === 'function') {
      try {
        const res = await DeviceOrientationEvent.requestPermission();
        if (res === 'granted') { state.gyroOk = true; setHint('gyro'); return 'granted'; }
        return 'denied';
      } catch {
        return 'denied';
      }
    }
    state.gyroPermissionRequested = true;
    return 'na';
  }

  function resetGyroOffset() {
    if (state.gyroOk) state.gyroOffset = { ...state.lastOrient };
  }

  function clearTilt() {
    state.tilt = { x: 0, y: 0 };
  }

  function attach() {
    opts.canvas.addEventListener('touchstart', onTouchStart, { passive: false });
    opts.canvas.addEventListener('touchmove',  onTouchMove,  { passive: false });
    opts.canvas.addEventListener('touchend',   onTouchEnd);
    window.addEventListener('deviceorientation', onOrient);
    window.addEventListener('mousemove', onMouse);
    window.addEventListener('keydown',   onKD);
    window.addEventListener('keyup',     onKU);
    keyInt = setInterval(keyTick, 16);
  }

  function detach() {
    opts.canvas.removeEventListener('touchstart', onTouchStart);
    opts.canvas.removeEventListener('touchmove',  onTouchMove);
    opts.canvas.removeEventListener('touchend',   onTouchEnd);
    window.removeEventListener('deviceorientation', onOrient);
    window.removeEventListener('mousemove', onMouse);
    window.removeEventListener('keydown',   onKD);
    window.removeEventListener('keyup',     onKU);
    if (keyInt) { clearInterval(keyInt); keyInt = null; }
  }

  return {
    state,
    attach, detach,
    requestGyroPermission,
    requestGyroPermissionFromUserGesture,
    resetGyroOffset,
    clearTilt,
  };
}
