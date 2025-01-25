import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import eslintPluginImport from "eslint-plugin-import";

export default [
    {
        files: ["**/*.ts"],
        ignores: ["node_modules/", "dist/", "prisma/"],
        languageOptions: {
            parser: typescriptParser,
            sourceType: "module",
        },
        plugins: {
            prettier: eslintPluginPrettier,
            "@typescript-eslint": typescriptEslint,
            import: eslintPluginImport,
        },
        rules: {
            "prettier/prettier": "error",
            "@typescript-eslint/no-unused-vars": ["warn"],
            "import/order": [
                "error",
                {
                    groups: ["builtin", "external", "internal"],
                    alphabetize: { order: "asc", caseInsensitive: true },
                },
            ],
            "no-console": "warn",
        },
    },
];