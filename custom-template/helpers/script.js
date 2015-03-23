module.exports.register = function(handlebars) {

  var Kss = require(process.cwd() + '/node_modules/kss/lib/kss.js');

  handlebars.registerHelper('script', function() {
    var section = new Kss.KssSection(this);
    var script = section.data.script || '';
    return new handlebars.SafeString(script);
  });

};
