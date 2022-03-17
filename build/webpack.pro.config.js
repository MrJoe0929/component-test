/**
 * @Description: 
 * @Author: qiaowb
 * @Date: 2021-08-09 10:49:47
 * @LastEditors: qiaowb
 */
const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin'); // js压缩可配置
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 分离出css文件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin'); // 压缩css
const { DefinePlugin } = require('webpack');

const commonConfig = require('./webpack.common.config.js');
const env = require('../config/pro.env');

const proConfig = {
    mode: 'production',
    output: {
        path: path.join(__dirname, '../dist'),
        filename: () => '/js/[name].js' // build模式下路径前必须加“/” 
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: path.join(__dirname, '../public/index_pro.html'),
            // favicon: path.join(__dirname, '../public/img/favicon.ico'),
            filename: 'index.html',
            inject: true,
            minify: {
                collapseWhitespace: true, // 折叠空白区域
                removeComments: true // 移除注释
            }
        }),
        new MiniCssExtractPlugin({
            filename: '/css/[name].css',
            chunkFilename: '/css/[id].css'
        }),
        new DefinePlugin({
            'process.env': env
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,// 主要是针对antd样式设置
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            }, {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]-[hash:base64:5]'
                            }
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    optimization: { // 生产环境开启 js&css 压缩
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                parallel: 4 // 四个线程进行js压缩操作
            }), // js压缩
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: false
                }
            }),
            new OptimizeCssAssetsWebpackPlugin()
        ]
    }
};

module.exports = merge(commonConfig, proConfig);