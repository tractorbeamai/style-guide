import pluginZod from "eslint-plugin-zod";
import pluginImportZod from "eslint-plugin-import-zod";
import tseslint from "typescript-eslint";

export default tseslint.config(pluginImportZod.configs.recommended, {
  plugins: {
    zod: pluginZod,
  },
  rules: {
    "zod/prefer-enum": "error",
    "zod/require-strict": "error",
    "zod/no-any": "warn",
  },
});
