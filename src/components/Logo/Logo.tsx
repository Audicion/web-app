import clsx from 'clsx';
import { type FC, useCallback, useState } from 'react';

import logo from '$assets/logo.svg';
import { useTimeout } from '$utils/timing';

import styles from './Logo.module.scss';

export interface LogoProps {
  dimmed?: boolean;
  className?: string;
}

export const Logo: FC<LogoProps> = ({ dimmed, className }) => {
  const [visible, setVisible] = useState(false);

  const show = useCallback(() => setVisible(true), []);
  useTimeout(show, 500);

  return (
    <div
      className={clsx(
        styles.logo,
        {
          dimmed,
          [styles.visible]: visible,
        },
        className,
      )}
    >
      <span className={styles.text}>Audición</span>
      <img src={logo} alt="Логотип Audición" />
    </div>
  );
};
