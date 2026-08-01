import { cp, mkdir, readdir, rm } from "node:fs/promises";
import { join } from "node:path";

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
  await cp(join(root, directory), join(output, directory), { recursive: true });
}
