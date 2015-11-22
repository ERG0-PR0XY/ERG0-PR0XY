module.exports = {
    context: __dirname + "/src",
    entry: {
        javascript: "./app.js",
        html: "./index.html",
    },

    output: {
        filename: "app.js",
        path: __dirname + "/build",
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ['es2015', 'react']
            }
        },/* {
            test: /\.js?$/,
            loader: "react-hot",

        },*/ {
            test: /\.html/,
            loader: 'file?name=[name].[ext]'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
