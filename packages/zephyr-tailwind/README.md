# Zephyr Tailwind

> Reusable TailwindCSS Config for All Things Zephyr

## Installation

1. Run `yarn add tailwindcss` (if you get peer dep errors, explicitly append the version `@^1.4.6`)
1. Run `yarn add @kienleholdings/zephyr-tailwind`

## Usage

1. Create a file named `tailwind.config.js`
1. Add the following

```javascript
const zephyrTailwind = require('@kienleholdings/zephyr-tailwind');

module.exports = {
  ...zephyrTailwind.default,
};
```

## Usage with PostCSS

### Configuring PostCSS

1. Create a file named `postcss.config.js`
1. Add the following

```javascript
module.exports = {
  plugins: [require('tailwindcss')('./tailwind.config.js'), require('autoprefixer')],
};
```

### Creating the Style Sheet

1. Create a file somewhere in your application's source code named `zephyr.css`
1. Add the following

```css
body {
  max-width: 100vw;
  overflow-x: hidden;
}

@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@700&family=Source+Sans+Pro:wght@400;700&display=swap');

@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

Assuming you're using a bundler like webpack, all you need to do from there is add
`import ./zephyr.css` to your application root and you're good to go!

## Customization

Customizing the default Zephyr Tailwind values is super easy, so easy in fact that it's basically
the same process as the
[official tailwind documentation](https://tailwindcss.com/docs/configuration). Work with examples
better than boring documentation? Here's an example of us replacing our default charcoal color
(`#333333`) with a super pretty green.

```javascript
const zephyrTailwind = require('@kienleholdings/zephyr-tailwind');

module.exports = {
  ...zephyrTailwind.default,
  theme: {
    ...zephyrTailwind.default.theme,
    colors: {
      ...zephyrTailwind.default.theme.colors,
      primary: {
        dark: '#43A047',
        light: '#66BB6A',
        normal: '#4CAF50',
      },
    },
  },
};
```

Now at first glance there's a lot of object destructuring going on, that's something we plan to fix
in the future for easier configuration, but unfortunately right now it's a piece of tech debt and
not MVP.
