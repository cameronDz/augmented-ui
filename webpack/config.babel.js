const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/../dist',
        publicPath: '/'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        contentBase: './dist',
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
            template: './src/index.html',
            filename: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};