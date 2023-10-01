import { type FC } from 'react';

import { Button } from '$components';
import { nextStep, previousStep, setView } from '$stores/navigation';
import { useTitle } from '$utils/title';

export const StartView: FC = () => {
  useTitle('Приготовьтесь');

  return (
    <div className="view">
      <div className="view-content">
        <h1>Привет 🦊</h1>
      </div>
      <div className="view-actions">
        <Button onClick={previousStep}>Минус</Button>
        <Button onClick={nextStep}>Плюс</Button>
        <Button onClick={() => setView('measure')}>Далее</Button>
      </div>
    </div>
  );
};
