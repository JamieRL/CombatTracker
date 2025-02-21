import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const encounters = sqliteTable('encounter', {
	id: integer('id').primaryKey(),
	name: text('name').notNull(),
	created_at: text('created_at').notNull(),
	updated_at: text('updated_at').notNull(),
	user_id: integer('user_id').notNull()
});
