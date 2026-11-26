import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "We spent an hour deciding nothing, then booked another meeting to decide it later.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, line + "\n", "utf8");

// Read-back validation: the written file must equal the line exactly.
const written = readFileSync(entryPath, "utf8");
if (written !== line + "\n") {
  console.error("entry.txt does not match the line exactly");
  process.exit(1);
}
