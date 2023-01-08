const webpack = require("webpack");

module.exports = {
    mode: 'production',
    entry: './_resouce/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    devServer: {
        contentBase: __dirname + '/dist',
        publicPath: '/',
        watchContentBase: true,
        open: true
    }
};
