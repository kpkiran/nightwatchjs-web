module.exports = {
  elements: {
    searchBox: '#masthead-search-term',
  },
  commands: [{
    selectVideoByTitle: function(title) {
      return this.client.api.useXpath()
          .click(`//h3/a[contains(text(),"${title}")]`)
          .useCss()
          .waitForElementVisible('video')
          .page.VideoPage();

      // this.waitForElementVisible('#watch-header', function () {
      //   return this.page.VideoPage();
      // })
    }
  }]
};
