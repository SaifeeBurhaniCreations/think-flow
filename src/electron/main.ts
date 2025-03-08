import { app, BrowserWindow, session, screen } from "electron";
import path from "path";
import { isDev } from "./utils.js";

app.on("ready", () => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    const mainWindow = new BrowserWindow({
        width,
        height,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
        }
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
    } 
    else {
        mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
    }
});

