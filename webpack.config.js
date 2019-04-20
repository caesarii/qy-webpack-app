const path = require('path');

console.log('path', path.resolve(__dirname, 'dist'))

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/assets'),
        publicPath: '/qy-webpack-app/dist/assets/'
    },
    module: {
    rules: [
        {
            test: /\.css$/,
            use: [
            'style-loader',
            'css-loader'
            ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }
    ]
    }
};