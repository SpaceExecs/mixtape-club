module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "json", "markdown"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    // 'react/jsx-props-no-spreading': 'off',
    "linebreak-style": "off",
    "no-console": ["error"],
    semi: ["error", "always"],
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "eol-last": ["error", "always"],
    "object-curly-newline": "off",
    "operator-linebreak": ["error", "after"],
    "react/prop-types": 0
  },
};
