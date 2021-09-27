const plugin = require('tailwindcss/plugin');

const animationDelay = plugin(
    function ({ addUtilities, theme, e }) {
        const utilities = theme('animationDelay').map(([key, value]) => {
            return {
                [`.${e(`animation-delay-${key}`)}`]: { animationDelay: `${value}` },
            }
        });

        addUtilities(utilities);
    },
    {
        theme: {
            animationDelay: {
                'none': '0s',
                75: '75ms',
                100: '100ms',
                150: '150ms',
                200: '200ms',
                300: '300ms',
                400: '400ms',
                500: '500ms',
                600: '600ms',
                700: '700ms',
                800: '800ms',
                900: '900ms',
                1000: '1s',
            },
        },
    },
)

module.exports = animationDelay;
