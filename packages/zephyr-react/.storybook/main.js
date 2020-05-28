const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      loader: 'awesome-typescript-loader',
      options: {
        transpileOnly: true,
      },
      test: /\.tsx?$/,
    });
    return config;
  },
};
