const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Подключили к проекту плагин css
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [{ // тут описываются правила
            test: /\.js$/, // регулярное выражение, которое ищет все js файлы
            use: { loader: "babel-loader" }, // весь JS обрабатывается пакетом babel-loader
            exclude: /node_modules/ // исключает папку node_modules
                },
                {
            test: /\.css$/, // применять это правило только к CSS-файлам
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'] // к этим файлам нужно применить пакеты, которые мы уже установили + добавили минификацию
                }
            ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            // Означает, что:
            inject: false, // стили НЕ нужно прописывать внутри тегов // для страницы нужно считать хеш. было hash: true удалили его 
            template: './src/index.html', // откуда брать образец для сравнения с текущим видом проекта
            filename: 'index.html' // имя выходного файла, то есть того, что окажется в папке dist после сборки
          })
    ]
};