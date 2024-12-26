import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import { FlatCompat } from '@eslint/eslintrc'

import path from 'path'
import { fileURLToPath } from 'url'

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})
/** @type {import('eslint').Linter.Config[]} */

export default [
  {
    files: ['**/*.{js,cjs,ts,jsx,tsx}'],
    ignores: [
      'eslint.config.mjs',
      '.next',
      'node_modules',
      '.storybook/*',
      '.jest/*',
      'generators'
    ],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.config.parser
    },

    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'import/no-anonymous-default-export': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-var-requires': 'off'
    }
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'prettier',
    //'plugin:storybook/recommended'
  )
]
