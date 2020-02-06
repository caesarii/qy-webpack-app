// webapck.config.js
// 添加 config 之后打包输出已经与默认不同了
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
    module: {
        rules: [
            // 目前不会显式的在 HTML 中插入 style 标签, 而是通过 js 动态插入的, 表现就是 dist/html 没有标签, 实际网页中有
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                // 用 MiniCssExtractPlugin 代替 styleloader
                use: [MiniCssExtractPlugin.loader, 'css-loader', {
                    loader: 'postcss-loader',
                    options: { plugins: [require('autoprefixer')] }
                },'less-loader']
            },
        ],
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
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].css"
        })
    ]
}