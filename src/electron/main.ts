import { app, BrowserWindow, session, screen, ipcMain } from "electron";
import * as path from 'path';
import { CSVReader } from './csvReader.js';
import { isDev } from "./utils.js";
import { getPreloadPath } from "./pathResolver.js";
import { openDialogPopup } from "./components/dialogWindow.js";
import { createTree } from "./lib/createTree.js";

let mainWindow: BrowserWindow | null = null;

app.on("ready", () => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    mainWindow = new BrowserWindow({
        width,
        height,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            preload: getPreloadPath(),
        },
    });

    session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
        callback({
            responseHeaders: {
                ...details.responseHeaders,
                "Content-Security-Policy": [
                    "default-src 'self' 'unsafe-inline' data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob:; style-src 'self' 'unsafe-inline' data: blob:;"
                ]
            }
        });
    });

    if (isDev) {
        mainWindow.loadURL(`http://localhost:5123`);
    } else {
        mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
    }

    ipcMain.handle('read-csv', async (_event, filePath: string) => {
        try {
            const data = await CSVReader.readCSV(filePath);
            return data;
        } catch (error) {
            throw error;
        }
    });

    ipcMain.handle('open-dialog-popup', async (_event) => {
        try {
            const folderPath = await openDialogPopup();
            if (!folderPath) {
                throw new Error('Folder path is required');
            }

            const tree = await createTree(folderPath);
            return tree;
        } catch (error) {
            throw error;
        }
    });



    app.on("window-all-closed", () => {
        if (process.platform !== "darwin") {
            app.quit();
        }
    });

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            app.emit("ready");
        }
    });
});
