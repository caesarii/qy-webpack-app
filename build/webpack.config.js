// webapck.config.js
// 添加 config 之后打包输出已经与默认不同了
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 开发模式
    mode: 'development',
    // 入口文件
    entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        // 打包后的文件名称
        filename: '[name].[hash:8].js',
        // 打包后的目录
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html')
        })
    ]
}