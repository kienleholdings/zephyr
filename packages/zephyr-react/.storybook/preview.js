// require('!style-loader!css-loader!./zephyr.css')
import './zephyr.css';

import React from 'react';

// We use style over here to override some of Storybook's less-desireable defaults
export const decorators = [
  (Story) => (
    <div className="light:bg-light-bg-darker dark:bg-dark-bg-darker">
      <Story />
    </div>
  ),
];

export const parameters = {
  backgrounds: {
    default: 'twitter',
    values: [
      {
        name: 'Light Mode',
        value: '#E6E6E6',
      },
      {
        name: 'Dark Mode',
        value: '#555555',
      },
    ],
  },
};
