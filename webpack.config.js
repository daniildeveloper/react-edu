module.exports = {
    entry: './public/javascripts/app.js',//where webpack looks for

    output: {
        path: __dirname,
        filename: './public/javascripts/bundle.js'
    },

    resolve: {
        extensions: ['.js', '.jsx', '']
    },

    // webpack doesnt load  modules by default
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};