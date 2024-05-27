module.exports = ({ addUtilities }) => addUtilities({
    '.animate-fill-none': {
        '--tw-animate-fill': 'normal',
        'animation-fill-mode': 'var(--tw-animate-fill)',
    },
    '.animate-fill-forwards': {
        '--tw-animate-fill': 'forwards',
        'animation-fill-mode': 'var(--tw-animate-fill)',
    },
    '.animate-fill-backwards': {
        '--tw-animate-fill': 'backwards',
        'animation-fill-mode': 'var(--tw-animate-fill)',
    },
    '.animate-fill-both': {
        '--tw-animate-fill': 'both',
        'animation-fill-mode': 'var(--tw-animate-fill)',
    },
})
