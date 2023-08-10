import React from "react";
import {
  default as MonacoEditor,
  type Monaco,
  type OnChange,
  type BeforeMount,
} from "@monaco-editor/react";

import sdkTypes from "raw-loader!@mirohq/websdk-types/dist/index.d.ts?raw-loader";

type Props = {
  initialCode?: string;
  onChange?: OnChange;
};

export function Editor({ initialCode, onChange }: Props) {
  const beforeMount: BeforeMount = (monaco: Monaco) => {
    monaco.languages.typescript.typescriptDefaults.addExtraLib(
      sdkTypes,
      "@mirohq/websdk-types"
    );
  };

  return (
    <MonacoEditor
      height="90%"
      defaultLanguage="typescript"
      beforeMount={beforeMount}
      theme="vs-dark"
      options={{
        minimap: { enabled: false },
      }}
      defaultValue={initialCode}
      onChange={onChange}
    />
  );
}
