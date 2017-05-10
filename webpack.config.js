const path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './Scripts/main.js',
    output: {
        path: path.resolve(__dirname, './wwwroot/dist'),
        filename: 'app.module.js'
    },
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts'}
        ]
    },
    resolve:{
        extensions: ['.js','.ts']
    }
};