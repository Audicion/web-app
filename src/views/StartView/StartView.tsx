import { type FC } from 'react';

import { Button, Card, Typography } from '$components';
import { setView, STEP_COUNT, useStep } from '$stores/navigation';
import { useTitle } from '$utils/title';

export const StartView: FC = () => {
  useTitle('Приготовьтесь');

  const activeStep = useStep();

  return (
    <Card
      title="Приготовьтесь к проверке 🚀"
      actions={<Button onClick={() => setView('measure')}>Начать</Button>}
      stepCount={STEP_COUNT}
      activeStep={activeStep}
    >
      <Typography>
        Чтобы получить точный эффект используйте максимальный уровень громкости на
        наушниках и производите замер на одном и том же оборудовании (воспроизводящее
        устройство и наушники).
      </Typography>
      <Typography>
        Разные наушники и воспроизводящие устройства имеют разную АЧХ, поэтому нельзя
        сравнивайте результаты полученные с разных устройств.
      </Typography>
      <Typography color="secondary">Проверка займёт около 5 минут.</Typography>
    </Card>
  );
};
