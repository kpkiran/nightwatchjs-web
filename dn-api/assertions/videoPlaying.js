/**
 * Created by abbasq6v on 28/11/2016.
 */
/**
 * Checks if the html5 video is playing.
 *
 * ```
 *    this.demoTest = function (client) {
 *      browser.assert.videoPlaying("#video");
 *    };
 * ```
 *
 * @method videoPlaying
 * @param {string} selector The selector (CSS / Xpath) used to locate the element.
 * @param {string} [message] Optional log message to display in the output. If missing, one is displayed by default.
 * @api assertions
 */

var util = require('util');
exports.assertion = function(selector, msg) {

  this.message = msg || util.format('Testing if html5 video <%s> is currently playing.', selector);
  this.expected = 'playing';

  this.pass = function(value) {
    return value === 'playing';
  };
  this.failure = function(result) {
    var failed = !result.value.src || result.value.paused === true;
    if (!result.value.src) {
      this.message = util.format('src not found for html5 video <%s>.', selector);
    }
    return failed;
  };

  this.value = function(result) {
    return result.value.paused === true ? 'not playing' : 'playing';
  };

  this.command = function(callback) {
    this.api.pause(1800);
    this.api.execute(function(selector){
      return {
        src: document.getElementsByTagName('video')[0].src,
        paused: document.getElementsByTagName('video')[0].paused
      }
    }, ['video'], function(result){
      callback(result)
    });

    // this.api.element(this.client.locateStrategy, selector, callback);
  };

};