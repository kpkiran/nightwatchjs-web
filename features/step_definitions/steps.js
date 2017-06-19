var title, id;

var myStepDefinitionsWrapper = function () {
  this.Given(/^I open Youtube page$/, function () {
    var yt = this.page.youtube();

    yt.navigate()
      .waitForElementVisible('@body', 1000)
  })

  this.Then(/^the Youtube search box exists$/, function () {
    var yt = this.page.youtube();

    yt.assert.visible('@searchBox')
  });

  this.Then(/^the title is "([^"]*)"$/, function (title) {
    this.assert.title(title)
  });

  this.Then(/^the title contains "([^"]*)"$/, function (title) {
    this.page.youtube().assert.title("Cali Killa Clowns defend local scares but say don't trust clowns at night - YouTube")
  });

  this.Given(/^I search for "([^"]*)"$/, function (searchTerm) {
    var yt = this.page.youtube();

    yt.searchFor(searchTerm)
  });

  this.Then(/^the results contain video with title "([^"]*)"$/, function (title) {
    this.useXpath()
        .assert.elementPresent(`//h3/a[contains(text(),"${title}")]`)
        .useCss()
  });

  this.Given(/^I click on video with title "([^"]*)"$/, function (title) {
    this.useXpath()
        .click(`//h3/a[contains(text(),"${title}")]`)
        .useCss()
  });

  this.Then(/^the next page should contain "([^"]*)" with text "([^"]*)"$/, function (el, text) {
    this.waitForElementVisible(el, 5000)
        .assert.containsText(el, text)
  });
};
module.exports = myStepDefinitionsWrapper;