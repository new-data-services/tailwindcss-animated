module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-discard-comments'),
        require('tailwindcss/nesting'),
        require('tailwindcss'),
        require('autoprefixer'),
    ]
}
