# Screensaver demo purposes only

# Installation

```
1. Clone project
2. Run yarn / yarn install (Node > v14.16). --- can also asdf local nodejs latest to test it out
3. For demo purposes, download a stock video to be shown on the screensaver. Link to Pixabay provided below.
4. Provide the path to video inside index.html file
```
 [Pixabay](https://pixabay.com/videos/)
 
 
 ### Run locally
 
 ```
 1. yarn start
 2. Move your mouse (1s delay), press any key, click your mouse to exit the screensaver
 ```
 
 
 ## Package to executable 
 
Packagers are included in the script file, just run:

```
yarn package-win //Windows exe - Will create a release-build folder, navigate through this to find the executable
yarn package-mac //OSX exe - Will create a release-build folder, navigate through this to find the executable
```

 
### `Installing the screensaver to use on Windows 10/11`

1. Open `release-builds` folder and look for the .exe file
2. Change the executable filename extension from `.exe` to `.scr` 
3. Right click on the newly renamed `.scr` file and click on `Install`
4. The native Windows screensaver GUI will pop up and allow you to save the new screensaver

```
### `Installing the screensaver to use on Mac OSX`

//TODO
