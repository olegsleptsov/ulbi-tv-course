import classNames from 'classnames';
import style from './Test.module.scss';

interface TestProps {
  className?: string;
}

export function Test({ className }: TestProps) {
  return (
    <div className={classNames(style.root, className)}>
      Test
    </div>
  );
}
