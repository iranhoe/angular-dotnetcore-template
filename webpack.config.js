const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpack = require('webpack');

module.exports = {
    entry: {
        app: './Scripts/main.ts'
    },
    output: {
        path: path.resolve(__dirname, './wwwroot/js/dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules:[{
            test: /\.ts$/,
            use: [
                {loader: 'ts-loader'}
            ]
        },{
            test: /\.scss$/,
            use: [
                {loader: 'style-loader'},
                {loader: 'css-loader'},
                {loader: 'sass-loader'}
            ]
        }]
    },
    resolve:{
        extensions: ['.js','.ts']
    },
    plugins: [
      new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)@angular/,
        path.resolve(__dirname, './Scripts/main.ts')
      )
    ]
};