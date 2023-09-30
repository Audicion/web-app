module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'eslint-plugin-simple-import-sort'],
  rules: {
    'comma-dangle': 'off',
    'multiline-ternary': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    'react/sort-prop-types': 'error',
    'no-undef-init': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true,
        },
      },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000', '^node:', '^@?\\w'],
          ['^($)(/.*|$)'],
          ['^', '^\\.'],
          ['css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', 'never'],
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    'no-console': 'error',
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'always'],
  },
};
