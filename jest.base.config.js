module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/../../jest.base.setup.ts'],
  collectCoverage: true,
  coverageReporters: ['text'],
};
