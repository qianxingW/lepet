module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-vars': 'warn',
    'vue/no-unused-components': 'warn'
  }
}