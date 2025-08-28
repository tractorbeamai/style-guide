import configPrettier from "eslint-config-prettier/flat";
import tseslint from "typescript-eslint";

export default tseslint.config(configPrettier);
