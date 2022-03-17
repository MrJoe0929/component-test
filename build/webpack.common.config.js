/**
 * @Description: 
 * @Author: qiaowb
 * @Date: 2021-12-27 10:15:40
 * @LastEditors: qiaowb
 */
const path = require('path');
// const { DefinePlugin } = require('webpack');

module.exports = {
    entry: {
        // 'vendors': ['react', 'react-dom', 'react-router-dom', 'antd'], // 第三方公用包单独打包
        'bundle': path.join(__dirname, '../src/index.js')
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        alias: {
            '@pages': path.join(__dirname, '../src/pages'),
            '@routersConfig': path.join(__dirname, '../src/routersConfig'),
            '@component': path.join(__dirname, '../src/component'),
            '@static': path.join(__dirname, '../src/static'),
            '@util': path.join(__dirname, '../src/util'),
            '@api': path.join(__dirname, '../src/api'),
            '@action': path.join(__dirname, '../src/store/action')
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // jsx/js文件的正则
                exclude: /node_modules/, // 排除 node_modules 文件夹
                use: [{
                    // loader 是 babel
                    loader: 'babel-loader',
                    options: {
                        // babel 转义的配置选项
                        babelrc: true,
                        presets: [
                            // 添加 preset-react
                            require.resolve('@babel/preset-react'),
                            [require.resolve('@babel/preset-env'), { modules: false }]
                        ],
                        cacheDirectory: true
                    }
                }]
            }
        ]
    },
    plugins: [
        // new DefinePlugin({
        //     'process.env.systemType': JSON.stringify(process.argv[index])
        // })
    ]
};