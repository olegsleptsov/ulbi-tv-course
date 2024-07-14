import classnames from 'classnames';

import {ChangeThemeButton, useTheme} from '@features/changeTheme';
import { AppRouter } from './routes';

import './styles/index.scss';
import { Navbar } from '@widgets/Navbar';
import { Sidebar } from '@widgets/Sidebar';
import {ChangeLanguageButton} from '@features/changeLanguage';

export function App() {
  const { theme } = useTheme();

  return (
    <div className={classnames('app', `app_theme_${theme}`)}>
        <Navbar />
        <div className="content-with-sidebar-wrapper">
          <Sidebar>
            <ChangeThemeButton />
            <ChangeLanguageButton />
          </Sidebar>
          <div className="app-content">
            <AppRouter />
          </div>
        </div>
    </div>
  );
}
