const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
    resolve: {
        extensions: ['.wasm', '.mjs', '.js', '.jsx', '.json']
    },
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
        path: path.join(__dirname, 'dist'), //包的路径，绝对路径
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000, //服务端口
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            require.resolve('@babel/preset-react'),
                            [require.resolve('@babel/preset-env', {modules: false})],

                        ],
                        cacheDirectory: true
                    }
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html'
        })
    ]
}