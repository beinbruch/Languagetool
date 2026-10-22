import { useEffect, useState } from 'preact/hooks';
import { emptyProgress, migrate, type Progress } from './engine/progress';

const KEY = 'parlons.progress.v1';

function load(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? migrate(JSON.parse(raw)) : emptyProgress();
  } catch {
    return emptyProgress();
  }
}

let state = load();
const listeners = new Set<() => void>();

export function getProgress(): Progress {
  return state;
}

export function setProgress(next: Progress | ((p: Progress) => Progress)): void {
  state = typeof next === 'function' ? next(state) : next;
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // Storage full or blocked (private mode): keep going in memory.
  }
  listeners.forEach((l) => l());
}

export function useProgress(): Progress {
  const [, force] = useState(0);
  useEffect(() => {
    const l = () => force((n) => n + 1);
    listeners.add(l);
    return () => void listeners.delete(l);
  }, []);
  return state;
}

/** Asks the browser not to evict our data; matters for Safari. */
export function requestPersistence(): void {
  navigator.storage?.persist?.().catch(() => {});
}
