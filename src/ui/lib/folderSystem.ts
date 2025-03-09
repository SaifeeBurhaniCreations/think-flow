
export async function openDialogBox(): Promise<string | undefined> {
    if (!window.electron) {
        console.error("Electron API is not available.");
        return;
    }
    
    try {
        const result = await window.electron.openDialogPopup();
        console.log(result);
        return result;
    } catch (error) {
        console.error('Failed to open folder dialog:', error);
        return undefined;
    }
}

