const electron = require("electron");
const ipcRenderer = electron.ipcRenderer;
const { csvData } = require("../../types.d.ts");

electron.contextBridge.exposeInMainWorld("electron", {
    readCSV: (filePath: string): Promise<typeof csvData[]> => ipcRenderer.invoke('read-csv', filePath)
});
