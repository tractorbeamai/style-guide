import configBase from "./_base.js";
import configJsdoc from "./jsdoc.js";
import configJson from "./json.js";
import configPrettier from "./prettier.js";
import configRegexp from "./regexp.js";
import configTypescript from "./typescript.js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  configBase,
  configJsdoc,
  configJson,
  configPrettier,
  configRegexp,
  configTypescript,
);
