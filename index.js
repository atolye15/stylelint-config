module.exports = {
  "plugins": [
    "stylelint-declaration-strict-value",
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-order",
    "stylelint-scss",
    "stylelint-high-performance-animation",
    "stylelint-no-px"
  ],
  "rules": {
    "at-rule-blacklist": ["debug", "extend"],
    "at-rule-no-vendor-prefix": true,
    "block-no-empty": true,
    "block-opening-brace-space-before": "always",
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-named": "never",
    "color-no-invalid-hex": true,
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-single-line-max-declarations": 1,
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "declaration-no-important": true,
    "declaration-property-value-blacklist": {
      "/.+/": ["initial"],
      "/^border/": ["none"],
      "/^transition/": ["/all/"]
    },
    "font-family-name-quotes": "always-where-recommended",
    "font-weight-notation": "numeric",
    "function-calc-no-invalid": true,
    "function-calc-no-unspaced-operator": true,
    "function-comma-space-after": "always-single-line",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-parentheses-space-inside": "never-single-line",
    "function-url-quotes": "always",
    "indentation": 2,
    "length-zero-no-unit": true,
    "max-nesting-depth": [
      3,
      {
        "ignoreAtRules": ["each", "else", "if", "include", "media", "supports"]
      }
    ],
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-parentheses-space-inside": "never",
    "meowtec/no-px": [
      true,
      {
        "ignoreFunctions": ["px-to-em", "px-to-rem"]
      }
    ],
    "no-duplicate-selectors": true,
    "no-missing-end-of-source-newline": true,
    "number-leading-zero": "always",
    "number-no-trailing-zeros": true,
    "order/order": [
      [
        "custom-properties",
        "dollar-variables",
        {
          "type": "at-rule",
          "name": "extend"
        },
        {
          "type": "at-rule",
          "name": "include",
          "hasBlock": false
        },
        "declarations",
        {
          "type": "at-rule",
          "name": "include",
          "hasBlock": true
        },
        "rules"
      ]
    ],
    "order/properties-order": [
      [
        "position",
        "z-index",
        "top",
        "right",
        "bottom",
        "left",
        "display",
        "overflow",
        "width",
        "min-width",
        "max-width",
        "height",
        "min-height",
        "max-height",
        "box-sizing",
        "grid",
        "grid-area",
        "grid-template",
        "grid-template-areas",
        "grid-template-rows",
        "grid-template-columns",
        "grid-row",
        "grid-row-start",
        "grid-row-end",
        "grid-column",
        "grid-column-start",
        "grid-column-end",
        "grid-auto-rows",
        "grid-auto-columns",
        "grid-auto-flow",
        "gap",
        "grid-gap",
        "grid-row-gap",
        "grid-column-gap",
        "flex",
        "flex-basis",
        "flex-direction",
        "flex-flow",
        "flex-grow",
        "flex-shrink",
        "flex-wrap",
        "align-content",
        "align-items",
        "align-self",
        "justify-content",
        "order",
        "padding",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",
        "border",
        "border-top",
        "border-right",
        "border-bottom",
        "border-left",
        "margin",
        "margin-top",
        "margin-right",
        "margin-bottom",
        "margin-left"
      ],
      {
        "unspecified": "bottomAlphabetical"
      }
    ],
    "plugin/declaration-block-no-ignored-properties": true,
    "plugin/no-low-performance-animation-properties": true,
    "property-no-unknown": true,
    "property-no-vendor-prefix": true,
    "rule-empty-line-before": [
      "always-multi-line",
      {
        "except": ["first-nested"],
        "ignore": ["after-comment"]
      }
    ],
    "scale-unlimited/declaration-strict-value": [
      ["color", "z-index"],
      {
        "ignoreKeywords": ["currentColor", "inherit", "transparent"]
      }
    ],
    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-function-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension-blacklist": ["scss"],
    "scss/at-mixin-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/at-rule-no-unknown": true,
    "scss/dollar-variable-colon-space-after": "always",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/dollar-variable-pattern": "^[_]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/percent-placeholder-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
    "scss/selector-no-redundant-nesting-selector": true,
    "selector-attribute-quotes": "always",
    "selector-list-comma-newline-after": "always",
    "selector-max-attribute": 2,
    "selector-max-class": 3,
    "selector-max-compound-selectors": 3,
    "selector-max-id": 0,
    "selector-max-specificity": "0,3,0",
    "selector-max-universal": 1,
    "selector-no-qualifying-type": true,
    "selector-no-vendor-prefix": true,
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": true,
    "shorthand-property-no-redundant-values": true,
    "string-quotes": "single",
    "value-no-vendor-prefix": true
  }
}
