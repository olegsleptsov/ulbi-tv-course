import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import style from './Fallback.module.scss';
import { Button } from '@shared/ui/Buttons/Button';

interface FallbackProps {
  className?: string;
  error: Error;
  resetErrorBoundary: () => void
}

export const Fallback = ({ className, error, resetErrorBoundary }: FallbackProps) => {
  const { t } = useTranslation()
  
  return (
    <div className={classNames(style.root, className)}>
      {t('Произошла ошибка')}
      <pre className={style.code}>{error.message}</pre>
      <Button onClick={resetErrorBoundary}>{t('Обновить страницу')}</Button>
    </div>
  );
};