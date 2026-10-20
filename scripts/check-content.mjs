/**
 * Pre-publish guard.
 *
 * Blocks the build while anything on the site would be unverified or false:
 * a PLACEHOLDER tag still in the content file, or one of the hard requirements
 * below still unset.
 *
 * Run alone with `pnpm check`. SKIP_CONTENT_CHECK=1 bypasses it for a local
 * preview build only — never for something you are publishing.
 */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const file = path.join(root, "src/data/site.ts");
const source = await readFile(file, "utf8");
const lines = source.split("\n");

const problems = [];

// 1. Any invented value still tagged in the content file.
lines.forEach((text, i) => {
  const t = text.trim();
  if (t.includes("PLACEHOLDER") && !t.startsWith("*")) {
    problems.push({ where: `site.ts:${i + 1}`, text: t.slice(0, 92) });
  }
});

// 2. Hard requirements — the site cannot honestly go live without these.
const required = [
  {
    test: /email:\s*null/,
    message:
      "club.email is unset. Every contact route on the site (the form, the sponsor and coaching mailto links) depends on it.",
  },
  {
    test: /mediaReleasesOnFile\s*=\s*false/,
    message:
      "mediaReleasesOnFile is false. The photos show identifiable minors — confirm a signed release is on file for every player shown, then set this true.",
  },
];

for (const { test, message } of required) {
  if (test.test(source)) problems.push({ where: "required", text: message });
}

if (problems.length === 0) {
  console.log("\n✓ content check: nothing unverified left\n");
  process.exit(0);
}

console.error(`\n✗ content check: ${problems.length} item${problems.length === 1 ? "" : "s"} blocking publish\n`);
for (const { where, text } of problems) {
  console.error(`  ${where.padEnd(12)} ${text}`);
}
console.error("");

if (process.env.SKIP_CONTENT_CHECK === "1") {
  console.error("SKIP_CONTENT_CHECK=1 set — continuing. Do not publish this build.\n");
  process.exit(0);
}
process.exit(1);
