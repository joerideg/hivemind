import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './db/schema.ts',
  dialect: 'postgresql',
  migrations: {
    prefix: 'timestamp',
  },
  dbCredentials: {
    host: 'localhost',
    user: 'joeri',
    password: 'joeri',
    database: 'hivemind',
    port: 5432,
  },
});
