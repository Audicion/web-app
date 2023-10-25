import clsx from 'clsx';
import { type FC, type ReactNode, useMemo } from 'react';

import styles from './Typography.module.scss';

type TypographyVariant =
  | 'base'
  | 'title'
  | 'action-m'
  | 'action-s'
  | 'caption'
  | 'shortcut';

type TypographyColor = 'primary' | 'secondary' | 'title';

type TypographyAs = 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
interface TypographyProps {
  variant?: TypographyVariant;
  color?: TypographyColor;
  as?: TypographyAs;
  className?: string;
  children: ReactNode;
}

const variantMapping: Partial<Record<TypographyVariant, TypographyAs>> = {
  base: 'p',
  title: 'h1',
};

export const Typography: FC<TypographyProps> = ({
  children,
  variant = 'base',
  as,
  color = 'primary',
  className,
}) => {
  const Tag = useMemo(() => {
    return as ?? variantMapping[variant] ?? 'p';
  }, [as, variant]);

  return (
    <Tag
      className={clsx(className, {
        [styles.base]: variant === 'base',
        [styles.title]: variant === 'title',
        [styles.caption]: variant === 'caption',
        [styles.shortcut]: variant === 'shortcut',
        [styles.actionS]: variant === 'action-s',
        [styles.actionM]: variant === 'action-m',
        [styles.colorPrimary]: color === 'primary',
        [styles.colorSecondary]: color === 'secondary',
        [styles.colorTitle]: color === 'title',
      })}
    >
      {children}
    </Tag>
  );
};
