import { createEmptyCard, fsrs, Rating, type Card, type CardInput } from 'ts-fsrs';
import { LEVELS, type Level } from '../content/types';
import { UNITS } from '../content';
import { unitKeys } from './exercises';

export interface Settings {
  dailyGoal: number;
  speechRate: number;
  sounds: boolean;
}

/** Cards are stored as JSON, so their dates come back as strings. */
type StoredCard = Omit<CardInput, 'due' | 'last_review'> & { due: string; last_review?: string | null };

export interface Progress {
  version: 1;
  placement: { done: boolean; passed: Level | null };
  completed: Record<string, { best: number; times: number }>;
  skipped: string[];
  cards: Record<string, StoredCard>;
  xp: number;
  xpByDay: Record<string, number>;
  streak: { count: number; last: string | null };
  settings: Settings;
}

export function emptyProgress(): Progress {
  return {
    version: 1,
    placement: { done: false, passed: null },
    completed: {},
    skipped: [],
    cards: {},
    xp: 0,
    xpByDay: {},
    streak: { count: 0, last: null },
    settings: { dailyGoal: 30, speechRate: 0.9, sounds: true },
  };
}

/** Fills in fields that older saves or imported files may lack. */
export function migrate(raw: unknown): Progress {
  const base = emptyProgress();
  if (!raw || typeof raw !== 'object') return base;
  const p = raw as Partial<Progress>;
  return {
    ...base,
    ...p,
    placement: { ...base.placement, ...p.placement },
    streak: { ...base.streak, ...p.streak },
    settings: { ...base.settings, ...p.settings },
    version: 1,
  };
}

export function dayKey(d: Date): string {
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${day}`;
}

function previousDay(key: string): string {
  const [y, m, d] = key.split('-').map(Number);
  return dayKey(new Date(y, m - 1, d - 1));
}

/** The streak as it should be shown today (0 if a day was missed). */
export function currentStreak(p: Progress, now: Date): number {
  const today = dayKey(now);
  if (p.streak.last === today || p.streak.last === previousDay(today)) return p.streak.count;
  return 0;
}

export function todayXp(p: Progress, now: Date): number {
  return p.xpByDay[dayKey(now)] ?? 0;
}

export function addXp(p: Progress, amount: number, now: Date): Progress {
  const today = dayKey(now);
  const streak =
    p.streak.last === today
      ? p.streak
      : { count: p.streak.last === previousDay(today) ? p.streak.count + 1 : 1, last: today };
  return {
    ...p,
    xp: p.xp + amount,
    xpByDay: { ...p.xpByDay, [today]: (p.xpByDay[today] ?? 0) + amount },
    streak,
  };
}

export function isDone(p: Progress, unitId: string): boolean {
  return unitId in p.completed || p.skipped.includes(unitId);
}

/** Units open in order: the first one, and every one whose predecessor is done. */
export function isUnlocked(p: Progress, unitId: string): boolean {
  const i = UNITS.findIndex((u) => u.id === unitId);
  if (i <= 0) return i === 0;
  return isDone(p, unitId) || isDone(p, UNITS[i - 1].id);
}

/** The first unit that still needs doing, or null when the course is finished. */
export function nextUnitId(p: Progress): string | null {
  return UNITS.find((u) => !isDone(p, u.id))?.id ?? null;
}

export function applyPlacement(p: Progress, passed: Level | null): Progress {
  const upTo = passed === null ? -1 : LEVELS.indexOf(passed);
  return {
    ...p,
    placement: { done: true, passed },
    skipped: UNITS.filter((u) => LEVELS.indexOf(u.level) <= upTo).map((u) => u.id),
  };
}

// Short-term steps would make cards due minutes after a lesson; lessons already repeat mistakes.
const scheduler = fsrs({ enable_fuzz: true, enable_short_term: false });

/** Records a finished lesson and puts the unit's items into the review deck. */
export function completeUnit(p: Progress, unitId: string, score: number, now: Date): Progress {
  const prev = p.completed[unitId];
  const cards = { ...p.cards };
  const unit = UNITS.find((u) => u.id === unitId);
  if (unit) {
    for (const key of unitKeys(unit)) {
      if (!cards[key]) cards[key] = serialize(scheduler.next(createEmptyCard(now), now, Rating.Good).card);
    }
  }
  return {
    ...p,
    cards,
    completed: { ...p.completed, [unitId]: { best: Math.max(prev?.best ?? 0, score), times: (prev?.times ?? 0) + 1 } },
  };
}

function serialize(card: Card): StoredCard {
  return {
    ...card,
    due: card.due.toISOString(),
    last_review: card.last_review ? card.last_review.toISOString() : null,
  };
}

export function dueKeys(p: Progress, now: Date): string[] {
  return Object.entries(p.cards)
    .filter(([, c]) => new Date(c.due) <= now)
    .sort((a, b) => new Date(a[1].due).getTime() - new Date(b[1].due).getTime())
    .map(([k]) => k);
}

export function reviewCard(p: Progress, key: string, correct: boolean, now: Date): Progress {
  const stored = p.cards[key];
  if (!stored) return p;
  const card = scheduler.next(stored as CardInput, now, correct ? Rating.Good : Rating.Again).card;
  return { ...p, cards: { ...p.cards, [key]: serialize(card) } };
}
