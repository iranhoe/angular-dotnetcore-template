const path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './Scripts/main.js',
    output: {
        path: path.resolve(__dirname, './wwwroot/dist'),
        filename: 'app.bundle.js'
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
    }
};