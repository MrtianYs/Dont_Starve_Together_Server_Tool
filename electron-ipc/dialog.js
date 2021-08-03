const { ipcMain, dialog } = require("electron");

ipcMain.handle('getDirPath', async () => {
  try {
    return await dialog.showOpenDialog({
      properties: ['openDirectory', 'promptToCreate']
    })
  } catch (e) {

  }
})