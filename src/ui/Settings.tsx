import { emptyProgress, migrate, type Progress, type Settings as S } from '../engine/progress';
import { speak, speechAvailable } from '../engine/speech';
import { setProgress } from '../store';

interface Props {
  progress: Progress;
  onBack: () => void;
  onPlacement: () => void;
}

function download(p: Progress) {
  const blob = new Blob([JSON.stringify(p, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `parlons-fortschritt-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
}

async function upload(file: File) {
  try {
    const data = migrate(JSON.parse(await file.text()));
    setProgress(data);
    alert('Fortschritt importiert.');
  } catch {
    alert('Die Datei konnte nicht gelesen werden.');
  }
}

export function Settings({ progress: p, onBack, onPlacement }: Props) {
  const set = (patch: Partial<S>) => setProgress((q) => ({ ...q, settings: { ...q.settings, ...patch } }));
  return (
    <div class="settings">
      <header class="page-head">
        <button type="button" class="icon-btn" aria-label="Zurück" onClick={onBack}>
          ←
        </button>
        <h1>Einstellungen</h1>
      </header>

      <section class="card">
        <h2>Tagesziel</h2>
        <div class="row wrap">
          {[10, 30, 50, 100].map((g) => (
            <button type="button" key={g} class={'chip' + (p.settings.dailyGoal === g ? ' on' : '')} onClick={() => set({ dailyGoal: g })}>
              {g} XP
            </button>
          ))}
        </div>
      </section>

      <section class="card">
        <h2>Aussprache</h2>
        {!speechAvailable() && <p class="muted">Dein Browser bietet keine Sprachausgabe an.</p>}
        <label class="field">
          Tempo: {p.settings.speechRate.toFixed(2)}
          <input
            type="range"
            min="0.5"
            max="1.2"
            step="0.05"
            value={p.settings.speechRate}
            onInput={(e) => set({ speechRate: Number((e.target as HTMLInputElement).value) })}
          />
        </label>
        <button type="button" class="secondary" onClick={() => speak('Bonjour ! Je suis ta voix française.', p.settings.speechRate)}>
          Stimme testen
        </button>
        <p class="muted">
          Tipp für iPhone: Unter Einstellungen → Bedienungshilfen → Gesprochene Inhalte → Stimmen → Französisch eine „Erweiterte“
          Stimme laden. Sie klingt deutlich natürlicher und funktioniert offline.
        </p>
        <label class="field check">
          <input type="checkbox" checked={p.settings.sounds} onChange={(e) => set({ sounds: (e.target as HTMLInputElement).checked })} />
          Töne bei richtig/falsch
        </label>
      </section>

      <section class="card">
        <h2>Niveau</h2>
        <p class="muted">
          {p.placement.done
            ? p.placement.passed
              ? `Einstufung: ${p.placement.passed} beherrscht.`
              : 'Einstufung: Start bei A1.'
            : 'Noch kein Einstufungstest gemacht.'}
        </p>
        <button type="button" class="secondary" onClick={onPlacement}>
          Einstufungstest (neu) machen
        </button>
      </section>

      <section class="card">
        <h2>Daten</h2>
        <p class="muted">
          Dein Fortschritt liegt nur auf diesem Gerät – kein Konto, kein Server. Sichere ihn als Datei, um ihn auf ein anderes
          Gerät mitzunehmen.
        </p>
        <div class="row wrap">
          <button type="button" class="secondary" onClick={() => download(p)}>
            Exportieren
          </button>
          <label class="secondary file-btn">
            Importieren
            <input type="file" accept="application/json,.json" onChange={(e) => {
              const f = (e.target as HTMLInputElement).files?.[0];
              if (f) void upload(f);
            }} />
          </label>
          <button
            type="button"
            class="danger"
            onClick={() => {
              if (confirm('Wirklich den gesamten Fortschritt löschen?')) setProgress(emptyProgress());
            }}
          >
            Zurücksetzen
          </button>
        </div>
      </section>

      <p class="muted center">
        Parlons · Inhalte von A1 bis C2 · Wiederholung mit FSRS
      </p>
    </div>
  );
}
