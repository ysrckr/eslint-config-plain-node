module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },

  extends: ['eslint:recommended', 'prettier', 'plugin:eqeqeq-fix/recommended'],

  plugins: ['prettier', 'unused-imports'],

  parserOptions: {
    ecmaVersion: latest,
  },

  rules: {
    ' prettier/prettier': ['error'],
    eqeqeq: ['error', 'always'],
    'prefer-const': 'error',
    'no-var': 'error',
    curly: 'error',
    'no-else-return': 'error',
    'object-curly-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    strict: ['error', 'global'],
    'unused-imports/no-unused-imports': 'error',
  },
};
