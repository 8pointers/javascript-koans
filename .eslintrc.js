module.exports = {
    env: {
        browser: true,
        es6: true,
        jasmine: true
    },
    extends: 'eslint:recommended',
    globals: {
      SAMURAIPRINCIPLE: true,
      __: false
    },
    rules: {
        indent: [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        quotes: [
            'error',
            'single'
        ],
        semi: [
            'error',
            'always'
        ]
    }
};
