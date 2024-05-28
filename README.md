# Tailwind CSS Animated

Extended animation utilities for Tailwind CSS<br>
https://tailwindcss-animated.com

## Installation

Install the plugin from npm:

```sh
npm i tailwindcss-animated
```

Then add the plugin to your tailwind.config.js file:

```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    require('tailwindcss-animated')
  ],
}
```

## Usage

This plugin brings various utility classes as well as several ready-to-use CSS animations. Here are some simple examples:

```html
<button class="animate-wiggle">
  Hej, look at me!
</button>

<button class="animate-jump-in animate-delay-300 animate-once">
  Wait a bit, then jump right in.
</button>
```

### Ready-to-use animations

There are several animations that can be integrated with a single utility class. These extend the Spin, Ping and Pulse animations of Tailwind CSS.

Open the configurator to see them in action:<br>
https://tailwindcss-animated.com/configurator.html

All animations can be customized with the utility classes below.

### Duration

| Class | Properties |
|-----|-----|
| animate-duration-75 | animation-duration: 75ms; |
| animate-duration-100 | animation-duration: 100ms; |
| animate-duration-150 | animation-duration: 150ms; |
| animate-duration-200 | animation-duration: 200ms; |
| animate-duration-300 | animation-duration: 300ms; |
| animate-duration-500 | animation-duration: 500ms; |
| animate-duration-700 | animation-duration: 700ms; |
| animate-duration-1000 | animation-duration: 1000ms; |
| animate-duration-\[5s\] [*](#arbitrary-values) | animation-duration: 5s; |

### Delay

| Class | Properties |
|-----|-----|
| animate-delay-none | animation-delay: 0ms; |
| animate-delay-75 | animation-delay: 75ms; |
| animate-delay-100 | animation-delay: 100ms; |
| animate-delay-150 | animation-delay: 150ms; |
| animate-delay-200 | animation-delay: 200ms; |
| animate-delay-300 | animation-delay: 300ms; |
| animate-delay-500 | animation-delay: 500ms; |
| animate-delay-700 | animation-delay: 700ms; |
| animate-delay-1000 | animation-delay: 1000ms; |
| animate-delay-\[5s\] [*](#arbitrary-values) | animation-delay: 5s; |

### Direction

| Class | Properties |
|-----|-----|
| animate-normal | animation-direction: normal; |
| animate-reverse | animation-direction: reverse; |
| animate-alternate | animation-direction: alternate; |
| animate-alternate-reverse | animation-direction: alternate-reverse; |

### Iteration Count

| Class | Properties |
|-----|-----|
| animate-infinite | animation-iteration-count: infinite; |
| animate-once | animation-iteration-count: 1; |
| animate-twice | animation-iteration-count: 2; |
| animate-thrice | animation-iteration-count: 3; |
| animate-iteration-\[10\] [*](#arbitrary-values) | animation-iteration-count: 10; |

### Timing Function

| Class | Properties |
|-----|-----|
| animate-ease | animation-timing-function: ease; |
| animate-ease-linear | animation-timing-function: linear; |
| animate-ease-in | animation-timing-function: cubic-bezier(0.4, 0, 1, 1); |
| animate-ease-out | animation-timing-function: cubic-bezier(0, 0, 0.2, 1); |
| animate-ease-in-out | animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); |
| animate-ease-\[cubic-bezier(1,1,0,0)\] [*](#arbitrary-values) | animation-timing-function: cubic-bezier(1, 1, 0, 0); |

### Fill Mode

| Class | Properties |
|-----|-----|
| animate-fill-none | animation-fill-mode: normal; |
| animate-fill-forwards | animation-fill-mode: forwards; |
| animate-fill-backwards | animation-fill-mode: backwards; |
| animate-fill-both | animation-fill-mode: both; |

### Play State

| Class | Properties |
|-----|-----|
| animate-run | animation-play-state: running; |
| animate-play | animation-play-state: running; |
| animate-stop | animation-play-state: paused; |
| animate-pause | animation-play-state: paused; |

### Composition

| Class | Properties |
|-----|-----|
| animate-replace | animation-composition: replace; |
| animate-add | animation-composition: add; |
| animate-accumulate | animation-composition: accumulate; |

## Variant modifiers and breakpoints

All variants and breakpoints (hover, focus, lg, ...) work with animations und animation utility classes.

```html
<div class="lg:hover:animate-shake motion-reduce:animate-none">
  <!-- ... -->
</div>
```

## Arbitrary values

This plugin uses the Just-in-Time (JIT) engine, which allows you to use [arbitrary values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values) for most animation properties.

```html
<div class="animate-delay-[85ms] animate-duration-[2s] animate-iteration-[10]">
  <!-- ... -->
</div>
```

## Customizing your theme

If you want to change some animations, extend your tailwind.config.js file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animationDelay: {
        275: '275ms',
        5000: '5s',
      },
      animationDuration: {
        2000: '2s',
        'long': '10s',
        'very-long': '20s',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
```

Take a look at [src/theme.js](https://github.com/new-data-services/tailwindcss-animated/blob/main/src/theme.js) for the default settings.

## FAQ

### How to animate on scroll?

To run animations when an element enters the viewport, you need JavaScript. (At least until [animation-timeline](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline) has good browser support)

A good starting point for a JavaScript solution would be the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API). Or tools that build on it, such as the [Alpine.js Intersect plugin](https://alpinejs.dev/plugins/intersect) and the [Tailwind CSS Intersection plugin](https://github.com/heidkaemper/tailwindcss-intersect), to name just two.

### Does this work with the Play CDN?

Unfortunately not. The Tailwind CSS Play CDN currently does not support third-party plugins.

### How to combine multiple animations?

The simplest approach is to nest two elements:

```html
<div class="animate-pulse">
    <div class="animate-bounce"></div>
</div>
```

### Can keyframes and offset values be changed?

Offset positions of predefined animations can't be changed on the fly. But the behavior can still be modified with [animation-composition](#composition) utilities.

If you need more details on how compositions work, check out the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-composition).



---

<a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind%20CSS-3.1+-38bdf8?style=for-the-badge"></a>
<a href="https://www.npmjs.com/package/tailwindcss-animated"><img src="https://img.shields.io/npm/v/tailwindcss-animated?style=for-the-badge"></a>
<a href="https://www.npmjs.com/package/tailwindcss-animated"><img src="https://img.shields.io/npm/dt/tailwindcss-animated?style=for-the-badge"></a>
