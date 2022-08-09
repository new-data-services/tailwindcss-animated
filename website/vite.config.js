const glob = require('glob');

export default {
    root: './website',
    build: {
        outDir: './../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: glob.sync('./website/*.html', { absolute: true })
        }
    },
    css: {
        postcss: {
            plugins: [
                require('postcss-import'),
                require('postcss-discard-comments'),
                require('tailwindcss/nesting'),
                require('tailwindcss')('./website/tailwind.config.js'),
                require('autoprefixer')
            ]
        }
    }
};
