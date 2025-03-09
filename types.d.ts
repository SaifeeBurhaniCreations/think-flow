export type csvData = {
    id: number;
    name: string;
    age: number;
    email: string;
}

declare global {
    interface Window {
        electron: {
            readCSV: (filePath: string) => Promise<csvData[]>;
            openDialogPopup: () => Promise<string>;
        };
    }
}