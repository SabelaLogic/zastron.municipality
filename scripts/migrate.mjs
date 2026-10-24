#!/usr/bin/env node
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.log("[migrate] DATABASE_URL not set \u2014 skipping.");
  process.exit(0);
}
console.log("[migrate] DATABASE_URL set, but this presentation has no app schema to apply.");
process.exit(0);
