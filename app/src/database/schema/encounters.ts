// drizzle schema for encounters

import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const encounters = sqliteTable('encounters', {
	id: integer('id').primaryKey(),
	name: text('name').notNull(),
	created_at: text('created_at'),
	updated_at: text('updated_at')
});
