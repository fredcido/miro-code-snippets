"use client";

import { Button } from "@mirohq/design-system";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

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
import { debounce } from "lodash";
import { getRegistry } from "~/business/actions";

const initialCode = `// Write your code here
miro.board.notifications.showInfo("Hey there from my Snippet!")`;

export default function CodeEditor() {
  const searchParams = useSearchParams();
  const types = searchParams.getAll("type");
  const [id, setId] = useState(searchParams.get("id"));
  const [snippet, setSnippet] = useState<CreateCodeSnippet>({
    code: initialCode,
    name: "",
    status: "DRAFT",
    visibility: "PRIVATE",
    icon: "triangle-square-circle",
  });
  const [state, setState] = useState<"idle" | "busy" | "ready">("idle");

  useEffect(() => {
    if (!id || state !== "idle") return;

    const loadCodeSnippet = () => {
      setState("busy");

      codeSnippetsService
        .getById(id)
        .then((codeSnippet) => {
          setSnippet(codeSnippet);
        })
        .catch(console.error)
        .finally(() => {
          setState("ready");
        });
    };

    loadCodeSnippet();
  }, [id, state, setState]);

  const tags = types.map((type) => ({
    id: type,
    name: type.split("_").join(" ").toLocaleUpperCase(),
  }));

  const saveSnippet = useCallback(
    async (data: CreateCodeSnippet) => {
      setState("busy");

      if (id) {
        return codeSnippetsService
          .update({
            id,
            ...data,
          })
          .then((snippet) => {
            getRegistry().broadcast("snippet:updated", snippet);
            return snippet;
          })
          .finally(() => {
            setState("ready");
          });
      } else {
        return codeSnippetsService
          .create({
            ...data,
            predicate: {
              $or: types.map((type) => ({ type })),
            },
          })
          .then((snippet) => {
            getRegistry().broadcast("snippet:created", snippet);
            return snippet;
          })
          .finally(() => {
            setState("ready");
          });
      }
    },
    [id]
  );

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();

    saveSnippet({ ...snippet, status: "PUBLISHED" })
      .then(() => {
        return miro.board.ui.closeModal();
      })
      .catch(console.error);
  };

  const handleCodeExecute = () => {
    if (!snippet.code) throw new Error("Code is invalid");
    run(snippet.code).then(console.log).catch(console.error);
  };

  const saveDebounced = useCallback(
    debounce((data: CreateCodeSnippet) => {
      if (data.name.trim().length <= 2) return;
      if (data.code.trim().length < 5) return;

      saveSnippet({ ...data, status: "DRAFT" })
        .then((snippet) => {
          setId(snippet.id);
        })
        .catch(console.error);
    }, 1000),
    [saveSnippet]
  );

  const handleChange =
    <Prop extends keyof CodeSnippet, Value extends CodeSnippet[Prop]>(
      prop: Prop
    ) =>
    (value?: Value) => {
      setSnippet((snippet) => {
        const newData = {
          ...snippet,
          [prop]: value,
        };

        saveDebounced(newData);
        return newData;
      });
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
            <Editor onChange={handleChange("code")} code={snippet.code} />
          </div>
          <div className="flex flex-row items-center justify-end gap-4">
            {state === "ready" && snippet.status === "DRAFT" && id && (
              <div className="italic text-zinc-500" aria-live="assertive">
                Draft saved
              </div>
            )}
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
