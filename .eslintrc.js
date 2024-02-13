export const env = {
    browser: true,
    es2021: true,
  };
  export const extendsArray = ['eslint:recommended', 'plugin:prettier/recommended'];
  export const parserOptions = {
    ecmaVersion: 12,
    sourceType: 'module',
  };
  export const plugins = ['prettier'];
  export const rules = {
    'prettier/prettier': 'error',
  };