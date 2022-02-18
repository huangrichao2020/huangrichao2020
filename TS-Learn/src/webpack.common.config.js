// webpack.config.js
const path = require('path')
module.exports = {
    entry: {
        blue: './QuickUse/blue.ts',
        greeter: './QuickUse/greeter.ts',
        var: './QuickUse/variable.ts',

    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
 };