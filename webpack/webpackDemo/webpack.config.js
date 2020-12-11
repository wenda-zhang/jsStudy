const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './app.js', // 工程资源的入口
    output: {
        path: path.join(__dirname, 'dist'), //包的路径，绝对路径
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000, //服务端口
        publicPath: '/dist'
    },

    //文件加载器-loader
    //plugins压缩文件，减小项目体积
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader' ,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin()
    ]
}