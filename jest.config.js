module.exports = {
  name: "sample-jest-cucumber-puppetter",
  verbose: true,
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.feature$": "gherkin-jest"
  },
  setupFiles: ["<rootDir>/src/support"],
  setupTestFrameworkScriptFile: "./jest.setup.js",
  testEnvironment: "./puppeteer_environment.js",
  testMatch: ["**/*.feature"],
  moduleFileExtensions: ["js", "feature"]
};
