import { sqliteTable, integer, primaryKey, text, blob } from 'drizzle-orm/sqlite-core';

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

export const game = sqliteTable('game', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	title: text('title'),
	cover: blob('cover'),
	animation: blob('animation'),
	floppy: text('floppy'),
	
})

export type Session = typeof session.$inferSelect;
export type User = typeof user.$inferSelect;
export type Game = typeof game.$inferSelect;