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
        expect(await run('content/composition.html', { scope: 'utilities' })).toContainAll([
            '.animate-add { animation-composition: add; }',
            '.animate-replace { animation-composition: replace; }',
            '.animate-accumulate { animation-composition: accumulate; }',
        ])
    })

    it('generates `delay` utilities', async () => {
        expect(await run('content/delay.html', { scope: 'utilities' })).toContainAll([
            '.animate-delay-75 { animation-delay: 75ms; }',
            '.animate-delay-333 { animation-delay: 333ms; }',
            '.animate-delay-\\[666ms\\] { animation-delay: 666ms; }',
        ])
    })

    it('generates `direction` utilities', async () => {
        expect(await run('content/direction.html', { scope: 'utilities' })).toContainAll([
            '.animate-normal { animation-direction: normal; }',
            '.animate-reverse { animation-direction: reverse; }',
            '.animate-alternate { animation-direction: alternate; }',
            '.animate-alternate-reverse { animation-direction: alternate-reverse; }',
        ])
    })

    it('generates `duration` utilities', async () => {
        expect(await run('content/duration.html', { scope: 'utilities' })).toContainAll([
            '.animate-duration-75 { animation-duration: 75ms; }',
            '.animate-duration-333 { animation-duration: 333ms; }',
            '.animate-duration-\\[666ms\\] { animation-duration: 666ms; }',
        ])
    })

    it('generates `fill-mode` utilities', async () => {
        expect(await run('content/fill-mode.html', { scope: 'utilities' })).toContainAll([
            '.animate-fill-none { animation-fill-mode: normal; }',
            '.animate-fill-forwards { animation-fill-mode: forwards; }',
            '.animate-fill-backwards { animation-fill-mode: backwards; }',
            '.animate-fill-both { animation-fill-mode: both; }',
        ])
    })

    it('generates `iteration-count` utilities', async () => {
        expect(await run('content/iteration-count.html', { scope: 'utilities' })).toContainAll([
            '.animate-infinite { animation-iteration-count: infinite; }',
            '.animate-once { animation-iteration-count: 1; }',
            '.animate-iteration-7 { animation-iteration-count: 7; }',
            '.animate-iteration-\\[14\\] { animation-iteration-count: 14; }',
        ])
    })

    it('generates `play-state` utilities', async () => {
        expect(await run('content/play-state.html', { scope: 'utilities' })).toContainAll([
            '.animate-play { animation-play-state: running; }',
            '.animate-stop { animation-play-state: paused; }',
        ])
    })

    it('generates `timing-function` utilities', async () => {
        expect(await run('content/timing-function.html', { scope: 'utilities' })).toContainAll([
            '.animate-ease { animation-timing-function: ease; }',
            '.animate-ease-linear { animation-timing-function: linear; }',
            '.animate-ease-in { animation-timing-function: cubic-bezier(0.4, 0, 1, 1); }',
            '.animate-ease-out { animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }',
            '.animate-ease-in-out { animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }',
            '.animate-ease-\\[cubic-bezier\\(1\\,0\\.66\\,0\\.33\\,0\\)\\] { animation-timing-function: cubic-bezier(1,0.66,0.33,0); }',
        ])
    })

    it('generates predefined animations for modern import', async () => {
        const css = await run('content/predefined-animations.html', { importType: 'modern' })

        expect(css).toContainAll([
            '.animate-spin { animation: var(--animate-spin); }',
            '.animate-ping { animation: var(--animate-ping); }',
            '.animate-pulse { animation: var(--animate-pulse); }',
            '.animate-bounce { animation: var(--animate-bounce); }',
            '.animate-wiggle { animation: var(--animate-wiggle); }',
            '.animate-wiggle-more { animation: var(--animate-wiggle-more); }',
            '.animate-rotate-y { animation: var(--animate-rotate-y); }',
            '.animate-rotate-x { animation: var(--animate-rotate-x); }',
            '.animate-jump { animation: var(--animate-jump); }',
            '.animate-jump-in { animation: var(--animate-jump-in); }',
            '.animate-jump-out { animation: var(--animate-jump-out); }',
            '.animate-shake { animation: var(--animate-shake); }',
            '.animate-fade { animation: var(--animate-fade); }',
            '.animate-fade-down { animation: var(--animate-fade-down); }',
            '.animate-fade-up { animation: var(--animate-fade-up); }',
            '.animate-fade-left { animation: var(--animate-fade-left); }',
            '.animate-fade-right { animation: var(--animate-fade-right); }',
            '.animate-flip-up { animation: var(--animate-flip-up); }',
            '.animate-flip-down { animation: var(--animate-flip-down); }',
        ])

        expect(css).toContainAll([
            '--animate-spin: spin var(--default-animation-duration, 1s) var(--default-animation-timing-function, linear) var(--default-animation-delay, 0s) infinite;',
            '--animate-ping: ping var(--default-animation-duration, 1s) var(--default-animation-timing-function, cubic-bezier(0, 0, 0.2, 1)) var(--default-animation-delay, 0s) infinite;',
            '--animate-pulse: pulse var(--default-animation-duration, 2s) var(--default-animation-timing-function, cubic-bezier(0.4, 0, 0.6, 1)) var(--default-animation-delay, 0s) infinite;',
            '--animate-bounce: bounce var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) infinite;',
            '--animate-wiggle: wiggle var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both;',
            '--animate-wiggle-more: wiggle-more var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both;',
            '--animate-rotate-y: rotate-y var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both;',
            '--animate-rotate-x: rotate-x var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both;',
            '--animate-jump: jump var(--default-animation-duration, 0.5s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both;',
            '--animate-jump-in: jump-in var(--default-animation-duration, 0.5s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both;',
            '--animate-jump-out: jump-out var(--default-animation-duration, 0.5s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both;',
            '--animate-shake: shake var(--default-animation-duration, 0.5s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both;',
            '--animate-fade: fade var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both;',
            '--animate-fade-down: fade-down var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both;',
            '--animate-fade-up: fade-up var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both;',
            '--animate-fade-left: fade-left var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both;',
            '--animate-fade-right: fade-right var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both;',
            '--animate-flip-up: flip-up var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both;',
            '--animate-flip-down: flip-down var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both;',
        ])

        expect(css).toContainAll([
            '@keyframes spin { to { transform: rotate(360deg); }}',
            '@keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; }}',
            '@keyframes pulse { 50% { opacity: 0.5; }}',
            '@keyframes bounce { 0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); } 50% { transform: none; animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }}',
            '@keyframes wiggle { 0%, 100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); }}',
            '@keyframes wiggle-more { 0%, 100% { transform: rotate(-12deg); } 50% { transform: rotate(12deg); }}',
            '@keyframes rotate-y { 0% { transform: rotateY(360deg); } 100% { transform: rotateY(0); }}',
            '@keyframes rotate-x { 0% { transform: rotateX(360deg); } 100% { transform: rotateX(0); }}',
            '@keyframes jump { 0%, 100% { transform: scale(1); } 10% { transform: scale(0.8); } 50% { transform: scale(1.2); }}',
            '@keyframes jump-in { 0% { transform: scale(0); } 80% { transform: scale(1.2); } 100% { transform: scale(1); }}',
            '@keyframes jump-out { 0% { transform: scale(1); } 20% { transform: scale(1.2); } 100% { transform: scale(0); }}',
            '@keyframes shake { 0% { transform: translateX(0); } 25% { transform: translateX(-1rem); } 75% { transform: translateX(1rem); } 100% { transform: translateX(0); }}',
            '@keyframes fade { 0% { opacity: 0; } 100% { opacity: 1; }}',
            '@keyframes fade-down { 0% { opacity: 0; transform: translateY(-2rem); } 100% { opacity: 1; transform: translateY(0); }}',
            '@keyframes fade-up { 0% { opacity: 0; transform: translateY(2rem); } 100% { opacity: 1; transform: translateY(0); }}',
            '@keyframes fade-left { 0% { opacity: 0; transform: translateX(2rem); } 100% { opacity: 1; transform: translateX(0); }}',
            '@keyframes fade-right { 0% { opacity: 0; transform: translateX(-2rem); } 100% { opacity: 1; transform: translateX(0); }}',
            '@keyframes flip-up { 0% { transform: rotateX(90deg); transform-origin: bottom; } 100% { transform: rotateX(0); transform-origin: bottom; }}',
            '@keyframes flip-down { 0% { transform: rotateX(-90deg); transform-origin: top; } 100% { transform: rotateX(0); transform-origin: top; }}',
        ])
    })

    it('generates predefined animations for legacy import', async () => {
        const css = await run('content/predefined-animations.html', { importType: 'legacy' })

        expect(css).toContainAll([
            '.animate-spin { animation: spin var(--default-animation-duration, 1s) var(--default-animation-timing-function, linear) var(--default-animation-delay, 0s) infinite; }',
            '.animate-ping { animation: ping var(--default-animation-duration, 1s) var(--default-animation-timing-function, cubic-bezier(0, 0, 0.2, 1)) var(--default-animation-delay, 0s) infinite; }',
            '.animate-pulse { animation: pulse var(--default-animation-duration, 2s) var(--default-animation-timing-function, cubic-bezier(0.4, 0, 0.6, 1)) var(--default-animation-delay, 0s) infinite; }',
            '.animate-bounce { animation: bounce var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) infinite; }',
            '.animate-wiggle { animation: wiggle var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both; }',
            '.animate-wiggle-more { animation: wiggle-more var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both; }',
            '.animate-rotate-y { animation: rotate-y var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both; }',
            '.animate-rotate-x { animation: rotate-x var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both; }',
            '.animate-jump { animation: jump var(--default-animation-duration, 0.5s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both; }',
            '.animate-jump-in { animation: jump-in var(--default-animation-duration, 0.5s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both; }',
            '.animate-jump-out { animation: jump-out var(--default-animation-duration, 0.5s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both; }',
            '.animate-shake { animation: shake var(--default-animation-duration, 0.5s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both; }',
            '.animate-fade { animation: fade var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both; }',
            '.animate-fade-down { animation: fade-down var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both; }',
            '.animate-fade-up { animation: fade-up var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both; }',
            '.animate-fade-left { animation: fade-left var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both; }',
            '.animate-fade-right { animation: fade-right var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both; }',
            '.animate-flip-up { animation: flip-up var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both; }',
            '.animate-flip-down { animation: flip-down var(--default-animation-duration, 1s) var(--default-animation-timing-function, ease) var(--default-animation-delay, 0s) both; }',
        ])

        expect(css).toContainAll([
            '@keyframes spin { to { transform: rotate(360deg); }}',
            '@keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; }}',
            '@keyframes pulse { 50% { opacity: 0.5; }}',
            '@keyframes bounce { 0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); } 50% { transform: none; animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }}',
            '@keyframes wiggle { 0%, 100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); }}',
            '@keyframes wiggle-more { 0%, 100% { transform: rotate(-12deg); } 50% { transform: rotate(12deg); }}',
            '@keyframes rotate-y { 0% { transform: rotateY(360deg); } 100% { transform: rotateY(0); }}',
            '@keyframes rotate-x { 0% { transform: rotateX(360deg); } 100% { transform: rotateX(0); }}',
            '@keyframes jump { 0%, 100% { transform: scale(1); } 10% { transform: scale(0.8); } 50% { transform: scale(1.2); }}',
            '@keyframes jump-in { 0% { transform: scale(0); } 80% { transform: scale(1.2); } 100% { transform: scale(1); }}',
            '@keyframes jump-out { 0% { transform: scale(1); } 20% { transform: scale(1.2); } 100% { transform: scale(0); }}',
            '@keyframes shake { 0% { transform: translateX(0); } 25% { transform: translateX(-1rem); } 75% { transform: translateX(1rem); } 100% { transform: translateX(0); }}',
            '@keyframes fade { 0% { opacity: 0; } 100% { opacity: 1; }}',
            '@keyframes fade-down { 0% { opacity: 0; transform: translateY(-2rem); } 100% { opacity: 1; transform: translateY(0); }}',
            '@keyframes fade-up { 0% { opacity: 0; transform: translateY(2rem); } 100% { opacity: 1; transform: translateY(0); }}',
            '@keyframes fade-left { 0% { opacity: 0; transform: translateX(2rem); } 100% { opacity: 1; transform: translateX(0); }}',
            '@keyframes fade-right { 0% { opacity: 0; transform: translateX(-2rem); } 100% { opacity: 1; transform: translateX(0); }}',
            '@keyframes flip-up { 0% { transform: rotateX(90deg); transform-origin: bottom; } 100% { transform: rotateX(0); transform-origin: bottom; }}',
            '@keyframes flip-down { 0% { transform: rotateX(-90deg); transform-origin: top; } 100% { transform: rotateX(0); transform-origin: top; }}',
        ])
    })
})
