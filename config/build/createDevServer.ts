import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/webpackConfig';

export const createDevServer = (
  options: BuildOptions,
): DevServerConfiguration => (options.isDev
  ? {
    port: options.port,
    historyApiFallback: true,
    hot: true,
  }
  : {});
