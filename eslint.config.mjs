/**
 * DEVELOPMENT TOOL - ESLint Configuration
 *
 * PURPOSE: Configures ESLint for code quality and consistency checks
 * STATUS: Active - Used during development and in CI/CD
 *
 * WHAT IT DOES:
 * - Configures TypeScript linting rules
 * - Sets up React-specific linting rules
 * - Defines global variables for browser and Node.js environments
 * - Specifies which files/directories to ignore
 * - Enforces consistent code style and catches potential bugs
 *
 * NOTE: This file is NOT included in the production bundle
 * It's only used during development for code quality checks
 *
 * USAGE: Automatically used by IDEs and can be run via ESLint CLI
 */
import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2023,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        console: "readonly",
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        // Browser globals
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        localStorage: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        performance: "readonly",
        fetch: "readonly",
        Request: "readonly",
        Response: "readonly",
        Headers: "readonly",
        URL: "readonly",
        URLSearchParams: "readonly",
        WebSocket: "readonly",
        PerformanceObserver: "readonly",
        RequestInit: "readonly",
        // DOM types
        HTMLElement: "readonly",
        HTMLDivElement: "readonly",
        HTMLButtonElement: "readonly",
        HTMLParagraphElement: "readonly",
        HTMLHeadingElement: "readonly",
        HTMLInputElement: "readonly",
        HTMLTextAreaElement: "readonly",
        HTMLSelectElement: "readonly",
        HTMLFormElement: "readonly",
        HTMLSpanElement: "readonly",
        Element: "readonly",
        KeyboardEvent: "readonly",
        MouseEvent: "readonly",
        Event: "readonly",
        Blob: "readonly",
        // Node.js globals
        require: "readonly",
        module: "readonly",
        exports: "readonly",
        global: "readonly",
        // TypeScript types
        NodeJS: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
      react: react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      // TypeScript rules
      ...typescript.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/no-explicit-any": "off", // TODO: Re-enable as 'warn' and fix any types
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports" },
      ],
      "@typescript-eslint/triple-slash-reference": "off", // Next.js auto-generates these

      // React rules
      ...react.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", // Not needed with React 17+
      "react/prop-types": "off", // TypeScript handles this
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",

      // React Hooks rules
      ...reactHooks.configs.recommended.rules,

      // React Refresh - disabled for Next.js
      "react-refresh/only-export-components": "off",

      // General rules
      "no-console": "off", // Allow console statements during development
      "no-debugger": "error",
      "no-unused-vars": "off", // Use TypeScript's version instead
      "@typescript-eslint/no-unused-expressions": "off", // Disable unused expressions rule
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    ignores: [
      "src-backend/src/bundle.js",
      "src-backend/src/bundle.js.map",
      "cli.mjs",
      "**/tests/**",
      "**/__tests__/**",
      "**/src-tauri/**",
      "**/scripts/**",
      "**/dist/**",
      "**/build/**",
      "**/node_modules/**",
      "**/.tauri/**",
      "**/src/tauri/target/**",
      "**/temp/**",
      "**/*.config.js",
      "**/*.config.mjs",
      "**/*.config.ts",
      "vite-env.d.ts",
      "**/src-frontend/src/components/ui/**", // shadcn/ui components
      "**/src-frontend/src/contexts/ThemeContext.tsx", // Theme context exports constant
      "**/src-backend/src/bundle.js", // Generated bundle file
      "**/src-backend/src/**/*.js", // All JS files in TypeScript src
      "**/src-backend/src/**/*.js.map", // Source maps
      "**/*.min.js", // Minified files
      "**/*.bundle.js", // Bundle files
      "src-target/.next/**", // Next.js build output
      "src-target/out/**", // Next.js static export
      "src-target/.eslintcache", // ESLint cache
    ],
  },
  {
    files: ["src-target/**/*.{ts,tsx}"],
    rules: {
      "react-refresh/only-export-components": "off", // Not needed for Next.js
      "@typescript-eslint/triple-slash-reference": "off", // Next.js auto-generates these
    },
  },
];
