// server/server.ts
import express from 'express';
import { loadDataset } from '../ui/lib/fileSystem.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api/dataset', async (req:any, res:any) => {
    const projectPath = process.cwd(); 
    try {
        const data = await loadDataset(projectPath);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});