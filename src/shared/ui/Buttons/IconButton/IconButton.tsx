import classNames from 'classnames'
import {ComponentPropsWithoutRef, forwardRef, ReactElement, ReactNode, useState} from 'react'

import styles from './IconButton.module.scss'

type Variants =
  | 'primary'
  | 'chip'
  | 'delete'
  | 'island'
  | 'chip_inverted'
  | 'transparent'
  | 'transparent_primary'

type Sizes = 1 | 2 | 3 | 4 | 5

const sizes: Record<Sizes, string> = {
  1: styles.size_1,
  2: styles.size_2,
  3: styles.size_3,
  4: styles.size_4,
  5: styles.size_5,
}

const variants: Record<Variants, string> = {
  primary: styles.primary,
  chip: styles.chip,
  delete: styles.delete,
  island: styles.island,
  chip_inverted: styles.chip_inverted,
  transparent: styles.transparent,
  transparent_primary: styles.transparent_primary,
}

export type Props = Omit<ComponentPropsWithoutRef<'button'>, 'children'> & {
  variant?: Variants
  size?: Sizes
  fullWidth?: boolean
  children?: ReactNode,
  isRounded?: boolean
  isLoading?: boolean
}

export const IconButton = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      variant = 'primary',
      size = 3,
      isRounded = false,
      type = 'button',
      className,
      ...props
    },
    ref
  ) => {

    return (
      <button
        className={classNames(
          styles.base,
          [
            variants[variant],
            sizes[size],
            {
              [styles.radius_full]: isRounded,
            },
          ],
          className
        )}
        {...props}
        type={type}
        ref={ref}
      >
        {children}
      </button>
    )
  }
)
