const path = require('path');

module.exports = {
    entry: "./src/index.tsx",
    mode: 'development',
    devServer: {
        open: true
    },
    devtool: "inline-source-map",
    output: {
        publicPath: 'dist',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    watch: true,
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    }
}