import { fileURLToPath } from "node:url";
import path from "node:path";

export const filename = (importMetaUrl: string) => fileURLToPath(importMetaUrl);
export const dirname = (importMetaUrl: string) =>
  path.dirname(filename(importMetaUrl));
