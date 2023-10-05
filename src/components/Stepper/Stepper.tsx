import clsx from 'clsx';
import { type FC, useMemo } from 'react';

import { Step } from './Step';

import styles from './Stepper.module.scss';

export interface StepperProps {
  count?: number;
  active?: number;
  className?: string;
}

export const Stepper: FC<StepperProps> = ({
  count = 12,
  active = -1,
  className,
}) => {
  const steps = useMemo(() => {
    return Array.from(Array(count), (_, i) => i);
  }, [count]);

  return (
    <div className={clsx(styles.stepper, className)}>
      {steps.map((step) => (
        <Step
          key={step}
          active={step === active}
          completed={step < active}
          className={clsx(styles.step, {
            [styles.middle]: step === count / 2,
          })}
        />
      ))}
    </div>
  );
};
