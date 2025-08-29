import { defineConfig } from "eslint/config";

import configCore from "./eslint/core.js";

export default defineConfig([
  configCore,
  {
    rules: {
      "import-x/no-named-as-default-member": "off",
    },
  },
]);
