export const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;
export type Level = (typeof LEVELS)[number];

export const LEVEL_NAMES: Record<Level, string> = {
  A1: 'Einstieg',
  A2: 'Grundlagen',
  B1: 'Mittelstufe',
  B2: 'Gute Mittelstufe',
  C1: 'Fortgeschritten',
  C2: 'Nahezu muttersprachlich',
};

/**
 * A French/German pair. Either side may list accepted alternatives
 * separated by "|"; the first variant is the one shown and used for tiles.
 */
export type Pair = [fr: string, de: string];

export interface Cloze {
  /** French sentence with exactly one "___" gap. */
  fr: string;
  answer: string;
  /** Wrong options shown next to the answer. */
  wrong: string[];
  /** German meaning of the complete sentence. */
  de: string;
}

export interface Unit {
  id: string;
  level: Level;
  title: string;
  /** Short explanation in German, shown as "Tipps" before the lesson. */
  tips: string;
  vocab: Pair[];
  sentences: Pair[];
  cloze: Cloze[];
}

export interface PlacementQuestion {
  level: Level;
  prompt: string;
  /** Optional French text the question is about. */
  fr?: string;
  answer: string;
  wrong: string[];
}
