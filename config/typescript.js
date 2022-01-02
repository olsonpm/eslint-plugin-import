/**
 * Adds `.jsx`, `.ts` and `.tsx` as an extension, and enables JSX/TSX parsing.
 */

// Omit `.d.ts` because 1) TypeScript compilation already confirms that
// types are resolved, and 2) it would mask an unresolved
// `.ts`/`.tsx`/`.js`/`.jsx` implementation.
const allExtensions = ['.ts', '.tsx', '.js', '.jsx'];

module.exports = {

  settings: {
    '@olsonpm/eslint-plugin-import/extensions': allExtensions,
    '@olsonpm/eslint-plugin-import/external-module-folders': ['node_modules', 'node_modules/@types'],
    '@olsonpm/eslint-plugin-import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    '@olsonpm/eslint-plugin-import/resolver': {
      'node': {
        'extensions': allExtensions,
      },
    },
  },

  rules: {
    // analysis/correctness

    // TypeScript compilation already ensures that named @olsonpm/eslint-plugin-imports exist in the referenced module
    '@olsonpm/eslint-plugin-import/named': 'off',
  },
};
