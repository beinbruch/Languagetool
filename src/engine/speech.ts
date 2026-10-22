let voice: SpeechSynthesisVoice | null = null;

function pickVoice(): SpeechSynthesisVoice | null {
  const voices = speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith('fr'));
  return voices.find((v) => v.lang === 'fr-FR' && v.localService) ?? voices.find((v) => v.lang === 'fr-FR') ?? voices[0] ?? null;
}

export function speechAvailable(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

/** Reads French text aloud with the device's own voice (works offline on iOS). */
export function speak(text: string, rate = 0.9): void {
  if (!speechAvailable()) return;
  voice ??= pickVoice();
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text.replace(/___/g, '…'));
  u.lang = 'fr-FR';
  u.rate = rate;
  if (voice) u.voice = voice;
  speechSynthesis.speak(u);
}

if (speechAvailable()) {
  speechSynthesis.addEventListener?.('voiceschanged', () => (voice = pickVoice()));
}
