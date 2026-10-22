import { useEffect, useState } from 'preact/hooks';
import type { Reading } from '../content/types';
import { speak, speakAll, stopSpeaking } from '../engine/speech';

interface Props {
  reading: Reading;
  rate: number;
  onBack: () => void;
  onQuiz: () => void;
}

/** Speakers in order of first appearance, so each keeps the same voice. */
function speakerIndex(reading: Reading): (name?: string) => number {
  const names = [...new Set(reading.lines.map((l) => l.speaker).filter(Boolean))];
  return (name) => (name ? names.indexOf(name) : 0);
}

export function Reader({ reading, rate, onBack, onQuiz }: Props) {
  const [shown, setShown] = useState<Set<number>>(new Set());
  const voiceOf = speakerIndex(reading);
  useEffect(() => stopSpeaking, []);

  const toggle = (i: number) =>
    setShown((s) => {
      const next = new Set(s);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div class="reader">
      <header class="page-head">
        <button type="button" class="icon-btn" aria-label="Zurück" onClick={onBack}>
          ←
        </button>
        <h1>{reading.title}</h1>
      </header>
      <p class="muted">
        <span class="badge">{reading.level}</span> Tippe auf einen Satz für die Übersetzung, auf 🔊 zum Anhören.
      </p>
      <div class="row">
        <button
          type="button"
          class="secondary"
          onClick={() => speakAll(reading.lines.map((l) => ({ text: l.fr, speaker: voiceOf(l.speaker) })), rate)}
        >
          🔊 Alles anhören
        </button>
        <button type="button" class="secondary" onClick={stopSpeaking}>
          ⏹ Stopp
        </button>
      </div>
      <section class="card text">
        {reading.lines.map((l, i) => (
          <div class={'line' + (l.speaker ? ` speaker-${voiceOf(l.speaker) % 2}` : '')} key={i}>
            <button type="button" class="speak small" aria-label="Satz vorlesen" onClick={() => speak(l.fr, rate, voiceOf(l.speaker))}>
              🔊
            </button>
            <button type="button" class="line-text" aria-expanded={shown.has(i)} onClick={() => toggle(i)}>
              {l.speaker && <strong class="speaker">{l.speaker}: </strong>}
              <span lang="fr">{l.fr}</span>
              {shown.has(i) && <span class="translation">{l.de}</span>}
            </button>
          </div>
        ))}
      </section>
      <button type="button" class="primary sticky" onClick={onQuiz}>
        Verständnisfragen ({reading.questions.length})
      </button>
    </div>
  );
}
