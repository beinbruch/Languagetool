let voices: SpeechSynthesisVoice[] = [];

/** French voices, best first: local fr-FR voices work offline on iOS. */
function frenchVoices(): SpeechSynthesisVoice[] {
  const fr = speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith('fr'));
  const rank = (v: SpeechSynthesisVoice) => (v.lang === 'fr-FR' ? 0 : 2) + (v.localService ? 0 : 1);
  return fr.sort((a, b) => rank(a) - rank(b));
}

export function speechAvailable(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

function utterance(text: string, rate: number, speaker: number): SpeechSynthesisUtterance {
  if (!voices.length) voices = frenchVoices();
  const u = new SpeechSynthesisUtterance(text.replace(/___/g, '…'));
  u.lang = 'fr-FR';
  u.rate = rate;
  // Dialogue speakers get their own voice; with only one voice installed, a different pitch.
  const voice = voices[speaker % Math.max(voices.length, 1)];
  if (voice) u.voice = voice;
  if (speaker > 0 && voices.length < 2) u.pitch = speaker % 2 ? 1.3 : 0.8;
  return u;
}

/** Reads French text aloud with the device's own voice (works offline on iOS). */
export function speak(text: string, rate = 0.9, speaker = 0): void {
  if (!speechAvailable()) return;
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance(text, rate, speaker));
}

/** Reads several lines one after another, e.g. a whole dialogue. */
export function speakAll(lines: { text: string; speaker: number }[], rate = 0.9): void {
  if (!speechAvailable()) return;
  speechSynthesis.cancel();
  for (const l of lines) speechSynthesis.speak(utterance(l.text, rate, l.speaker));
}

export function stopSpeaking(): void {
  if (speechAvailable()) speechSynthesis.cancel();
}

if (speechAvailable()) {
  speechSynthesis.addEventListener?.('voiceschanged', () => (voices = frenchVoices()));
}
