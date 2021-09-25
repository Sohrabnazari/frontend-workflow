module.exports = {
    ident: 'postcss',
    syntax: 'postcss-scss',
    map: true,
    plugins: [
        require("postcss-import"),
        require("postcss-preset-env"),
        require("postcss-nesting"),
        require("autoprefixer")(),
    ],
 };