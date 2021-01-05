'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  context: path.resolve(__dirname),

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
  },

  devtool: isProd ? 'source-map' : 'inline-source-map',

  entry: {
    app: './src/index.js',
  },

  plugins: [new MiniCssExtractPlugin()],

  stats: 'minimal',
  mode: isProd ? 'production' : 'development',

  optimization: {
    minimize: isProd,
    minimizer: [new CssMinimizerPlugin()],
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    rules: [
      {
        oneOf: [
          // Styles
          {
            test: /\.css$/i,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
              },
              { loader: 'css-loader', options: { importLoaders: 1 } },
            ],
          },
        ],
      },
    ],
  },
};
