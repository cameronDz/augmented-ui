import HtmlWebPackPlugin from 'html-webpack-plugin';
import { HotModuleReplacementPlugin } from 'webpack';
import { resolve } from 'path';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '..', './dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: resolve(__dirname, '..', './dist'),
    hot: true
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_module/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.html$/,
      use: {
        loader: 'html-loader'
      }
    }, {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: resolve(__dirname, '..', './dist/index.html'),
      template: resolve(__dirname, '..', './src/index.html')
    }),
    new HotModuleReplacementPlugin()
  ]
};
