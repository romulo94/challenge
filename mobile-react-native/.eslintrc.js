module.exports = {
  env: {
    es6: true,
    jest: true,
    browser: true,
  },
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', 'prettier', 'react-hooks', 'import'],
  rules: {
    'react/jsx-filename-extension': ['error', {extensions: ['.js', '.jsx']}],
    'no-console': ['error', {allow: ['tron']}],
    'react/jsx-filename-extension': ['error', {extensions: ['.js', '.jsx']}],
    'react/jsx-curly-newline': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/static-property-placement': 'off',
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
};
