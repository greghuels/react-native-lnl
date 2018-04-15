module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    jest: true,
    jasmine: true,
  },
  plugins: ['jest'],
  rules: {
    'class-methods-use-this': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-typos': 0,
    'react/prefer-stateless-function': 0,
    'react/require-default-props': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-param-reassign': ['error', { props: false }],
    'no-restricted-properties': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/__tests__/**/*.js?(x)', // default
          '**/?(*.)(spec|test).js?(x)', // default
          '**/e2e/**/*.js?(x)', // also include e2e tests
        ],
      },
    ],
  },
  globals: {
    __DEV__: true,
  },
};
