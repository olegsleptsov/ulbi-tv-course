import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routerConfig } from '../config';
import {Loader} from '@shared/ui/Loader';

export function AppRouter() {
  return (
    <Suspense fallback={<Loader fullPage />}>
      <Routes>
        {Object.values(routerConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
}
