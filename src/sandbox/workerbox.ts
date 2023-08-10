import createWorkerBox from "workerboxjs";

import { type Sandbox } from "./sandbox";

export class Workerbox implements Sandbox {
  async execute(code: string) {
    const { run, destroy } = await createWorkerBox("");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result = await run(code);

    destroy();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return result;
  }
}
