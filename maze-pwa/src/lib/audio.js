export function createAudioManager(baseUrl) {
  let ctx = null, buffer = null, source = null, gain = null;
  let ready = false, interacted = false;

  async function init(volume) {
    try {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      gain = ctx.createGain();
      gain.gain.value = volume;
      gain.connect(ctx.destination);
      const res = await fetch(`${baseUrl}assets/music/MazeBalll - Don't fall again.mp3`);
      const ab  = await res.arrayBuffer();
      buffer    = await ctx.decodeAudioData(ab);
      ready     = true;
      if (interacted) _play();
    } catch {}
    if ('mediaSession' in navigator) navigator.mediaSession.metadata = null;
  }

  function _play() {
    if (!ready || source) return;
    ctx.resume().then(() => {
      if (source) return;
      source = ctx.createBufferSource();
      source.buffer = buffer;
      source.loop   = true;
      source.connect(gain);
      source.start(0);
    }).catch(() => {});
  }

  function start() { interacted = true; _play(); }

  function setVolume(v, enabled) {
    if (gain) gain.gain.value = enabled ? v : 0;
  }

  function destroy() {
    if (source) { try { source.stop(); } catch {} source = null; }
    if (ctx)    { ctx.close().catch(() => {}); ctx = null; }
    ready = false; interacted = false; buffer = null; gain = null;
  }

  return { init, start, setVolume, destroy };
}
