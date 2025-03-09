export interface DatasetRow {
    id: number;
    name: string;
    age: number;
    email: string;
}

export function loadDataset(filePath: string): Promise<DatasetRow[]> {
    return window.electron.readCSV(filePath);
}

export function sortDataset(data: DatasetRow[], column: keyof DatasetRow, ascending: boolean): DatasetRow[] {
    return [...data].sort((a, b) => {
      const valA = a[column];
      const valB = b[column];
      if (typeof valA === 'string' && typeof valB === 'string') {
        return ascending ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }
      return ascending ? (valA > valB ? 1 : valA < valB ? -1 : 0) : (valB > valA ? 1 : valB < valA ? -1 : 0);
    });
  }