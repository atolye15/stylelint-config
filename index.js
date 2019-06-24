module.exports = {
  "extends": ["stylelint-config-sass-guidelines"],
  "plugins": [
    "stylelint-declaration-strict-value",
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-order",
    "stylelint-scss",
    "stylelint-high-performance-animation",
    "stylelint-no-px"
  ],
  "rules": {
    "function-calc-no-invalid": true,
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "at-rule-blacklist": ["extend", "debug"],
    "font-weight-notation": "numeric",
    "font-family-name-quotes": "always-where-recommended",
    "max-nesting-depth": [
      3,
      {
        "ignoreAtRules": ["each", "if", "else", "media", "supports", "include"]
      }
    ],
    "no-duplicate-selectors": true,
    "selector-max-specificity": "0,3,0",
    "selector-max-class": 3,
    "selector-max-attribute": 2,
    "selector-class-pattern": null,
    "selector-attribute-quotes": "always",
    "selector-max-universal": 1,
    "declaration-no-important": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-no-duplicate-properties": true,
    "declaration-property-value-blacklist": {
      "/^border/": ["none"],
      "/^transition/": ["/all/"],
      "/.+/": ["initial"]
    },
    "plugin/declaration-block-no-ignored-properties": true,
    "plugin/no-low-performance-animation-properties": true,
    "meowtec/no-px": [
      true,
      {
        "ignoreFunctions": ["em", "px-to-rem"]
      }
    ],
    "scale-unlimited/declaration-strict-value": [
      ["color", "z-index"],
      {
        "ignoreKeywords": ["currentColor", "transparent", "inherit"]
      }
    ],
    "order/properties-alphabetical-order": null,
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
      { "unspecified": "bottomAlphabetical" }
    ]
  }
}
