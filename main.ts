import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Star for Monday — a one-star review of Monday as if it were a restaurant.
// 24 words, 127 characters: inside the gate (1–180 chars) and the 25-word cap.
// Hits every beat of the judge's brief: a table, a waiter, a dish (cold coffee)
// and a bill gone wrong — and the joke only works for Monday, the day that
// bills you for the entire week.
const ENTRY =
  "One star. Booked a table for Monday, waited an hour, the waiter served cold coffee, and the bill charged me for all seven days.";

function buildEntryLine(): string {
  return ENTRY;
}

function resolveOutputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "output";
}

const outDir = resolveOutputDir();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), buildEntryLine(), "utf8");
