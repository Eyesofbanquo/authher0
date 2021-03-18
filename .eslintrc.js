module.exports = {
  env: {
    es6: true,
    es2021: true,
    commonjs: true,
    node: true
  },
  extends: ['standard', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error'
  }
};
