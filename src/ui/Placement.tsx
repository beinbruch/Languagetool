import { useMemo, useState } from 'preact/hooks';
import { LEVEL_NAMES, LEVELS, type Level } from '../content/types';
import { answerPlacement, placementProgress, startPlacement } from '../engine/placement';
import { shuffle } from '../engine/random';
import { SpeakButton } from './ExerciseView';

interface Props {
  rate: number;
  onQuit: () => void;
  onDone: (passed: Level | null) => void;
}

/** No right/wrong feedback here: the test should measure, not teach. */
export function Placement({ rate, onQuit, onDone }: Props) {
  const [state, setState] = useState(startPlacement);
  const q = state.questions[state.index];
  const options = useMemo(() => (q ? shuffle([q.answer, ...q.wrong]) : []), [q]);

  if (state.finished) {
    const passed = state.passed;
    const start = passed === null ? 'A1' : LEVELS[Math.min(LEVELS.indexOf(passed) + 1, LEVELS.length - 1)];
    return (
      <div class="placement-result card">
        <h2>Ergebnis</h2>
        {passed === null ? (
          <p>Du startest am Anfang – bei A1. Keine Sorge, das geht schnell voran.</p>
        ) : (
          <p>
            Du beherrschst <strong>{passed}</strong> ({LEVEL_NAMES[passed]}).{' '}
            {passed === 'C2' ? 'Beeindruckend! Alle Einheiten sind freigeschaltet.' : <>Du startest bei <strong>{start}</strong>.</>}
          </p>
        )}
        <p class="muted">Übersprungene Einheiten kannst du jederzeit trotzdem öffnen.</p>
        <button type="button" class="primary" onClick={() => onDone(passed)}>
          Loslegen
        </button>
      </div>
    );
  }

  return (
    <div class="session">
      <header class="session-bar">
        <button type="button" class="icon-btn" aria-label="Abbrechen" onClick={onQuit}>
          ✕
        </button>
        <div class="progress">
          <div style={{ width: `${placementProgress(state) * 100}%` }} />
        </div>
        <span class="badge">{LEVELS[state.levelIndex]}</span>
      </header>
      <main class="session-body">
        <div class="exercise" key={`${state.levelIndex}-${state.index}`}>
          <h2>{q.prompt}</h2>
          {q.fr && (
            <div class="prompt">
              <SpeakButton text={q.fr} rate={rate} />
              <span lang="fr">{q.fr}</span>
            </div>
          )}
          <div class="options">
            {options.map((o) => (
              <button type="button" key={o} class="option" onClick={() => setState((s) => answerPlacement(s, o === q.answer))}>
                {o}
              </button>
            ))}
            <button type="button" class="option dunno" onClick={() => setState((s) => answerPlacement(s, false))}>
              Weiß ich nicht
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
