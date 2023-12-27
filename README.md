## 项目创建流程

### 一、使用 vite 创建项目

```shell
pnpm create vite my-vue-app --template vue-ts
```

### 二、配置 TS

#### 1、删除 tsconfig.node.json 文件

#### 2、修改 tsconfig.json

```text
{
  // 编译器选项
  "compilerOptions": {
    /** Type Checking **/
    // 在表达式和声明上有隐含的 any类型时报错
    "noImplicitAny": false,
    // 当处理使用继承的类时，子类可能会与在基类中重命名时重载的函数“不同步”
    "noImplicitOverride": true,
    // 报告未使用的局部变量的错误
    "noUnusedLocals": true,
    // 报告函数中未使用参数的错误
    "noUnusedParameters": false,
    // 严格标志可以实现广泛的类型检查行为，从而为程序的正确性提供更强的保证
    "strict": true,
    // 允许将catch子句中变量的类型从any更改为unknown
    "useUnknownInCatchVariables": false,

    /** Modules **/
    // 基准目录
    "baseUrl": ".",
    // 设置程序的模块系统
    "module": "ESNext",
    // 指定模块解析策略
    "moduleResolution": "node",
    // 一些将模块导入重新映射到相对于 baseUrl 路径的配置
    "paths": {
      "@/*": ["src/*"],
      "#/*": ["types/*"]
    },
    // 允许导入扩展名为“.json”的模块
    "resolveJsonModule": true,
    // 默认情况下，所有 可见 的 ”@types” 包都将包含在你的编译过程中
    "types": ["vite/client"],

    /** Emit **/
    // 生成相应的 .d.ts文件
    "declaration": false,
    // 为.d.ts文件生成源映射，这些文件映射回原始的.ts源文件
    "declarationMap": false,
    // 将代码与sourcemaps生成到一个文件中，要求同时设置了 --inlineSourceMap或 --sourceMap属性
    "inlineSources": false,
    // 当转换为 JavaScript 时，忽略所有 TypeScript 文件中的注释
    "removeComments": true,

    /** JavaScript Support **/

    /** Editor Support **/

    /** Interop Constraints **/
    // ES 模块互操作性
    "esModuleInterop": true,
    // TypeScript遵循其运行的文件系统的区分大小写规则
    "forceConsistentCasingInFileNames": true,
    // 将每个文件作为单独的模块（与“ts.transpileModule”类似）
    "isolatedModules": true,

    /** Backwards Compatibility **/

    /** Language and Environment **/
    // 启用实验性的ES装饰器
    "experimentalDecorators": true,
    // 在 .tsx文件里支持JSX： "React"或 "Preserve"
    "jsx": "preserve",
    // 编译过程中需要引入的库文件的列表
    "lib": ["ESNext", "DOM"],
    // 指定ECMAScript目标版本
    "target": "ESNext",

    /** Compiler Diagnostics **/

    /** Projects **/
    // 选项会强制执行某些约束，使得构建工具可以快速确定一个工程是否已经建立
    "composite": false,

    /** Output Formatting **/
    // 是否将过时的控制台输出保持在监视模式，而不是每次发生更改时都清除屏幕
    "preserveWatchOutput": true,

    /** Completeness **/
    // 跳过声明文件的类型检查
    "skipLibCheck": true
  },
  // 指定要包含在程序中的文件名或模式的数组
  "include": [
    "tests/**/*.ts",
    "src/**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "types/**/*.d.ts",
    "types/**/*.ts",
    "build/**/*.ts",
    "build/**/*.d.ts",
    "mock/**/*.ts",
    "vite.config.ts"
  ],
  // 指定在解析include时应跳过的文件名或模式的数组
  "exclude": ["node_modules", "dist", "**/*.js"]
}
```

### 三、安装并配置 Prettier

#### 1、安装 Prettier

```shell
pnpm add --save-dev --save-exact prettier
```

#### 2、安装`prettier-plugin-packagejson`插件

```shell
pnpm add --save-dev --save-exact prettier-plugin-packagejson
```

#### 3、创建`.prettierrc`文件

```json
{
  "plugins": ["prettier-plugin-packagejson"],
  "printWidth": 100,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "proseWrap": "never",
  "htmlWhitespaceSensitivity": "strict",
  "vueIndentScriptAndStyle": true,
  "endOfLine": "lf",
  "overrides": [
    {
      "files": ".*rc",
      "options": {
        "parser": "json"
      }
    }
  ]
}
```

