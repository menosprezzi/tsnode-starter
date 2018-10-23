module.exports = {
  "globals": {
    "ts-jest": {
      "tsConfigFile": "./tsconfig.json"
    }
  },
  "transform": {
    "^.+\\.ts?$": "./node_modules/ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|ts?)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json"
  ]
};
