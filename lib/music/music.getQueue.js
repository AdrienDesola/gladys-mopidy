const shared = require("../shared");

module.exports = function getQueue() {
  return shared.player.tracklist.getTracks()
    .then( tracklist => tracklist.map( ({ name }) => ({ title: name })) )
}