#### 4、创建`.prettierignore`文件

```text
dist
.local
.output.js
node_modules

**/*.svg
**/*.sh

public
.npmrc

*-lock.yaml
```

### 四、安装并配置 ESLint

#### 1、使用一下命令安装并配置 ESLint

```shell
npm init @eslint/config
```

执行命令后选择对应项：

```text
1. How would you like to use ESLint?
   To check syntax, find problems, and enforce code style

2. What type of modules does your project use?
   JavaScript modules (import/export)

3. Which framework does your project use?
   Vue.js

4. Does your project use TypeScript?
   Yes

5. Where does your code run?
   Browser

6. How would you like to define a style for your project?
   Answer questions about your style

7. What format do you want your config file to be in?
   JavaScript

8. What style of indentation do you use?
   Spaces

9. What quotes do you use for strings?
   Single

10. What line endings do you use?
   Windows

11. Do you require semicolons?
   No

12. Would you like to install them now?
   Yes

13. Which package manager do you want to use?
   pnpm
```

#### 2、添加插件

安装 prettier 兼容插件

```shell
pnpm add --save-dev --save-exact eslint-plugin-prettier eslint-config-prettier
```

安装格式插件

```shell
pnpm add --save-dev --save-exact eslint-plugin-import vue-eslint-parser
```

#### 3、修改`.eslintrc.cjs`文件

```js
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
```

#### 4、新建`.eslintignore`文件

```text
*.sh
node_modules
*.md
*.woff
*.ttf
.vscode
.idea
dist
/public
/docs
.husky
.local
/bin
Dockerfile
package.json
```

### 五、安装并配置 Stylelint

#### 1、安装`stylelint`

```shell
pnpm add --save-dev --save-exact stylelint
```

#### 2、安装`stylelint`延伸

```shell
pnpm add --save-dev --save-exact stylelint-config-standard stylelint-config-property-sort-order-smacss
```

#### 3、安装`stylelint`插件

```shell
pnpm add --save-dev --save-exact stylelint-order stylelint-prettier
```

#### 4、安装`postcss`和`postcss`相关插件

```shell
pnpm add --save-dev --save-exact postcss postcss-html postcss-less postcss-scss
```

#### 5、安装`stylelint`相关插件

```shell
pnpm add --save-dev --save-exact stylelint-config-recommended stylelint-config-recommended-vue stylelint-config-recommended-scss stylelint-config-standard-scss
```

#### 6、新建`.stylelintrc.js`文件

```text
export default {
  // 延伸
  extends: ['stylelint-config-standard', 'stylelint-config-property-sort-order-smacss'],
  // 插件
  plugins: ['stylelint-order', 'stylelint-prettier'],
  // 覆盖
  overrides: [
    {
      files: ['**/*.(css|html|vue)'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
      extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
    },
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
      extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue/scss'],
      rule: {
        'scss/percent-placeholder-pattern': null,
      },
    },
  ],
  // 规则
  rules: {
    // 指定媒体功能范围的上下文或前缀表示法
    'media-feature-range-notation': null,
    // :not()为伪类选择器指定简单或复杂的表示法
    'selector-not-notation': null,
    // 指定@import规则的字符串或 URL 表示法
    'import-notation': null,
    // 禁止未知方法
    'function-no-unknown': null,
    // 指定类选择器的模式
    'selector-class-pattern': null,
    // 禁止未知的伪类选择器
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'deep'],
      },
    ],
    // 禁止未知的伪元素选择器
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    // 禁止未知的 at 规则
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin',
          'extend',
        ],
      },
    ],
    // 禁止空源
    'no-empty-source': null,
    // 禁止无效的命名网格区域
    'named-grid-areas-no-invalid': null,
    // 禁止较低特异性的选择器覆盖较高特异性的选择器
    'no-descending-specificity': null,
    // 禁止字体系列中缺少通用系列关键字
    'font-family-no-missing-generic-family-keyword': null,
    // 要求或禁止规则前有空行
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
      },
    ],
    // 禁止未知单位
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    // 排序
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'at-rules',
        'declarations',
        {
          type: 'at-rule',
          name: 'supports',
        },
        {
          type: 'at-rule',
          name: 'media',
        },
        'rules',
      ],
      { severity: 'error' },
    ],
  },
  // 忽略文件
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
}
```

#### 7、新建`.stylelintignore`文件

```text
dist
public
```
