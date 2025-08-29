import tseslint from "typescript-eslint";

import auto from "./eslint/auto.js";

export default tseslint.config(auto, {
  rules: {
    "import-x/no-named-as-default-member": "off",
  },
});
