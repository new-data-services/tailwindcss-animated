module.exports = ({ addUtilities }) => addUtilities({
    '.animate-ease-linear': {
        '--tw-animate-easing': 'linear',
        'animation-timing-function': 'var(--tw-animate-easing)',
    },
    '.animate-ease-in': {
        '--tw-animate-easing': 'cubic-bezier(0.4, 0, 1, 1)',
        'animation-timing-function': 'var(--tw-animate-easing)',
    },
    '.animate-ease-out': {
        '--tw-animate-easing': 'cubic-bezier(0, 0, 0.2, 1)',
        'animation-timing-function': 'var(--tw-animate-easing)',
    },
    '.animate-ease-in-out': {
        '--tw-animate-easing': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'animation-timing-function': 'var(--tw-animate-easing)',
    },
})
