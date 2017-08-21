module.exports = {
  flushQueue() {},
  getCurrentTrack: require('./music.getCurrentTrack'),
  getMuted() {},
  getPlaying: require('./music.getPlaying'),
  getPlaylists: require('./music.getPlaylists'),
  getQueue: require('./music.getQueue'),
  getVolume() {},
  next: require('./music.next'),
  pause: require('./music.pause'),
  play: require('./music.play'),
  playPlaylist: require('./music.playPlaylist.js'),
  previous() {},
  setMuted() {},
  setVolume() {},
  stop() {}
}
