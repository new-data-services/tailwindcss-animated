module.exports = ({ addUtilities, matchUtilities, theme }) => {
    addUtilities({
        '.animate-replace': {
            '--tw-animate-composition': 'replace',
            'animation-composition': 'var(--tw-animate-composition)',
        },
        '.animate-add': {
            '--tw-animate-composition': 'add',
            'animation-composition': 'var(--tw-animate-composition)',
        },
        '.animate-accumulate': {
            '--tw-animate-composition': 'accumulate',
            'animation-composition': 'var(--tw-animate-composition)',
        },
    })

    matchUtilities({
        animate: value => {
            const properties = value.split(/ +(?![^(]*\))/g)

            if (properties.includes('replace') || properties.includes('add') || properties.includes('accumulate')) {
                return
            }

            return {
                'animation-composition': 'var(--tw-animate-composition)',
            }
        },
    }, {
        values: theme('animation'),
    })
}
