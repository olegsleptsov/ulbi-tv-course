export enum RoutesNames {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const AppRoutes: Record<RoutesNames, string> = {
  [RoutesNames.MAIN]: '/',
  [RoutesNames.ABOUT]: '/about',
  [RoutesNames.NOT_FOUND]: '*',
};
