import { mkdirSync } from 'fs';
import { execSync } from 'child_process';

export function createProject(name: string, type?: 'ds' | 'ml') {
  try {
    mkdirSync(name);
    mkdirSync(`${name}/data`);
    mkdirSync(`${name}/notebooks`);

    const pipPath = process.platform === 'win32' ? `${name}\\.venv\\Scripts\\pip` : `${name}/.venv/bin/pip`;

    execSync(`python -m venv ${name}/.venv`);

    execSync(`${pipPath} install pandas numpy`);

    if (type === 'ds') execSync(`${pipPath} install matplotlib seaborn`);
    if (type === 'ml') {
      execSync(`${pipPath} install scikit-learn`);
      mkdirSync(`${name}/models`);
    }

    console.log(`Created ${type || 'generic'} project: ${name}`);
  } catch (error: any) {
    console.error(`Error creating project: ${error.message}`);
  }
}

// CLI handling
if (process.argv[2] === 'create') {
  const name = process.argv[3];
  const type = process.argv[4]?.includes('type=') ? (process.argv[4].split('=')[1] as 'ds' | 'ml') : undefined;
  createProject(name, type);
}
