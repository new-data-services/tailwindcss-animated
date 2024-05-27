module.exports = ({ addUtilities }) => addUtilities({
    '.animate-normal': {
        '--tw-animate-direction': 'normal',
        'animation-direction': 'var(--tw-animate-direction)',
    },
    '.animate-reverse': {
        '--tw-animate-direction': 'reverse',
        'animation-direction': 'var(--tw-animate-direction)',
    },
    '.animate-alternate': {
        '--tw-animate-direction': 'alternate',
        'animation-direction': 'var(--tw-animate-direction)',
    },
    '.animate-alternate-reverse': {
        '--tw-animate-direction': 'alternate-reverse',
        'animation-direction': 'var(--tw-animate-direction)',
    },
})
