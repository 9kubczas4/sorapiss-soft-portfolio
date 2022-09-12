const baseConfig = require('../../jest.base.config');

module.exports = {
  ...baseConfig,
  setupFilesAfterEnv: [...baseConfig.setupFilesAfterEnv, '<rootDir>/setup-jest.ts'],
  collectCoverageFrom: [
    'src/lib/**/*.ts',
    '!src/lib/**/*.module.ts',
    '!src/lib/**/index.ts',
    '!src/lib/**/public_api.ts',
    '!**/node_modules/**',
  ],
  setupFiles: ['jest-canvas-mock'],
};
