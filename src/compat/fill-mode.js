module.exports = ({ addUtilities }) => addUtilities({
    '.animate-fill-none': {
        'animation-fill-mode': 'normal',
    },
    '.animate-fill-forwards': {
        'animation-fill-mode': 'forwards',
    },
    '.animate-fill-backwards': {
        'animation-fill-mode': 'backwards',
    },
    '.animate-fill-both': {
        'animation-fill-mode': 'both',
    },
})
