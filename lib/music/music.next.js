const shared = require("../shared");

module.exports = function next() {
  return shared.player.playback.next()
}
