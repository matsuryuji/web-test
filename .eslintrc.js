module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "plugin:react/jsx-runtime",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-props-no-spreading": "off",
    "react/button-has-type": "off",
    "no-param-reassign": "off",
    "import/prefer-default-export": "off",
    "class-methods-use-this": "off",
    "no-console": "off",
    "react/prop-types": "off",
    "react/jsx-no-useless-fragment": "off",
    "no-unused-vars": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: ["function-declaration", "arrow-function"],
        unnamedComponents: "arrow-function",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
};
