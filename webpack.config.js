const path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './Scripts/main.ts',
    output: {
        path: path.resolve(__dirname, './wwwroot/js/dist'),
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