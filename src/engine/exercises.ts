import { LEVELS, type Level, type Pair, type Unit } from '../content/types';
import { UNIT_BY_ID } from '../content';
import { primary, tiles } from './text';
import { sample, shuffle } from './random';

export type Direction = 'fr-de' | 'de-fr';

interface Base {
  /** SRS key of the item this exercise trains, if any. */
  key?: string;
}

export type Exercise = Base &
  (
    | { kind: 'match'; pairs: [string, string][] }
    | { kind: 'choice'; title: string; prompt: string; promptLang: 'fr' | 'de'; answer: string; options: string[]; note?: string }
    | { kind: 'tiles'; direction: Direction; prompt: string; answer: string; bank: string[] }
    | { kind: 'type'; direction: Direction; prompt: string; answer: string }
    | { kind: 'listen'; answer: string; bank?: string[] }
  );

/** A1/A2 build sentences from word tiles, from B1 on learners type. */
function usesTiles(level: Level): boolean {
  return LEVELS.indexOf(level) <= 1;
}

function tileBank(answer: string, pool: string[], rand: () => number): string[] {
  const words = tiles(answer);
  const lower = new Set(words.map((w) => w.toLowerCase()));
  const extra = sample(
    [...new Set(pool.flatMap((s) => tiles(s)))].filter((w) => !lower.has(w.toLowerCase())),
    Math.min(4, Math.max(2, Math.ceil(words.length / 2))),
    rand,
  );
  return shuffle([...words, ...extra], rand);
}

export function vocabChoice(unit: Unit, i: number, dir: Direction, rand: () => number): Exercise {
  const [fr, de] = unit.vocab[i];
  const others = unit.vocab.filter((_, j) => j !== i);
  const pick = (p: Pair) => primary(dir === 'fr-de' ? p[1] : p[0]);
  const answer = dir === 'fr-de' ? primary(de) : primary(fr);
  return {
    kind: 'choice',
    key: `${unit.id}:v:${i}`,
    title: 'Wähle die richtige Übersetzung',
    prompt: dir === 'fr-de' ? primary(fr) : primary(de),
    promptLang: dir === 'fr-de' ? 'fr' : 'de',
    answer,
    options: shuffle([answer, ...sample(others, 3, rand).map(pick)], rand),
  };
}

export function clozeChoice(unit: Unit, i: number, rand: () => number): Exercise {
  const c = unit.cloze[i];
  return {
    kind: 'choice',
    key: `${unit.id}:c:${i}`,
    title: 'Fülle die Lücke',
    prompt: c.fr,
    promptLang: 'fr',
    answer: c.answer,
    options: shuffle([c.answer, ...c.wrong], rand),
    note: c.de,
  };
}

export function sentenceExercise(unit: Unit, i: number, variant: number, rand: () => number): Exercise {
  const [fr, de] = unit.sentences[i];
  const key = `${unit.id}:s:${i}`;
  const tilesMode = usesTiles(unit.level);
  const others = unit.sentences.filter((_, j) => j !== i);
  switch (variant % 3) {
    case 0:
      return tilesMode
        ? { kind: 'tiles', key, direction: 'fr-de', prompt: primary(fr), answer: de, bank: tileBank(de, others.map((s) => s[1]), rand) }
        : { kind: 'type', key, direction: 'fr-de', prompt: primary(fr), answer: de };
    case 1:
      return tilesMode
        ? { kind: 'tiles', key, direction: 'de-fr', prompt: primary(de), answer: fr, bank: tileBank(fr, others.map((s) => s[0]), rand) }
        : { kind: 'type', key, direction: 'de-fr', prompt: primary(de), answer: fr };
    default:
      return tilesMode
        ? { kind: 'listen', key, answer: fr, bank: tileBank(fr, others.map((s) => s[0]), rand) }
        : { kind: 'listen', key, answer: fr };
  }
}

/** A lesson of about 14 exercises covering all of a unit's items. */
export function buildLesson(unit: Unit, rand: () => number = Math.random): Exercise[] {
  const vocabIdx = shuffle(unit.vocab.map((_, i) => i), rand);
  const intro = vocabIdx.slice(0, 3).map((i, n) => vocabChoice(unit, i, n % 2 ? 'de-fr' : 'fr-de', rand));
  const match: Exercise = {
    kind: 'match',
    pairs: sample(unit.vocab, 5, rand).map(([fr, de]) => [primary(fr), primary(de)]),
  };
  const offset = Math.floor(rand() * 3);
  const rest = [
    ...unit.sentences.map((_, i) => sentenceExercise(unit, i, i + offset, rand)),
    ...unit.cloze.map((_, i) => clozeChoice(unit, i, rand)),
  ];
  return [...intro, match, ...shuffle(rest, rand)];
}

/** Every SRS key a unit contributes once its lesson is passed. */
export function unitKeys(unit: Unit): string[] {
  return [
    ...unit.vocab.map((_, i) => `${unit.id}:v:${i}`),
    ...unit.sentences.map((_, i) => `${unit.id}:s:${i}`),
    ...unit.cloze.map((_, i) => `${unit.id}:c:${i}`),
  ];
}

/** Turns an SRS key back into a fresh exercise; null if the content is gone. */
export function exerciseForKey(key: string, rand: () => number = Math.random): Exercise | null {
  const [unitId, type, idx] = key.split(':');
  const unit = UNIT_BY_ID[unitId];
  const i = Number(idx);
  if (!unit) return null;
  if (type === 'v' && unit.vocab[i]) return vocabChoice(unit, i, rand() < 0.5 ? 'fr-de' : 'de-fr', rand);
  if (type === 'c' && unit.cloze[i]) return clozeChoice(unit, i, rand);
  if (type === 's' && unit.sentences[i]) return sentenceExercise(unit, i, Math.floor(rand() * 3), rand);
  return null;
}
