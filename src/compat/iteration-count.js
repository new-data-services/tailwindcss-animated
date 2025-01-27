module.exports = ({ addUtilities, matchUtilities, theme }) => {
    addUtilities({
        '.animate-infinite': {
            'animation-iteration-count': 'infinite',
        },
        '.animate-once': {
            'animation-iteration-count': '1',
        },
        '.animate-twice': {
            'animation-iteration-count': '2',
        },
        '.animate-thrice': {
            'animation-iteration-count': '3',
        },
    })

    matchUtilities({
        'animate-iteration': value => ({
            'animation-iteration-count': value,
        }),
    }, {
        values: theme('animationIteration'),
    })
}
