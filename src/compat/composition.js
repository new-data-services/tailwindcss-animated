module.exports = ({ addUtilities }) => {
    addUtilities({
        '.animate-replace': {
            'animation-composition': 'replace',
        },
        '.animate-add': {
            'animation-composition': 'add',
        },
        '.animate-accumulate': {
            'animation-composition': 'accumulate',
        },
    })
}
