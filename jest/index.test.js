const path = require('path')
const postcss = require('postcss')
const tailwindcss = require('tailwindcss')

function run(config, plugin = tailwindcss) {
    const { currentTestName } = expect.getState()

    config = {
        plugins: [require('./../src/index.js')],
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
            .animate-delay-75 { animation-delay: 75ms; }
            .animate-delay-\[333ms\] { animation-delay: 333ms; }
        `)
    })
})

it('should add `duration` utilities', () => {
    return run({
        content: [{ raw: String.raw`<div class="animate-duration-75 animate-duration-[333ms]"></div>` }],
    }).then(result => {
        expect(result.css).toMatchCss(String.raw`
            .animate-duration-75 { animation-duration: 75ms; }
            .animate-duration-\[333ms\] { animation-duration: 333ms; }
        `)
    })
})

it('should add `direction` utilities', () => {
    return run({
        content: [{ raw: String.raw`<div class="animate-normal animate-reverse"></div>` }],
    }).then(result => {
        expect(result.css).toMatchCss(String.raw`
            .animate-normal { animation-direction: normal; }
            .animate-reverse { animation-direction: reverse; }
        `)
    })
})

it('should add `fill-mode` utilities', () => {
    return run({
        content: [{ raw: String.raw`<div class="animate-fill-none animate-fill-both"></div>` }],
    }).then(result => {
        expect(result.css).toMatchCss(String.raw`
            .animate-fill-none { animation-fill-mode: normal; }
            .animate-fill-both { animation-fill-mode: both; }
        `)
    })
})

it('should add `iteration-count` utilities', () => {
    return run({
        content: [{ raw: String.raw`<div class="animate-infinite animate-once"></div>` }],
    }).then(result => {
        expect(result.css).toMatchCss(String.raw`
            .animate-infinite { animation-iteration-count: infinite; }
            .animate-once { animation-iteration-count: 1; }
        `)
    })
})

it('should add `play-state` utilities', () => {
    return run({
        content: [{ raw: String.raw`<div class="animate-play animate-stop"></div>` }],
    }).then(result => {
        expect(result.css).toMatchCss(String.raw`
            .animate-play { animation-play-state: running; }
            .animate-stop { animation-play-state: paused; }
        `)
    })
})

it('should add `timing-function` utilities', () => {
    return run({
        content: [{ raw: String.raw`<div class="animate-ease-linear animate-ease-in-out"></div>` }],
    }).then(result => {
        expect(result.css).toMatchCss(String.raw`
            .animate-ease-linear { animation-timing-function: linear; }
            .animate-ease-in-out { animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
        `)
    })
})

it('should add predefined animations', () => {
    return run({
        content: [{ raw: String.raw`<div class="animate-fade animate-wiggle"></div>` }],
    }).then(result => {
        expect(result.css).toMatchCss(String.raw`
            @keyframes fade {
                0% { opacity: 0; }
                100% { opacity: 1; }
            }
            .animate-fade { animation: fade 1s both; }
            @keyframes wiggle {
                0%, 100% { transform: rotate(-3deg); }
                50% { transform: rotate(3deg); }
            }
            .animate-wiggle { animation: wiggle 1s both; }
        `)
    })
})
