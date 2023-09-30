import { useCallback, useEffect, useRef, useState } from 'react';

import { Beeper } from './Beeper';

export function useBeeper(
  frequency: number,
  volume: number,
  balance: number,
  interval: number,
  duration: number,
) {
  const beeperRef = useRef<Beeper>();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const beeper = new Beeper(interval, duration);
    beeperRef.current = beeper;
    return () => {
      beeper.close();
    };
  }, [interval, duration]);

  useEffect(() => {
    setEnabled(Boolean(beeperRef.current?.enabled));
  }, [beeperRef.current?.enabled]);

  const start = useCallback(() => {
    if (!beeperRef.current) {
      return;
    }
    beeperRef.current.start();
    setEnabled(true);
  }, []);

  const stop = useCallback(() => {
    beeperRef.current?.stop();
    setEnabled(false);
  }, []);

  useEffect(() => {
    if (beeperRef.current) {
      beeperRef.current.frequency = frequency;
      beeperRef.current.volume = volume;
      beeperRef.current.balance = balance;
    }
  }, [frequency, volume, balance, beeperRef.current]);

  return {
    start,
    stop,
    enabled,
  };
}
