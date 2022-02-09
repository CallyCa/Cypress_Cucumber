module.exports = {
  root: true,

  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
    ecmaVersion: 7,
  },
  extends: ["prettier", "plugin:prettier/recommended"],
  plugins: ["prettier"],

  rules: {},
  env: {
    commonjs: true,
    node: true,
    mocha: true,
    browser: true,
  },
  globals: {
    expect: true,
    sinon: true,
    cy: true,
    Cypress: true,
  },
};
