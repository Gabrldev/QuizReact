module.exports = {
  extends: 'standard-with-typescript',
  parserOptions: {
    project: './tsconfig.json'
  },

  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  }
}
