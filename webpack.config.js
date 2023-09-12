const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        library: {
            name: 'AdInfo',
            type: 'umd',  // see https://webpack.js.org/configuration/output/#outputlibrarytype
            export: 'default',  // see https://github.com/webpack/webpack/issues/8480
        },
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    plugins: [],
    devServer: {
        static: {
            directory: './dist',
        },
        open: true,
    },

    mode: 'development'
};