import globals from "globals";

import pluginN from "eslint-plugin-n";
import pluginUnicorn from "eslint-plugin-unicorn";
import tseslint from "typescript-eslint";

export default tseslint.config({
  files: ["**/*.{js,jsx,ts,tsx,mjs}"],
  extends: [pluginN.configs["flat/recommended"]],
  languageOptions: {
    globals: {
      ...globals.node,
    },
  },
  plugins: {
    unicorn: pluginUnicorn,
  },
  rules: {
    "unicorn/prefer-node-protocol": "error",
  },
});
