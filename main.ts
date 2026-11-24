import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Autocorrect fail: one typo turns a deadline update into a wedding invitation.
const LINE =
  "I texted my boss 'I love you' instead of 'I love this deadline', and autocorrect has now scheduled our wedding for Friday, 3pm, in the standup channel. He replied: 'Bring the slides.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
