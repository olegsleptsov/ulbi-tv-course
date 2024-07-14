import webpack, { RuleSetRule } from 'webpack';
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

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config.module.rules.push(createCssLoader(true))

  return config
}