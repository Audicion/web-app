import type { TimingFnHandler } from './types';
import { useTimingFn } from './useTimingFn';

export function useInterval(callback: TimingFnHandler, ms: number) {
  useTimingFn(callback, ms, window.setInterval, window.clearInterval);
}
