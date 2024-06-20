const path = require('path')
const postcss = require('postcss')
const tailwindcss = require('tailwindcss')

function run(config, plugin = tailwindcss) {
    const { currentTestName } = expect.getState()

    config = {
        plugins: [require('./../src')],
        corePlugins: { preflight: false },
        ...config,
    }

    return postcss(plugin(config)).process('@tailwind utilities', {
        from: `${path.resolve(__filename)}?test=${currentTestName}`,
    })
}

it('should add `delay` utilities', () => {
    return run({
        content: [{ raw: String.raw`<div class="animate-delay-75 animate-delay-[333ms]"></div>` }],
    }).then(result => {
        expect(result.css).toMatchCss(String.raw`
            .animate-delay-75 {
                --tw-animate-delay: 75ms;
                animation-delay: var(--tw-animate-delay);
            }
            .animate-delay-\[333ms\] {
                --tw-animate-delay: 333ms;
                animation-delay: var(--tw-animate-delay);
            }
        `)
    })
})

it('should add `duration` utilities', () => {
    return run({
        content: [{ raw: String.raw`<div class="animate-duration-75 animate-duration-[333ms]"></div>` }],
    }).then(result => {
        expect(result.css).toMatchCss(String.raw`
            .animate-duration-75 {
                --tw-animate-duration: 75ms;
                animation-duration: var(--tw-animate-duration);
            }
            .animate-duration-\[333ms\] {
                --tw-animate-duration: 333ms;
                animation-duration: var(--tw-animate-duration);
            }
        `)
    })
})

it('should add `direction` utilities', () => {
    return run({
        content: [{ raw: String.raw`<div class="animate-normal animate-reverse"></div>` }],
    }).then(result => {
        expect(result.css).toMatchCss(String.raw`
            .animate-normal {
                --tw-animate-direction: normal;
                animation-direction: var(--tw-animate-direction);
            }
            .animate-reverse {
                --tw-animate-direction: reverse;
                animation-direction: var(--tw-animate-direction);
            }
        `)
    })
})

it('should add `fill-mode` utilities', () => {
    return run({
        content: [{ raw: String.raw`<div class="animate-fill-none animate-fill-both"></div>` }],
    }).then(result => {
        expect(result.css).toMatchCss(String.raw`
            .animate-fill-none {
                --tw-animate-fill: normal;
                animation-fill-mode: var(--tw-animate-fill);
            }
            .animate-fill-both {
                --tw-animate-fill: both;
                animation-fill-mode: var(--tw-animate-fill);
            }
        `)
    })
})

it('should add `iteration-count` utilities', () => {
    return run({
        content: [{ raw: String.raw`<div class="animate-infinite animate-once animate-iteration-[7]"></div>` }],
    }).then(result => {
        expect(result.css).toMatchCss(String.raw`
            .animate-infinite {
                --tw-animate-iteration: infinite;
                animation-iteration-count: var(--tw-animate-iteration);
            }
            .animate-once {
                --tw-animate-iteration: 1;
                animation-iteration-count: var(--tw-animate-iteration);
            }
            .animate-iteration-\[7\] {
                --tw-animate-iteration: 7;
                animation-iteration-count: var(--tw-animate-iteration);
            }
        `)
    })
})

it('should add `play-state` utilities', () => {
    return run({
        content: [{ raw: String.raw`<div class="animate-play animate-stop"></div>` }],
    }).then(result => {
        expect(result.css).toMatchCss(String.raw`
            .animate-play {
                --tw-animate-state: running;
                animation-play-state: var(--tw-animate-state);
            }
            .animate-stop {
                --tw-animate-state: paused;
                animation-play-state: var(--tw-animate-state);
            }
        `)
    })
})

it('should add `timing-function` utilities', () => {
    return run({
        content: [{ raw: String.raw`<div class="animate-ease animate-ease-[cubic-bezier(1,0.66,0.33,0)] animate-ease-linear"></div>` }],
    }).then(result => {
        expect(result.css).toMatchCss(String.raw`
            .animate-ease {
                --tw-animate-easing: ease;
                animation-timing-function: var(--tw-animate-easing);
            }
            .animate-ease-\[cubic-bezier\(1\2c 0\.66\2c 0\.33\2c 0\)\] {
                --tw-animate-easing: cubic-bezier(1, 0.66, 0.33, 0);
                animation-timing-function: var(--tw-animate-easing);
            }
            .animate-ease-linear {
                --tw-animate-easing: linear;
                animation-timing-function: var(--tw-animate-easing);
            }
        `)
    })
})

it('should add `composition` utilities', () => {
    return run({
        content: [{ raw: String.raw`<div class="animate-replace animate-add animate-accumulate"></div>` }],
    }).then(result => {
        expect(result.css).toMatchCss(String.raw`
            .animate-replace {
                --tw-animate-composition: replace;
                animation-composition: var(--tw-animate-composition);
            }
            .animate-add {
                --tw-animate-composition: add;
                animation-composition: var(--tw-animate-composition);
            }
            .animate-accumulate {
                --tw-animate-composition: accumulate;
                animation-composition: var(--tw-animate-composition);
            }
        `)
    })
})

it('should add predefined animations', () => {
    return run({
        content: [{ raw: String.raw`<div class="animate-fade animate-spin"></div>` }],
    }).then(result => {
        expect(result.css).toMatchCss(String.raw`
            @keyframes fade {
                0% { opacity: 0; }
                100% { opacity: 1; }
            }
            .animate-fade {
                animation: fade var(--tw-animate-duration, 1s) var(--tw-animate-easing, ease) var(--tw-animate-delay, 0s) var(--tw-animate-iteration, 1) var(--tw-animate-fill, both);
            }
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
            .animate-spin {
                animation: spin var(--tw-animate-duration, 1s) var(--tw-animate-easing, linear) var(--tw-animate-delay, 0s) var(--tw-animate-iteration, infinite) var(--tw-animate-fill, none);
            }
        `)
    })
})
