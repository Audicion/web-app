import { type ChangeEvent, type FC, useCallback, useState } from 'react';

import { Button, Card, Typography } from '$components';
import { STEP_COUNT, useStep } from '$stores/navigation';
import { useBeeper } from '$utils/beeper';

import styles from './MeasureView.module.scss';

export const MeasureView: FC = () => {
  const activeStep = useStep();

  const [volume, setVolume] = useState(0.5);
  const [balance, setBalance] = useState(0);
  const [frequency, setFrequency] = useState(440);

  const { start, stop, enabled } = useBeeper(
    frequency,
    balance,
    volume,
    { min: 0.00001, max: 0.1 },
    { interval: 1000, duration: 1000 },
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

  return (
    <Card
      title="Измерение 🎧"
      actions={
        <>
          {enabled ? (
            <Button onClick={stop}>Выключить звук</Button>
          ) : (
            <Button onClick={start}>Включить звук</Button>
          )}
        </>
      }
      stepCount={STEP_COUNT}
      activeStep={activeStep}
    >
      <div className={styles.row}>
        <Typography>Громкость</Typography>
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
        <Typography>Баланс</Typography>
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
        <Typography>Тон</Typography>
        <input
          className={styles.range}
          type="range"
          value={frequency}
          step={10}
          min={100}
          max={2000}
          onChange={handleFrequencyChange}
        />
      </div>
    </Card>
  );
};
