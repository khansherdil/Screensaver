const { app, BrowserWindow, ipcMain } = require("electron");
var path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
  win.setMenu(null);
  win.setFullScreen(true);

  ipcMain.handle("quit-app", () => {
    app.quit();
  });
};

app.whenReady().then(() => {
  createWindow();
});
