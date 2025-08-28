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

```json
{
  "prettier": "@tractorbeamai/style-guide/prettier"
}
```

## ESLint

> Note: ESLint is a peer-dependency of this package, and should be installed at the root of your project.
>
> See: https://eslint.org/docs/latest/use/getting-started

This ESLint config is designed to be composable and uses the new [flat config format](https://eslint.org/docs/latest/use/configure/configuration-files).

We provide an `auto` configuration that includes sensible defaults for most projects:

- `auto` (recommended for most projects)

The following individual configs are also available:

- `base`
- `browser`
- `jsdoc`
- `json`
- `node`
- `prettier`
- `react`
- `regexp`
- `typescript` (requires `typescript` to be installed)
- `vitest`
- `zod`

All configs can be imported from `@tractorbeamai/style-guide/eslint`.

### Recommended: Auto Configuration

For most projects, we recommend using the `auto` configuration which includes a sensible set of defaults:

```js
import { auto } from '@tractorbeamai/style-guide/eslint';

export default auto;
```

### Manual Configuration

For more control, you can compose your own configuration. For example, to use the shared ESLint config(s) in a React project, create an `eslint.config.js` file:

```js
import { browser, prettier, react, typescript } from '@tractorbeamai/style-guide/eslint';

export default [
  ...browser,
  ...react,
  ...typescript,
  ...prettier,
];
```

### Configuring ESLint for TypeScript

Our TypeScript configuration follows the [typescript-eslint recommended practices](https://typescript-eslint.io/users/configs). Some of the rules enabled in the TypeScript config require additional type information, so you'll need to provide the path to your `tsconfig.json` file.

#### Projects Without Type Checking

For projects that don't need typed linting, our `auto` configuration includes the equivalent of `recommended` + `stylistic`:

```js
import { auto } from '@tractorbeamai/style-guide/eslint';

export default auto;
```

#### Projects With Type Checking

For projects that enable typed linting, you'll need to configure the parser options:

```js
import { node, typescript, prettier } from '@tractorbeamai/style-guide/eslint';
import { resolve } from 'node:path';

const project = resolve(process.cwd(), 'tsconfig.json');

export default [
  ...node,
  ...typescript,
  ...prettier,
  {
    languageOptions: {
      parserOptions: {
        project,
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          project,
        },
      },
    },
  },
];
```

> **Note**: Our TypeScript configuration includes rules that require type information (equivalent to `recommended-type-checked` + `stylistic-type-checked`). This provides more comprehensive linting but requires the `parserOptions.project` configuration above.
>
> **Performance Tip**: Type-checked rules can be slower on large projects. If you experience performance issues, consider using only our base configurations without the TypeScript config, or configure TypeScript rules to run only on specific file patterns.

### Configuring custom components for `jsx-a11y`

It's common practice for React apps to have shared components like `Button`, which wrap native elements. You can pass this information along to `jsx-a11y` via the `components` setting:

```js
import { browser, react, prettier } from '@tractorbeamai/style-guide/eslint';

export default [
  ...browser,
  ...react,
  ...prettier,
  {
    settings: {
      'jsx-a11y': {
        components: {
          Article: 'article',
          Button: 'button',
          Image: 'img',
          Input: 'input',
          Link: 'a',
          Video: 'video',
        },
      },
    },
  },
];
```

### Scoped configuration with file patterns

ESLint configs can be scoped to include/exclude specific paths. This ensures that rules don't "leak" into places where those rules don't apply:

```js
import { node, vitest, prettier } from '@tractorbeamai/style-guide/eslint';

export default [
  ...node,
  ...prettier,
  {
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    ...vitest,
  },
];
```

## TypeScript

This style guide provides TypeScript configs optimized for Node.js 22+. The following config is available:

| Node.js Version | TypeScript Config                                 |
| --------------- | ------------------------------------------------- |
| v22+            | `@tractorbeamai/style-guide/typescript/node22` |

To use the shared TypeScript config, set the following in `tsconfig.json`:

```json
{
  "extends": "@tractorbeamai/style-guide/typescript/node22"
}
```

The base TypeScript config is also available as `@tractorbeamai/style-guide/typescript` which only specifies a set of general rules. You should inherit from this file when setting custom `lib`, `module`, `target`, and `moduleResolution` settings.