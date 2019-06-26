# stylelint-config

> Atölye15 shareable config for stylelint.

Configuration rules to ensure your CSS code is compliant with Atölye15's code style.

## Installation

```console
yarn add @atolye15/stylelint-config --dev

# Or with npm:

npm install @atolye15/stylelint-config --save-dev
```

## Usage

Set your stylelint config to:

```json
{
  "extends": "@atolye15/stylelint-config"
}
```

### Extending the config

Simply add a `"rules"` key to your config and add your overrides there.

For example, to change the `indentation` to tabs and turn off the `number-leading-zero` rule:

```json
{
  "extends": "@atolye15/stylelint-config",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null
  }
}
```

## [Changelog](https://github.com/atolye15/stylelint-config/releases)

## [License](LICENSE)
