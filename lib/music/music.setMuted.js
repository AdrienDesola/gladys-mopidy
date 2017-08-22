const shared = require("../shared");

module.exports = function setMuted(mute) {
  return shared.player.mixer.setMute(!!mute)
}
