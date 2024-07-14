import { BuildPaths} from './types/webpackConfig';

export const createResolvers = (paths: BuildPaths ) => ({
  extensions: ['.tsx', '.ts', '.js'],
  alias: {
    '@app': paths.app,
    '@pages': paths.pages,
    '@widgets': paths.widgets,
    '@features': paths.features,
    '@entities': paths.entities,
    '@shared': paths.shared,
  },
  modules: [paths.src, 'node_modules'],
  mainFiles: ['index'],
});
