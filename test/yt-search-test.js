module.exports = {
  'Search and play on youtube' : function (client) {
    // client.useXpath();

    let searchTerm = "abc Bus Crash In Tennessee";
    let videoTitle = "School Bus Crash Investigation Continues In Tennessee";
    var mainPage = client.page.HomePage();
    var header = client.page.Header();

    mainPage.navigate().assert.title("YouTube");

    var resultsPage = header.searchFor(searchTerm);

    var videoPage =
      resultsPage
        .assert.title(searchTerm + " - YouTube")
        .selectVideoByTitle(videoTitle);

    videoPage
        // .assert.title(videoTitle + " - YouTube")
        .assert.videoPlaying('@video')
        .click('@moviePlayer')
        .assert.videoPaused('@video');

    client.end();
  }
};
