import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  /*
    `next lint` applied these ignores implicitly, but it is deprecated and is
    removed in Next 16, so package.json now calls the ESLint CLI directly. The
    CLI has no such defaults — without this block it lints Next's own generated
    output (.next/types, next-env.d.ts) and reports hundreds of errors in code
    nobody wrote.
  */
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "node_modules/**",
      "next-env.d.ts",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
