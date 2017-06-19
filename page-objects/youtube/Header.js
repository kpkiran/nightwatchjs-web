module.exports = {
  elements: {
    searchBox: '#masthead-search-term'
  },
  commands: [{
    searchFor: function(searchTerm) {
      this.setValue('@searchBox', [searchTerm, this.api.Keys.ENTER]);
      return this.api.page.SearchResultsPage();
    }
  }]
};
