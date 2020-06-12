const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {    
    entry: ['./src/js/index.js','./src/sass/main.scss'],
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                // include:  path.resolve(__dirname, '../src/'),
                exclude: [/node_modules/],
                query: {
                    presets: ['es2015', 'react']
                }

            }
            ,{
                test: /\.css$/,
                exclude: [/node_modules/],
                loader: "style-loader!css-loader"
            }
            ,{
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf)(\?[a-z0-9=.]+)?$/,
                exclude: [/node_modules/],
                loader: 'url-loader?limit=100000'
            }
            ,{
                test: /\.svg$/,
                oneOf: [
                    {
                        include: path.resolve(__dirname, '../src/'),
                        use: 'react-svg-loader'
                    },
                    {
                        include: path.resolve(__dirname, '../node_modules/'),
                        use: 'url-loader'
                    },
                ],
            }
        ]

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Host Gator Promo',
            inject: false,
            template: require('html-webpack-template'),
            bodyHtmlSnippet :'<main class="main" id="app"></main>'
        }),
    ]
}
