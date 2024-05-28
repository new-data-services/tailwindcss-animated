module.exports = ({ addUtilities, matchUtilities, theme }) => {
    addUtilities({
        '.animate-infinite': {
            '--tw-animate-iteration': 'infinite',
            'animation-iteration-count': 'var(--tw-animate-iteration)',
        },
        '.animate-once': {
            '--tw-animate-iteration': '1',
            'animation-iteration-count': 'var(--tw-animate-iteration)',
        },
        '.animate-twice': {
            '--tw-animate-iteration': '2',
            'animation-iteration-count': 'var(--tw-animate-iteration)',
        },
        '.animate-thrice': {
            '--tw-animate-iteration': '3',
            'animation-iteration-count': 'var(--tw-animate-iteration)',
        },
    })

    matchUtilities({
        'animate-iteration': value => ({
            '--tw-animate-iteration': value,
            'animation-iteration-count': 'var(--tw-animate-iteration)',
        }),
    }, {
        values: theme('animationIteration'),
    })
}
