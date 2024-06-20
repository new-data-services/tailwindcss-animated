module.exports = ({ addUtilities }) => {
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
}
