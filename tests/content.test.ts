import { describe, expect, it } from 'vitest';
import { UNITS } from '../src/content';
import { PLACEMENT } from '../src/content/placement';
import { LEVELS } from '../src/content/types';
import { check, tiles, variants } from '../src/engine/text';
import { PER_LEVEL } from '../src/engine/placement';

describe('course content', () => {
  it('has unique unit ids and units on every level', () => {
    expect(new Set(UNITS.map((u) => u.id)).size).toBe(UNITS.length);
    for (const level of LEVELS) expect(UNITS.filter((u) => u.level === level).length).toBeGreaterThanOrEqual(5);
  });

  for (const u of UNITS) {
    describe(u.id, () => {
      it('has enough items for a lesson', () => {
        expect(u.vocab.length).toBeGreaterThanOrEqual(5);
        expect(u.sentences.length).toBeGreaterThanOrEqual(3);
        expect(u.cloze.length).toBeGreaterThanOrEqual(2);
        expect(u.tips.length).toBeGreaterThan(20);
      });
      it('has no empty or duplicate variants', () => {
        for (const pair of [...u.vocab, ...u.sentences]) {
          for (const side of pair) {
            const vs = variants(side);
            expect(vs.every((v) => v.length > 0), side).toBe(true);
            expect(new Set(vs).size, side).toBe(vs.length);
          }
        }
      });
      it('has distinct vocab translations so choices are unambiguous', () => {
        const de = u.vocab.map((v) => variants(v[1])[0]);
        const fr = u.vocab.map((v) => variants(v[0])[0]);
        expect(new Set(de).size).toBe(de.length);
        expect(new Set(fr).size).toBe(fr.length);
      });
      it('accepts its own sentences built from tiles', () => {
        for (const [fr, de] of u.sentences) {
          expect(check(tiles(fr).join(' '), fr), fr).toBe('correct');
          expect(check(tiles(de).join(' '), de), de).toBe('correct');
        }
      });
      it('has well-formed cloze items', () => {
        for (const c of u.cloze) {
          expect(c.fr.split('___').length, c.fr).toBe(2);
          expect(c.wrong.length).toBeGreaterThanOrEqual(2);
          expect(c.wrong, c.fr).not.toContain(c.answer);
          expect(new Set(c.wrong).size).toBe(c.wrong.length);
        }
      });
    });
  }
});

describe('placement test', () => {
  it('has enough questions per level', () => {
    for (const level of LEVELS) expect(PLACEMENT.filter((q) => q.level === level).length).toBeGreaterThanOrEqual(PER_LEVEL);
  });
  it('never lists the answer among the wrong options', () => {
    for (const q of PLACEMENT) {
      expect(q.wrong, q.prompt + (q.fr ?? '')).not.toContain(q.answer);
      expect(q.wrong.length).toBe(3);
    }
  });
});

describe('reading texts', () => {
  it('has unique ids and at least two texts per level', async () => {
    const { READINGS } = await import('../src/content/readings');
    expect(new Set(READINGS.map((r) => r.id)).size).toBe(READINGS.length);
    for (const level of LEVELS) expect(READINGS.filter((r) => r.level === level).length).toBeGreaterThanOrEqual(2);
  });
  it('has complete lines and unambiguous questions', async () => {
    const { READINGS } = await import('../src/content/readings');
    for (const r of READINGS) {
      expect(r.lines.length, r.id).toBeGreaterThanOrEqual(5);
      for (const l of r.lines) {
        expect(l.fr.trim(), r.id).not.toBe('');
        expect(l.de.trim(), r.id).not.toBe('');
      }
      expect(r.questions.length, r.id).toBeGreaterThanOrEqual(3);
      for (const q of r.questions) {
        expect(q.wrong, q.q).not.toContain(q.answer);
        expect(new Set(q.wrong).size, q.q).toBe(q.wrong.length);
      }
    }
  });
});
