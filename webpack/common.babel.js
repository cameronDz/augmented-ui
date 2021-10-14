import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '..', './dist'),
    publicPath: ''
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
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
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve(__dirname, '..', './src/assets/images'),
          to: 'images'
        },
        {
          from: resolve(__dirname, '..', './src/favicon.ico'),
          to: 'favicon.ico'
        }
      ]
    }),
    new HtmlWebPackPlugin({
      filename: resolve(__dirname, '..', './dist/index.html'),
      template: resolve(__dirname, '..', './src/index.html')
    })
  ]
};
