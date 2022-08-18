import nunjucks from 'vite-plugin-nunjucks';

export default {
    root: './website',
    build: {
        outDir: './../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: [
                './website/index.html',
                './website/about.html',
            ],
        },
    },
    css: {
        postcss: {
            plugins: [
                require('postcss-import'),
                require('postcss-discard-comments'),
                require('tailwindcss/nesting'),
                require('tailwindcss')('./website/tailwind.config.js'),
                require('autoprefixer'),
            ],
        },
    },
    plugins: [
        nunjucks({
            variables: {
                'index.html': { page: 'index' },
                'about.html': { page: 'about' },
            },
        }),
    ],
};
