import { Button } from '@shared/ui/Buttons/Button';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

interface ChangeSidebarWidthProps {
  className?: string
  toggle: () => void
  isExpanded: boolean
  buttonTestId?: string
}

export function ChangeSidebarWidth({ className, toggle, isExpanded, buttonTestId }: ChangeSidebarWidthProps) {
  const { t } = useTranslation();

  return (
    <Button
      data-testid={buttonTestId}
      className={classNames(className)}
      onClick={toggle}
    >
      {isExpanded ? t('Свернуть') : t('Развернуть')}
    </Button>
  );
}
