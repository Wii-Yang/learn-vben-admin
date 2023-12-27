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
