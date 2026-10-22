import { useState } from 'preact/hooks';
import type { Exercise } from '../engine/exercises';
import { check, primary, type Verdict } from '../engine/text';
import { ExerciseView, SpeakButton, type Answer } from './ExerciseView';
import { chime } from './feedback';

export interface SessionResult {
  /** First-try result per SRS key. */
  firstTry: Record<string, boolean>;
  correct: number;
  total: number;
}

interface Props {
  exercises: Exercise[];
  rate: number;
  sounds: boolean;
  onQuit: () => void;
  onFinish: (r: SessionResult) => void;
}

function grade(ex: Exercise, a: Answer): Verdict {
  if ('matched' in a) return 'correct';
  if (ex.kind === 'choice') return a.text === ex.answer ? 'correct' : 'wrong';
  if (ex.kind === 'match') return 'correct';
  return check(a.text, ex.answer);
}

function answerIsFrench(ex: Exercise): boolean {
  return ex.kind === 'listen' || ((ex.kind === 'tiles' || ex.kind === 'type') && ex.direction === 'de-fr');
}

function solution(ex: Exercise): string | null {
  if (ex.kind === 'match') return null;
  return primary(ex.answer);
}

export function Session({ exercises, rate, sounds, onQuit, onFinish }: Props) {
  const [queue, setQueue] = useState(exercises);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<Answer | null>(null);
  const [verdict, setVerdict] = useState<Verdict | null>(null);
  const [firstTry, setFirstTry] = useState<Record<string, boolean>>({});
  const [firstCorrect, setFirstCorrect] = useState(0);

  const ex = queue[index];
  const isRetry = index >= exercises.length;

  const submit = (a: Answer | null = answer) => {
    if (!a) return;
    const v = grade(ex, a);
    const ok = v !== 'wrong';
    setVerdict(v);
    if (sounds) chime(ok);
    if (!isRetry) {
      if (ok) setFirstCorrect((n) => n + 1);
      if (ex.key && !(ex.key in firstTry)) setFirstTry((f) => ({ ...f, [ex.key!]: ok }));
    }
    // Mistakes come back once at the end of the session.
    if (!ok && !isRetry) setQueue((q) => [...q, ex]);
  };

  const next = () => {
    if (index + 1 >= queue.length) {
      onFinish({ firstTry, correct: firstCorrect, total: exercises.length });
      return;
    }
    setIndex(index + 1);
    setAnswer(null);
    setVerdict(null);
  };

  const onChange = (a: Answer | null) => {
    setAnswer(a);
    if (a && 'matched' in a) submit(a);
  };

  const sol = solution(ex);
  return (
    <div class="session">
      <header class="session-bar">
        <button type="button" class="icon-btn" aria-label="Beenden" onClick={onQuit}>
          ✕
        </button>
        <div class="progress" role="progressbar" aria-valuenow={index} aria-valuemax={queue.length}>
          <div style={{ width: `${(index / queue.length) * 100}%` }} />
        </div>
      </header>

      <main class="session-body">
        {isRetry && verdict === null && <p class="retry-hint">Noch einmal: Hier lagst du vorhin daneben.</p>}
        <ExerciseView key={index} ex={ex} locked={verdict !== null} rate={rate} onChange={onChange} />
      </main>

      <footer class={'session-foot' + (verdict === null ? '' : verdict === 'wrong' ? ' bad' : ' good')}>
        {verdict !== null && (
          <div class="verdict" role="status">
            <strong>
              {verdict === 'correct' && 'Richtig!'}
              {verdict === 'accent' && 'Fast – achte auf die Akzente.'}
              {verdict === 'wrong' && 'Leider falsch.'}
            </strong>
            {verdict !== 'correct' && sol && <div class="solution">Lösung: {sol}</div>}
            {ex.kind === 'choice' && ex.note && <div class="solution">{ex.note}</div>}
            {ex.kind === 'listen' && verdict === 'correct' && <div class="solution">{sol}</div>}
            {sol && answerIsFrench(ex) && <SpeakButton text={sol} rate={rate} />}
          </div>
        )}
        {verdict === null ? (
          <button type="button" class="primary" disabled={!answer} onClick={() => submit()}>
            Prüfen
          </button>
        ) : (
          <button type="button" class="primary" onClick={next} autofocus>
            Weiter
          </button>
        )}
      </footer>
    </div>
  );
}
