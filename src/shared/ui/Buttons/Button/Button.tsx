import classNames from "classnames";
import style from "./Button.module.scss";
import {ButtonHTMLAttributes, ReactHTMLElement} from "react";

type Size = 'm' | 'l'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button = ({className, children, ...otherProps}: ButtonProps) => {
  return (
    <button className={classNames(style.root, className)} {...otherProps}>
      {children}
    </button>
  );
};