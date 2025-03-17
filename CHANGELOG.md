# Changelog

## [6.0.0](https://github.com/atolye15/stylelint-config/compare/v5.1.0...v6.0.0) (2025-03-17)


### ⚠ BREAKING CHANGES

* `prettier` should be installed

### Features

* implement prettier and remove conflicting rules ([e6904e4](https://github.com/atolye15/stylelint-config/commit/e6904e49cc31893c3bd35c767dc7c68d50c3c7ff))

## [5.1.0](https://github.com/atolye15/stylelint-config/compare/v5.0.1...v5.1.0) (2025-03-13)


### build

* upgrade dependencies ([4ed252e](https://github.com/atolye15/stylelint-config/commit/4ed252eef3d610cee6a87fdaf1a0b1d952831460))

## [5.0.1](https://github.com/atolye15/stylelint-config/compare/v5.0.0...v5.0.1) (2024-07-25)


### Refactors

* remove deprecated rule and use the new one ([f9b04e9](https://github.com/atolye15/stylelint-config/commit/f9b04e9adc38a4485fa2b5670b066b6e9f3d6d29))

## [5.0.0](https://github.com/atolye15/stylelint-config/compare/v4.1.3...v5.0.0) (2024-07-01)


### build

* upgrade dependencies ([5cd42f7](https://github.com/atolye15/stylelint-config/commit/5cd42f7bf4c0afae49b8053f71790c71c51ab159))


### Refactors

* add missing peer dependency postcss ([2c908c7](https://github.com/atolye15/stylelint-config/commit/2c908c7765380288ffea9ffc87f656d64164940f))

## [4.1.3](https://github.com/atolye15/stylelint-config/compare/v4.1.2...v4.1.3) (2023-11-03)


### Bug Fixes

* fix the rule load-no-partial-leading-underscore not found ([0dfe398](https://github.com/atolye15/stylelint-config/commit/0dfe398aca68193cd9cffaea445588df1a043e7c))

## [4.1.2](https://github.com/atolye15/stylelint-config/compare/v4.1.1...v4.1.2) (2023-11-01)


### Bug Fixes

* remove deprecated rule and use with the new one ([7e56c65](https://github.com/atolye15/stylelint-config/commit/7e56c65fc3aea4678fae88e1c61fade06225a18a))

## [4.1.1](https://github.com/atolye15/stylelint-config/compare/v4.1.0...v4.1.1) (2023-10-30)


### Bug Fixes

* fix selector-class-pattern does not match BEM notation ([765704d](https://github.com/atolye15/stylelint-config/commit/765704dc35ec5028dcd8e1380ee7d9ee396f936f))
* fix stylelint complains about :global selector ([c722ec3](https://github.com/atolye15/stylelint-config/commit/c722ec3d78e995fcdd83513fd031f8a0e13a8f6a))


### Refactors

* disable scss/comment-no-empty rule ([d2bf0d9](https://github.com/atolye15/stylelint-config/commit/d2bf0d942eb5251411723e72fbcebed56b6d21f3))

## [4.1.0](https://github.com/atolye15/stylelint-config/compare/v4.0.1...v4.1.0) (2023-10-30)


### Refactors

* allow to set initial as a value ([70cb233](https://github.com/atolye15/stylelint-config/commit/70cb233838a8d5c9ae23a3c05906c4986214ac78))
* use stylelint-config-standard-scss directly ([69e87f5](https://github.com/atolye15/stylelint-config/commit/69e87f5005c7747ba7a4377e9b4c57430e74abf1))

## [4.0.1](https://github.com/atolye15/stylelint-config/compare/v4.0.0...v4.0.1) (2023-08-29)


### build

* upgrade dependencies ([64dd353](https://github.com/atolye15/stylelint-config/commit/64dd353ca84bb82ccaf3f5a724a88501740db8b8))

## [4.0.0](https://github.com/atolye15/stylelint-config/compare/v3.0.1...v4.0.0) (2023-02-13)


### ⚠ BREAKING CHANGES

* See https://github.com/stylelint/stylelint/blob/main/docs/migration-guide/to-15.md#deprecated-stylistic-rules
* See https://github.com/stylelint/stylelint/releases/tag/15.0.0

### build

* upgrade peer dependency stylelint to 15.0.0 ([21af576](https://github.com/atolye15/stylelint-config/commit/21af57688763105fc9e6f4d1cb5afc1d1fc6ced9))


### Refactors

* remove deprecated rules ([6ed0c3d](https://github.com/atolye15/stylelint-config/commit/6ed0c3df164ae34075135bc37db87d3cfb3389c5))

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
