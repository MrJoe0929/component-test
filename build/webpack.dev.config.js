/**
 * @Description: 本地环境webpack配置
 * @Author: qiaowb
 * @Date: 2021-05-26 13:48:59
 * @LastEditors: qiaowb
 */
const path = require('path');
const { merge } = require('webpack-merge');
const { DefinePlugin } = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common.config.js');
const env = require('../config/dev.env.js');
const getIp = require('./getIp.js');
let ip = getIp();

const devConfig = {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        publicPath: '/',
        path: path.join(__dirname, '../dist'),
        filename: () => 'js/[name].js' // 新语法不支持[filename: 'js/[name].js']，需要使用函数包装
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, '../public/index.html'),
            filename: 'index.html'
            // favicon: path.join(__dirname, '../public/img/favicon.ico')
        }),
        new DefinePlugin({
            'process.env': env
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                // include: /node_modules/, // 主要是针对antd样式设置
                use: [
                    'style-loader',
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]-[hash:base64:5]'
                            }
                        }
                    },
                    // 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        publicPath: '/', // 要与 output.publicPath 保持一致，所有资源访问都在 publicPath 位置之下，并且避免刷新之后访问不到资源
        // port: '8000',
        host: ip,
        clientLogLevel: 'warning',
        disableHostCheck: true,
        compress: true,
        hot: true,
        inline: true,  // 缺少该配置，Cannot GET /xxx 404问题
        historyApiFallback: true,  // 缺少该配置，Cannot GET /xxx 404问题
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        overlay: {
            warnings: false,
            errors: true
        },
        // proxy: {
        //     '/apiGateWay': {
        //         target: 'http://localhost:8100/',
        //         // target: 'http://10.2.105.11:8100/',
        //         // target: 'https://ys.gyuncai.cn',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/apiGateWay': ''
        //         }
        //     }
        // }
    }
};

module.exports = merge(commonConfig, devConfig);