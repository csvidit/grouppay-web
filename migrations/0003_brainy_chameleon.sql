ALTER TABLE "Expenses" ADD COLUMN "title" text NOT NULL;--> statement-breakpoint
ALTER TABLE "Expenses" ADD COLUMN "description" text;--> statement-breakpoint
ALTER TABLE "Expenses" ADD COLUMN "split_method" text DEFAULT 'equal' NOT NULL;--> statement-breakpoint
ALTER TABLE "Expenses" ADD COLUMN "split_details" jsonb;--> statement-breakpoint
ALTER TABLE "Expenses" ADD COLUMN "status" text DEFAULT 'pending' NOT NULL;--> statement-breakpoint
ALTER TABLE "Expenses" ADD COLUMN "receipt_url" text;--> statement-breakpoint
ALTER TABLE "Expenses" ADD COLUMN "notes" text;--> statement-breakpoint
ALTER TABLE "Expenses" ADD COLUMN "payment_method" text;--> statement-breakpoint
ALTER TABLE "Expenses" ADD COLUMN "location" jsonb;--> statement-breakpoint
ALTER TABLE "Expenses" ADD COLUMN "is_deleted" boolean DEFAULT false NOT NULL;