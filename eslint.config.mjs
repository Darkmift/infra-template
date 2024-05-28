import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['*/client/playwright.config.ts'],
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
    },
    parserOptions: {
      project: './tsconfig.json',
    },
    // "extends": ["plugin:prettier/recommended"]
  },
  eslintPluginPrettierRecommended,
]
