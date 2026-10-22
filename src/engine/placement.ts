import { PLACEMENT } from '../content/placement';
import { LEVELS, type Level, type PlacementQuestion } from '../content/types';
import { shuffle } from './random';

export const PER_LEVEL = 6;
export const PASS_MARK = 5;

export interface PlacementState {
  levelIndex: number;
  questions: PlacementQuestion[];
  index: number;
  correct: number;
  passed: Level | null;
  finished: boolean;
}

function questionsFor(levelIndex: number, rand: () => number): PlacementQuestion[] {
  return shuffle(PLACEMENT.filter((q) => q.level === LEVELS[levelIndex]), rand).slice(0, PER_LEVEL);
}

export function startPlacement(rand: () => number = Math.random): PlacementState {
  return { levelIndex: 0, questions: questionsFor(0, rand), index: 0, correct: 0, passed: null, finished: false };
}

/**
 * Advances after one answer. A level counts as passed with PASS_MARK of
 * PER_LEVEL right; the test then moves up, otherwise it stops there.
 */
export function answerPlacement(s: PlacementState, correct: boolean, rand: () => number = Math.random): PlacementState {
  const done = s.correct + (correct ? 1 : 0);
  const index = s.index + 1;
  if (index < s.questions.length) return { ...s, index, correct: done };
  if (done < PASS_MARK) return { ...s, index, correct: done, finished: true };
  const passed = LEVELS[s.levelIndex];
  const levelIndex = s.levelIndex + 1;
  if (levelIndex >= LEVELS.length) return { ...s, index, correct: done, passed, finished: true };
  return { levelIndex, questions: questionsFor(levelIndex, rand), index: 0, correct: 0, passed, finished: false };
}

/** Total questions answered so far, for the progress bar. */
export function placementProgress(s: PlacementState): number {
  return (s.levelIndex * PER_LEVEL + s.index) / (LEVELS.length * PER_LEVEL);
}
