import clsx from 'clsx';
import { type FC } from 'react';

import styles from './Step.module.scss';

export interface StepProps {
  active?: boolean;
  completed?: boolean;
  className?: string;
}

export const Step: FC<StepProps> = ({
  active = false,
  completed = false,
  className,
}) => {
  return (
    <input
      type="radio"
      disabled
      className={clsx(styles.step, className, {
        [styles.active]: active,
        [styles.completed]: completed,
      })}
    />
  );
};
