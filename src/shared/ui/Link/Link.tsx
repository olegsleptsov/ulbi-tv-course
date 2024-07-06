import classNames from 'classnames';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { ReactNode } from 'react';
import style from './Link.module.scss';

type Variant = 'primary' | 'secondary'

interface LinkProps extends RouterLinkProps {
  children?: ReactNode
  variant?: Variant
}

const variants: Record<Variant, string> = {
  primary: style.primary,
  secondary: style.secondary,
};

export function Link(props: LinkProps) {
  const {
    className,
    children,
    to,
    variant = 'primary',
    ...otherProps
  } = props;

  return (
    <RouterLink
      className={classNames(style.root, variants[variant], className)}
      to={to}
      {...otherProps}
    >
      {children}
    </RouterLink>
  );
}
