const path = require('path')

module.exports = {
  "roots": [
    "<rootDir>",
    "<rootDir>/src"
  ],
  "testMatch": [
    path.join(__dirname, "**/?(*.)(spec|test).(ts|js)")
  ],
  "transform": {
    "^.+\\.(ts)$": "ts-jest",
    '^.+\\.(ts|js)?$': 'babel-jest'
  },
}