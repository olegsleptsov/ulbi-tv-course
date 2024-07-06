import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import style from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function Button({ className, children, ...otherProps }: ButtonProps) {
  return (
    <button className={classNames(style.root, className)} {...otherProps}>
      {children}
    </button>
  );
}
