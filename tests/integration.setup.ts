import { beforeEach } from "vitest";

import { resetDb } from "./db";

beforeEach(async () => {
  await resetDb();
});
