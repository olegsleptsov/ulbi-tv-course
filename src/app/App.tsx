import classnames from 'classnames';

import { useTheme } from '@features/changeTheme';
import { AppRouter } from './routes';

import './styles/index.scss';
import { Navbar } from '@widgets/Navbar';
import { Sidebar } from '@widgets/Sidebar';
import { Suspense } from 'react';

export function App() {
  const { theme } = useTheme();

  return (
    <div className={classnames('app', `app_theme_${theme}`)}>
      <Suspense fallback="loading i18n ...">
        <Navbar />
        <div className="content-with-sidebar-wrapper">
          <Sidebar />
          <div className="app-content">
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  );
}
