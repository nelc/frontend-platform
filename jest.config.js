const { createConfig } = require('@openedx/frontend-build');

module.exports = createConfig('jest', {
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTest.js',
  ],
  testTimeout: 20000,
});

module.exports.transformIgnorePatterns = [
  '/node_modules/(?!(@edx|@openedx))',
];
