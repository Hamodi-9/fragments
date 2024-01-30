module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node": true,
        "jest":true
    },
    globals: {
        process: 'readonly',
    },
    "extends": "eslint:recommended",
    parserOptions : {
        ecmaVersion:13
    },
    "overrides": [
        {
            "env": {
                "es2021": true,
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
    }
}
