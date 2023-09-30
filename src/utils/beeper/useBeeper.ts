import { useCallback, useEffect, useRef, useState } from 'react';

import { Beeper } from './Beeper';
import { type BeepVolumeLimits } from './generator/types';
import { type BeeperTiming } from './types';

/**
 * @param frequency - The frequency of the beep.
 * You should use a safe frequency range that will be audible on any device.
 * @param balance - Balance the sound between the left and right channels.
 * The value is between -1 (left) and 1 (right). 0 means center.
 * @param volume - The relative loudness of the played sound.
 * Float number in the range of 0 to 1.
 * @param volumeLimits - Volume limit settings
 * @param timing - Time parameters of the audio beeps.
 */
export function useBeeper(
  frequency: number,
  balance: number,
  volume: number,
  volumeLimits: BeepVolumeLimits,
  timing: BeeperTiming,
) {
  const beeperRef = useRef<Beeper>();
  const [enabled, setEnabled] = useState(false);
  const { interval, duration } = timing;

  useEffect(() => {
    const beeper = new Beeper();
    beeperRef.current = beeper;
    return () => {
      beeper.close();
    };
  }, []);

  useEffect(() => {
    if (beeperRef.current) {
      beeperRef.current.duration = duration;
    }
  }, [duration]);

  useEffect(() => {
    if (beeperRef.current) {
      const isEnabled = beeperRef.current.enabled;
      if (isEnabled) {
        beeperRef.current.stop();
      }
      beeperRef.current.interval = interval;
      if (isEnabled) {
        beeperRef.current.start();
      }
    }
  }, [interval]);

  useEffect(() => {
    if (beeperRef.current) {
      beeperRef.current.generator.volumeLimits = volumeLimits;
    }
  }, [volumeLimits.min, volumeLimits.max]);

  useEffect(() => {
    setEnabled(Boolean(beeperRef.current?.enabled));
  }, [beeperRef.current?.enabled]);

  const start = useCallback(() => {
    if (!beeperRef.current) return;
    beeperRef.current.start();
    setEnabled(true);
  }, []);

  const stop = useCallback(() => {
    beeperRef.current?.stop();
    setEnabled(false);
  }, []);

  useEffect(() => {
    if (!beeperRef.current) return;
    beeperRef.current.frequency = frequency;
    beeperRef.current.generator.volume = volume;
    beeperRef.current.generator.balance = balance;
  }, [frequency, volume, balance, beeperRef.current]);

  return {
    start,
    stop,
    enabled,
  };
}
