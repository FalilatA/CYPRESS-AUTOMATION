const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/*.feature",
    baseUrl: 'https://demo.seleniumeasy.com/',
  },
});
// module.exports = ({
//   e2e: {
//     baseUrl: 'https://demo.seleniumeasy.com/',
//     watchForFileChanges: true,
//     specPattern: "**/*.feature",
//     supportFile:'cypress/support/e2e.js',
//     specPattern: "**/*.feature",
//     supportFile:'cypress/support/e2e.js'
//   },