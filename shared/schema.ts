import { pgTable, text, timestamp, integer } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

export const news = pgTable('news', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  excerpt: text('excerpt').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const projects = pgTable('projects', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  category: text('category').notNull(),
  status: text('status').notNull().default('active'),
});

export const team = pgTable('team', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  name: text('name').notNull(),
  position: text('position').notNull(),
  description: text('description').notNull(),
  email: text('email'),
});

// Insert schemas
export const insertNewsSchema = createInsertSchema(news).omit({
  id: true,
  createdAt: true,
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
});

export const insertTeamSchema = createInsertSchema(team).omit({
  id: true,
});

// Types
export type InsertNews = z.infer<typeof insertNewsSchema>;
export type SelectNews = typeof news.$inferSelect;

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type SelectProject = typeof projects.$inferSelect;

export type InsertTeam = z.infer<typeof insertTeamSchema>;
export type SelectTeam = typeof team.$inferSelect;