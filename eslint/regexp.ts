import pluginRegexp from "eslint-plugin-regexp";
import tseslint from "typescript-eslint";

export default tseslint.config({
  ...pluginRegexp.configs["flat/recommended"],
  files: ["**/*.{js,jsx,ts,tsx,mjs}"],
});
