module.exports = {
  extends: ['@kienleholdings/react'],
  rules: {
    'import/extensions': [
      'error',
      'always',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    // This is a bit dangerous but needs to happen so we're not disabling errors for peer deps every single file
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        peerDependencies: true,
      },
    ],
  },
};
