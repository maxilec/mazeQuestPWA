// Lot 8.10 v6.1 — Log debug visible in-app (pour mobile sans DevTools).
//
// Capture les messages console.warn/error et les expose via un store
// Svelte. La TileGallery rend un panneau qui affiche les derniers
// messages → l'utilisateur voit les crashes sans console externe.

import { writable } from 'svelte/store';

const MAX_ENTRIES = 40;

export const debugLog = writable([]);

export function pushDebug(level, msg) {
  debugLog.update((arr) => {
    const next = [...arr, { level, msg, ts: Date.now() }];
    return next.length > MAX_ENTRIES ? next.slice(-MAX_ENTRIES) : next;
  });
}

export function clearDebug() {
  debugLog.set([]);
}

/** Formate un argument arbitraire en string pour affichage. */
export function formatArg(a) {
  if (a === null || a === undefined) return String(a);
  if (typeof a === 'string') return a;
  if (a instanceof Error) return a.message + (a.stack ? '\n' + a.stack : '');
  try {
    return JSON.stringify(a);
  } catch {
    return String(a);
  }
}
