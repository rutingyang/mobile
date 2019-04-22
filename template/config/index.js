'use strict';

const path = require('path');

module.exports = {
  local: {
    assetsPublicPath: '/', // 相对文件路径
    proxyTable: {},
    host: 'localhost', // 为了方便别人访问，请设置0.0.0.0
    port: '8000', // 端口号
    autoOpenBrowser: true, // 是否自动打开浏览器
    errorOverlay: true, // 浏览器错误提示遮罩层
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    devtool: 'eval-source-map', // Source Maps
  },
  dev: {
    assetsPublicPath: '/', // 相对文件路径
    devtool: 'eval-source-map', // Source Maps
  },
  build: {
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsPublicPath: '/',
    // 生产环境的souce map
    // https://webpack.js.org/configuration/devtool/#production
    // 生产环境下source map devtool 不做配置
    devtool: 'source-map',
    // 生产环境下souce map的内网位置，private sourceMap
    sourcePath: '',
  },
};
