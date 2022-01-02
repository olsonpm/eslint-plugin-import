/**
 * The basics.
 * @type {Object}
 */
module.exports = {
  plugins: ['@olsonpm/eslint-plugin-import'],

  rules: {
    // analysis/correctness
    '@olsonpm/import/no-unresolved': 'error',
    '@olsonpm/import/named': 'error',
    '@olsonpm/import/namespace': 'error',
    '@olsonpm/import/default': 'error',
    '@olsonpm/import/export': 'error',

    // red flags (thus, warnings)
    '@olsonpm/import/no-named-as-default': 'warn',
    '@olsonpm/import/no-named-as-default-member': 'warn',
    '@olsonpm/import/no-duplicates': 'warn',
  },

  // need all these for parsing dependencies (even if _your_ code doesn't need
  // all of them)
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
  },
};
