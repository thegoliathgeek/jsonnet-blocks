module.exports = {
  displayName: 'powerplay-scraper',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js'],
  coverageDirectory: './coverage',
  //Ignore puppeteer functions more info in https://jestjs.io/docs/puppeteer
}