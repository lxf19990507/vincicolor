module.exports = {

  // publicPath:'./',
  // outputDir:'dist',
  // assetsDir:'assets'
  // publicPath: './', //把路径改成相对路径，不然部署后会出错，因为不是部署都服务器
  devServer: {
    disableHostCheck: true,
  },
  productionSourceMap: false, //去掉.map文件，文件体积会小很多
  configureWebpack: (config) => {
    // 取消console打印    
    // 如果是多环境打包
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }

  },
}
