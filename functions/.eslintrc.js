/* eslint-env node */
module.exports = {
  root: true, // Ensures this is the base ESLint config
  env: {
    node: true, // ✅ Fixes 'require' and 'module.exports' errors
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "script", // ✅ Ensures ESLint treats files as CommonJS, not ES modules
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    "no-undef": "off", // ✅ Allows 'require', 'exports', and 'module.exports'
    "no-restricted-globals": ["error", "name", "length"],
    "prefer-arrow-callback": "error",
    "quotes": ["error", "double", { "allowTemplateLiterals": true }],
  },
};
