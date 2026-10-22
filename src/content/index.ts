import { A1 } from './a1';
import { A2 } from './a2';
import { B1 } from './b1';
import { B2 } from './b2';
import { C1 } from './c1';
import { C2 } from './c2';
import { LEVELS, type Level, type Unit } from './types';

export const UNITS: Unit[] = [...A1, ...A2, ...B1, ...B2, ...C1, ...C2];

export const UNIT_BY_ID: Record<string, Unit> = Object.fromEntries(UNITS.map((u) => [u.id, u]));

export function unitsOf(level: Level): Unit[] {
  return UNITS.filter((u) => u.level === level);
}

export { LEVELS };
