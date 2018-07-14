const path = require('path')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const devMode = process.env.NODE_ENV !== 'production'
const ASSET_PATH = './src'

module.exports = {
    entry: {
        main: [
            './src/js/index.js',
            './src/scss/style.scss'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: 'js/[name].min.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                'style-loader', 
                MiniCssExtractPlugin.loader, 
                'css-loader', 
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '/scss/style.css'
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
}