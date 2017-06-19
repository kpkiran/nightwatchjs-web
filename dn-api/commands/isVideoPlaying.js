/**
 * Created by abbasq6v on 28/11/2016.
 */
exports.command = function(selector, callback) {
  var self = this;

  this.execute(
      function(el) { // execute application specific code
        console.log('----------- document.querySelector(selector) ----------- ');
        console.log(document.querySelector(el));
        return document.querySelector(el).playing;
        // return true;
      },

      [selector], // arguments array to be passed

      function(result) {
        if (typeof callback === "function") {
          callback.call(self, result);
        }
      }
  );

  return this;
};
