CREATE TABLE "Expenses" (
	"id" serial PRIMARY KEY NOT NULL,
	"date_added" date NOT NULL,
	"time_added" timestamp with time zone NOT NULL,
	"user_id" text NOT NULL,
	"associated_users" jsonb NOT NULL,
	"category" text DEFAULT 'item' NOT NULL,
	"currency" text DEFAULT 'USD' NOT NULL,
	"total_value" bigint NOT NULL,
	"updates" jsonb
);
