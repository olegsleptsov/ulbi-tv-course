export enum RoutesNames {
  MAIN = 'main',
  ABOUT = 'about',
}

export const AppRoutes: Record<RoutesNames, string> = {
  [RoutesNames.MAIN]: '/',
  [RoutesNames.ABOUT]: '/about',
};
