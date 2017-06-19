// .tmp/nightwatch/bin/nightwatch.json
// .tmp/nightwatch/examples/globalsModule.js
module.exports = {
  // this controls whether to abort the test execution when an assertion failed and skip the rest
  // it's being used in waitFor commands and expect assertions
  abortOnAssertionFailure : true,

  // this will overwrite the default polling interval (currently 500ms) for waitFor commands
  // and expect assertions that use retry
  waitForConditionPollInterval : 300,

  // default timeout value in milliseconds for waitFor commands and implicit waitFor value for
  // expect assertions
  waitForConditionTimeout : 7000,

  // this will cause waitFor commands on elements to throw an error if multiple
  // elements are found using the given locate strategy and selector
  throwOnMultipleElementsReturned : true,

  // controls the timeout time for async hooks. Expects the done() callback to be invoked within this time
  // or an error is thrown
  asyncHookTimeout : 10000,

  before : function(done) {
    done();
  },

  beforeEach : function(browser, done) {
/*
    // getting the session info
    browser.status(function(result) {
      console.log(result.value);
      done();
    });
*/
    done();
  },

  after : function(done) {
    done();
  },

  afterEach : function(browser, done) {
    // console.log(browser.currentTest);
    done();
  },

  reporter : function(results, done) {
    //console.log(results);
    done();
  }
};
