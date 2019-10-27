import merge from 'webpack-merge';
import common from './config.babel';

const prod = { mode: 'production' };

module.exports = merge(common, prod);
