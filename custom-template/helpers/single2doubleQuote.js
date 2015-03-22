module.exports.register = function(handlebars) {

  var Kss = require(__dirname + '/../../node_modules/kss/lib/kss.js');

  handlebars.registerHelper('single2doubleQuote', function(variable) {
    return variable.replace(/(['])/g, '"');
  });

};
