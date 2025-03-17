module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-prettier/recommended',
    'stylelint-config-prettier-scss',
  ],
  plugins: ['stylelint-order'],
  customSyntax: 'postcss-scss',
  rules: {
    'at-rule-disallowed-list': ['debug', 'extend'],
    'at-rule-no-vendor-prefix': true,
    'block-no-empty': true,
    'color-hex-length': 'short',
    'color-named': 'never',
    'color-no-invalid-hex': true,
    'custom-property-no-missing-var-function': true,
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-single-line-max-declarations': 1,
    'declaration-no-important': true,
    'declaration-property-value-disallowed-list': {
      '/^border/': ['none'],
      '/^transition/': ['/all/'],
      '/^background/': ['http:', 'https:'],
    },
    'font-family-name-quotes': 'always-where-recommended',
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'font-weight-notation': 'numeric',
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-url-quotes': 'always',
    'keyframe-block-no-duplicate-selectors': true,
    'keyframe-declaration-no-important': true,
    'length-zero-no-unit': true,
    'max-nesting-depth': [
      3,
      {
        ignoreAtRules: ['each', 'else', 'if', 'include', 'media', 'supports'],
      },
    ],
    'media-feature-name-no-unknown': true,
    'media-feature-name-no-vendor-prefix': true,
    'named-grid-areas-no-invalid': true,
    'no-descending-specificity': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-invalid-position-at-import-rule': [
      true,
      {
        ignoreAtRules: ['use', 'forward'],
      },
    ],
    'no-irregular-whitespace': true,
    'order/order': [
      [
        'custom-properties',
        'dollar-variables',
        {
          type: 'at-rule',
          name: 'extend',
        },
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: false,
        },
        'declarations',
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: true,
        },
        'rules',
      ],
    ],
    'order/properties-order': [
      [
        'position',
        'z-index',
        'top',
        'right',
        'bottom',
        'left',
        'display',
        'overflow',
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'box-sizing',
        'grid',
        'grid-area',
        'grid-template',
        'grid-template-areas',
        'grid-template-rows',
        'grid-template-columns',
        'grid-row',
        'grid-row-start',
        'grid-row-end',
        'grid-column',
        'grid-column-start',
        'grid-column-end',
        'grid-auto-rows',
        'grid-auto-columns',
        'grid-auto-flow',
        'gap',
        'grid-gap',
        'grid-row-gap',
        'grid-column-gap',
        'flex',
        'flex-basis',
        'flex-direction',
        'flex-flow',
        'flex-grow',
        'flex-shrink',
        'flex-wrap',
        'align-content',
        'align-items',
        'align-self',
        'justify-content',
        'order',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'border',
        'border-top',
        'border-right',
        'border-bottom',
        'border-left',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
      ],
      {
        unspecified: 'bottomAlphabetical',
      },
    ],
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-function-pattern': '^[_-]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/load-partial-extension': 'never',
    'scss/at-mixin-pattern': '^[_-]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/at-rule-no-unknown': true,
    'scss/comment-no-empty': null,
    'scss/declaration-nested-properties-no-divided-groups': true,
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-pattern': '^[_-]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/function-quote-no-quoted-strings-inside': true,
    'scss/function-unquote-no-unquoted-strings-inside': true,
    'scss/load-no-partial-leading-underscore': true,
    'scss/percent-placeholder-pattern': '^[_-]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/no-duplicate-mixins': true,
    'scss/no-global-function-names': true,
    'scss/selector-no-redundant-nesting-selector': true,
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': [
      '^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$',
      {
        resolveNestedSelectors: true,
        message: function expected(selectorValue) {
          return `Expected class selector "${selectorValue}" to match BEM CSS pattern https://en.bem.info/methodology/css.`;
        },
      },
    ],
    'selector-max-attribute': 2,
    'selector-max-class': 3,
    'selector-max-compound-selectors': 3,
    'selector-max-id': 0,
    'selector-max-specificity': '0,3,0',
    'selector-max-universal': 1,
    'selector-no-qualifying-type': true,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }],
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': true,
    'value-no-vendor-prefix': true,
  },
};
