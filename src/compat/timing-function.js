module.exports = ({ matchUtilities, theme }) => matchUtilities({
    'animate-ease': value => ({
        'animation-timing-function': value,
    }),
}, {
    values: theme('animationTimingFunction'),
})
