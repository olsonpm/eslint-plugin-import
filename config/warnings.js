/**
 * more opinionated config.
 * @type {Object}
 */
module.exports = {
  plugins: ['@olsonpm/eslint-plugin-import'],
  rules: {
    '@olsonpm/import/no-named-as-default': 1,
    '@olsonpm/import/no-named-as-default-member': 1,
    '@olsonpm/import/no-duplicates': 1,
  },
};
