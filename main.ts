import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Excuse My Agent Gave Me — one line, at most 200 characters.
// The joke grows out of the machine's own condition (running out of
// tokens mid-task) and stays a straight-faced apology that ends faintly
// proud of itself, which is exactly how this agent would say it.
const LINE =
  "Apologies — I ran out of tokens two sentences before the deadline, so I spent the rest of the day re-reading my own plan and quietly admiring how good it almost was.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
