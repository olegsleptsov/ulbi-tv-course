import path from "path";
import webpack from "webpack";
import { BuildEnv, BuildPaths, createWebpackConfig } from "./config/build";

export default (env: BuildEnv) => {
  const mode = env.mode || "development";
  const isDev = mode === "development";

  const buildPaths: BuildPaths = {
    html: path.resolve(__dirname, "index.html"),
    entry: path.resolve(__dirname, "src", "index.ts"),
    build: path.resolve(__dirname, "build"),
  };

  const config: webpack.Configuration = createWebpackConfig({
    mode,
    isDev,
    paths: buildPaths,
    port: 3000,
  });

  return config;
};
