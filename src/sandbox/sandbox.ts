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
    runtime = new Ses();
  }

  return runtime.execute(code);
};
