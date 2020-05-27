module.exports = {
  extends: ['@kienleholdings/base'],
  rules: {
    'import/extensions': [
      'error',
      'always',
      {
        ts: 'never',
        js: 'never',
      },
    ],
  },
};
