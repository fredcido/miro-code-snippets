import { getQuickJS } from "quickjs-emscripten";

import { type Sandbox } from "./sandbox";

export const quickJS: Sandbox = {
  execute: async (code: string) => {
    const QuickJS = await getQuickJS();
    const vm = QuickJS.newContext();

    const result = vm.evalCode(code);
    if (result.error) {
      console.log("Execution failed:", vm.dump(result.error));
      result.error.dispose();
    } else {
      console.log("Success:", vm.dump(result.value));
      result.value.dispose();
    }

    vm.dispose();
  },
};
