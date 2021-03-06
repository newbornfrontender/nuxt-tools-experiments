module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'vue',
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '.+\\.(css|svg|png|jpe?g|ttf|woff2?)$': 'jest-transform-stub',
    '^.+\\.vue$': 'vue-jest',
  },
  moduleNameMapper: {
    '^~~?/(.*)$': '<rootDir>/$1',
    '^@@?/(.*)$': '<rootDir>/$1',
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['<rootDir>/test/unit/**/*.(test|spec).(js|jsx)'],
  testURL: 'http://localhost/',
};
