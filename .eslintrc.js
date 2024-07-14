module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:import/typescript',
      'plugin:storybook/recommended'
  ],
  ignorePatterns: ['build', '.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react-refresh', '@conarti/feature-sliced', 'import', 'i18next'],
  rules: {
    // errors
    'import/no-cycle': 'error',
    'no-use-before-define': 'error',
    '@conarti/feature-sliced/layers-slices': [
      'error',
      {
        ignorePatterns: ['**/providers', '**/testing', '**/store'],
        allowTypeImports: true,
      },
    ],
    '@conarti/feature-sliced/absolute-relative': 'error',
    '@conarti/feature-sliced/public-api': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    'quotes': ['error', 'single'],
    "i18next/no-literal-string": 'error',

    // warnings
    'react/jsx-props-no-spreading': 1,
    'no-console': 1,

    // off
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/require-default-props': 'off',
    'react/button-has-type': 'off',
    'react/display-name': 'off',
  },
};
