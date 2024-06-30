import {AboutPage} from "@pages/About";
import {MainPage} from "@pages/Main";
import {AppRoutes, RoutesNames} from "@shared/constants/routes";
import {RouteProps} from "react-router-dom";

export const routerConfig: Record<RoutesNames, RouteProps> = {
  [RoutesNames.MAIN]: {
    path: AppRoutes[RoutesNames.MAIN],
    element: <MainPage/>,
  },
  [RoutesNames.ABOUT]: {
    path: AppRoutes[RoutesNames.ABOUT],
    element: <AboutPage/>,
  },
};
