import type { TimingFnHandler } from './types';
import { useTimingFn } from './useTimingFn';

export function useTimeout(callback: TimingFnHandler, ms: number) {
  useTimingFn(callback, ms, window.setTimeout, window.clearTimeout);
}
