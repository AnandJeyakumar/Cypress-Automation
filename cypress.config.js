const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //HTML Reports
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); //report html
    },
  },
});
