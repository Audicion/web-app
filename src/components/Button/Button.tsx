import clsx from 'clsx';
import { type ButtonHTMLAttributes, type FC } from 'react';

import styles from './Button.module.scss';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, className, ...restProps }) => {
  return (
    <button
      onClick={() => {}}
      className={clsx(styles.button, className)}
      {...restProps}
    >
      {children}
    </button>
  );
};
