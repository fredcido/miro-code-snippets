"use client";

import { Button } from "@mirohq/design-system";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Editor } from "~/components/Editor";
import { Input } from "~/components/Input";
import {
  type CodeSnippet,
  type CreateCodeSnippet,
  codeSnippetsService,
} from "~/business";
import { run } from "~/sandbox";
import { Tags } from "~/components/Tags";
import { IconSelector } from "~/components/IconSelector";

const initialCode = `/**
 * Make sure your code exports the run function as demonstrated here
 */
export async function run(context) {
  // Write your code here
  miro.board.createStickyNote({
      content: 'Hello'
  })
}
`;

export default function CodeEditor() {
  const [snippet, setSnippet] = useState<CreateCodeSnippet>({
    code: initialCode,
    name: "",
    status: "DRAFT",
    visibility: "PRIVATE",
    icon: "triangle-square-circle",
  });
  const [state, setState] = useState<"idle" | "busy">("idle");

  const searchParams = useSearchParams();

  const types = searchParams.getAll("type");
  const id = searchParams.get("id");

  useEffect(() => {
    if (!id) return;

    const loadCodeSnippet = () => {
      setState("busy");

      codeSnippetsService
        .getById(id)
        .then((codeSnippet) => {
          console.log({ codeSnippet });
          setSnippet(codeSnippet);
        })
        .catch(console.error)
        .finally(() => {
          setState("idle");
        });
    };

    loadCodeSnippet();
  }, [id]);

  const tags = types.map((type) => ({
    id: type,
    name: type.split("_").join(" ").toLocaleUpperCase(),
  }));

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();

    setState("busy");

    if (id) {
      codeSnippetsService
        .update({
          id,
          ...snippet,
        })
        .then(() => {
          return miro.board.ui.closeModal();
        })
        .catch(console.error)
        .finally(() => {
          setState("idle");
        });
    } else {
      codeSnippetsService
        .create({
          ...snippet,
          predicate: {
            $or: types.map((type) => ({ type })),
          },
        })
        .then(() => {
          return miro.board.ui.closeModal();
        })
        .catch(console.error)
        .finally(() => {
          setState("idle");
        });
    }
  };

  const handleCodeExecute = () => {
    if (!snippet.code) throw new Error("Code is invalid");
    run(snippet.code).then(console.log).catch(console.error);
  };

  const handleChange =
    <Prop extends keyof CodeSnippet, Value extends CodeSnippet[Prop]>(
      prop: Prop
    ) =>
    (value?: Value) => {
      setSnippet((snippet) => ({
        ...snippet,
        [prop]: value,
      }));
    };

  return (
    <main className="flex flex-col gap-4 p-2">
      <h1>{id ? "Update" : "Create"} snippet</h1>
      <form action="post" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <IconSelector onSelect={handleChange("icon")} icon={snippet.icon} />

            <Input
              placeholder="Enter snippet name"
              name="name"
              autoComplete="off"
              value={snippet.name}
              onChange={(ev) => handleChange("name")(ev.currentTarget.value)}
              required
              autoFocus
            />
          </div>
          <div className="py-2">
            <Tags tags={tags} />
          </div>
          <div className="h-80 rounded-md bg-[#1e1e1e] p-3">
            <Editor
              onChange={handleChange("code")}
              initialCode={snippet.code}
            />
          </div>
          <div className="flex flex-row justify-end gap-4">
            <Button
              type="button"
              loading={state === "busy"}
              onClick={handleCodeExecute}
              variant="outline-prominent"
            >
              Execute
            </Button>
            <Button loading={state === "busy"} type="submit">
              Publish
            </Button>
          </div>
        </div>
      </form>
    </main>
  );
}
