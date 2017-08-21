const shared = require("../shared");

module.exports = function play({ uri }) {
  if(!uri) return shared.player.playback.play()
  else return mopidy.playback.play(uri)
}
