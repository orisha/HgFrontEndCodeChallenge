const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist')
    },
    entry: ['./src/js/index.js','./src/sass/main.scss'],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }

            ,{
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
            ,{
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader?url=false',
                    // Compiles Sass to CSS
                    'sass-loader',
                ]
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

            // ,{
            //     test: /\.svg$/,
            //     oneOf: [
            //         {
            //             include: path.resolve(__dirname, '../src/'),
            //             use: '@svgr/webpack'
            //         },
            //         {
            //             include: path.resolve(__dirname, '../src/'),
            //             use: 'react-svg-loader'
            //         },
            //         {
            //             include: path.resolve(__dirname, '../node_modules/'),
            //             use: 'url-loader'
            //         },
            //     ],
            // }
            ,{
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                issuer: {
                    test: /\.jsx?$/
                },
                use: ['babel-loader', '@svgr/webpack', 'url-loader']
            }
            // ,{
            //     test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            //     issuer: {
            //         test: /\.scss$/
            //     },
            //     use: ['url-loader']
            // }
            ,{
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader'
            }

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            title: 'Host Gator Promo',
            template: require('html-webpack-template'),
            bodyHtmlSnippet :'<main class="main" id="app"></main>'
        })
    ]
};
