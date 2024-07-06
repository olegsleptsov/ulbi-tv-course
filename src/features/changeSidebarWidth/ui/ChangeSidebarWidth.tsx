import {Button} from "@shared/ui/Buttons/Button/Button";
import {useTranslation} from "react-i18next";

interface ChangeSidebarWidthProps {
  className?: string
  toggle: () => void
  isExpanded: boolean
}

export const ChangeSidebarWidth = ({className, toggle, isExpanded}: ChangeSidebarWidthProps) => {
  const {t} = useTranslation()

  return (
    <Button onClick={() => toggle()}>{isExpanded ? t('Свернуть') : t('Развернуть')}</Button>
  );
};