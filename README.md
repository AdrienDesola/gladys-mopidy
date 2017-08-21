
# DEMO

const Mopidy = require("mopidy");

const playMyFavoritePlaylist = (uri) => {
  mopidy.playlists.getPlaylists()
  .then(playlists => playlists.find( playlist => playlist.uri === uri ))
  .then(playlist => playlist && playlist.tracks ? playlist : Promise.reject(`playlist ${uri} not found`))
  .then(playlist => playlist.tracks)
  .then(mopidy.tracklist.add)
  .then(tracklist => tracklist[0])
  .then(mopidy.playback.play)
  .catch(console.error);
};

const mopidy = new Mopidy({
  webSocketUrl: "ws://192.168.1.46:6680/mopidy/ws/"
});

mopidy.on("state:online", () => {
  mopidy.playlists.getPlaylists().then(console.log)
  // playMyFavoritePlaylist('spotify:user:iloveplaylists:playlist:1V93SRHKAhfJ83uFY8YtAg')
});


# API

tracklist
  .add(tracks=None, at_position=None, uri=None, uris=None)
  .clear()
  .getLength()
  .getTracks()
  .getNextTlid()
  .getPreviousTlid()
  .getRandom()
  .setRandom(value)
  .getRepeat()
  .setRepeat(value)
  .getSingle()
  .setSingle(value)

playback
  .play(tl_track=None, tlid=None)
  .next()
  .previous()
  .stop()
  .pause()
  .resume()
  .getCurrentTlTrack()
  .getCurrentTrack()
  .getStreamTitle()
  .getTimePosition()
  .getState()
  .setState(new_state) // PLAYING, PAUSED, or STOPPED.

library
  .browse(uri)
  .search(query=None, uris=None, exact=False, **kwargs) // {'any': ['a']} {'artist': ['xyz']}
  .lookup(uri=None, uris=None)
  .refresh(uri=None)
playlists
  .refresh(uri_scheme=None)
mixer
  .getMute()
  .setMute(mute)
  .getVolume()
  .setVolume(volume)
history
  .get_history()
  .get_length()
on(event, callback)

volume_changed
tracklist_changed
track_playback_started
track_playback_resumed
track_playback_paused
track_playback_ended
stream_title_changed
playlists_loaded
playback_state_changed
options_changed
mute_changed
