# Chinese Railway Dongfeng-11G MOD (CR DF11G)

# Intro

## DF11G 0001 & 0002

title-banner
BlueMap is a tool that generates 3d-maps of your Minecraft worlds and displays them in your browser. Take a look at this demo. It is really easy to set up - almost plug-and-play - if you use the integrated web-server (optional).

The plugins/mods automatically update your map as soon as something changes in your world, as well as rendering newly generated terrain and managing the render-tasks.

Some features and some blocks are still missing. Especially some tile-entities will not render correctly/at all. See below for a list of what is planned for future releases.

# Screenshots

# Download

This is a modification addon (MOD) of rolling stocks for the TS (Train Simulator) 2016 to 2021 version. You can visit [my website](https://sites.google.com/d/1Sp0SWFzXfnzDfjgsRoTEpINChbRJtaOL/p/1kW8f9iZUWa2mWLco0zsrf_FUx5Ld9QRm/edit) and download this MOD from there (sorry I tried the other days on uploading the compressed files here but wasn't able to make it because git considered the file too big`:'`) 

Use it to create .S shape files for Microsoft Train Simulator or Open Rails. Instructions, sample files and contact info are included in the `config.` files within the download `zip.` kit.

For support, please start a new topic at the Elvas Tower forum

Using BlueMap
BlueMap can be used on the command-line, or as a plugin/mod for your Sponge/Spigot/Paper/Forge/Fabric-Server. Read the wiki to get started!

Clone
If you have git installed, simply use the command git clone --recursive https://github.com/BlueMap-Minecraft/BlueMap.git to clone BlueMap.

Build
In order to build BlueMap you simply need to run the ./gradlew clean build command in BlueMap's root directory. You can find the compiled JAR files in ./build/release.

## Issues / Suggestions
Do you ever find a bug, have another issue or a suggestion? Please create an issue here, thank you so much:)

## Contributing
You are welcome to contribute! Just feel free to create a pull request with your changes:)

If you want to have your changes merged, make sure they are complete, documented and well tested!

Keep in mind that we have to maintain all new features and keep supporting them in the future. This means we always can decide to not accept a PR for any reason.

Todo / planned features
Here is a todo-list! It is ordered by what i right now think is the priority, but it might always change or be reordered at my discretion. (I develop BlueMap in my free-time, so nothing here is a promise and there are no ETA's)

Links
Wiki: https://bluecolo.red/map-wiki
Discord: https://bluecolo.red/map-discord
Reddit: https://www.reddit.com/r/BlueMap

JetBrainsLogo

Special thanks to O. Lieu for giving out an OpenSource-Licence for the development!

```
3D Model: Train Simulator 2017;
Enveloped in Open Rail 2020.

Features:
- Detailed cockpit.
- An/two male figure(s) (changeable through operation) sitting in the driver's seat.
- Customized collision when trains going off the rails.
- Light and shade sources corrected.

Installation:

Right-click the repository and choose the option that says Extract All…, Unzip, or Uncompress, and then select a folder where you want the files to end up
If to replace:
1. Open OpenIV, find and replace files freight.yft,freight_hi.ift and freight.ytd
Grand Theft Auto Vmodsx64e.rpflevelsgta5vehicles.rpf

Add-On： ​​
1. Copy the folder "dg11g" and place
Grand Theft Auto Vupdatex64dlcpacks

2.Open OpenIV, and open the dlclist.xml file
right-click it and choose the option that says Extract All…, Unzip, or Uncompress, and then select a folder where you want the files to end up.

Grand Theft Auto Vupdateupdate.rpfcommondatadlclist.xml
open, add a new line：

dlcpacks:df11g

3. Place the trains.xml file in:
------------------> common.rpfdatalevelsgta5
```

# Configuration log

```
kuid                                    <kuid:964520:10531212>
username                                "CHN Dongfeng-11G 0001"
username-cn                             "DF11G Diesel Locomotive"
category-class                          "AD"
category-region                         "CN"
category-era                            "1960s;1970s;1980s;1990s;2000s;2010s"
kind                                    "traincar"
engine                                  1
enginespec                              <kuid:253253:1102>
mass                                    138000
author                                  "AL2"
contact-email                           "lightever131@gmail.com"
license                                 "Script&Modification:AL2"
light_color                             166,147,111
ditch_color                             166,147,111
interior                                <kuid:296058:100274>
trainz-build                            2.9
enginesound                             <kuid:689750:1322>
smoke_fastlife                          4
smoke_height                            0
smoke_shade                             1.2
smoke_fastspeed                         2
smoke_random                            2.5
smoke_slowlife                          6
hornsound                               <kuid:689750:1036>
disable-extra-track-sounds              1
cabin_muffle                            0.4
script                                  "indolok_geu20c_x.gs"
class                                   "indolok_geu20c_x"
fonts                                   4
fonts-path                              "ss3"
max-tractive-effort                     400000
```
