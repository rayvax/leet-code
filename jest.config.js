// jest.config.js
module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'ts', 'json', 'node'],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/?(*.)+(spec|test).[jt]s'],

  // Indicates whether each individual test should be reported during the run
  verbose: true,

  // Add TypeScript support
  preset: 'ts-jest',

  // Transform files using ts-jest
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
};
