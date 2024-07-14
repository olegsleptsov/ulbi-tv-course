import classNames from 'classnames';
import { Link } from '@shared/ui/Link/Link';
import { useTranslation } from 'react-i18next';
import style from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();

  return (
    <div className={classNames(style.navbar, className)}>

      <div className={style.links}>
        <Link to="/" title={t('Главная')} variant="secondary">
          {t('Главная')}
        </Link>

        <Link to="/about" title={t('О нас')} variant="secondary">
          {t('О нас')}
        </Link>
      </div>
    </div>
  );
}
