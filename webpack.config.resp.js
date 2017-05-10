const path = require('path');
const webpackMerge = require('webpack-merge');
const clientPartial = require('./webpack/webpack.client');
module.exports = function (options, webpackOptions) {

}

// {
//   context: path.resolve(__dirname, '.'),
//   entry: {
//     main: './Scripts/main.js',
//     shim: './node_modules/core-js/client/shim.min.js',
//     zone: './node_modules/zone.js/dist/zone.js',
//     reflect: './node_modules/reflect-metadata/Reflect.js',
//     system: './node_modules/systemjs/dist/system.src.js'
//   },
//   target: "node",
//   output: {
//     path: path.resolve(__dirname, './wwwroot/dist'),
//     filename: '[name].js',
//     sourceMapFilename: '[file].map',
//   },
// };