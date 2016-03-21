var app = require('app')
var BrowserWindow = require('browser-window')

app.on('ready', function() {
  var mainWindow = new BrowserWindow({
    resize: false,    
    frame: false,
    width: 1000,
    height: 950
  })

mainWindow.loadURL('file://'+ __dirname + '/index.html')
});
