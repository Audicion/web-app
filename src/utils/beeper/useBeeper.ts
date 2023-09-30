import { useEffect, useRef, useState } from 'react';

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
      beeper.destroy();
    };
  }, [interval, duration]);

  const start = () => {
    beeperRef.current?.start();
    setEnabled(true);
  };

  const stop = () => {
    beeperRef.current?.stop();
    setEnabled(false);
  };

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
