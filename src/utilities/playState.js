module.exports = ({ addUtilities }) => addUtilities({
    '.animate-run': {
        '--tw-animate-state': 'running',
        'animation-play-state': 'var(--tw-animate-state)',
    },
    '.animate-play': {
        '--tw-animate-state': 'running',
        'animation-play-state': 'var(--tw-animate-state)',
    },
    '.animate-stop': {
        '--tw-animate-state': 'paused',
        'animation-play-state': 'var(--tw-animate-state)',
    },
    '.animate-pause': {
        '--tw-animate-state': 'paused',
        'animation-play-state': 'var(--tw-animate-state)',
    },
})
