import { setFolderTree } from "../redux/slices/folderTreeSlice";
import { AppDispatch } from "../redux/store";

export async function openDialogBox(dispatch: AppDispatch, onNavigate: (path: string) => void): Promise<string | undefined> {
    if (!window.electron) {
        console.error("Electron API is not available.");
        return;
    }
    
    try {
        const result = await window.electron.openDialogPopup();
        dispatch(setFolderTree(result));
        onNavigate("/main");
    } catch (error) {
        console.error('Failed to open folder dialog:', error);
    }
}

