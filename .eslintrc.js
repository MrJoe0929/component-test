/**
 * @Description: 
 * @Author: qiaowb
 * @Date: 2021-08-09 10:13:57
 * @LastEditors: qiaowb
 */
module.exports = {
    'parser': 'babel-eslint',
    'env': {
        'browser': true,
        'node': true,
        'es6': true
    },
    'globals': {
        'process': true,
        'require': true,
        'module': true,
        '__dirname': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        "plugin:react-hooks/recommended"
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module',
        'allowImportExportEverywhere': false, // 是否允许导入和导出声明出现在任何位置
        'codeFrame': true //可以设置为false以禁用报告程序中的代码框
    },
    'plugins': [
        'react',
        "react-hooks"
    ],
    'settings': {
        'react': {
            'version': 'detect'
        }
    },
    'rules': {
        'strict': 0,
        'no-unused-vars': ['error', { 'vars': 'all', 'args': 'none', 'ignoreRestSiblings': false }], // 不校验函数参数是否使用，回调函数参数不能避免不使用
        'indent': [
            'error',
            4,
            { "SwitchCase": 1 }
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'jsx-quotes': ['error', 'prefer-double'],
        'semi': [
            'error',
            'always'
        ],
        // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，  
        // always-multiline：多行模式必须带逗号，单行模式不能带逗号  
        'comma-dangle': [2, 'never'],
        'no-useless-escape': 0, // 禁用不必要的转义，不启动，开启后会对正则表达式中的转义字符校验必要性
        'eqeqeq': ['error', 'smart'], // 使用===和!==
        'no-console': 0,
        'no-dupe-args': 2,
        'no-func-assign': 2,
        'react/prop-types': 2,
        'react/no-string-refs': 0, // ref允许使用字符串
        'react/display-name': [0, { 'ignoreTranspilerName': false }], // DisplayName的校验，希望有，但目前有class外变量里的render方法出错
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
    }
};