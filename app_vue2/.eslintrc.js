module.exports = {
    "root": true,
    "env": {
      "node": true
    },
    "parserOptions": {
      "parser": "@babel/eslint-parser"
    },
    "settings": {
      "import/resolver": "webpack"
    },
    "extends": [
      "plugin:vue/vue3-essential",
      "eslint:recommended"
    ],
    "rules": {}
}