// webpack.config.js
const path = require('path');
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js');

const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map', //开发模式详细source-map
    
 };

 module.exports = merge(commonConfig,devConfig);