const path = require('path');

module.exports = {
  addons: ['@storybook/addon-viewport'],
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
      test: /\.tsx?$/,
    });
    config.module.rules.push({
      // I don't know why this hack needs to be here but my guess is it's a storybook glitch
      include: [path.resolve(__dirname, 'not_exist_path')],
      use: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1 } },
        'postcss-loader',
      ],
      test: /\.css$/,
    });

    config.resolve.extensions = ['.ts', '.tsx', '.js', 'jsx', '.json'];
    return config;
  },
};
