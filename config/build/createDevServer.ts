import { BuildOptions } from "./types/webpackConfig";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export const createDevServer = (
  options: BuildOptions
): DevServerConfiguration => {
  return options.isDev
    ? {
        port: options.port,
        open: true,
        historyApiFallback: true,
      }
    : {};
};
