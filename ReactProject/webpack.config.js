const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // Starting point
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js', // Output file
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // All .js/.jsx files
                exclude: /node_modules/,
                use: 'babel-loader', // Use Babel
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Auto resolve these
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // HTML template
        }),
    ],
    devServer: {
        static: './dist',
        port: 3000,
    },
    mode: 'development', // or 'production'
};
