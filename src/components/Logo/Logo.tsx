import clsx from 'clsx';
import { type FC } from 'react';

import logo from '$assets/logo.svg';

import styles from './Logo.module.scss';

export interface LogoProps {
  dimmed?: boolean;
  className?: string;
}

export const Logo: FC<LogoProps> = ({ dimmed, className }) => {
  return (
    <div className={clsx(styles.logo, { dimmed }, className)}>
      <span className={styles.text}>Audición</span>
      <img src={logo} alt="Логотип Audición" />
    </div>
  );
};
