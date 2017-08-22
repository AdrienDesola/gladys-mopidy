const shared = require("../shared");

module.exports = function getMuted() {
  return shared.player.mixer.getMute()
}
