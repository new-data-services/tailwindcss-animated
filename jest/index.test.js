const path = require('path')
const postcss = require('postcss')
const tailwindcss = require('@tailwindcss/postcss')

async function run(file) {
    const { currentTestName } = expect.getState()

    const result = await postcss(tailwindcss()).process(`
        @import 'tailwindcss/utilities' source(none);
        @plugin './../src/';
        @source './${file}';
    `, {
        from: `${path.resolve(__filename)}?test=${currentTestName}`,
    })

    return result.css.replace(/^\/\*!.*?\n/, '').trim()
}

it('generates `delay` utilities', async () => {
    expect(await run('content/delay.html')).toMatchInlineSnapshot(`
        ".animate-delay-75 {
          --tw-animate-delay: 75ms;
          animation-delay: var(--tw-animate-delay);
        }
        .animate-delay-333 {
          --tw-animate-delay: 333ms;
          animation-delay: var(--tw-animate-delay);
        }
        .animate-delay-\\[666ms\\] {
          --tw-animate-delay: 666ms;
          animation-delay: var(--tw-animate-delay);
        }"
    `)
})

it('generates `duration` utilities', async () => {
    expect(await run('content/duration.html')).toMatchInlineSnapshot(`
        ".animate-duration-75 {
          --tw-animate-duration: 75ms;
          animation-duration: var(--tw-animate-duration);
        }
        .animate-duration-333 {
          --tw-animate-duration: 333ms;
          animation-duration: var(--tw-animate-duration);
        }
        .animate-duration-\\[666ms\\] {
          --tw-animate-duration: 666ms;
          animation-duration: var(--tw-animate-duration);
        }"
    `)
})

it('generates `direction` utilities', async () => {
    expect(await run('content/direction.html')).toMatchInlineSnapshot(`
        ".animate-normal {
          --tw-animate-direction: normal;
          animation-direction: var(--tw-animate-direction);
        }
        .animate-reverse {
          --tw-animate-direction: reverse;
          animation-direction: var(--tw-animate-direction);
        }"
    `)
})

it('generates `fill-mode` utilities', async () => {
    expect(await run('content/fill-mode.html')).toMatchInlineSnapshot(`
        ".animate-fill-both {
          --tw-animate-fill: both;
          animation-fill-mode: var(--tw-animate-fill);
        }
        .animate-fill-none {
          --tw-animate-fill: normal;
          animation-fill-mode: var(--tw-animate-fill);
        }"
    `)
})

it('generates `iteration-count` utilities', async () => {
    expect(await run('content/iteration-count.html')).toMatchInlineSnapshot(`
        ".animate-infinite {
          --tw-animate-iteration: infinite;
          animation-iteration-count: var(--tw-animate-iteration);
        }
        .animate-iteration-\\[7\\] {
          --tw-animate-iteration: 7;
          animation-iteration-count: var(--tw-animate-iteration);
        }
        .animate-once {
          --tw-animate-iteration: 1;
          animation-iteration-count: var(--tw-animate-iteration);
        }"
    `)
})

it('generates `play-state` utilities', async () => {
    expect(await run('content/play-state.html')).toMatchInlineSnapshot(`
        ".animate-play {
          --tw-animate-state: running;
          animation-play-state: var(--tw-animate-state);
        }
        .animate-stop {
          --tw-animate-state: paused;
          animation-play-state: var(--tw-animate-state);
        }"
    `)
})

it('generates `timing-function` utilities', async () => {
    expect(await run('content/timing-function.html')).toMatchInlineSnapshot(`
        ".animate-ease {
          --tw-animate-easing: ease;
          animation-timing-function: var(--tw-animate-easing);
        }
        .animate-ease-\\[cubic-bezier\\(1\\,0\\.66\\,0\\.33\\,0\\)\\] {
          --tw-animate-easing: cubic-bezier(1,0.66,0.33,0);
          animation-timing-function: var(--tw-animate-easing);
        }
        .animate-ease-linear {
          --tw-animate-easing: linear;
          animation-timing-function: var(--tw-animate-easing);
        }"
    `)
})

it('generates `composition` utilities', async () => {
    expect(await run('content/composition.html')).toMatchInlineSnapshot(`
        ".animate-accumulate {
          --tw-animate-composition: accumulate;
          animation-composition: var(--tw-animate-composition);
        }
        .animate-add {
          --tw-animate-composition: add;
          animation-composition: var(--tw-animate-composition);
        }
        .animate-replace {
          --tw-animate-composition: replace;
          animation-composition: var(--tw-animate-composition);
        }"
    `)
})

it('generates predefined animations', async () => {
    expect(await run('content/predefined-animations.html')).toMatchInlineSnapshot(`
        ".animate-fade {
          animation: fade var(--tw-animate-duration, 1s) var(--tw-animate-easing, ease) var(--tw-animate-delay, 0s) var(--tw-animate-iteration, 1) var(--tw-animate-fill, both);
        }
        .animate-spin {
          animation: spin var(--tw-animate-duration, 1s) var(--tw-animate-easing, linear) var(--tw-animate-delay, 0s) var(--tw-animate-iteration, infinite) var(--tw-animate-fill, none);
        }"
    `)
})
