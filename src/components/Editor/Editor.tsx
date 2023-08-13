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
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ES2015,
      lib: ["es6"],
    });

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

    monaco.languages.typescript.typescriptDefaults.addExtraLib(
      types,
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
      defaultValue={initialCode}
    />
  );
}
