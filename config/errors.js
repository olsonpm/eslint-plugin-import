/**
 * unopinionated config. just the things that are necessarily runtime errors
 * waiting to happen.
 * @type {Object}
 */
module.exports = {
  plugins: ['@olsonpm/eslint-plugin-import'],
  rules: {
    '@olsonpm/import/no-unresolved': 2,
    '@olsonpm/import/named': 2,
    '@olsonpm/import/namespace': 2,
    '@olsonpm/import/default': 2,
    '@olsonpm/import/export': 2,
  },
};
