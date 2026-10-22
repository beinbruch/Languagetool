import { useMemo, useState } from 'preact/hooks';
import { UNIT_BY_ID } from './content';
import { LEVEL_NAMES } from './content/types';
import { buildLesson, exerciseForKey, type Exercise } from './engine/exercises';
import { addXp, applyPlacement, completeUnit, dueKeys, reviewCard } from './engine/progress';
import { sample } from './engine/random';
import { setProgress, useProgress } from './store';
import { Home } from './ui/Home';
import { Placement } from './ui/Placement';
import { Session, type SessionResult } from './ui/Session';
import { Settings } from './ui/Settings';

type Screen =
  | { name: 'home' }
  | { name: 'tips'; unitId: string }
  | { name: 'lesson'; unitId: string; exercises: Exercise[] }
  | { name: 'review'; exercises: Exercise[] }
  | { name: 'placement' }
  | { name: 'settings' }
  | { name: 'result'; xp: number; correct: number; total: number; title: string };

const REVIEW_SIZE = 15;

export function App() {
  const p = useProgress();
  const [screen, setScreen] = useState<Screen>({ name: 'home' });
  const now = useMemo(() => new Date(), [screen]);
  const home = () => setScreen({ name: 'home' });

  switch (screen.name) {
    case 'home':
      return (
        <Home
          progress={p}
          now={now}
          onUnit={(unitId) => setScreen({ name: 'tips', unitId })}
          onReview={() => {
            const keys = sample(dueKeys(p, now).slice(0, REVIEW_SIZE * 2), REVIEW_SIZE);
            const exercises = keys.map((k) => exerciseForKey(k)).filter((e): e is Exercise => e !== null);
            if (exercises.length) setScreen({ name: 'review', exercises });
          }}
          onPlacement={() => setScreen({ name: 'placement' })}
          onSkipPlacement={() => setProgress((q) => applyPlacement(q, null))}
          onSettings={() => setScreen({ name: 'settings' })}
        />
      );

    case 'tips': {
      const unit = UNIT_BY_ID[screen.unitId];
      return (
        <div class="tips">
          <header class="page-head">
            <button type="button" class="icon-btn" aria-label="Zurück" onClick={home}>
              ←
            </button>
            <h1>{unit.title}</h1>
          </header>
          <section class="card">
            <p class="muted">
              <span class="badge">{unit.level}</span> {LEVEL_NAMES[unit.level]}
            </p>
            <p>{unit.tips}</p>
          </section>
          <section class="card">
            <h2>Neue Wörter</h2>
            <dl class="vocab">
              {unit.vocab.map(([fr, de]) => (
                <div key={fr}>
                  <dt lang="fr">{fr.split('|')[0]}</dt>
                  <dd>{de.split('|').join(', ')}</dd>
                </div>
              ))}
            </dl>
          </section>
          <button type="button" class="primary sticky" onClick={() => setScreen({ name: 'lesson', unitId: unit.id, exercises: buildLesson(unit) })}>
            Lektion starten
          </button>
        </div>
      );
    }

    case 'lesson':
      return (
        <Session
          exercises={screen.exercises}
          rate={p.settings.speechRate}
          sounds={p.settings.sounds}
          onQuit={home}
          onFinish={(r: SessionResult) => {
            const xp = 10 + r.correct;
            const at = new Date();
            setProgress((q) => addXp(completeUnit(q, screen.unitId, r.correct / r.total, at), xp, at));
            setScreen({ name: 'result', xp, correct: r.correct, total: r.total, title: UNIT_BY_ID[screen.unitId].title });
          }}
        />
      );

    case 'review':
      return (
        <Session
          exercises={screen.exercises}
          rate={p.settings.speechRate}
          sounds={p.settings.sounds}
          onQuit={home}
          onFinish={(r: SessionResult) => {
            const xp = 5 + r.correct;
            const at = new Date();
            setProgress((q) => {
              let next = q;
              for (const [key, ok] of Object.entries(r.firstTry)) next = reviewCard(next, key, ok, at);
              return addXp(next, xp, at);
            });
            setScreen({ name: 'result', xp, correct: r.correct, total: r.total, title: 'Wiederholung' });
          }}
        />
      );

    case 'placement':
      return (
        <Placement
          rate={p.settings.speechRate}
          onQuit={home}
          onDone={(passed) => {
            setProgress((q) => applyPlacement(q, passed));
            home();
          }}
        />
      );

    case 'settings':
      return <Settings progress={p} onBack={home} onPlacement={() => setScreen({ name: 'placement' })} />;

    case 'result': {
      const pct = Math.round((screen.correct / screen.total) * 100);
      return (
        <div class="result card">
          <h1>{pct >= 90 ? 'Parfait !' : pct >= 70 ? 'Très bien !' : 'Bien joué !'}</h1>
          <p>{screen.title} abgeschlossen.</p>
          <div class="result-stats">
            <div>
              <strong>+{screen.xp}</strong>
              <span>XP</span>
            </div>
            <div>
              <strong>{pct}%</strong>
              <span>beim ersten Versuch</span>
            </div>
          </div>
          <button type="button" class="primary" onClick={home}>
            Weiter
          </button>
        </div>
      );
    }
  }
}
