import React from "react";
import {
  default as MonacoEditor,
  type Monaco,
  type OnChange,
  type BeforeMount,
} from "@monaco-editor/react";

import sdkTypes from "raw-loader!@mirohq/websdk-types/dist/index.d.ts?raw-loader";

const getTypes = () => {
  const contextTypes = `
      type CodeSnippetContext = {
        data: Record<string, unknown>
      }
      type Run = (context: CodeSnippetContext) => Promise<unknown>
      declare global {
        var run: Run
      }
    `;

  const types = `${sdkTypes}${contextTypes}`;

  return types;
};

type Props = {
  code?: string;
  onChange?: OnChange;
};

export function Editor({ code, onChange }: Props) {
  const beforeMount: BeforeMount = (monaco: Monaco) => {
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      allowNonTsExtensions: true,
    });

    monaco.languages.typescript.typescriptDefaults.addExtraLib(
      getTypes(),
      "@mirohq/websdk-types"
    );
  };

  return (
    <MonacoEditor
      defaultLanguage="typescript"
      className="rounded-lg"
      theme="vs-dark"
      beforeMount={beforeMount}
      onChange={onChange}
      options={{
        minimap: { enabled: false },
      }}
      value={code}
    />
  );
}
