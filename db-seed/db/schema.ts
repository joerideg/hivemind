import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const messages = pgTable('messages', {
  id: serial('id').primaryKey(),
  message: text('message').notNull(),
});

export type Message = typeof messages.$inferSelect; 
export type NewMessage = typeof messages.$inferInsert; 
