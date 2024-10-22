import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      quotes: ['error', 'single'],
      'no-multiple-empty-lines': ['error', { 'max': 1 }],
    }
  }
];