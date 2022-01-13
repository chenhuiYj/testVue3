module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: "vue-eslint-parser",
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/html-self-closing": 'off',
    "quote-props": "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  globals: {
    Lang: true
  },
};
