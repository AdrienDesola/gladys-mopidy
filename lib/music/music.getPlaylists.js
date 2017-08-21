const shared = require("../shared");

module.exports = function getPlaylists() {
  return shared.player.playlists.getPlaylists()
    .then( playlists =>  playlists.map(({name, uri}) => ({ title: name, uri  })) )
}
