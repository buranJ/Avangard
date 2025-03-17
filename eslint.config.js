import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

// @type {import('eslint').Linter.Config[]}
export default tseslint.config({ ignores: ['dist', 'node_modules'] }, js.configs.recommended, ...tseslint.configs.recommended, {
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser
  },
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    prettier: prettierPlugin,
    'simple-import-sort': simpleImportSort
  },
  rules: {
    ...prettierPlugin.rules,
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react', '^react-dom', '^react-router-dom', '^react-redux', '@reduxjs/toolkit', '^axios'],
          [
            '^~',
            '^app',
            'router',
            'pages',
            'containers',
            'common/',
            'api/',
            'types/',
            'hooks/',
            'utils/',
            'components/',
            'assets/'
          ],
          ['^\\.\\./', '^\\./'],
          ['^.+\\.(svg|png|jpg|jpeg)$'],
          ['^.+\\.?(scss|css)$']
        ]
      }
    ],
    'simple-import-sort/exports': 'warn'
  }
});
