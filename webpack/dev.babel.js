import merge from 'webpack-merge';
import { HotModuleReplacementPlugin } from 'webpack';
import { resolve } from 'path';
import common from './common.babel';

const dev = {
  devServer: {
    static: resolve(__dirname, '..', './dist')
  },
  devtool: 'inline-source-map',
  mode: 'development',
  plugins: [new HotModuleReplacementPlugin()]
};

module.exports = merge(common, dev);
