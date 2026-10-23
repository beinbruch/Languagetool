import { describe, expect, it } from 'vitest';
import { UNITS } from '../src/content';
import { buildLesson, exerciseForKey, unitKeys } from '../src/engine/exercises';
import { answerPlacement, PER_LEVEL, startPlacement } from '../src/engine/placement';
import {
  addXp,
  applyPlacement,
  completeUnit,
  currentStreak,
  dueKeys,
  emptyProgress,
  isUnlocked,
  migrate,
  nextUnitId,
  recordMistakes,
  reviewCard,
  completeReading,
  isReadingUnlocked,
} from '../src/engine/progress';

function seeded(seed: number) {
  return () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
}

describe('lessons', () => {
  it('builds a lesson for every unit with valid choices and tile banks', () => {
    for (const u of UNITS) {
      const lesson = buildLesson(u, seeded(7));
      expect(lesson.length).toBeGreaterThanOrEqual(10);
      for (const ex of lesson) {
        if (ex.kind === 'choice') {
          expect(ex.options).toContain(ex.answer);
          expect(new Set(ex.options).size).toBe(ex.options.length);
        }
        if (ex.kind === 'match') expect(ex.pairs.length).toBe(5);
      }
    }
  });
  it('turns every SRS key back into an exercise', () => {
    for (const u of UNITS) for (const k of unitKeys(u)) expect(exerciseForKey(k, seeded(3)), k).not.toBeNull();
  });
});

describe('progress', () => {
  const day = (d: number) => new Date(2026, 0, d, 12);

  it('counts a streak across consecutive days and resets after a gap', () => {
    let p = addXp(emptyProgress(), 10, day(1));
    p = addXp(p, 10, day(2));
    p = addXp(p, 5, day(2));
    expect(currentStreak(p, day(2))).toBe(2);
    expect(currentStreak(p, day(3))).toBe(2);
    expect(currentStreak(p, day(4))).toBe(0);
    expect(addXp(p, 1, day(5)).streak.count).toBe(1);
  });

  it('unlocks units in order', () => {
    let p = emptyProgress();
    expect(isUnlocked(p, UNITS[0].id)).toBe(true);
    expect(isUnlocked(p, UNITS[1].id)).toBe(false);
    p = completeUnit(p, UNITS[0].id, 1, day(1));
    expect(isUnlocked(p, UNITS[1].id)).toBe(true);
    expect(nextUnitId(p)).toBe(UNITS[1].id);
  });

  it('skips the levels a placement test passed', () => {
    const p = applyPlacement(emptyProgress(), 'A2');
    const firstB1 = UNITS.find((u) => u.level === 'B1')!;
    expect(nextUnitId(p)).toBe(firstB1.id);
    expect(isUnlocked(p, firstB1.id)).toBe(true);
  });

  it('schedules reviews days ahead and brings failed cards back sooner', () => {
    const now = day(1);
    let p = completeUnit(emptyProgress(), UNITS[0].id, 1, now);
    expect(dueKeys(p, now)).toHaveLength(0);
    const later = day(20);
    const due = dueKeys(p, later);
    expect(due.length).toBe(unitKeys(UNITS[0]).length);
    const good = reviewCard(p, due[0], true, later);
    const bad = reviewCard(p, due[0], false, later);
    expect(new Date(good.cards[due[0]].due) > new Date(bad.cards[due[0]].due)).toBe(true);
    p = good;
    expect(dueKeys(p, later)).not.toContain(due[0]);
  });

  it('skips units added to an already passed level when loading old saves', () => {
    const old = { ...applyPlacement(emptyProgress(), 'A2'), skipped: ['a1-hello'] };
    const loaded = migrate(JSON.parse(JSON.stringify(old)));
    expect(nextUnitId(loaded)).toBe(UNITS.find((u) => u.level === 'B1')!.id);
  });

  it('keeps wrong answers in the mistake book until they are answered right', () => {
    let p = recordMistakes(emptyProgress(), { a: false, b: true, c: false });
    expect(p.mistakes).toEqual(['a', 'c']);
    p = recordMistakes(p, { a: true, d: false });
    expect(p.mistakes).toEqual(['d', 'c']);
  });

  it('keeps the best reading score and opens texts with their level', () => {
    let p = completeReading(emptyProgress(), 'r1', 1);
    p = completeReading(p, 'r1', 0.33);
    expect(p.readings.r1).toBe(1);
    expect(isReadingUnlocked(emptyProgress(), 'A1')).toBe(true);
    expect(isReadingUnlocked(emptyProgress(), 'B1')).toBe(false);
    expect(isReadingUnlocked(applyPlacement(emptyProgress(), 'A2'), 'B1')).toBe(true);
  });

  it('loads saves from before readings and mistakes existed', () => {
    const { readings, mistakes, ...old } = emptyProgress();
    void readings;
    void mistakes;
    const loaded = migrate(JSON.parse(JSON.stringify(old)));
    expect(loaded.readings).toEqual({});
    expect(loaded.mistakes).toEqual([]);
  });

  it('survives a JSON round-trip and fills missing fields', () => {
    const p = completeUnit(emptyProgress(), UNITS[0].id, 0.8, day(1));
    const back = migrate(JSON.parse(JSON.stringify(p)));
    expect(back).toEqual(JSON.parse(JSON.stringify(p)));
    expect(migrate({ xp: 5 }).settings.dailyGoal).toBe(30);
    expect(reviewCard(back, unitKeys(UNITS[0])[0], true, day(30)).cards).toBeDefined();
  });
});

describe('placement', () => {
  const run = (correctUntilLevel: number) => {
    let s = startPlacement(seeded(1));
    while (!s.finished) s = answerPlacement(s, s.levelIndex < correctUntilLevel, seeded(2));
    return s.passed;
  };
  it('stops at the first level that is not mastered', () => {
    expect(run(0)).toBeNull();
    expect(run(2)).toBe('A2');
    expect(run(6)).toBe('C2');
  });
  it('tolerates one mistake per level', () => {
    let s = startPlacement(seeded(1));
    for (let i = 0; i < PER_LEVEL; i++) s = answerPlacement(s, i !== 0, seeded(2));
    expect(s.passed).toBe('A1');
    expect(s.finished).toBe(false);
  });
});
