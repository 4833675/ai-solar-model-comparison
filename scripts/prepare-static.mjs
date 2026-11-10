import { cp, mkdir, readdir, rm } from "node:fs/promises";
import { join } from "node:path";
import { BLACKHOLE_WORKS } from "../assets/blackhole-data.js";

const root = process.cwd();
const output = join(root, ".sites-static");

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const entry of await readdir(root, { withFileTypes: true })) {
  if (entry.isFile() && entry.name.endsWith(".html")) {
    await cp(join(root, entry.name), join(output, entry.name));
  }
}

for (const asset of ["favicon.ico", "favicon.svg"]) {
  await cp(join(root, asset), join(output, asset));
}

for (const directory of ["assets", "models"]) {
  await cp(join(root, directory), join(output, directory), {
    recursive: true,
    filter: source => source !== join(root, "assets", "shots", "blackhole"),
  });
}

// Publish only listed works. The judging rubric, hidden answers, reference code,
// and not-yet-listed submissions must never enter the deployment artifact.
for (const work of BLACKHOLE_WORKS) {
  if (!/^blackhole\/[^/]+\.html$/.test(work.file)) throw new Error(`Invalid blackhole work path: ${work.file}`);
  if (!/^assets\/shots\/blackhole\/[^/]+\.jpg$/.test(work.shot)) throw new Error(`Invalid blackhole screenshot path: ${work.shot}`);
  await mkdir(join(output, "blackhole"), { recursive: true });
  await mkdir(join(output, "assets", "shots", "blackhole"), { recursive: true });
  await cp(join(root, work.file), join(output, work.file));
  await cp(join(root, work.shot), join(output, work.shot));
}
