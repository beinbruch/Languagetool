import { describe, expect, it } from 'vitest';
import { check, normalize, tiles } from '../src/engine/text';

describe('check', () => {
  it('ignores case, punctuation and apostrophe style', () => {
    expect(check("j’ai vingt ans", "J'ai vingt ans.")).toBe('correct');
    expect(check('  Comment vas - tu ', 'Comment vas-tu ?')).toBe('correct');
  });
  it('accepts any listed variant', () => {
    expect(check('Je suis fatiguée', 'Je suis fatigué.|Je suis fatiguée.')).toBe('correct');
  });
  it('flags missing accents without failing', () => {
    expect(check('Il est ne en 1990', 'Il est né en 1990.')).toBe('accent');
    expect(check('la soeur', 'la sœur')).toBe('accent');
  });
  it('rejects wrong and empty answers', () => {
    expect(check('Je suis Paul', 'Je suis Marie.')).toBe('wrong');
    expect(check('   ', 'oui')).toBe('wrong');
  });
});

describe('tiles', () => {
  it('keeps elisions and hyphens together and drops punctuation', () => {
    expect(tiles("Qu'est-ce que tu fais ?|x")).toEqual(["Qu'est-ce", 'que', 'tu', 'fais']);
  });
  it('round-trips through check', () => {
    const s = 'Bonjour, je suis Marie.';
    expect(check(tiles(s).join(' '), s)).toBe('correct');
  });
});

describe('normalize', () => {
  it('collapses whitespace', () => {
    expect(normalize('a   b')).toBe('a b');
  });
});
