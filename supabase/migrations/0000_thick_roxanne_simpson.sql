CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text,
	"email" text,
	"college" text,
	"major" text,
	"year" varchar(4),
	"github" text
);
