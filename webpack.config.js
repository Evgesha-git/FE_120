const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: "./src/index.js"
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'build'),
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(s[ac]ss|css)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                use: ['file-loader'],
            }
        ]
    }
}