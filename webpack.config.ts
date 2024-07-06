import path from 'path';
import webpack from 'webpack';
import { BuildEnv, BuildPaths, createWebpackConfig } from './config/build';

export default (env: BuildEnv) => {
  const mode = env.mode || 'development';
  const isDev = mode === 'development';

  const buildPaths: BuildPaths = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
    app: path.resolve(__dirname, 'src', 'app'),
    pages: path.resolve(__dirname, 'src', 'pages'),
    widgets: path.resolve(__dirname, 'src', 'widgets'),
    features: path.resolve(__dirname, 'src', 'features'),
    entities: path.resolve(__dirname, 'src', 'entities'),
    shared: path.resolve(__dirname, 'src', 'shared'),
  };

  const config: webpack.Configuration = createWebpackConfig({
    mode,
    isDev,
    paths: buildPaths,
    port: 3000,
  });

  return config;
};
