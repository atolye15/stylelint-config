# stylelint-config-atolye15

> Atölye15 shareable config for stylelint.

Configuration rules to ensure your CSS code is compliant with Atölye15's code style.

## Installation

```console
yarn add stylelint-config-atolye15

# Or with yarn:

npm install stylelint-config-atolye15
```

## Usage

Set your stylelint config to:

```json
{
  "extends": "stylelint-config-atolye15"
}
```

### Extending the config

Simply add a `"rules"` key to your config and add your overrides there.

For example, to change the `indentation` to tabs and turn off the `number-leading-zero` rule:

```json
{
  "extends": "stylelint-config-atolye15",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null
  }
}
```

## [Changelog](https://github.com/atolye15/stylelint-config-atolye15/releases)

## [License](LICENSE)
