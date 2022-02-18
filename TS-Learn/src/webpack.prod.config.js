// webpack.config.js
const path = require('path');
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js');
    
const prodConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map', //发布模式简洁source-map
 };    

 module.exports = merge(commonConfig,prodConfig);