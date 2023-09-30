import { type ChangeEvent, type FC, useCallback, useEffect, useState } from 'react';

import { Button } from '$components';
import { useBeeper } from '$utils/beeper';

import styles from './MeasureView.module.scss';

const beepInterval = 1000;
const beepDuration = 1000;

export const MeasureView: FC = () => {
  const [volume, setVolume] = useState(0.5);
  const [balance, setBalance] = useState(0);
  const [frequency, setFrequency] = useState(440);

  const { start, stop, enabled } = useBeeper(
    frequency,
    volume,
    balance,
    beepInterval,
    beepDuration,
  );

  const handleVolumeChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  }, []);

  const handleBalanceChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setBalance(parseFloat(e.target.value));
  }, []);

  const handleFrequencyChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFrequency(parseInt(e.target.value));
  }, []);

  useEffect(() => {
    start();
    return () => {
      stop();
    };
  }, []);

  return (
    <div className="view">
      <div className="view-content">
        <h1>Измерение 🎧</h1>
        <div className={styles.row}>
          <span>Громкость</span>
          <input
            className={styles.range}
            type="range"
            value={volume}
            step={0.0001}
            min={0}
            max={1}
            onChange={handleVolumeChange}
          />
        </div>
        <div className={styles.row}>
          <span>Баланс</span>
          <input
            className={styles.range}
            type="range"
            value={balance}
            step={0.0001}
            min={-1}
            max={1}
            onChange={handleBalanceChange}
          />
        </div>
        <div className={styles.row}>
          <span>Тон</span>
          <input
            className={styles.range}
            type="range"
            value={frequency}
            step={0.0001}
            min={100}
            max={4000}
            onChange={handleFrequencyChange}
          />
        </div>
      </div>
      <div className="view-actions">
        {enabled
          ? (
          <Button onClick={stop}>Выключить звук</Button>
            )
          : (
          <Button onClick={start}>Включить звук</Button>
            )}
      </div>
    </div>
  );
};
