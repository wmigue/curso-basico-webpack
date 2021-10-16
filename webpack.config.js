const HtmlWebpack = require("html-webpack-plugin")

module.exports = {
    mode: 'production',
    entry: "./main.js",
    output: {
        path: __dirname + "/build",
        filename: "output.js"
    },
    devServer: {
        port: 5000
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
        ],
    },
    plugins: [
        new HtmlWebpack({
            template: "./index.html",
        })
    ],
}