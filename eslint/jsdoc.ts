import pluginJsdoc from "eslint-plugin-jsdoc";
import tseslint from "typescript-eslint";

export default tseslint.config({
  ...pluginJsdoc.configs["flat/recommended-typescript"],
  files: ["**/*.{js,jsx,ts,tsx,mjs}"],
});
