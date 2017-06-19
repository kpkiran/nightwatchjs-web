module.exports = {
  elements: {
    video: 'video',
    moviePlayer: '#movie_player',
    submit: {
      selector: 'input[type=submit]'
    }
  },
  commands: [{
    pauseVideo: function() {
      return this.setValue('@searchBox', [searchTerm, this.api.Keys.ENTER])
    }
  }]
};
