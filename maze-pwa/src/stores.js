import { writable } from 'svelte/store';

function persist(key, initial) {
  const stored = localStorage.getItem(key);
  const store  = writable(stored ? JSON.parse(stored) : initial);
  store.subscribe(v => localStorage.setItem(key, JSON.stringify(v)));
  return store;
}

export const screen   = writable('title');  // 'title' | 'game' | 'gameover'
export const gameMode = writable('survie'); // 'survie' | 'hardcore' | 'zen'

export const runStats = writable({
  lvl: 1, falls: 0, startTime: 0,
});

export const highScores = persist('mbHighScores', {});
// shape: { survie: { lvl, falls, date }, hardcore: { lvl, date }, zen: { lvl, date } }

export const settings = persist('mbSettings', {
  volume:      0.5,
  muted:       false,
  sensitivity: 0.55,
  controlMode: 'gyro',   // 'gyro' | 'joystick'
  haptics:     true,
});
