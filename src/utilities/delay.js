module.exports = ({ matchUtilities, theme }) => matchUtilities({
    'animate-delay': value => ({
        '--tw-animate-delay': value,
        'animation-delay': 'var(--tw-animate-delay)',
    }),
}, {
    values: theme('animationDelay'),
})
