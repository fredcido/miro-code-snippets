"use client";

import { Button } from "@mirohq/design-system";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

import { Editor } from "~/components/Editor";
import { Input } from "~/components/Input";
import { useMiroContext } from "~/components/MiroContext";
import { codeSnippetsService } from "~/business/services/CodeSnippets";
import { run } from "~/sandbox";
import { Tags } from "~/components/Tags";

export default function CodeEditor() {
  const [code, setCode] = useState<string | undefined>("");
  const searchParams = useSearchParams();

  const tags = searchParams
    .getAll("type")
    .map((type) => ({ id: type, name: type }));

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
        <Tags tags={tags} />
        <Input label="Name" name="name" />
        <Editor onChange={setCode} />
      </form>
    </main>
  );
}
