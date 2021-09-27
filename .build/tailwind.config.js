module.exports = {
    mode: 'jit',
    purge: [
        './demo/**/*.html',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('../src/index.js'),
    ],
}
