const shared = require("../shared");

module.exports = function play({ uri }) {
  if(!uri) return shared.player.playback.play()

  return shared.player.library.search({ uri: [uri] }, [], true)
  .then(playlists => playlists[0])
  .then(playlist => {
    if(!playlist.tracks || !playlist.tracks.length) Promise.reject('No track founded')
    else return playlist.tracks
  })
  .then(tracks => {
    shared.player.playback.pause()
    shared.player.tracklist.clear()
    return shared.player.tracklist.add(tracks)
  })
  .then(tracklist => tracklist[0])
  .then(shared.player.playback.play)
}
