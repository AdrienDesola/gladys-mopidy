const shared = require("../shared");

module.exports = function setVolume(vol) {
  return shared.player.mixer.setVolume(vol)
}
