import merge from 'webpack-merge';
import { HotModuleReplacementPlugin } from 'webpack';
import { resolve } from 'path';
import common from './config.babel';

const dev = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: resolve(__dirname, '..', './dist'),
    hot: true,
    watchContentBase: true
  },
  plugins: [ new HotModuleReplacementPlugin() ]
};

module.exports = merge(common, dev);
