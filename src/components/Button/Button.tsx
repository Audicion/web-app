import clsx from 'clsx';
import { type ButtonHTMLAttributes, type FC, type MouseEventHandler } from 'react';

import styles from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  disabled = false,
  onClick,
  ...restProps
}) => {
  return (
    <button
      {...restProps}
      disabled={disabled}
      onClick={onClick}
      className={clsx(styles.button, className)}
    >
      {children}
    </button>
  );
};
