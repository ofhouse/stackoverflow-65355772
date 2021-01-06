const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  devtool: isProd ? 'source-map' : 'inline-source-map',

  entry: './src/index.js',

  plugins: [new MiniCssExtractPlugin()],

  stats: 'minimal',
  mode: isProd ? 'production' : 'development',

  optimization: {
    minimize: isProd,
    minimizer: [
      new CssMinimizerPlugin({
        parallel: false,
      }),
    ],
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: isProd } },
        ],
      },
    ],
  },
};
