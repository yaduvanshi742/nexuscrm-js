import { readDatabase, resetDatabase } from './storage.js';

export async function ensureDatabase() {
  await readDatabase();
}

if (process.argv[1]?.endsWith('seed.js')) {
  await resetDatabase();
  console.log('NexusCRM database seeded.');
}
