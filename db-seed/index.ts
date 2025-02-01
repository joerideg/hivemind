import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './db/schema';

const { POSTGRES_DB, POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD } =
  process.env;

if (!POSTGRES_DB || !POSTGRES_PORT || !POSTGRES_USER || !POSTGRES_PASSWORD) {
  throw new Error('PostgreSQL Variables not provided');
}

// for query purposes
const queryClient = postgres({
  host: '0.0.0.0',
  database: POSTGRES_DB,
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
});

const db = drizzle(queryClient, { schema });

await db.insert(schema.messages).values({ message: 'new message 1' });

const result = await db.select().from(schema.messages);

console.log(result);

queryClient.end();
