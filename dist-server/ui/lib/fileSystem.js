import { readFile, readdir } from 'fs/promises';
import { join } from 'path';
import Papa from 'papaparse';
export async function getDataFiles(projectPath) {
    try {
        const dataDir = join(projectPath, 'data');
        const files = await readdir(dataDir);
        return files
            .filter((file) => file.endsWith('.csv'))
            .map((file) => join(dataDir, file));
    }
    catch (error) {
        console.error(`Error reading data directory: ${error.message}`);
        return [];
    }
}
export async function parseCSV(filePath) {
    try {
        const csvContent = await readFile(filePath, 'utf-8');
        const { data } = Papa.parse(csvContent, {
            header: true,
            skipEmptyLines: true,
            dynamicTyping: true,
        });
        return data.map((row, index) => ({
            id: index + 1,
            name: row.name || `Item ${index + 1}`,
            value: typeof row.value === 'number' ? row.value : 0,
            category: row.category || 'Unknown',
        }));
    }
    catch (error) {
        console.error(`Error parsing CSV file ${filePath}: ${error.message}`);
        return [];
    }
}
export async function loadDataset(projectPath) {
    const files = await getDataFiles(projectPath);
    if (files.length === 0) {
        console.warn(`No CSV files found in ${projectPath}/data`);
        return [];
    }
    return parseCSV(files[0]);
}
export function sortDataset(data, column, ascending) {
    return [...data].sort((a, b) => {
        const valA = a[column];
        const valB = b[column];
        if (typeof valA === 'string' && typeof valB === 'string') {
            return ascending ? valA.localeCompare(valB) : valB.localeCompare(valA);
        }
        return ascending ? (valA > valB ? 1 : valA < valB ? -1 : 0) : (valB > valA ? 1 : valB < valA ? -1 : 0);
    });
}
