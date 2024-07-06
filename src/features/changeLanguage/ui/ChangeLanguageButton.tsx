import classNames from 'classnames';
import { Button } from '@shared/ui/Buttons/Button';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

interface ChangeLanguageButtonProps {
  className?: string;
}

export function ChangeLanguageButton({ className }: ChangeLanguageButtonProps) {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = language === 'ru' ? 'en' : 'ru';
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Button onClick={toggleLanguage} className={classNames(className)}>{t('Сменить язык')}</Button>
  );
}
