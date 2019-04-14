const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/script.js",
    devtool: "source-map",
    devServer: {
        historyApiFallback: {
            index: './dist/index.html'
        },
        watchContentBase: true,
        overlay: true,
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist/js'),
        publicPath: 'dist/js/'
    },
    plugins: [
        //new CleanWebpackPlugin()
    ]
};