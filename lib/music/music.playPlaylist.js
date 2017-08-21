const shared = require("../shared");

module.exports = function play({ uri }) {
  if(!uri) return shared.player.playback.play()

  mopidy.playlists.getPlaylists()
  .then(playlists => playlists.find( playlist => playlist.uri === uri ))
  .then(playlist => playlist.tracks)
  .then(mopidy.playback.pause)
  .then(mopidy.tracklist.clear)
  .then(mopidy.tracklist.add)
  .then(tracklist => tracklist[0])
  .then(mopidy.playback.play);
  
}
