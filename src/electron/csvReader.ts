import * as fs from 'fs';
import csv from 'csv-parser';

interface CSVRow {
  [key: string]: string;
}

export class CSVReader {
  static readCSV(filePath: string): Promise<CSVRow[]> {
    const results: CSVRow[] = [];

    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data: CSVRow) => results.push(data))
        .on('end', () => resolve(results))
        .on('error', (error: Error) => reject(error));
    });
  }
}