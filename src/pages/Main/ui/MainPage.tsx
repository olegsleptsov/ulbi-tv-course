import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation();

  return (
    <h1>{t('Главная страница')}</h1>
  );
}

export default MainPage;
