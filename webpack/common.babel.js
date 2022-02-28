import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';
import _package from '../package.json';

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '..', './dist', _package.version),
    publicPath: ''
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/assets/images',
          to: 'images'
        },
        {
          from: './src/favicon.ico',
          to: 'favicon.ico'
        }
      ]
    }),
    new HtmlWebPackPlugin({
      filename: './index.html',
      template: './src/index.html'
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};
