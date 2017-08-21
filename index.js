module.exports = function (sails) {

  var setup = require('./lib/setup.js');
  var init = require('./lib/init.js');
  var music = require('./lib/music/index.js');

  typeof gladys === "object" && gladys.on('ready', function() {
    init();
  });

  return {
    setup,
    init,
    music
  };
};
