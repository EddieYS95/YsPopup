const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.jsx", //빌드할 javascript 파일
    output: {
        filename: "react-ys-popup.js",
        path: path.resolve(__dirname + "/dist"),
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.jsx|js$/,
                exclude: "/node_modules",
                use: ["babel-loader"],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                include: path.join(__dirname, "src"),
                use: ["style-loader", "css-loader"],
            },
            {
                // write files under 10k to inline or copy files over 10k
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            fallback: "file-loader",
                            name: "fonts/[name].[ext]",
                        },
                    },
                ],
            },
            {
                // write image files under 10k to inline or copy image files over 10k
                test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
        ],
    },
    devtool: "source-map",
    devServer: {
        historyApiFallback: true,
        host: "localhost",
        hot: true,
        port: 8080,
    },
    plugins: [new HtmlWebPackPlugin({ template: "./public/index.html", filename: "index.html" })],
};
