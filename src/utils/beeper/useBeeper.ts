import { useEffect, useRef } from 'react';

import { Beeper } from './Beeper';

export function useBeeper(
  frequency: number,
  volume: number,
  balance: number,
  interval: number,
  duration: number,
) {
  const beeperRef = useRef<Beeper>(new Beeper(interval, duration));
  const beeper = beeperRef.current;

  useEffect(() => {
    beeper.volume = volume;
    beeper.frequency = frequency;
    beeper.balance = balance;
    return () => {
      beeper.stop();
    };
  }, []);

  const start = () => {
    beeper.start();
  };

  const stop = () => {
    beeper.stop();
  };

  useEffect(() => {
    beeper.frequency = frequency;
  }, [frequency]);

  useEffect(() => {
    beeper.volume = volume;
  }, [volume]);

  useEffect(() => {
    beeper.balance = balance;
  }, [balance]);

  return {
    start,
    stop,
    enabled: Boolean(beeper.enabled),
  };
}
