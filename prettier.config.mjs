import configPrettier from "./prettier/index.mjs";

export default {
  ...configPrettier,
  importOrder: [
    "",
    "<BUILTIN_MODULES>",
    "",
    "^eslint$",
    "^eslint/config$",
    "^globals$",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^[.]",
  ],
};
