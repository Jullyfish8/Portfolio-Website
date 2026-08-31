import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const projects = sqliteTable('projects', {
  id: text('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  summary: text('summary').notNull(),
  category: text('category').notNull(),
  year: text('year').notNull(),
  status: text('status', { enum: ['draft','published','archived'] }).notNull().default('draft'),
  featured: integer('featured', { mode: 'boolean' }).notNull().default(false),
  blocks: text('blocks', { mode: 'json' }).notNull(),
  coverKey: text('cover_key'),
  createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp_ms' }).notNull(),
  publishedAt: integer('published_at', { mode: 'timestamp_ms' }),
});
