// webapck.config.js
// 添加 config 之后打包输出已经与默认不同了
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 开发模式
    mode: 'development',
    // 入口文件
    entry: {
        main: path.resolve(__dirname, '../src/main.js'),
        header: path.resolve(__dirname, '../src/header.js')
    },
    output: {
        // 打包后的文件名称
        filename: '[name].[hash:8].js',
        // 打包后的目录
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            // 要处理的 HTML 文件名
            filename: 'index.html',
            // 与入口文件都应的模块名, 也就是上面的 entry.main
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/header.html'),
            filename: 'header.html',
            // 与入口文件都应的模块名
            chunks: ['header']
        }),
    ]
}