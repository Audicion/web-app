import clsx from 'clsx';
import { type FC, type HTMLAttributes, type ReactNode } from 'react';

import styles from './Card.module.scss';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  title: string;
  actions?: ReactNode;
  footer?: ReactNode;
}

export const Card: FC<CardProps> = ({
  children,
  title,
  footer,
  actions,
  className,
  ...restProps
}) => {
  return (
    <div {...restProps} className={clsx(styles.card, className)}>
      <div className={styles.body}>
        <h1>{title}</h1>
        {children}
      </div>

      {(actions || footer) && (
        <div className={styles.footer}>
          {footer}
          {actions && <div className={styles.actions}>{actions}</div>}
        </div>
      )}
    </div>
  );
};
