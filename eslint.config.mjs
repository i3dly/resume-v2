import jsEslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import onlyWarnEslint from "eslint-plugin-only-warn";
import eslintPluginPrettier from "eslint-plugin-prettier";
import pluginReactHooks from "eslint-plugin-react-hooks";
import tsEslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config} */
const js = {
  ...jsEslint.configs.recommended,
  rules: {
    ...jsEslint.configs.recommended.rules,
    "no-extra-boolean-cast": "off",
  },
};

/** @type {import('eslint').Linter.Config} */
const onlyWarn = { plugins: { onlyWarn: onlyWarnEslint } };



/** @type {import("eslint").Linter.Config} */
const prettier = {
    ...eslintConfigPrettier,
    plugins: {
        ...eslintConfigPrettier.plugins,
        prettier: eslintPluginPrettier,
    },
    rules: {
        ...eslintConfigPrettier.rules,
        "prettier/prettier": ["warn", { printWidth: 100, tabWidth: 4 }],
    },
};


/** @type {import("eslint").Linter.Config} */
const reactHooks = {
  plugins: { "react-hooks": pluginReactHooks },
  settings: { react: { version: "detect" } },
  rules: {
    ...pluginReactHooks.configs.recommended.rules,
    // React scope no longer necessary with new JSX transform.
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  },
};

/** @type {import("eslint").Linter.Config[]} */
const ts = [
  ...tsEslint.configs.recommended,
  {
    // Override specific rules
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unnecessary-type-constraint": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  }
];


/** @type {import('eslint').Linter.Config[]} */
export default [
    js,
    ...ts,
    onlyWarn,
    reactHooks,
    prettier,
];
