const plugin = require('tailwindcss/plugin')

module.exports = plugin(api => {
    require('./compat/composition')(api)
    require('./compat/delay')(api)
    require('./compat/direction')(api)
    require('./compat/duration')(api)
    require('./compat/fill-mode')(api)
    require('./compat/iteration-count')(api)
    require('./compat/play-state')(api)
    require('./compat/timing-function')(api)
}, {
    theme: require('./compat/theme'),
})
