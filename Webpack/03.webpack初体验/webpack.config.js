const { resolve } = require('path')
module.exports = {
  // webpack 配置
  // 入口文件
  entry: './src/index.js',

  // 输出
  output: {
    // 输出文件名
    filename: 'built.js',
    // 输出路径
    // __dirname nodejs变量，代表当前文件目录的绝对路径
    path: resolve(__dirname, 'build')
  },
  // loader的配置
  module: {
    
    rules: [
      // loader的详细配置
      // 不同文件需要配置不同loader
      {
        // 匹配哪些文件
        test: /\.css$/,
        // 使用哪些loader来处理
        use: [
          // use数组中loader执行顺序：从右到左，从下到上。下面的执行顺位为1.css-loader， 2.style-loader
          // 创建style标签，将js中的样式资源引入，添加到head中生效
          'style-loader',
          // 将css文件变成commonjs模块加载到js文件中，内容是样式字符串
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          // 最后创建style标签，将js中的样式资源引入，添加到head中生效
          'style-loader',
          // 再将css文件变成commonjs模块加载到js文件中
          'css-loader',
          // 将less文件编译成css文件, 需要下载less和less-loader
          'less-loader' 
        ]
      }
    ]
  },
  // plugins的配置
  plugins: [],
  mode: 'development'
}