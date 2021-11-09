module.exports = {
  // 关闭 eslint校验
  lintOnSave: false,
  // 输出生产环境构建文件的目录
  outputDir: __dirname + '/../server/admin',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/admin/'
    : '/'
}
