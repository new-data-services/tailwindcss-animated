const path = require('path')
const postcss = require('postcss')
const tailwindcss = require('@tailwindcss/postcss')

async function run(file, options = {}) {
    const { currentTestName } = expect.getState()

    const config = [
        options.scope
            ? `@import "tailwindcss/${options.scope}" source(none);`
            : '@import "tailwindcss" source(none);',
        options?.importType === 'legacy'
            ? '@plugin "./../src/";'
            : '@import "./../src/";',
        `@source "./${file}";`,
    ].join('\n')

    const result = await postcss(tailwindcss()).process(config, {
        from: `${path.resolve(__filename)}?test=${currentTestName}`,
    })

    return result.css
}

describe('modern tailwind', () => {
    it('generates `composition` utilities', async () => {
        expect(await run('content/composition.html', { scope: 'utilities' })).toIncludeAll([
            '.animate-add { animation-composition: add; }',
            '.animate-replace { animation-composition: replace; }',
            '.animate-accumulate { animation-composition: accumulate; }',
        ])
    })

    it('generates `delay` utilities', async () => {
        expect(await run('content/delay.html', { scope: 'utilities' })).toIncludeAll([
            '.animate-delay-75 { animation-delay: 75ms; }',
            '.animate-delay-333 { animation-delay: 333ms; }',
            '.animate-delay-\\[666ms\\] { animation-delay: 666ms; }',
        ])
    })

    it('generates `direction` utilities', async () => {
        expect(await run('content/direction.html', { scope: 'utilities' })).toIncludeAll([
            '.animate-normal { animation-direction: normal; }',
            '.animate-reverse { animation-direction: reverse; }',
        ])
    })

    it('generates `duration` utilities', async () => {
        expect(await run('content/duration.html', { scope: 'utilities' })).toIncludeAll([
            '.animate-duration-75 { animation-duration: 75ms; }',
            '.animate-duration-333 { animation-duration: 333ms; }',
            '.animate-duration-\\[666ms\\] { animation-duration: 666ms; }',
        ])
    })

    it('generates `fill-mode` utilities', async () => {
        expect(await run('content/fill-mode.html', { scope: 'utilities' })).toIncludeAll([
            '.animate-fill-both { animation-fill-mode: both; }',
            '.animate-fill-none { animation-fill-mode: normal; }',
        ])
    })

    it('generates `iteration-count` utilities', async () => {
        expect(await run('content/iteration-count.html', { scope: 'utilities' })).toIncludeAll([
            '.animate-infinite { animation-iteration-count: infinite; }',
            '.animate-once { animation-iteration-count: 1; }',
            '.animate-iteration-7 { animation-iteration-count: 7; }',
            '.animate-iteration-\\[14\\] { animation-iteration-count: 14; }',
        ])
    })

    it('generates `play-state` utilities', async () => {
        expect(await run('content/play-state.html', { scope: 'utilities' })).toIncludeAll([
            '.animate-play { animation-play-state: running; }',
            '.animate-stop { animation-play-state: paused; }',
        ])
    })

    it('generates predefined animations for modern import', async () => {
        expect(await run('content/predefined-animations.html', { importType: 'modern' })).toIncludeAll([
            '.animate-fade { animation: var(--animate-fade); }',
            '--animate-fade: fade var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both;',
            '@keyframes fade { 0% { opacity: 0; } 100% { opacity: 1; }}',
            '.animate-spin { animation: var(--animate-spin); }',
            '--animate-spin: spin var(--default-animation-duration, 1s) var(--default-animation-timing-function, linear) var(--default-animation-delay, 0s) infinite;',
            '@keyframes spin { to { transform: rotate(360deg); }}',
        ])
    })

    it('generates predefined animations for legacy import', async () => {
        expect(await run('content/predefined-animations.html', { importType: 'legacy' })).toIncludeAll([
            '.animate-fade { animation: fade var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both; }',
            '@keyframes fade { 0% { opacity: 0; } 100% { opacity: 1; }}',
            '.animate-spin { animation: spin var(--default-animation-duration, 1s) var(--default-animation-timing-function, linear) var(--default-animation-delay, 0s) infinite; }',
            '@keyframes spin { to { transform: rotate(360deg); }}',
        ])
    })

    it('generates `timing-function` utilities', async () => {
        expect(await run('content/timing-function.html', { scope: 'utilities' })).toIncludeAll([
            '.animate-ease { animation-timing-function: ease; }',
            '.animate-ease-linear { animation-timing-function: linear; }',
            '.animate-ease-\\[cubic-bezier\\(1\\,0\\.66\\,0\\.33\\,0\\)\\] { animation-timing-function: cubic-bezier(1,0.66,0.33,0); }',
        ])
    })
})
