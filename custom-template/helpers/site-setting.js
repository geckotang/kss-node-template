module.exports.register = function(handlebars) {

  var fs = require('fs');

  fs.readFile(__dirname + '/../site-setting.json', 'utf8', _registerHelper);
  function _registerHelper (err, contents) {
    if (err) { throw err; return; }
    var siteSettingJSON = JSON.parse(contents);
    handlebars.registerHelper('site-setting', function(settingName, contexts) {
      var res = siteSettingJSON[settingName] ? siteSettingJSON[settingName] : '';
      return new handlebars.SafeString(res);
    });
  }

};
