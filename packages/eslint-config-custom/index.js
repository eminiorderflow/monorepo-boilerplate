module.exports = {
  extends: [
    'next',
    'turbo',
    'prettier',
    'next/core-web-vitals',
    'eslint:recommended',
  ],
  globals: { React: 'readonly' },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'no-unused-vars': [1, { args: 'after-used', argsIgnorePattern: '^_' }],
  },
};
