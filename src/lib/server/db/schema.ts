import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
	id: text('id').primaryKey(),
	age: integer('age'),
	username: text('username').notNull().unique(),
	passwordHash: text('password_hash').notNull()
});

export const session = sqliteTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull()
});

export const games = sqliteTable('games', {
	id: text('id').primaryKey(),
	cover: text('cover'),
	animation: text('animation'),
	floppyColor: text('floppy_color'),
	floppyShadow: text('floppy_shadow'),
	cartColor: text('cart_color')
})

export type Session = typeof session.$inferSelect;
export type User = typeof user.$inferSelect;
export type Games = typeof games.$inferSelect;