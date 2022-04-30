// https://github.com/vuejs/eslint-plugin-vue/blob/master/.eslintrc.js
// https://eslint.org/docs/rules/
// https://runebook.dev/ko/docs/eslint/rules/indent

module.exports = {
 root : true,
  env: {
      browser: true,
      es2021: true
  },
  parserOptions: {
    parser : 'babel-eslint'
  },
  extends: [
      "standard",
      "plugin:vue/essential"
  ],
  plugins: [
      "vue"
  ],
  rules: {
    'immport/no-webpack-loader-systax' : 'off',
    'no-new' : 'off',
    'generator-star-spacing' : 'off',
    'eol-last' : 'off',
    'curly' : 'off',
    'space-before-function-paren' : 'off',
    'space-before-blocks' : 'off',
    'key-spacing' : 'off',
    'keyword-spacing' : 'off',
    'semi': ['error', 'never'],
    'no-trailing-spaces' :  ["error", { "ignoreComments": true }],
    'one-var' : ['error', { separateRequires: true, var: 'always' }],
    'no-multiple-empty-lines' : 'off',
    'object-curly-spacing': ['error','always',{'arraysInObjects' : false, 'objectsInObjects' : true}],
    'no-sequences' : 'off',
    'indent' : ['error', 2,
      {
        'ArrayExpression' : 1,
        'ObjectExpression' : 1,
        'SwitchCase' : 1
      }
    ],
    'operator-linebreak' : ['error', 'before'],
    'spaced-comment' : 'off',
    'no-sequences' : 'off',
    "vue/no-unused-components": "off"


  }
}
