import tsEslintPlugin from '@typescript-eslint/eslint-plugin'
import tsEslintParser from '@typescript-eslint/parser'
import prettierPlugin from 'eslint-plugin-prettier'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsEslintParser,
      parserOptions: {
        project: resolve(__dirname, 'tsconfig.json'), // Используем resolve
        tsconfigRootDir: __dirname,
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tsEslintPlugin,
      prettier: prettierPlugin
    },
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-console': 1,
      'prettier/prettier': 0
    }
  },
  {
    ignores: ['.eslintrc.js']
  }
]
