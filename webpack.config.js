const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin('../../css/dist/[name].bundle.css');

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
            use: extractSass.extract({
                fallback: "style-loader",
                use: [
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            })
        }]
    },
    resolve:{
        extensions: ['.js','.ts']
    },
    plugins: [
      new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)@angular/,
        path.resolve(__dirname, './Scripts/main.ts')
      ),
      extractSass
    ]
};