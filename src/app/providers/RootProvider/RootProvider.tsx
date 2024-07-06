import {ReactNode} from 'react';
import {BrowserRouter} from 'react-router-dom';

import {ThemeProvider} from '@shared/themes';

import {ErrorBoundary} from '../ErrorBoundary';
// import {App} from '../../App';

export const RootProvider = ({children}: {children: ReactNode}) => {

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
};