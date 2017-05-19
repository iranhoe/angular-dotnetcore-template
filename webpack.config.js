const path = require('path');
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