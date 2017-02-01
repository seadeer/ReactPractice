module.exports = {
    entry: './app/app.js',
    output: {
        filename: "public/bundle.js",
    },
    module: {
        loaders: [{
            test: /\.js$/, 
            exclude: /node_modules/, 
            loader: "babel",
            query: {
                presets: ['react', 'es2015']
            }
        },
        {
            test: /\.css$/, loader: "style-loader!css-loader"
        }
        ]
    }
};
