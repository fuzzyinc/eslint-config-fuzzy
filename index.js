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
    "no-else-return": 0,
    "comma-dangle": [1, "always-multiline"],
    "no-underscore-dangle": 0,
    "max-len": [1, 180, 4],
    "arrow-body-style": [0],
    "import/no-unresolved": [0],
    "semi": [2, "never"],
    "react/jsx-no-bind": [0],
    "react/prefer-stateless-function": 0,
    "react/jsx-closing-bracket-location": [2, {selfClosing: "after-props"}]
  }
}
