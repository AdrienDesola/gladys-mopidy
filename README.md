# Gladys Mopidy

## Mopidy installation
source : https://docs.mopidy.com/en/latest/installation/

### Add the archive’s GPG key:

```
wget -q -O - https://apt.mopidy.com/mopidy.gpg | sudo apt-key add -
```

### Add the APT repo to your package sources:

```
sudo wget -q -O /etc/apt/sources.list.d/mopidy.list https://apt.mopidy.com/jessie.list
```


### Install Mopidy and all dependencies:

```
sudo apt-get update
sudo apt-get install mopidy
sudo apt-get update
sudo apt-get dist-upgrade
```


### Spotify installation

```
apt-cache search mopidy
sudo apt-get install mopidy-spotify
```

### Configuration

```
nano ~/.config/mopidy/mopidy.conf
```
#### Config example

```
[mpd]
hostname = <RPI_IP>

[spotify]
username = <username>
password = <password>

# visit https://www.mopidy.com/authenticate/#spotify to authorize this extension against your Spotify account.
client_id = <client_id>
client_secret = <client_secret>


[http]
enabled = true
hostname = <RPI_IP>
static_dir =
zeroconf = Mopidy HTTP server on $hostname

[local]
enabled = false
```

To see what’s the effective configuration for your Mopidy installation, you 
can run:
``` 
 mopidy config 
```


## Start Mopidy
```
  mopidy
```

## Mopidy gladys installation

Back to Gladys interface.
Install the module in "Modules" view in advanced mode :

Mopidy  1.0.0   https://github.com/AdrienDesola/gladys-mopidy.git  mopidy

in "Settings" view
add mopidy_url: <mopidy_ip>:<mopidy_port>

**Reboot Gladys**

## Try it in Gladys scripts
```
gladys.music.playPlaylist({ uri: 'spotify:album:4ydl8Ci7OsndhI2ALnrpIv' })
.then(gladys.music.setVolume(100));
```

## Mopidy as a service
```
sudo systemctl enable mopidy
```

## Edit config file
```
sudo nano /etc/mopidy/mopidy.conf 
```

### Mopidy service useful commands
```
sudo systemctl start mopidy
sudo systemctl stop mopidy
sudo systemctl restart mopidy
```

### Mopidy service check status
```
sudo systemctl status mopidy
```


Bravo !
