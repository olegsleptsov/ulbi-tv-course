import webpack from 'webpack';
import {BuildPaths} from '../build';
import path from 'path';
import {createCssLoader} from '../build/loaders/createCssLoader';
import {createResolvers} from '../build/createResolvers';

export default ({config}: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    app: path.resolve(__dirname, '..', '..', 'src', 'app'),
    pages: path.resolve(__dirname, '..', '..', 'src', 'pages'),
    widgets: path.resolve(__dirname, '..', '..', 'src', 'widgets'),
    features: path.resolve(__dirname, '..', '..', 'src', 'features'),
    entities: path.resolve(__dirname, '..', '..', 'src', 'entities'),
    shared: path.resolve(__dirname, '..', '..', 'src', 'shared'),
  }

  const {alias: additionalAliases} = createResolvers(paths)

  config.resolve.modules.push(paths.src, 'node_modules')
  config.resolve.extensions.push('.ts', '.tsx')
  config.resolve.alias = {
    ...config.resolve.alias,
    ...additionalAliases,
  }

  config.module.rules.push(createCssLoader(true))

  return config
}