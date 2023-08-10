import "ses";
import { type Sandbox } from "./sandbox";

export class Ses implements Sandbox {
  constructor() {
    lockdown();
  }
  async execute(code: string) {
    const c = new Compartment({
      print: harden(console.log),
      miro: harden(miro),
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await c.evaluate(code);
  }
}
