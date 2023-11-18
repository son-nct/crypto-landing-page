module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:prettier/recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: [],
  rules: {
    "vue/multi-word-component-names": 0,
    "vue/script-setup-no-uses-vars": "off",
    // "vue/no-multiple-template-root": 0,
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        semi: false,
      },
    ],
  },
};
