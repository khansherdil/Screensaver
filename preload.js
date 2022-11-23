const { ipcRenderer } = require("electron");

//2 seconds delay on mousemove
const delayInMs = 1000;

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("close-app").addEventListener("click", () => {
    ipcRenderer.invoke("quit-app");
  });
});

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("close-app").addEventListener("mousemove", () => {
    setTimeout(() => {
      ipcRenderer.invoke("quit-app");
    }, delayInMs);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("close-app").addEventListener("keydown", () => {
    ipcRenderer.invoke("quit-app");
  });
});
