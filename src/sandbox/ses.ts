import "ses";
import { type Sandbox } from "./sandbox";
import { type Miro } from "@mirohq/websdk-types";

function createAccessDeniedProxy<T extends object>(target: T): T {
  return new Proxy<T>(target, {
    get(target, prop) {
      if (prop === "ui") {
        throw new Error("Access denied to 'ui' property.");
      }

      if (prop in target) {
        const value = target[prop as keyof typeof target];

        if (typeof value === "object" && value !== null) {
          return createAccessDeniedProxy(value);
        }
        return value;
      }
    },
  });
}

export class Ses implements Sandbox {
  proxiedMiro: Miro;

  constructor(miro: Miro) {
    lockdown();
    this.proxiedMiro = createAccessDeniedProxy(miro);
  }
  async execute(code: string) {
    const c = new Compartment({
      console: harden(console),
      setTimeout: harden(window.setTimeout),
      setInterval: harden(window.setInterval),
      miro: harden(this.proxiedMiro),
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await c.evaluate(code);
  }
}
