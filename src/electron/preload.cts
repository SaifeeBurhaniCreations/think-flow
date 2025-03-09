import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  readCSV: (filePath: string) => ipcRenderer.invoke('read-csv', filePath),
  openDialogPopup: () => ipcRenderer.invoke('open-dialog-popup'),
});