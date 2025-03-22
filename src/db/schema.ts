import { integer, text, date, timestamp, jsonb, bigint, boolean } from 'drizzle-orm/pg-core';
import { pgTable } from 'drizzle-orm/pg-core';

export const expenses = pgTable('Expenses', {
  id: integer('id').primaryKey().notNull(),
  title: text('title').notNull(),
  description: text('description'),
  dateAdded: date('date_added').notNull(),
  timeAdded: timestamp('time_added', { withTimezone: true }).notNull(),
  userId: text('user_id').notNull(), // The person who paid
  associatedUsers: jsonb('associated_users').notNull(), // Users involved in the expense
  splitMethod: text('split_method').notNull().default('equal'), // equal, percentage, exact
  splitDetails: jsonb('split_details'), // Details of how the expense is split
  category: text('category').notNull().default('item'),
  currency: text('currency').notNull().default('USD'),
  totalValue: bigint('total_value', { mode: 'number' }).notNull(),
  status: text('status').notNull().default('pending'), // pending, settled, partially_settled
  receiptUrl: text('receipt_url'),
  notes: text('notes'),
  paymentMethod: text('payment_method'),
  location: jsonb('location'), // Could store coordinates, place name, etc.
  updates: jsonb('updates'),
  version: integer('version').notNull().default(1),
  isDeleted: boolean('is_deleted').notNull().default(false), // Soft delete flag
});