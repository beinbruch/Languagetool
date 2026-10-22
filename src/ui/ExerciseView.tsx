import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import type { Exercise } from '../engine/exercises';
import { speak } from '../engine/speech';
import { shuffle } from '../engine/random';

/** What an exercise reports to the session: the answer text, or a finished match. */
export type Answer = { text: string } | { matched: true; mistakes: number };

interface Props {
  ex: Exercise;
  locked: boolean;
  rate: number;
  onChange: (a: Answer | null) => void;
}

export function SpeakButton({ text, rate, slow }: { text: string; rate: number; slow?: boolean }) {
  return (
    <button
      type="button"
      class={slow ? 'speak speak-slow' : 'speak'}
      aria-label={slow ? 'Langsam vorlesen' : 'Vorlesen'}
      onClick={() => speak(text, slow ? rate * 0.6 : rate)}
    >
      {slow ? '🐢' : '🔊'}
    </button>
  );
}

export function ExerciseView(props: Props) {
  const { ex } = props;
  switch (ex.kind) {
    case 'choice':
      return <ChoiceView {...props} ex={ex} />;
    case 'tiles':
      return <TilesView {...props} prompt={ex.prompt} promptLang={ex.direction === 'fr-de' ? 'fr' : 'de'} bank={ex.bank} title="Übersetze den Satz" />;
    case 'type':
      return <TypeView {...props} ex={ex} />;
    case 'listen':
      return <ListenView {...props} ex={ex} />;
    case 'match':
      return <MatchView {...props} ex={ex} />;
  }
}

