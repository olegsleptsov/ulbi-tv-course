import { Button } from '@shared/ui/Buttons/Button/Button';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

interface ChangeSidebarWidthProps {
  className?: string
  toggle: () => void
  isExpanded: boolean
}

export function ChangeSidebarWidth({ className, toggle, isExpanded }: ChangeSidebarWidthProps) {
  const { t } = useTranslation();

  return (
    <Button className={classNames(className)} onClick={() => toggle()}>{isExpanded ? t('Свернуть') : t('Развернуть')}</Button>
  );
}
