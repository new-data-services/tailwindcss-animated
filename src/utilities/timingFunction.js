module.exports = ({ matchUtilities, theme }) => matchUtilities({
    'animate-ease': value => ({
        '--tw-animate-easing': value,
        'animation-timing-function': 'var(--tw-animate-easing)',
    }),
}, {
    values: theme('animationTimingFunction'),
})
