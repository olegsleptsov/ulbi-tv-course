import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/webpackConfig';

export const createLoaders = (options: BuildOptions) => {
  const { isDev } = options;

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const babelLoader = {
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.module./,
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:5]',
            namedExport: false,
          },
        },
      },
      'sass-loader',
    ],
  };

  const fileLoader = {
    test: /\.png/,
    type: 'asset/resource',
  };

  return [svgLoader, fileLoader, babelLoader, tsLoader, cssLoader];
};
