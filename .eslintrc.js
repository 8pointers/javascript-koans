module.exports = {
    env: {
        browser: true,
        es6: true,
        jasmine: true
    },
    extends: 'eslint:recommended',
    globals: {
      jQuery: false,
      sinon: false,
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
