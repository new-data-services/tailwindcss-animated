const plugin = require('tailwindcss/plugin');

const animation = plugin(
    function ({ addUtilities, theme, variants, e }) {
        addUtilities(
            [
                Object.entries(theme('animationDelay')).map(([key, value]) => {
                    return {
                        [`.${e(`animate-delay-${key}`)}`]: { 'animation-delay': value },
                    };
                }),
            ],
            variants('animationDelay')
        );

        addUtilities(
            [
                Object.entries(theme('animationDuration')).map(([key, value]) => {
                    return {
                        [`.${e(`animate-duration-${key}`)}`]: { 'animation-duration': value },
                    };
                }),
            ],
            variants('animationDuration')
        );

        addUtilities({
            '.animate-infinite': { 'animation-iteration-count': 'infinite' },
            '.animate-once': { 'animation-iteration-count': '1' },
            '.animate-twice': { 'animation-iteration-count': '2' },
            '.animate-thrice': { 'animation-iteration-count': '3' },
        });

        addUtilities({
            '.animate-run': { 'animation-play-state': 'running' },
            '.animate-play': { 'animation-play-state': 'running' },
            '.animate-stop': { 'animation-play-state': 'paused' },
            '.animate-pause': { 'animation-play-state': 'paused' },
        });

        addUtilities({
            '.animate-normal': { 'animation-direction': 'normal' },
            '.animate-reverse': { 'animation-direction': 'reverse' },
            '.animate-alternate': { 'animation-direction': 'alternate' },
            '.animate-alternate-reverse': { 'animation-direction': 'alternate-reverse' },
        });

        addUtilities({
            '.animate-fill-none': { 'animation-fill-mode': 'normal' },
            '.animate-fill-forwards': { 'animation-fill-mode': 'forwards' },
            '.animate-fill-backwards': { 'animation-fill-mode': 'backwards' },
            '.animate-fill-both': { 'animation-fill-mode': 'both' },
        });

        addUtilities({
            '.animate-ease-linear': { 'animation-timing-function': 'linear' },
            '.animate-ease-in': { 'animation-timing-function': 'cubic-bezier(0.4, 0, 1, 1)' },
            '.animate-ease-out': { 'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)' },
            '.animate-ease-in-out': { 'animation-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)' },
        });
    },
    {
        theme: {
            extend: {
                keyframes: {
                    'wiggle': {
                        '0%, 100%': { transform: 'rotate(-3deg)' },
                        '50%': { transform: 'rotate(3deg)' },
                    },
                    'wiggle-more': {
                        '0%, 100%': { transform: 'rotate(-12deg)' },
                        '50%': { transform: 'rotate(12deg)' },
                    },
                    'fade-down': {
                        '0%': { opacity: '0', transform: 'translateY(-2rem)' },
                        '100%': { opacity: '1', transform: 'translateY(0)' },
                    },
                    'fade-up': {
                        '0%': { opacity: '0', transform: 'translateY(2rem)' },
                        '100%': { opacity: '1', transform: 'translateY(0)' },
                    },
                    'fade-left': {
                        '0%': { opacity: '0', transform: 'translateX(2rem)' },
                        '100%': { opacity: '1', transform: 'translateX(0)' },
                    },
                    'fade-right': {
                        '0%': { opacity: '0', transform: 'translateX(-2rem)' },
                        '100%': { opacity: '1', transform: 'translateX(0)' },
                    },
                    'rotate-y': {
                        '0%': { transform: 'rotateY(360deg)' },
                        '100%': { transform: 'rotateY(0)' },
                    },
                    'rotate-x': {
                        '0%': { transform: 'rotateX(360deg)' },
                        '100%': { transform: 'rotateX(0)' },
                    },
                    'flip-up': {
                        '0%': { transform: 'rotateX(90deg)', transformOrigin: 'bottom' },
                        '100%': { transform: 'rotateX(0)' },
                    },
                    'flip-down': {
                        '0%': { transform: 'rotateX(-90deg)', transformOrigin: 'top' },
                        '100%': { transform: 'rotateX(0)' },
                    },
                    'jump': {
                        '0%,100%': { transform: 'scale(100%)' },
                        '10%': { transform: 'scale(80%)' },
                        '50%': { transform: 'scale(120%)' },
                    },
                    'jump-in': {
                        '0%': { transform: 'scale(0%) '},
                        '80%': { transform: 'scale(120%)' },
                        '100%': { transform: 'scale(100%)' },
                    },
                    'jump-out': {
                        '0%': { transform: 'scale(100%)' },
                        '20%': { transform: 'scale(120%)' },
                        '100%': { transform: 'scale(0%)' },
                    },
                    'shake': {
                        '0%': { transform: 'translateX(0rem)' },
                        '25%': { transform: 'translateX(-1rem)' },
                        '75%': { transform: 'translateX(1rem)' },
                        '100%': { transform: 'translateX(0rem)' },
                    },
                    'fade': {
                        '0%': { opacity: '0' },
                        '100%': { opacity: '1' },
                    },
                },
                animation: {
                    'wiggle': 'wiggle 1s infinite',
                    'wiggle-more': 'wiggle-more 1s infinite',
                    'fade-down': 'fade-down 1s both',
                    'fade-up': 'fade-up 1s both',
                    'fade-left': 'fade-left 1s both',
                    'fade-right': 'fade-right 1s both',
                    'rotate-y': 'rotate-y 1s',
                    'rotate-x': 'rotate-x 1s',
                    'flip-up': 'flip-up 1s',
                    'flip-down': 'flip-down 1s',
                    'jump': 'jump .5s',
                    'jump-in': 'jump-in .5s',
                    'jump-out': 'jump-out .5s',
                    'shake': 'shake .5s',
                    'fade': 'fade .5s',
                },
                animationDelay: {
                    none: '0ms',
                    0: '0ms',
                    75: '75ms',
                    100: '100ms',
                    150: '150ms',
                    200: '200ms',
                    300: '300ms',
                    500: '500ms',
                    700: '700ms',
                    1000: '1000ms',
                },
                animationDuration: {
                    75: '75ms',
                    100: '100ms',
                    150: '150ms',
                    200: '200ms',
                    300: '300ms',
                    500: '500ms',
                    700: '700ms',
                    1000: '1000ms',
                    1500: '1500ms',
                    2000: '2000ms',
                    3000: '3000ms',
                    5000: '5000ms',
                },
            },
        },
        variants: {
            animationDelay: ['responsive'],
            animationDuration: ['responsive'],
        },
    }
);

module.exports = animation;
