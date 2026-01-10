const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { use } = require('react');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
        publicPath: "/", // <--- important for routing

    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,  // Supports both .js and .jsx
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],  // So you can import without extensions
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // Template file
        }),
    ],
    devServer: {
        historyApiFallback: true, // <--- this line fixes your routing problem
        static: path.join(__dirname, 'dist'),
        port: 3000,
        open: true,

    },
};
