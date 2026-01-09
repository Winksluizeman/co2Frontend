import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended,

    {
        files: ["cypress/**/*.cy.js"],
        languageOptions: {
            globals: {
                ...globals.browser,
                cy: "readonly",
                describe: "readonly",
                it: "readonly",
                beforeEach: "readonly",
                context: "readonly"
            }
        }
    }
];
