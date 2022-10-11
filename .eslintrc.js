module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  globals: {
    '__DEV__': true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
  ],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    quotes: [2, 'single', {avoidEscape: true}],
    'vue/script-setup-no-uses-vars': 'off',
    'vue/multi-word-component-names': 'off',
    'max-len': ['error', 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'import/extensions': ['error', {
      json: 'always',
      css: 'always',
      scss: 'always',
      sass: 'always',
      vue: 'always',
      'ts.vue': 'always',
      ts: 'never',
      js: 'never',
    }],
    'no-multiple-empty-lines': 'warn',
    'no-constant-condition': 'error',
    'no-console': 'error',
    'vue/order-in-components': 'error',
    'vue/no-template-shadow': 'error',
    'vue/no-v-html': 'off',
    camelcase: ['warn'],
    'no-empty-function': ['warn'],
  },
};
