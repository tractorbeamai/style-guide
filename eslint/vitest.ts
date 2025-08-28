import pluginVitest from "@vitest/eslint-plugin";
import tseslint from "typescript-eslint";

export default tseslint.config(pluginVitest.configs.all);
