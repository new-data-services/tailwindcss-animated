const plugin = require('tailwindcss/plugin');

module.exports = plugin(api => {
    require('./utilities/delay')(api);
    require('./utilities/direction')(api);
    require('./utilities/duration')(api);
    require('./utilities/fillMode')(api);
    require('./utilities/iterationCount')(api);
    require('./utilities/playState')(api);
    require('./utilities/timingFunction')(api);
}, {
    theme: require('./theme'),
});
