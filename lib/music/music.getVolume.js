const shared = require("../shared");

module.exports = function getVolume() {
  return shared.player.mixer.getVolume()
}
