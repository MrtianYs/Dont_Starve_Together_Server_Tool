const { app, BrowserWindow } = require('electron')

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    }
  })

  if (app.isPackaged) {
    win.loadFile('./build/index.html')
  } else {
    win.loadURL('http://localhost:3000/')
    win.webContents.openDevTools()
  }

}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
})