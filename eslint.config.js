import js from "@eslint/js";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  {
      ...js.configs.recommended,
      plugins: {
        "simple-import-sort": simpleImportSort,
      },
      rules: {
          "no-unused-vars": "error",
          "no-undef": "error",
          "simple-import-sort/imports": "error",
      }
  }
];