const { getBareMilliseconds, getBareIntegers } = require('./helper/bare-values')

const bareMilliseconds = getBareMilliseconds()
const bareIntegers = getBareIntegers()

module.exports = {
    extend: {
        animationDelay: {
            none: '0s',
            0: '0ms',
            75: '75ms',
            100: '100ms',
            150: '150ms',
            200: '200ms',
            300: '300ms',
            500: '500ms',
            700: '700ms',
            1000: '1000ms',
            ...bareMilliseconds,
        },
        animationDuration: {
            none: '0s',
            75: '75ms',
            100: '100ms',
            150: '150ms',
            200: '200ms',
            300: '300ms',
            500: '500ms',
            700: '700ms',
            1000: '1000ms',
            ...bareMilliseconds,
        },
        animationTimingFunction: {
            DEFAULT: 'ease',
            'linear': 'linear',
            'in': 'cubic-bezier(0.4, 0, 1, 1)',
            'out': 'cubic-bezier(0, 0, 0.2, 1)',
            'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
        animationIteration: {
            'infinite': 'infinite',
            'once': '1',
            'twice': '2',
            'thrice': '3',
            ...bareIntegers,
        },
        animation: {
            'spin': 'spin var(--default-animation-duration, 1s) var(--default-animation-timing-function, linear) var(--default-animation-delay, 0s) infinite',
            'ping': 'ping var(--default-animation-duration, 1s) var(--default-animation-timing-function, cubic-bezier(0, 0, 0.2, 1)) var(--default-animation-delay, 0s) infinite',
            'pulse': 'pulse var(--default-animation-duration, 2s) var(--default-animation-timing-function, cubic-bezier(0.4, 0, 0.6, 1)) var(--default-animation-delay, 0s) infinite',
            'bounce': 'bounce var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) infinite',
            'wiggle': 'wiggle var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both',
            'wiggle-more': 'wiggle-more var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both',
            'rotate-y': 'rotate-y var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both',
            'rotate-x': 'rotate-x var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both',
            'jump': 'jump var(--default-animation-duration, 0.5s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both',
            'jump-in': 'jump-in var(--default-animation-duration, 0.5s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both',
            'jump-out': 'jump-out var(--default-animation-duration, 0.5s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both',
            'shake': 'shake var(--default-animation-duration, 0.5s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both',
            'fade': 'fade var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both',
            'fade-down': 'fade-down var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both',
            'fade-up': 'fade-up var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both',
            'fade-left': 'fade-left var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both',
            'fade-right': 'fade-right var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both',
            'flip-up': 'flip-up var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both',
            'flip-down': 'flip-down var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both',
        },
        keyframes: {
            'wiggle': {
                '0%, 100%': {
                    transform: 'rotate(-3deg)',
                },
                '50%': {
                    transform: 'rotate(3deg)',
                },
            },
            'wiggle-more': {
                '0%, 100%': {
                    transform: 'rotate(-12deg)',
                },
                '50%': {
                    transform: 'rotate(12deg)',
                },
            },
            'rotate-y': {
                '0%': {
                    transform: 'rotateY(360deg)',
                },
                '100%': {
                    transform: 'rotateY(0)',
                },
            },
            'rotate-x': {
                '0%': {
                    transform: 'rotateX(360deg)',
                },
                '100%': {
                    transform: 'rotateX(0)',
                },
            },
            'jump': {
                '0%, 100%': {
                    transform: 'scale(1)',
                },
                '10%': {
                    transform: 'scale(0.8)',
                },
                '50%': {
                    transform: 'scale(1.2)',
                },
            },
            'jump-in': {
                '0%': {
                    transform: 'scale(0)',
                },
                '80%': {
                    transform: 'scale(1.2)',
                },
                '100%': {
                    transform: 'scale(1)',
                },
            },
            'jump-out': {
                '0%': {
                    transform: 'scale(1)',
                },
                '20%': {
                    transform: 'scale(1.2)',
                },
                '100%': {
                    transform: 'scale(0)',
                },
            },
            'shake': {
                '0%': {
                    transform: 'translateX(0rem)',
                },
                '25%': {
                    transform: 'translateX(-1rem)',
                },
                '75%': {
                    transform: 'translateX(1rem)',
                },
                '100%': {
                    transform: 'translateX(0rem)',
                },
            },
            'fade': {
                '0%': {
                    opacity: '0',
                },
                '100%': {
                    opacity: '1',
                },
            },
            'fade-down': {
                '0%': {
                    opacity: '0',
                    transform: 'translateY(-2rem)',
                },
                '100%': {
                    opacity: '1',
                    transform: 'translateY(0)',
                },
            },
            'fade-up': {
                '0%': {
                    opacity: '0',
                    transform: 'translateY(2rem)',
                },
                '100%': {
                    opacity: '1',
                    transform: 'translateY(0)',
                },
            },
            'fade-left': {
                '0%': {
                    opacity: '0',
                    transform: 'translateX(2rem)',
                },
                '100%': {
                    opacity: '1',
                    transform: 'translateX(0)',
                },
            },
            'fade-right': {
                '0%': {
                    opacity: '0',
                    transform: 'translateX(-2rem)',
                },
                '100%': {
                    opacity: '1',
                    transform: 'translateX(0)',
                },
            },
            'flip-up': {
                '0%': {
                    transform: 'rotateX(90deg)',
                    transformOrigin: 'bottom',
                },
                '100%': {
                    transform: 'rotateX(0)',
                    transformOrigin: 'bottom',
                },
            },
            'flip-down': {
                '0%': {
                    transform: 'rotateX(-90deg)',
                    transformOrigin: 'top',
                },
                '100%': {
                    transform: 'rotateX(0)',
                    transformOrigin: 'top',
                },
            },
        },
    },
}
