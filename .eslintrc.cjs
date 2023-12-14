module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-recommended",
       
    ],
    "overrides": [
    ],
     "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "@typescript-eslint/parser" ,
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
    }
}
