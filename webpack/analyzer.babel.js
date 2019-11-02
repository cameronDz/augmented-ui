import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import merge from 'webpack-merge';
import common from './common.babel';

const analyzer = {
  mode: 'production',
  plugins: [new BundleAnalyzerPlugin()]
};

module.exports = merge(common, analyzer);
