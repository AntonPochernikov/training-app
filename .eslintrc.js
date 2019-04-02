module.exports = {
  parser: "babel-eslint",
  plugins: [
    "react",
    "babel",
    "jest"
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    "plugin:react/recommended",
    "airbnb-base"
  ],
  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      version: "detect",
      flowVersion: "0.53"
    },
    propWrapperFunctions: [
      { property: "freeze", object: "Object" },
      { property: "myFavoriteWrapper" }
    ]
  },
  rules: {
    "linebreak-style": 0,
    "line-break-style": 0,
    "react/prop-types": 0,
    "no-console": 0,
    "max-len": ["warn", { code: 120 }],
    "import/extensions": 0,
    "operator-linebreak": ["error", "after"]
  }
};
