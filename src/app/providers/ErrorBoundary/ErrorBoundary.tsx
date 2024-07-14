import {ErrorBoundary as ErrorBoundaryLib} from 'react-error-boundary';

import {ReactNode} from 'react';
import {Fallback} from './Fallback';

interface ErrorBoundaryProps {
  children: ReactNode;
}

const logError = (error: Error) => {
  console.error('!!! error =', error)
}

export const ErrorBoundary = ({children}: ErrorBoundaryProps) => {
  return (
    <ErrorBoundaryLib
      fallbackRender={(props) => <Fallback {...props} />}
      onError={logError}
    >
      {children}
    </ErrorBoundaryLib>
  );
};