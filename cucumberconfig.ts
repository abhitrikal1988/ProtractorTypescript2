exports.config = {
    // set to "custom" instead of cucumber.
    framework: 'custom',
  
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
  
    // require feature files
    specs: [
      './Features/FirstTest.feature' // accepts a glob
    ],
  
    cucumberOpts: {
      // require step definitions
      require: [
        './StepDefinitions/steps.js' // accepts a glob
      ]
    }
  };