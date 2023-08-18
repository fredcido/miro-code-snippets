// import { Membrane } from "./membrane";
// import { Workerbox } from "./workerbox";
import { Ses } from "./ses";
// import { quickJS } from "./quickjs";

export interface Sandbox {
  execute(code: string): Promise<unknown>;
}

let runtime: Sandbox;

export const run = async (code: string) => {
  if (!runtime) {
    runtime = new Ses(window.miro);
  }

  return runtime.execute(code);
};

export const createProtectedMiroProxy = <T extends object>(target: T): T => {
  const newTarget = structuredClone(target);
  return new Proxy<T>(newTarget, {
    get(target, prop) {
      if (prop === "ui") {
        throw new Error("Access denied to 'ui' property.");
      }

      if (prop in target) {
        const value = target[prop as keyof typeof target];

        if (typeof value === "object" && value !== null) {
          return createProtectedMiroProxy(value);
        }
        return value;
      }
    },
  });
};
