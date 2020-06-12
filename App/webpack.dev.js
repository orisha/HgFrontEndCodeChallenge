
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',   
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },  
    module: {
        rules: [{
            test: /\.scss$/,
            exclude: [/node_modules/],
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            },]
        }]
    }
    ,plugins: [
        new CleanWebpackPlugin(['dist/css','dist/js']),

    ]
});
