import { useStore } from '@nanostores/react';
import { type FC, useCallback } from 'react';

import { Button } from '$components';
import { $step, setStep } from '$stores/navigation';
import { useTitle } from '$utils/hooks';

export const StartView: FC = () => {
  useTitle('Приготовьтесь');

  const progressStep = useStore($step);

  const increment = useCallback(() => {
    setStep(progressStep + 1);
  }, [progressStep]);
  const decrement = useCallback(() => {
    setStep(progressStep - 1);
  }, [progressStep]);

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
