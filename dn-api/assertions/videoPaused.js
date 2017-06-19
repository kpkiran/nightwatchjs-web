/**
 * Created by abbasq6v on 28/11/2016.
 */
/**
 * Checks if the html5 video is paused.
 *
 * ```
 *    this.demoTest = function (client) {
 *      browser.assert.videoPaused("#video");
 *    };
 * ```
 *
 * @method videoPaused
 * @param {string} selector The selector (CSS / Xpath) used to locate the element.
 * @param {string} [message] Optional log message to display in the output. If missing, one is displayed by default.
 * @api assertions
 */

var util = require('util');
exports.assertion = function(selector, msg) {

  this.message = msg || util.format('Testing if html5 video <%s> is currently paused.', selector);
  this.expected = 'paused';

  this.pass = function(value) {
    return value === 'paused';
  };
  this.failure = function(result) {
    var failed = !result.value.src || result.value.paused === false;
    if (!result.value.src) {
      this.message = util.format('src not found for html5 video <%s>.', selector);
    }
    return failed;
  };

  this.value = function(result) {
    return result.value.paused === true ? 'paused' : 'playing';
  };

  this.command = function(callback) {
    this.api.pause(500);
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