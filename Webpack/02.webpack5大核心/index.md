# webpack 5个核心概念

## 1. Entry
入口文件（Entry），指示Webpack以哪个文件作为入口起点开始打包，分析构建内部依赖图

## 2. Output
输出（Output），指示Webpack打包后的资源bundles输出到哪里去，以及如何命名

## 3. Loader
Loader让Webpack能去处理那些非Javascript/json文件（webpack自身职能理解Javascript/json），比如处理样式文件，图片等

## 4. Plugins
插件（Plugins）可以执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。

## 5. Mode
指示Webpack使用相应模式的设置。

|  表头   | 表头  | 特点 |
|  :----  | :----  | :---- |
| development  | process.env.NODE_ENV=development 启用NamedChunksPlugin和NamedModulesPlugin | 代码本地调试运行的环境 |
| production  | process.env.NODE_ENV=production 启用FlagDependencyUsagePlugin，FlagDependencyUsagePlugin，ModuleConcatenationPlugin，NoEmitOnErrorsPlugin，OccurrenceOrderPlugin,SideEffectsFlagPlugin和UglifyJsPlugin | 能让代码优化上线运行的环境 |