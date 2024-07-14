import {useTranslation} from 'react-i18next';
import {CreateErrorButton} from '@shared/tests/ui/CreateErrorButton';
import {useTheme} from '@features/changeTheme';

function MainPage() {
  const { t } = useTranslation();
  const { theme} = useTheme()

  return (
    <>
      <h1>{t('Главная страница')}</h1>
      <h2>theme = {theme}</h2>
      <CreateErrorButton/>
    </>
  );
}

export default MainPage;
