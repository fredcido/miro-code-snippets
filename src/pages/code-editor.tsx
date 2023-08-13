"use client";

import { Button } from "@mirohq/design-system";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Editor } from "~/components/Editor";
import { Input } from "~/components/Input";
import {
  CodeSnippet,
  CreateCodeSnippet,
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
    status: "draft",
    visibility: "private",
    icon: "triangle-square-circle",
  });
  const [code, setCode] = useState<string | undefined>(initialCode);
  const [icon, setIcon] = useState<string>("triangle-square-circle");
  const [state, setState] = useState<"idle" | "busy">("idle");
  const [name, setName] = useState<string>("");

  const searchParams = useSearchParams();

  const types = searchParams.getAll("type");
  const id = searchParams.get("id");

  useEffect(() => {
    if (!id) return;

    setState("busy");

    codeSnippetsService
      .getById(id)
      .then((codeSnippet) => {
        console.log({ codeSnippet });
        setCode(codeSnippet.code);
        setName(codeSnippet.name);
        if (codeSnippet.icon) {
          setIcon(codeSnippet.icon);
        }
      })
      .catch(console.error)
      .finally(() => {
        setState("idle");
      });
  }, [id]);

  const tags = types.map((type) => ({
    id: type,
    name: type.split("_").join(" ").toLocaleUpperCase(),
  }));

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();

    setState("busy");

    codeSnippetsService
      .create({
        code,
        name,
        icon,
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
  };

  const handleCodeExecute = () => {
    if (!code) throw new Error("Code is invalid");
    run(code).then(console.log).catch(console.error);
  };

  return (
    <main className="flex flex-col gap-4 p-2">
      <h1>Create snippet</h1>
      <form action="post" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <IconSelector onSelect={setIcon} icon={icon} />

            <Input
              placeholder="Enter snippet name"
              name="name"
              autoComplete="off"
              value={name}
              onChange={(ev) => setName(ev.currentTarget.value)}
              required
              autoFocus
            />
          </div>
          <div className="py-2">
            <Tags tags={tags} />
          </div>
          <div className="h-80">
            <Editor onChange={setCode} initialCode={code} />
          </div>
          <div className="flex flex-row justify-end gap-4">
            <Button
              type="button"
              aria-busy={state === "busy"}
              onClick={handleCodeExecute}
              variant="outline-prominent"
            >
              Execute
            </Button>
            <Button aria-busy={state === "busy"} type="submit">
              Publish
            </Button>
          </div>
        </div>
      </form>
    </main>
  );
}
