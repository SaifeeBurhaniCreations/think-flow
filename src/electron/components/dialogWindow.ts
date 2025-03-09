import { dialog } from 'electron';

export async function openDialogPopup(): Promise<string | undefined> {
  const result = await dialog.showOpenDialog({
    properties: ['openDirectory'],
  });
  if (result.canceled) return undefined;
  return result.filePaths[0];
}