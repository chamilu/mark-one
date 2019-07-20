const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: { main: path.resolve(__dirname, 'src/index.js') },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: true,
            hash: false
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
};

config.devServer = {
    port: 3000,
    historyApiFallback: true,
    open: true,
    hot: true,
    host: 'localhost',
    watchOptions: {
        ignored: /node_modules/
    },
    proxy: {
        '/api': 'http://localhost:5000'
    }
};

module.exports = config;
