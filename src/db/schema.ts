import { integer, text, date, timestamp, jsonb, bigint } from 'drizzle-orm/pg-core';
import { pgTable } from 'drizzle-orm/pg-core';

export const expenses = pgTable('Expenses', {
  id: integer('id').primaryKey().notNull(),
  dateAdded: date('date_added').notNull(),
  timeAdded: timestamp('time_added', { withTimezone: true }).notNull(),
  userId: text('user_id').notNull(),
  associatedUsers: jsonb('associated_users').notNull(),
  category: text('category').notNull().default('item'),
  currency: text('currency').notNull().default('USD'),
  totalValue: bigint('total_value', { mode: 'number' }).notNull(),
  updates: jsonb('updates'),
  version: integer('version').notNull().default(1),
});