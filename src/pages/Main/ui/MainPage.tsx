import { useTranslation } from 'react-i18next';
import {CreateErrorButton} from '@shared/tests/ui/CreateErrorButton';

function MainPage() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('Главная страница')}</h1>
      <CreateErrorButton/>
    </>
  );
}

export default MainPage;
