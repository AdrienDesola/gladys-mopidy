const Mopidy = require("mopidy");
const shared = require("./shared");

module.exports = function init() {

  shared.player = new Mopidy({
    webSocketUrl: "ws://192.168.1.46:6680/mopidy/ws/"
  });

  return new Promise(function(resolve, reject) {

    shared.player.on("state:online", () => resolve(shared.player) );

  });
};
