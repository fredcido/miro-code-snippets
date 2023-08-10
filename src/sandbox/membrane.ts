// import createVirtualEnvironment from "@locker/near-membrane-dom";

import { type Sandbox } from "./sandbox";

export class Membrane implements Sandbox {
  execute(code: string) {
    const env = createVirtualEnvironment(window, {
      globalObjectShape: window,
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return env.evaluate(code);
  }
}
