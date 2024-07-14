import classNames from 'classnames';
import style from './Loader.module.scss';

interface LoaderProps {
  className?: string;
  fullPage?: boolean
}

export const Loader = ({className, fullPage}: LoaderProps) => {

  return (
    <div className={classNames({[style.fullPage]: fullPage}, className)}>
      <div className={style.loader}/>
    </div>
  );
};