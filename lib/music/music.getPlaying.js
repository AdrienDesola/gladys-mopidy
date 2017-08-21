const shared = require("../shared");

module.exports = function getPlaying() {

  return shared.player.playback.getState()
    .then( state => ({ playing : state === 'playing' }) )

}
