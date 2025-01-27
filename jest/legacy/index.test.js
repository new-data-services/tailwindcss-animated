const fs = require('fs')
const path = require('path')
const postcss = require('postcss')
const tailwindcss = require('tailwindcss')

async function run(file) {
    const { currentTestName } = expect.getState()

    const config = {
        content: [file],
        corePlugins: { preflight: false },
        plugins: [require('../../src')],
    }

    const result = await postcss(tailwindcss(config)).process('@tailwind utilities', {
        from: `${path.resolve(__filename)}?test=${currentTestName}`,
    })

    return result.css
}

describe('legacy tailwind', () => {
    if (! fs.existsSync(`${__dirname}/node_modules`)) {
        throw new Error(`Dependencies in ${__dirname} are missing`)
    }

    it('generates `composition` utilities', async () => {
        expect(await run('jest/content/composition.html')).toIncludeAll([
            '.animate-add { animation-composition: add; }',
            '.animate-replace { animation-composition: replace; }',
            '.animate-accumulate { animation-composition: accumulate; }',
        ])
    })

    it('should add `delay` utilities', async () => {
        expect(await run('jest/content/delay.html')).toIncludeAll([
            '.animate-delay-75 { animation-delay: 75ms; }',
            '.animate-delay-\\[666ms\\] { animation-delay: 666ms; }',
        ])
    })

    it('generates `direction` utilities', async () => {
        expect(await run('jest/content/direction.html')).toIncludeAll([
            '.animate-normal { animation-direction: normal; }',
            '.animate-reverse { animation-direction: reverse; }',
        ])
    })

    it('generates `duration` utilities', async () => {
        expect(await run('jest/content/duration.html')).toIncludeAll([
            '.animate-duration-75 { animation-duration: 75ms; }',
            '.animate-duration-\\[666ms\\] { animation-duration: 666ms; }',
        ])
    })

    it('generates `fill-mode` utilities', async () => {
        expect(await run('jest/content/fill-mode.html')).toIncludeAll([
            '.animate-fill-both { animation-fill-mode: both; }',
            '.animate-fill-none { animation-fill-mode: normal; }',
        ])
    })

    it('generates `iteration-count` utilities', async () => {
        expect(await run('jest/content/iteration-count.html')).toIncludeAll([
            '.animate-infinite { animation-iteration-count: infinite; }',
            '.animate-once { animation-iteration-count: 1; }',
            '.animate-iteration-\\[14\\] { animation-iteration-count: 14; }',
        ])
    })

    it('generates `play-state` utilities', async () => {
        expect(await run('jest/content/play-state.html')).toIncludeAll([
            '.animate-play { animation-play-state: running; }',
            '.animate-stop { animation-play-state: paused; }',
        ])
    })

    it('generates predefined animations', async () => {
        expect(await run('jest/content/predefined-animations.html')).toIncludeAll([
            '.animate-fade { animation: fade var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both; }',
            '@keyframes fade { 0% { opacity: 0; } 100% { opacity: 1; }}',
            '.animate-spin { animation: spin var(--default-animation-duration, 1s) var(--default-animation-timing-function, linear) var(--default-animation-delay, 0s) infinite; }',
            '@keyframes spin { to { transform: rotate(360deg); }}',
        ])
    })

    it('generates `timing-function` utilities', async () => {
        expect(await run('jest/content/timing-function.html')).toIncludeAll([
            '.animate-ease { animation-timing-function: ease; }',
            '.animate-ease-linear { animation-timing-function: linear; }',
            '.animate-ease-\\[cubic-bezier\\(1\\2c 0\\.66\\2c 0\\.33\\2c 0\\)\\] { animation-timing-function: cubic-bezier(1,0.66,0.33,0); }',
        ])
    })
})
