const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/script.ts",
    devtool: "source-map",
    devServer: {
        historyApiFallback: {
            index: "./dist/index.html"
        },
        watchContentBase: true,
        overlay: true,
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist/js"),
        publicPath: "dist/js/"
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};