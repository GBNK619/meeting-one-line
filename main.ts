import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "We spent an hour deciding nothing, then booked another meeting to decide it later.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
