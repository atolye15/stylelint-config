# Changelog

## [3.0.1](https://github.com/atolye15/stylelint-config/compare/v3.0.0...v3.0.1) (2023-02-10)


### Refactors

* removed the rule function-no-unknown because it causes many problems in scss ([71b7829](https://github.com/atolye15/stylelint-config/commit/71b78293c4a02d97476c50b2fe04c11780b6b670))
* removed the rule scss/comment-no-empty because it does not work as expected ([e89a3e3](https://github.com/atolye15/stylelint-config/commit/e89a3e366430e65dab4aea7b6e46335509770e14))

## [3.0.0](https://github.com/atolye15/stylelint-config/compare/v2.0.2...v3.0.0) (2023-02-09)


### ⚠ BREAKING CHANGES

* remove the rule `stylelint-declaration-block-no-ignored-properties` if you are using it
* remove the role `meowtec/no-px` if you are using it
* remove the rule `scale-unlimited/declaration-strict-value` if you are using it

### Features

* add new up-to-date rules ([479271b](https://github.com/atolye15/stylelint-config/commit/479271b6a3a900e0b41958c4f771d436262b4088))
* add/update some of the rules ([f1131a8](https://github.com/atolye15/stylelint-config/commit/f1131a8ef8f69509b923a94a05486bc746a93627))


### Refactors

* allow defining private variable, mixin, function and placeholder ([afd3687](https://github.com/atolye15/stylelint-config/commit/afd368773f8027ad94e47416c72c810195f9bd36))
* remove stylelint-declaration-strict-value ([3a38eab](https://github.com/atolye15/stylelint-config/commit/3a38eabfe7346c6d89b8b2143ab4c2b8f0da7d3f))
* remove stylelint-no-px ([ddecf36](https://github.com/atolye15/stylelint-config/commit/ddecf36be5579b4c7877dd53372c23a3c80f84aa))
* stylelint-declaration-block-no-ignored-properties removed because it is not very much needed ([92b0c2f](https://github.com/atolye15/stylelint-config/commit/92b0c2f74f244c52a916b1699a08e8a1e073ed76))
* update gitignore to ignore some files ([210d866](https://github.com/atolye15/stylelint-config/commit/210d86625d1875dfee412f4a958cad11d88960de))
