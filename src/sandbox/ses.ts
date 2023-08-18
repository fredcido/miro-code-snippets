import "ses";
import { type Sandbox } from "./sandbox";
import { type Miro } from "@mirohq/websdk-types";

export class Ses implements Sandbox {
  proxiedMiro: Miro;

  constructor(miro: Miro) {
    this.proxiedMiro = miro;
    lockdown();
  }
  async execute(code: string) {
    const c = new Compartment({
      console: harden(console),
      setTimeout: harden(window.setTimeout),
      setInterval: harden(window.setInterval),
      miro: this.proxiedMiro,
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await c.evaluate(code);
  }
}
