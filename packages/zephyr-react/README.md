# Zephyr React

> React component library for Zephyr

## Disclaimer

Hey! Thanks for being an early adopter of Zephyr. As you can see in the `package.json`, this package
is still pretty early on in its lifecycle. There will be bugs, there will be missing features,
documentation will probably be less-than-ideal. Luckily, things will get better. Checkout the
[roadmap](https://kienle.design/roadmap) to learn about what new features are coming, and as always,
make sure to file a bug if you see something wrong.

## Installation

1. Run `yarn add tailwindcss @kienleholdings/zephyr-tailwind` to install the peer dependencies
1. Run `yarn add @kienleholdings/zephyr-react`

## Setup

The only additional setup required is to follow the `@kienleholdings/zephyr-tailwind` setup
instructions.

## Usage

There are a lot of components that Zephyr has to offer, so let's go with the Button as an example.

```tsx
import React from 'react';
import { Button } from '@kienleholdings/zephry-react';

const MyComponent: React.FC = () => <Button>Hello World!</Button>;

export default MyComponent;
```

Oh yeah, it's literally that easy.
