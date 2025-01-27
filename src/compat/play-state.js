module.exports = ({ addUtilities }) => addUtilities({
    '.animate-run': {
        'animation-play-state': 'running',
    },
    '.animate-play': {
        'animation-play-state': 'running',
    },
    '.animate-stop': {
        'animation-play-state': 'paused',
    },
    '.animate-pause': {
        'animation-play-state': 'paused',
    },
})
