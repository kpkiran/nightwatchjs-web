module.exports = {
  url: function() {
    // return 'https://www.youtube.com/';
    return this.api.launchUrl;
  },
  elements: {
    body: 'body'
  },
  commands: [{
    signInAsAdmin: function() {
      return this.setValue('@usernameField', 'admin')
          .setValue('@passwordField', 'password')
          .click('@submit');
    }
  }]
};
