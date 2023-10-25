import { type FC, type PropsWithChildren } from 'react';

import { Stepper } from '$components';

import styles from './CardFooter.module.scss';

export interface CardFooterProps extends PropsWithChildren {
  showStepper?: boolean;
  activeStep?: number;
  stepCount?: number;
}

export const CardFooter: FC<CardFooterProps> = ({
  children,
  showStepper,
  activeStep,
  stepCount,
}) => {
  return (
    <div className={styles.footer}>
      {showStepper && (
        <div className={styles.stepper}>
          <Stepper count={stepCount} active={activeStep} />
        </div>
      )}

      {children && <div className={styles.actions}>{children}</div>}
    </div>
  );
};
