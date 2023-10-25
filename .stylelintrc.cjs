module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-clean-order'],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'value-keyword-case': null,
    'selector-class-pattern': [
      '^([a-z][a-z0-9]*)([A-Z][a-z0-9]*)*$',
      {
        message: (selector) =>
          `Expected class selector "${selector}" to be camelCase`,
      },
    ],
  },
  defaultSeverity: 'error',
};
