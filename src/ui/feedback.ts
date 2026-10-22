let ctx: AudioContext | null = null;

/** Short sine chimes, generated so the app needs no audio files. */
export function chime(ok: boolean): void {
  try {
    ctx ??= new AudioContext();
    const notes = ok ? [660, 880] : [300, 220];
    notes.forEach((freq, i) => {
      const osc = ctx!.createOscillator();
      const gain = ctx!.createGain();
      const t = ctx!.currentTime + i * 0.09;
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.15, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
      osc.connect(gain).connect(ctx!.destination);
      osc.start(t);
      osc.stop(t + 0.2);
    });
  } catch {
    // No audio support: silence is fine.
  }
}
