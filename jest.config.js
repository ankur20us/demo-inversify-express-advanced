module.exports = {
  'preset': 'ts-jest',
  'testEnvironment': 'node',
  'collectCoverageFrom': [
    'src/**/*.{js,jsx,ts}',
    '!**/node_modules/'
  ],
  'coverageReporters': [
    'json',
    'html',
    'text',
    'json-summary'
  ]
}
