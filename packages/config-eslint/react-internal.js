const { resolve } = require("node:path");
const { overrides } = require("./base");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use a library
 * that utilizes React.
 */

module.exports = {
  extends: [
    "@5unwan/eslint-config/base",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@tanstack/query/recommended",
    "plugin:storybook/recommended",
  ],
  parserOptions: {
    project,
  },
  plugins: ["react-refresh"],
  rules: {
   "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["**/*.{test,spec}.*", "**/__tests__/**/*"],
      plugins: ["jest", "testing-library"],
      extends: [
        "plugin:jest/recommended",
        "plugin:jest-dom/recommended",
        "plugin:testing-library/react",
      ],
    },
  ],
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.js", "**/*.css"],
};