function ChoiceView({ ex, locked, rate, onChange }: Props & { ex: Extract<Exercise, { kind: 'choice' }> }) {
  const [picked, setPicked] = useState<string | null>(null);
  return (
    <div class="exercise">
      <h2>{ex.title}</h2>
      <div class="prompt">
        {ex.promptLang === 'fr' && <SpeakButton text={ex.prompt} rate={rate} />}
        <span lang={ex.promptLang}>{ex.prompt}</span>
      </div>
      <div class="options">
        {ex.options.map((o) => (
          <button
            type="button"
            key={o}
            disabled={locked}
            class={'option' + (picked === o ? ' picked' : '') + (locked && o === ex.answer ? ' right' : '') + (locked && picked === o && o !== ex.answer ? ' wrong' : '')}
            onClick={() => {
              setPicked(o);
              onChange({ text: o });
            }}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function TilesView({
  locked,
  rate,
  onChange,
  prompt,
  promptLang,
  bank,
  title,
  hidePrompt,
}: Props & { prompt: string; promptLang: 'fr' | 'de'; bank: string[]; title: string; hidePrompt?: boolean }) {
  // Tiles are tracked by index because a word can appear twice.
  const [chosen, setChosen] = useState<number[]>([]);
  const update = (next: number[]) => {
    setChosen(next);
    onChange(next.length ? { text: next.map((i) => bank[i]).join(' ') } : null);
  };
  return (
    <div class="exercise">
      <h2>{title}</h2>
      {!hidePrompt && (
        <div class="prompt">
          {promptLang === 'fr' && <SpeakButton text={prompt} rate={rate} />}
          <span lang={promptLang}>{prompt}</span>
        </div>
      )}
      <div class="answer-line" aria-label="Deine Antwort">
        {chosen.map((i) => (
          <button type="button" key={i} class="tile" disabled={locked} onClick={() => update(chosen.filter((c) => c !== i))}>
            {bank[i]}
          </button>
        ))}
      </div>
      <div class="bank">
        {bank.map((w, i) => (
          <button
            type="button"
            key={i}
            class={'tile' + (chosen.includes(i) ? ' used' : '')}
            disabled={locked || chosen.includes(i)}
            onClick={() => update([...chosen, i])}
          >
            {w}
          </button>
        ))}
      </div>
    </div>
  );
}

const ACCENTS = ['é', 'è', 'ê', 'à', 'â', 'ç', 'ù', 'û', 'ô', 'î', 'ï', 'ë', 'œ'];

function TextInput({ locked, onChange, french }: { locked: boolean; onChange: Props['onChange']; french: boolean }) {
  const [text, setText] = useState('');
  const ref = useRef<HTMLTextAreaElement>(null);
  const update = (t: string) => {
    setText(t);
    onChange(t.trim() ? { text: t } : null);
  };
  const insert = (ch: string) => {
    const el = ref.current;
    if (!el) return;
    const start = el.selectionStart ?? text.length;
    const end = el.selectionEnd ?? text.length;
    update(text.slice(0, start) + ch + text.slice(end));
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(start + ch.length, start + ch.length);
    });
  };
  return (
    <>
      <textarea
        ref={ref}
        class="type-input"
        lang={french ? 'fr' : 'de'}
        placeholder={french ? 'Auf Französisch schreiben' : 'Auf Deutsch schreiben'}
        value={text}
        disabled={locked}
        autocapitalize="off"
        autocomplete="off"
        spellcheck={false}
        rows={3}
        onInput={(e) => update((e.target as HTMLTextAreaElement).value)}
      />
      {french && !locked && (
        <div class="accents">
          {ACCENTS.map((a) => (
            <button type="button" key={a} class="accent" onMouseDown={(e) => e.preventDefault()} onClick={() => insert(a)}>
              {a}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

function TypeView({ ex, locked, rate, onChange }: Props & { ex: Extract<Exercise, { kind: 'type' }> }) {
  const fromFr = ex.direction === 'fr-de';
  return (
    <div class="exercise">
      <h2>Übersetze den Satz</h2>
      <div class="prompt">
        {fromFr && <SpeakButton text={ex.prompt} rate={rate} />}
        <span lang={fromFr ? 'fr' : 'de'}>{ex.prompt}</span>
      </div>
      <TextInput locked={locked} onChange={onChange} french={!fromFr} />
    </div>
  );
}

function ListenView(props: Props & { ex: Extract<Exercise, { kind: 'listen' }> }) {
  const { ex, rate } = props;
  const text = ex.answer.split('|')[0];
  useEffect(() => speak(text, rate), [text]);
  return (
    <div class="exercise">
      <h2>Schreib auf, was du hörst</h2>
      <div class="listen">
        <SpeakButton text={text} rate={rate} />
        <SpeakButton text={text} rate={rate} slow />
      </div>
      {ex.bank ? (
        <TilesView {...props} prompt={text} promptLang="fr" bank={ex.bank} title="" hidePrompt />
      ) : (
        <TextInput locked={props.locked} onChange={props.onChange} french />
      )}
    </div>
  );
}

function MatchView({ ex, onChange, rate }: Props & { ex: Extract<Exercise, { kind: 'match' }> }) {
  const right = useMemo(() => shuffle(ex.pairs.map((p) => p[1])), [ex]);
  const [left, setLeft] = useState<string | null>(null);
  const [done, setDone] = useState<string[]>([]);
  const [wrong, setWrong] = useState<string | null>(null);
  const [mistakes, setMistakes] = useState(0);

  const tryPair = (de: string) => {
    if (!left) return;
    const pair = ex.pairs.find((p) => p[0] === left);
    if (pair && pair[1] === de) {
      const next = [...done, left];
      setDone(next);
      setLeft(null);
      if (next.length === ex.pairs.length) onChange({ matched: true, mistakes });
    } else {
      setMistakes((m) => m + 1);
      setWrong(de);
      setTimeout(() => setWrong(null), 400);
    }
  };
  const deDone = (de: string) => ex.pairs.some((p) => p[1] === de && done.includes(p[0]));

  return (
    <div class="exercise">
      <h2>Finde die Paare</h2>
      <div class="match">
        <div class="col">
          {ex.pairs.map(([fr]) => (
            <button
              type="button"
              key={fr}
              lang="fr"
              class={'option' + (left === fr ? ' picked' : '') + (done.includes(fr) ? ' gone' : '')}
              disabled={done.includes(fr)}
              onClick={() => {
                setLeft(fr);
                speak(fr, rate);
              }}
            >
              {fr}
            </button>
          ))}
        </div>
        <div class="col">
          {right.map((de) => (
            <button
              type="button"
              key={de}
              class={'option' + (wrong === de ? ' shake' : '') + (deDone(de) ? ' gone' : '')}
              disabled={deDone(de)}
              onClick={() => tryPair(de)}
            >
              {de}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
