import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'local-db.json');

export const readDB = () => {
  if (!fs.existsSync(dbPath)) return { vendors: [], leads: [], appointments: [] };
  const data = fs.readFileSync(dbPath, 'utf8');
  return JSON.parse(data);
};

export const writeDB = (data: any) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
};
