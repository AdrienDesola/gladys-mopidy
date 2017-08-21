const shared = require("../shared");

module.exports = function getCurrentTrack() {

  return shared.player.playback.getCurrentTrack()
    .then( track => ({ title: track.name }) )
}
