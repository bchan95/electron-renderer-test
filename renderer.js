// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


const eventHandler = document.getElementById("startEvents")
eventHandler.addEventListener("click", function(){
    sendConsole(0)
})

function sendConsole(i){
    console.log(i)
    setTimeout(function(){sendConsole(i+1)}, 5*1000)
}