"use client";

import { Button } from "@mirohq/design-system";
import { useState } from "react";

import { Editor } from "~/components/Editor";
import { Input } from "~/components/Input";
import { codeSnippetsService } from "~/business/services/CodeSnippets";
import { run } from "~/sandbox";

export default function CodeEditor() {
  const [code, setCode] = useState<string | undefined>("");
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();

    codeSnippetsService
      .create({
        code,
        name: e.currentTarget.elements.namedItem("name").value,
      })
      .then((snippet) => {
        console.log({ snippet });
      })
      .catch(console.error);
  };

  const handleCodeExecute = () => {
    if (!code) throw new Error("Code is invalid");
    run(code).then(console.log).catch(console.error);
  };

  return (
    <main>
      <form action="post" onSubmit={handleSubmit}>
        <Button type="submit">Save</Button>
        <Button
          type="button"
          onClick={handleCodeExecute}
          variant="outline-prominent"
        >
          Execute
        </Button>
        <Input label="Name" name="name" />
        <Editor onChange={setCode} />
      </form>
    </main>
  );
}
