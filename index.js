// 0 = disabled
// 1 = warn
// 2 = error
module.exports = {
  "extends": [
    "airbnb",
    "plugin:ava/recommended"
  ],
  "parser": "babel-eslint",
  "plugins": [
    "ava"
  ],
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "ecmaFeatures": {
    "jsx": true,
    "es6": true,
    "classes": true
  },
  "rules": {
    "arrow-body-style": [0],
    "comma-dangle": [1, "always-multiline"],
    "import/no-unresolved": [0],
    "max-len": [1, 180, 4],
    "no-else-return": 0,
    "no-use-before-define": 0,
    "no-multiple-empty-lines": [2, { "max": 1, "maxBOF": 0, "maxEOF": 1 }],
    "no-underscore-dangle": 0,
    "react/jsx-closing-bracket-location": [2, {selfClosing: "after-props"}],
    "react/jsx-no-bind": [0],
    "react/prefer-stateless-function": 0,
    "semi": [2, "never"]
  }
}
