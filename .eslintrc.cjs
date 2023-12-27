module.exports = {
  // 根配置
  root: true,
  // 指定环境
  env: {
    // 浏览器全局变量
    browser: true,
    // Node.js 全局变量和 Node.js 范围
    node: true,
    // 启用除模块之外的所有 ECMAScript 6 功能
    es6: true,
  },
  // 解析器
  parser: 'vue-eslint-parser',
  // 解析器配置
  parserOptions: {
    // 解析器
    parser: '@typescript-eslint/parser',
    // 指定要使用的 ECMAScript 语法版本
    ecmaVersion: 2020,
    // 源类型
    sourceType: 'module',
    jsxPragma: 'React',
    // 附加语言功能
    ecmaFeatures: {
      // 启用JSX
      jsx: true,
    },
    // 项目
    project: './tsconfig.*?.json',
    // 创建默认程序
    createDefaultProgram: false,
    // 额外的文件扩展名
    extraFileExtensions: ['.vue'],
  },
  // 插件
  plugins: ['vue', '@typescript-eslint', 'import'],
  // 延伸
  extends: [
    // eslint 推荐规则
    'eslint:recommended',
    // vue3 推荐规则
    'plugin:vue/vue3-recommended',
    // typescript 推荐规则
    'plugin:@typescript-eslint/recommended',
    // prettier 推荐规则
    'plugin:prettier/recommended',
  ],
  // 规则
  rules: {
    /** ESLint Rules **/
    // 禁止未使用的变量
    'no-unused-vars': 'off',
    // 禁止在 case 子句中使用词法声明
    'no-case-declarations': 'off',
    // 在定义变量之前禁止使用变量
    'no-use-before-define': 'off',
    // 在函数左括号之前强制执行一致的间距
    'space-before-function-paren': 'off',
    // 禁止使用未声明的变量
    'no-undef': 'off',

    /** eslint-plugin-import Rules **/
    // 导入语句放最前
    'import/first': 'error',
    // 强制在最后一个导入语句或require调用之后有一个或多个空行
    'import/newline-after-import': 'error',
    // 相同路径只能导入一次
    'import/no-duplicates': 'error',

    /** @typescript-eslint Rules **/
    // 禁止使用未使用的变量
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    // 禁用 @ts-ignore
    '@typescript-eslint/ban-ts-ignore': 'off',
    // 禁用 @ts-<directive>
    '@typescript-eslint/ban-ts-comment': 'off',
    // 禁用类型
    '@typescript-eslint/ban-types': 'off',
    // 要求函数和类方法有显式返回类型
    '@typescript-eslint/explicit-function-return-type': 'off',
    // 禁用 any 类型
    '@typescript-eslint/no-explicit-any': 'off',
    // 禁用 require 导入语句
    '@typescript-eslint/no-var-requires': 'off',
    // 禁止空函数
    '@typescript-eslint/no-empty-function': 'off',
    // 禁止在定义变量之前使用变量
    '@typescript-eslint/no-use-before-define': 'off',
    // 禁止使用后缀运算符 ! 进行非空断言
    '@typescript-eslint/no-non-null-assertion': 'off',
    // 要求导出函数和类的公共类方法显式返回和参数类型
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    /** eslint-plugin-vue Rules **/
    // 防止<script setup>使用的变量被<template>标记为未使用
    'vue/script-setup-uses-vars': 'error',
    // 禁止在组件定义中使用保留名称
    'vue/no-reserved-component-names': 'off',
    // 强制自定义事件名称的特定大小写
    'vue/custom-event-name-casing': 'off',
    // 强制属性的顺序
    'vue/attributes-order': 'off',
    // 强制每个组件单独一个文件
    'vue/one-component-per-file': 'off',
    // 要求或不允许在标签的右括号之前换行
    'vue/html-closing-bracket-newline': 'off',
    // 强制每行的最大属性数
    'vue/max-attributes-per-line': 'off',
    // 需要在多行元素的内容之前和之后换行
    'vue/multiline-html-element-content-newline': 'off',
    // 需要在单行元素的内容之前和之后换行
    'vue/singleline-html-element-content-newline': 'off',
    // 对模板中的自定义组件强制执行属性命名样式
    'vue/attribute-hyphenation': 'off',
    // 需要 props 的默认值
    'vue/require-default-prop': 'off',
    // 需要 emits 名称由 $emit() 以下条件触发的选项
    'vue/require-explicit-emits': 'off',
    // 强制执行自关闭风格
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    // 要求组件名称始终为多字
    'vue/multi-word-component-names': 'off',
    // <transition>的内容需要控制显示
    'vue/require-toggle-inside-transition': 'off',
  },
  // 全局变量
  globals: { defineOptions: 'readonly' },
}
