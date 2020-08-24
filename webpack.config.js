const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // mode: 'development',
    mode: 'production',
    devServer: {
        contentBase: path.join(__dirname, '/'),
        compress: true,
        port: 7777,
        hot: true,
        inline: true,
        open: true,
        publicPath: '/dist/'
    },
    devtool: 'inline-source-map',
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: 'dist'
    },
    module: {
        rules: [
            {
                test: /\.(scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: 'postcss',
                            sourceMap: 'inline',
                            plugins: [
                                require('autoprefixer')
                            ]
                        }
                    },
                    "sass-loader",
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[path][name].[ext]', // ?hash=[hash:20]
                            context: 'src'
                            // outputPath: './images/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
			'window.jQuery': 'jquery'
        }),
    ]
}