const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
    },
    devServer: {
        port: 3020,
        watchContentBase: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader, options: { publicPath: '' } },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|json|xml|ico|svg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/',
                    }
                }
                ]
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()],
};