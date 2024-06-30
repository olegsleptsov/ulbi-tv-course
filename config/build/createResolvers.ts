import { BuildOptions } from "./types/webpackConfig";

export const createResolvers = (options: BuildOptions) => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@app": options.paths.app,
      "@pages": options.paths.pages,
      "@widgets": options.paths.widgets,
      "@features": options.paths.features,
      "@entities": options.paths.entities,
      "@shared": options.paths.shared,
    },
    modules: [options.paths.src, "node_modules"],
    mainFiles: ["index"],
  };
};
