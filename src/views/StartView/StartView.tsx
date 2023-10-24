import { useStore } from '@nanostores/react';
import { type FC } from 'react';

import { Button, Card, Stepper } from '$components';
import {
  $step,
  nextStep,
  previousStep,
  setView,
  STEP_COUNT,
} from '$stores/navigation';
import { useTitle } from '$utils/title';

export const StartView: FC = () => {
  useTitle('Приготовьтесь');

  const activeStep = useStore($step);

  return (
    <Card
      title="Привет 🦊"
      actions={
        <>
          <Button onClick={previousStep}>Минус</Button>
          <Button onClick={nextStep}>Плюс</Button>
          <Button onClick={() => setView('measure')}>Далее</Button>
        </>
      }
    >
      <Stepper count={STEP_COUNT} active={activeStep} />
    </Card>
  );
};
