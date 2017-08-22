const shared = require("../shared");

module.exports = function play( option={} ) {
  if(!option.uri) return shared.player.playback.play()

  return shared.player.library.search({ uri: [option.uri] }, [], true)
    .then(playlists => playlists[0])
    .then(playlist => {
      if(!playlist.tracks || !playlist.tracks.length) Promise.reject('No track founded')
      return playlist.tracks
    })
    .then(tracks => {
      return shared.player.tracklist.index()
      .then(index => shared.player.tracklist.add(tracks, index + 1))
    })
    .then( () => shared.player.playback.next() )
    .then(shared.player.playback.play)
}
