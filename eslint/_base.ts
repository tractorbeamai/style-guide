import js from "@eslint/js";
import pluginImportX from "eslint-plugin-import-x";
import pluginUnicorn from "eslint-plugin-unicorn";
import tseslint from "typescript-eslint";

export default tseslint.config({
  files: ["**/*.{js,jsx,ts,tsx,mjs}"],
  extends: [
    js.configs.all,
    pluginUnicorn.configs.recommended,
    pluginImportX.flatConfigs.recommended,
  ],
  rules: {
    yoda: ["error", "never"],
    "sort-imports": "off",
    "sort-keys": "off",
  },
});
