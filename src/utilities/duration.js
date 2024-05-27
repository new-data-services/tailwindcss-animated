module.exports = ({ matchUtilities, theme }) => matchUtilities({
    'animate-duration': value => ({
        '--tw-animate-duration': value,
        'animation-duration': 'var(--tw-animate-duration)',
    }),
}, {
    values: theme('animationDuration'),
})
