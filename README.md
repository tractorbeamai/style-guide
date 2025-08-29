# Tractorbeam Style Guide

## Introduction

This repository is the home of Tractorbeam's style guide, which includes configs for popular linting and styling tools.

The following configs are available, and are designed to be used together.

- [Prettier](#prettier)
- [ESLint](#eslint)
- [TypeScript](#typescript)

## Installation

All of our configs are contained in one package, `@tractorbeamai/style-guide`. To install:

```sh
# If you use pnpm (recommended)
pnpm add --save-dev @tractorbeamai/style-guide

# If you use npm
npm i --save-dev @tractorbeamai/style-guide

# If you use Yarn
yarn add --dev @tractorbeamai/style-guide
```

Some of our ESLint configs require peer dependencies. We'll note those alongside the available configs in the [ESLint](#eslint) section.

## Prettier

> Note: Prettier is a peer-dependency of this package, and should be installed at the root of your project.
>
> See: https://prettier.io/docs/en/install.html

To use the shared Prettier config, set the following in `package.json`.

````json
{
  "prettier": "@tractorbeamai/style-guide/prettier"
}

### Customizing Prettier

You can customize the Prettier config by creating a `prettier.config.mjs` file in your project root.

```js
import tractorbeamPrettierConfig from "@tractorbeamai/style-guide/prettier";

/**
 * @type {import("prettier").Config}
 */
const config = {
  ...tractorbeamPrettierConfig,
  semi: false,
};

export default config;
````

## ESLint

> Note: ESLint is a peer-dependency of this package, and should be installed at the root of your project.
>
> See: https://eslint.org/docs/latest/use/getting-started

This ESLint config is designed to be composable and uses the new [flat config format](https://eslint.org/docs/latest/use/configure/configuration-files).

We provide a `core` configuration that includes sensible defaults for all projects:

- `core` (recommended for all projects)

We also provide environment-specific configs for Browser, Node.js, and Vitest projects. Usually, you'll layer one of these on top of the `core` config.

- `browser`
- `node`
- `vitest`

When using specific tools, you may also want to add one of the following configs:

- `jsdoc` (included in `core`)
- `json` (included in `core`)
- `prettier` (included in `core`)
- `react`
- `regexp` (included in `core`)
- `typescript` (requires `typescript` to be installed)
- `zod`

Lastly, when using this config with Prettier, you can add the `prettier` config to your ESLint config to disable any ESLint rules that would conflict with Prettier. This is included in the `core` config, but you may want to add it to the end of your config to ensure it's the last rule applied if you're doing additional customizations or layering other third-party configs on top of `core`.

All configs can be imported from `@tractorbeamai/style-guide/eslint`.

### Scoped configuration with file patterns

ESLint configs can be scoped to include/exclude specific paths. This ensures that rules don't "leak" into places where those rules don't apply:

```js
import { node, prettier, vitest } from "@tractorbeamai/style-guide/eslint";
import tseslint from "typescript-eslint";

export default tseslint.config(...node, ...prettier, {
  files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  ...vitest,
});
```

## TypeScript

This style guide provides TypeScript configs optimized for Node.js 22+. The following config is available:

| Node.js Version | TypeScript Config                              |
| --------------- | ---------------------------------------------- |
| v22+            | `@tractorbeamai/style-guide/typescript/node22` |

To use the shared TypeScript config, set the following in `tsconfig.json`:

```json
{
  "extends": "@tractorbeamai/style-guide/typescript/node22"
}
```

The base TypeScript config is also available as `@tractorbeamai/style-guide/typescript` which only specifies a set of general rules. You should inherit from this file when setting custom `lib`, `module`, `target`, and `moduleResolution` settings.
