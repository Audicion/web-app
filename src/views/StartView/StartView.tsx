import { useStore } from '@nanostores/react';
import { type FC, useCallback } from 'react';

import { Button } from '$components';
import { setStep, step } from '$stores/navigation';

export const StartView: FC = () => {
  const progressStep = useStore(step);

  const increment = useCallback(() => {
    setStep(progressStep + 1);
  }, [progressStep]);
  const decrement = () => {
    setStep(progressStep - 1);
  };

  return (
    <div className="view">
      <div className="view-content">
        <h1>Привет 🦊</h1>
      </div>
      <div className="view-actions">
        <Button onClick={decrement}>Минус</Button>
        <Button onClick={increment}>Плюс</Button>
      </div>
    </div>
  );
};
