// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const robot = require ('robotjs')
const { ipcRenderer } = require('electron')
const eventHandler = document.getElementById("startEvents")
eventHandler.addEventListener("click", function(){
    ipcRenderer.send("hide-event", "hide")
    sendConsole(0)
})

function sendConsole(i){
    ipcRenderer.send("ping-message", "ping")
    robot.moveMouseSmooth(0,50);
    setTimeout(function(){sendConsole(i+1)}, 5*1000)
}