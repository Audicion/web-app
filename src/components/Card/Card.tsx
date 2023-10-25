import clsx from 'clsx';
import { type FC, type HTMLAttributes, type ReactNode } from 'react';

import { Typography } from '$components';
import { CardFooter } from './CardFooter';

import styles from './Card.module.scss';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  title: string;
  actions?: ReactNode;
  activeStep?: number;
  stepCount?: number;
}

export const Card: FC<CardProps> = ({
  children,
  title,
  actions,
  className,
  activeStep,
  stepCount,
  ...restProps
}) => {
  const isShowStepper = activeStep !== undefined;
  const isShowFooter = actions || isShowStepper;

  return (
    <div {...restProps} className={clsx(styles.card, className)}>
      <div className={styles.body}>
        <Typography variant="title" color="title">
          {title}
        </Typography>
        {children}
      </div>

      {isShowFooter && (
        <CardFooter
          showStepper={isShowStepper}
          stepCount={stepCount}
          activeStep={activeStep}
        >
          {actions}
        </CardFooter>
      )}
    </div>
  );
};
