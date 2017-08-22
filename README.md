# Gladys Mopidy
## Installation
### Step: 1

install mopidy https://docs.mopidy.com/en/latest/installation/

### Step: 2

Install the module in Gladys
advanced mode : Mopidy  1.0.0   https://github.com/AdrienDesola/gladys-mopidy.git  mopidy

add Gladys settings mopidy_url: <mopidy_ip>:<mopidy_port> par defaut localhost:6680

Reboot Gladys

## Use in Gladys scripts
```
gladys.music.playPlaylist({ uri: 'spotify:album:4ydl8Ci7OsndhI2ALnrpIv' })
.then(gladys.music.setVolume(100));
```
