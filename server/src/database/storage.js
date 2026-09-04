import fs from 'node:fs/promises';
import { databasePath } from './paths.js';
import { seedData } from './seedData.js';

let writeQueue = Promise.resolve();

async function ensureFile() {
  try {
    await fs.access(databasePath);
  } catch {
    await fs.mkdir(new URL('.', `file://${databasePath}`).pathname, { recursive: true });
    await fs.writeFile(databasePath, JSON.stringify(seedData, null, 2));
  }
}

export async function readDatabase() {
  await ensureFile();
  const raw = await fs.readFile(databasePath, 'utf8');
  return JSON.parse(raw);
}

export async function writeDatabase(nextData) {
  writeQueue = writeQueue.then(async () => {
    await fs.writeFile(databasePath, JSON.stringify(nextData, null, 2));
    return nextData;
  });
  return writeQueue;
}

export async function resetDatabase() {
  await fs.writeFile(databasePath, JSON.stringify(seedData, null, 2));
  return seedData;
}
