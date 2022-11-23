# Screensaver demo purposes only

# Installation

```
1. Clone project
2. Run yarn / yarn install
3. For demo purposes, download a stock video to be shown on the screensaver. Link to Pixabay provided below.
4. Provide the path to video inside index.html file
```
 [Pixabay](https://pixabay.com/videos/)
 
 
 ### Run locally
 
 ```
 1. Run yarn start
 2. Move your mouse (1s delay), press any key, click your mouse to exit the screensaver
 ```
 
 
 ## Package to executable 
 
 Only tested on Windows x64 currently. //Todo OSX
 
 ```
 // Windows
 npx electron-packager . Screensaver-demo --platform=win32 --arch=x64   // Will create a folder inside current directory, navigate to this directory to open the .exe
 
 //OSX
 TODO
 
 ```
 
