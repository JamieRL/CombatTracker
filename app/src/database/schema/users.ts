import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
	id: integer('id').primaryKey(),
	username: text('username').notNull(),
	created_at: text('created_at').notNull(),
	updated_at: text('updated_at').notNull()
});
