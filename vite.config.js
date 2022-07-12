const glob = require('glob');

export default {
    root: './configurator',
    publicDir: './../public',
    build: {
        outDir: './../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: glob.sync('./configurator/**/*.html', { absolute: true }),
        }
    }
}
