/**
 * Pre-publish guard.
 *
 * Fails the build while any PLACEHOLDER tag remains in the content file, so
 * invented contact details and figures can't reach a live site by accident.
 * Delete the tag on a line once you've put the club's real value there.
 *
 * Run on its own with `pnpm check`. Skip once with SKIP_CONTENT_CHECK=1 — for
 * a local preview build only, never for something you're publishing.
 */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const file = path.join(root, "src/data/site.ts");

const lines = (await readFile(file, "utf8")).split("\n");
const outstanding = lines
  .map((text, i) => ({ line: i + 1, text: text.trim() }))
  .filter(({ text }) => text.includes("PLACEHOLDER") && !text.startsWith("*"));

if (outstanding.length === 0) {
  console.log("✓ content check: no placeholders left\n");
  process.exit(0);
}

console.error(
  `\n✗ content check: ${outstanding.length} placeholder${
    outstanding.length === 1 ? "" : "s"
  } still in src/data/site.ts\n`,
);
for (const { line, text } of outstanding) {
  console.error(`  site.ts:${line}  ${text.slice(0, 96)}`);
}
console.error(
  "\nThese are invented values. Replace each with the club's real detail and\n" +
    "delete the PLACEHOLDER tag on that line, then build again.\n",
);

if (process.env.SKIP_CONTENT_CHECK === "1") {
  console.error("SKIP_CONTENT_CHECK=1 set — continuing. Do not publish this build.\n");
  process.exit(0);
}
process.exit(1);
