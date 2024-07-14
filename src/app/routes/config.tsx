import { AboutPage } from '@pages/About';
import { MainPage } from '@pages/Main';
import { AppRoutes, RoutesNames } from '@shared/constants/routes';
import { RouteProps } from 'react-router-dom';
import {NotFoundPage} from '@pages/NotFoundPage';

export const routerConfig: Record<RoutesNames, RouteProps> = {
  [RoutesNames.MAIN]: {
    path: AppRoutes[RoutesNames.MAIN],
    element: <MainPage />,
  },
  [RoutesNames.ABOUT]: {
    path: AppRoutes[RoutesNames.ABOUT],
    element: <AboutPage />,
  },
  [RoutesNames.NOT_FOUND]: {
    path: AppRoutes[RoutesNames.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
