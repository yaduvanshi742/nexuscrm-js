import { createApp } from './app.js';
import { env } from './config/env.js';
import { ensureDatabase } from './database/seed.js';

await ensureDatabase();

const app = createApp();

app.listen(env.port, () => {
  console.log(`NexusCRM JS running on http://localhost:${env.port}`);
});
