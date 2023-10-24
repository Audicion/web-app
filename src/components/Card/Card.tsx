import clsx from 'clsx';
import { type FC, type HTMLAttributes, type ReactNode } from 'react';

import { Stepper, Typography } from '$components';

import styles from './Card.module.scss';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  title: string;
  actions?: ReactNode;
  footer?: ReactNode;
  activeStep?: number;
  stepCount?: number;
}

export const Card: FC<CardProps> = ({
  children,
  title,
  footer,
  actions,
  className,
  activeStep,
  stepCount,
  ...restProps
}) => {
  const isShowStepper = activeStep !== undefined;
  const isShowFooter = actions || footer || isShowStepper;

  return (
    <div {...restProps} className={clsx(styles.card, className)}>
      <div className={styles.body}>
        <Typography variant="title" color="title">
          {title}
        </Typography>
        {children}
      </div>

      {isShowFooter && (
        <div className={styles.footer}>
          {footer && <div>{footer}</div>}

          {isShowStepper && (
            <div className={styles.stepper}>
              <Stepper count={stepCount} active={activeStep} />
            </div>
          )}

          {actions && <div className={styles.actions}>{actions}</div>}
        </div>
      )}
    </div>
  );
};
