import { useTranslation } from 'react-i18next';

function AboutPage() {
  const { t } = useTranslation('about');

  return <h1>{t('Страница о нас')}</h1>;
}

export default AboutPage;
