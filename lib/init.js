const Mopidy = require("mopidy");
const shared = require("./shared");

module.exports = function init() {
  return gladys.param.getValue('mopidy_url')
  .then(url => shared.player = new Mopidy({
    webSocketUrl: `ws://${url || 'localhost:6680'}/mopidy/ws/`
  }))
  .then(player => new Promise(function(resolve, reject) {
    player.on("state:online", () => resolve(shared.player))
  }));
};
