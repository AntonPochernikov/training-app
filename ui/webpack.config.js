const path = require('path');
const WebpackBar = require('webpackbar');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const APP_DIR = path.resolve(__dirname, './src');
const MONACO_DIR = path.resolve(__dirname, './node_modules/monaco-editor');
const MOCHA_DIR = path.resolve(__dirname, './node_modules/mocha');
const BOOTSTRAP_DIR = path.resolve(__dirname, './node_modules/bootstrap');

const isDevMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    filename: 'main.js',
    chunkFilename: '[chunkhash].[name].js',
    path: path.resolve(__dirname, 'dist/js'),
    publicPath: '/js/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: APP_DIR,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.css$/,
        include: [MONACO_DIR, MOCHA_DIR, BOOTSTRAP_DIR],
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.css$/,
        include: [APP_DIR],
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: '../images',
              name: '[name].[ext]',
              limit: isDevMode ? 0 : 10000,
            }
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackBar(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: 'public/index.html',
      // prevent injecting script tag in dist html body
      inject: false,
    }),
    new MonacoWebpackPlugin({
      languages: ['javascript'],
    }),
  ],
  devtool: 'source-map',
  devServer: {
    noInfo: true,
    stats: 'minimal',
    port: 3005,
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    hot: true,
  },
};
