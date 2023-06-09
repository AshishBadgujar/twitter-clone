const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin') //configure html 
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //create saperate css file in /dist

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', "@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: "css-loader", options: { modules: true } },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                type: "asset/resource"
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        port: 3000,
        historyApiFallback: true,
    }

}