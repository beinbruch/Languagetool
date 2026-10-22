/** Accepted variants of a content string ("a|b" → ["a", "b"]). */
export function variants(s: string): string[] {
  return s.split('|').map((v) => v.trim());
}

/** The variant that is shown to the learner. */
export function primary(s: string): string {
  return variants(s)[0];
}

const PUNCT = /[.,!?;:«»"“”„…()]/g;

/** Lowercased, apostrophes unified, punctuation and extra spaces removed. */
export function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[’`´]/g, "'")
    .replace(/ | /g, ' ')
    .replace(PUNCT, ' ')
    .replace(/\s*'\s*/g, "'")
    .replace(/\s*-\s*/g, '-')
    .replace(/\s+/g, ' ')
    .trim();
}

function stripAccents(s: string): string {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/œ/g, 'oe').replace(/æ/g, 'ae');
}

export type Verdict = 'correct' | 'accent' | 'wrong';

/**
 * Compares an answer with all accepted variants. Missing or wrong accents
 * count as correct but are flagged, so the learner sees the right spelling.
 */
export function check(answer: string, expected: string): Verdict {
  const a = normalize(answer);
  if (!a) return 'wrong';
  const options = variants(expected).map(normalize);
  if (options.includes(a)) return 'correct';
  const plain = stripAccents(a);
  if (options.some((o) => stripAccents(o) === plain)) return 'accent';
  return 'wrong';
}

/** Splits a sentence into word tiles, keeping elisions like "j'ai" together. */
export function tiles(sentence: string): string[] {
  return primary(sentence)
    .replace(/[’`´]/g, "'")
    .replace(PUNCT, ' ')
    .split(/\s+/)
    .filter(Boolean);
}
