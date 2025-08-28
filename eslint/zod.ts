import pluginZod from "eslint-plugin-zod";
import tseslint from "typescript-eslint";

export default tseslint.config({
  plugins: {
    zod: pluginZod,
  },
  rules: {
    "zod/prefer-enum": "error",
    "zod/require-strict": "error",
  },
});
