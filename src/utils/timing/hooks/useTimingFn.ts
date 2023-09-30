import { useEffect, useRef } from 'react';

import type { TimingClearFn, TimingFn, TimingFnHandler } from './types';

export function useTimingFn(
  callback: TimingFnHandler,
  ms: number,
  set: TimingFn,
  clear: TimingClearFn,
) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const id = set(() => savedCallback.current(), ms);

    return () => {
      clear(id);
    };
  }, [callback, ms]);
}
