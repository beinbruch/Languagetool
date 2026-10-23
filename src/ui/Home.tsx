import { LEVELS, LEVEL_NAMES, type Level } from '../content/types';
import { unitsOf } from '../content';
import { READINGS } from '../content/readings';
import { currentStreak, dueKeys, isDone, isReadingUnlocked, isUnlocked, nextUnitId, todayXp, type Progress } from '../engine/progress';

interface Props {
  progress: Progress;
  now: Date;
  onUnit: (id: string) => void;
  onReview: () => void;
  onMistakes: () => void;
  onReading: (id: string) => void;
  onPlacement: () => void;
  onSkipPlacement: () => void;
  onSettings: () => void;
}

/** Brings the current unit into view once, when the path first renders. */
let scrolled = false;
function scrollTo(el: HTMLElement | null) {
  if (!el || scrolled) return;
  scrolled = true;
  requestAnimationFrame(() => el.scrollIntoView({ block: 'center' }));
}

export function Home({ progress: p, now, onUnit, onReview, onMistakes, onReading, onPlacement, onSkipPlacement, onSettings }: Props) {
  const due = dueKeys(p, now).length;
  const streak = currentStreak(p, now);
  const xp = todayXp(p, now);
  const goal = p.settings.dailyGoal;
  const current = nextUnitId(p);

  return (
    <div class="home">
      <header class="stats">
        <div class="stat" title="Tage in Folge">
          <span aria-hidden="true">🔥</span> {streak}
        </div>
        <div class="goal" title={`Tagesziel: ${xp} von ${goal} XP`}>
          <div class="goal-bar">
            <div style={{ width: `${Math.min(100, (xp / goal) * 100)}%` }} />
          </div>
          <span>
            {xp}/{goal} XP
          </span>
        </div>
        <button type="button" class="icon-btn" aria-label="Einstellungen" onClick={onSettings}>
          ⚙
        </button>
      </header>

      {!p.placement.done && (
        <section class="card welcome">
          <h2>Bienvenue!</h2>
          <p>Kannst du schon etwas Französisch? Ein kurzer Test (2–10 Minuten) findet dein Startniveau.</p>
          <div class="row">
            <button type="button" class="primary" onClick={onPlacement}>
              Einstufungstest
            </button>
            <button type="button" class="secondary" onClick={onSkipPlacement}>
              Bei null anfangen
            </button>
          </div>
        </section>
      )}

      {Object.keys(p.cards).length > 0 && (
        <section class="card review">
          <div>
            <h2>Wiederholen</h2>
            <p>{due > 0 ? `${due} ${due === 1 ? 'Übung ist' : 'Übungen sind'} fällig.` : 'Alles wiederholt – stark!'}</p>
          </div>
          <button type="button" class="primary" disabled={due === 0} onClick={onReview}>
            Los
          </button>
        </section>
      )}

      {p.mistakes.length > 0 && (
        <section class="card review">
          <div>
            <h2>Fehlerheft</h2>
            <p>
              {p.mistakes.length} {p.mistakes.length === 1 ? 'Übung' : 'Übungen'} zuletzt falsch beantwortet.
            </p>
          </div>
          <button type="button" class="primary" onClick={onMistakes}>
            Üben
          </button>
        </section>
      )}

      {LEVELS.map((level) => {
        const units = unitsOf(level);
        const doneCount = units.filter((u) => isDone(p, u.id)).length;
        return (
          <details class="level" key={level} open={doneCount < units.length}>
            <summary class="level-title">
              <span class="badge">{level}</span> {LEVEL_NAMES[level]}
              <small>
                {doneCount === units.length ? '✓ ' : ''}
                {doneCount}/{units.length}
              </small>
            </summary>
            <ol class="path">
              {units.map((u, i) => {
                const done = u.id in p.completed;
                const skipped = !done && p.skipped.includes(u.id);
                const open = isUnlocked(p, u.id);
                const state = done ? 'done' : skipped ? 'skipped' : u.id === current ? 'current' : open ? 'open' : 'locked';
                return (
                  <li key={u.id} class={`node ${state}`} ref={state === 'current' ? scrollTo : undefined} style={{ '--shift': `${[0, 1, 2, 1, 0, -1, -2, -1][i % 8] * 34}px` }}>
                    <button type="button" disabled={!open} onClick={() => onUnit(u.id)} aria-label={`${u.title}${done ? ' (erledigt)' : ''}`}>
                      <span class="node-icon" aria-hidden="true">
                        {done ? '✓' : skipped ? '»' : open ? '★' : '🔒'}
                      </span>
                    </button>
                    <span class="node-label">{u.title}</span>
                  </li>
                );
              })}
            </ol>
            <ReadingList progress={p} level={level} onReading={onReading} />
          </details>
        );
      })}

      {current === null && (
        <section class="card">
          <h2>Kurs abgeschlossen 🎉</h2>
          <p>
            Jetzt hilft nur noch Eintauchen: französische Podcasts, Romane, Filme ohne Untertitel – und Gespräche mit
            Muttersprachlern. Die Wiederholungen hier halten den Wortschatz frisch.
          </p>
        </section>
      )}
    </div>
  );
}

function ReadingList({ progress: p, level, onReading }: { progress: Progress; level: Level; onReading: (id: string) => void }) {
  const texts = READINGS.filter((r) => r.level === level);
  if (!texts.length) return null;
  const open = isReadingUnlocked(p, level);
  return (
    <div class="readings">
      <h3>Lesen & Hören</h3>
      {texts.map((r) => {
        const best = p.readings[r.id];
        return (
          <button type="button" key={r.id} class="reading-card" disabled={!open} onClick={() => onReading(r.id)}>
            <span aria-hidden="true">{open ? (r.lines.some((l) => l.speaker) ? '💬' : '📖') : '🔒'}</span>
            <span class="reading-title">{r.title}</span>
            {best !== undefined && <span class="reading-score">{Math.round(best * 100)}%</span>}
          </button>
        );
      })}
    </div>
  );
}
