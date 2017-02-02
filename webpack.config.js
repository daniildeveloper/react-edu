module.exports = {
    entry: './public/javascripts/app.js',

    output: {
        path: __dirname,
        filename: './public/javascripts/bundle.js'
    },

    resolve: {
        extensions: ['.js', '.jsx']
    }
};