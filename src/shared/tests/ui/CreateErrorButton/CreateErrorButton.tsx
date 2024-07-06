import { useTranslation } from 'react-i18next';
import { useErrorBoundary } from 'react-error-boundary';

import {Button} from '../../../ui/Buttons/Button/';

interface CreateErrorButtonProps {
  className?: string;
}

// Компонент для создания ошибки и тестирования ErrorBoundary
export const CreateErrorButton = ({ className }: CreateErrorButtonProps) => {
  const { t } = useTranslation()
  const { showBoundary } = useErrorBoundary();

  return (
    <Button className={className} onClick={showBoundary}>
      {t('Создать ошибку для проверки ErrorBoundary')}
    </Button>
  );
};