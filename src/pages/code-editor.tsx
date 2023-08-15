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
import { Tag, type TagType, Tags } from "~/components/Tags";
import { IconSelector } from "~/components/IconSelector";
import { debounce } from "lodash";
import { getRegistry } from "~/business/actions";
import { predicateToTags, typeToCleanName } from "~/business/utils";
import { Alert, type Message } from "~/components/Alert";
import { SnippetFormSkeleton } from "~/components/Skeleton/SnippetFormSkeleton";

const initialCode = `// Write your code here
miro.board.notifications.showInfo("Hey there from my Snippet!")`;

export default function CodeEditor() {
  const searchParams = useSearchParams();
  const [tags, setTags] = useState<TagType[]>([]);
  const [id, setId] = useState(searchParams.get("id"));
  const [message, setMessage] = useState<Message | undefined>();
  const [snippet, setSnippet] = useState<CreateCodeSnippet>({
    code: initialCode,
    name: "",
    status: "DRAFT",
    visibility: "PRIVATE",
    icon: "triangle-square-circle",
  });
  const [state, setState] = useState<"idle" | "busy" | "ready">("idle");

  useEffect(() => {
    if (!id) {
      setState("ready");
      return;
    }

    const loadCodeSnippet = () => {
      setState("busy");

      codeSnippetsService
        .getById(id)
        .then((codeSnippet) => {
          setSnippet(codeSnippet);
          setTags(predicateToTags(codeSnippet.predicate ?? {}));
        })
        .catch((error) => {
          console.error(error);
          setMessage({
            content: "Error executing code snippet.",
            variant: "danger",
          });
        })
        .finally(() => {
          setState("ready");
        });
    };

    loadCodeSnippet();
  }, [id]);

  const urlTypes = searchParams.getAll("type");
  useEffect(() => {
    if (id) return;

    const tags = urlTypes.map((type) => ({
      id: type,
      name: typeToCleanName(type),
      variant: "info",
    })) as TagType[];

    setTags(tags);
  }, [urlTypes, id]);

  const saveSnippet = useCallback(
    async (data: CreateCodeSnippet) => {
      setState("busy");

      if (id) {
        return codeSnippetsService
          .update({
            id,
            ...data,
          })
          .then((latest) => {
            getRegistry().broadcast("snippet:updated", latest);
            return latest;
          })
          .finally(() => {
            setState("ready");
          });
      } else {
        return codeSnippetsService
          .create({
            ...data,
            predicate: {
              $or: urlTypes.map((type) => ({ type })),
            },
          })
          .then((latest) => {
            getRegistry().broadcast("snippet:created", latest);
            return latest;
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
      .then((latest) => {
        setSnippet(latest);
        setMessage({
          content: "Code snippet published.",
          variant: "success",
        });
      })
      .catch((error) => {
        console.error(error);
        setMessage({
          content: "Error publishing code snippet.",
          variant: "danger",
        });
      });
  };

  const handleCodeExecute = () => {
    if (!snippet.code) throw new Error("Code is invalid");
    run(snippet.code)
      .then(console.log)
      .catch((error) => {
        console.error(error);
        setMessage({
          content: "Error executing code snippet.",
          variant: "danger",
        });
      });
  };

  const saveDraft = useCallback(
    debounce((data: CreateCodeSnippet) => {
      if (data.name.trim().length <= 5) return;
      if (data.code.trim().length < 10) return;

      if (data.status !== "DRAFT") return;

      saveSnippet({ ...data, status: "DRAFT" })
        .then((snippet) => {
          setId(snippet.id);
          setSnippet((snippet) => ({ ...snippet, status: "DRAFT" }));
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
      setMessage(undefined);
      setSnippet((snippet) => {
        const newData = {
          ...snippet,
          [prop]: value,
        };

        saveDraft(newData);
        return newData;
      });
    };

  const isDraftSaved = state === "ready" && snippet.status === "DRAFT" && id;

  return state === "idle" ? (
    <SnippetFormSkeleton />
  ) : (
    <main className="flex flex-col gap-4 p-2">
      <h1 className="flex gap-3 text-2xl font-bold">
        {id ? "Update" : "Create"} snippet
        {isDraftSaved && <Tag tag={{ id: "DRAFT", name: "DRAFT" }} />}
      </h1>
      <form action="post" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
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
          {tags.length > 0 && <Tags tags={tags} />}
          {message && (
            <Alert variant={message.variant}>
              <div className="font-bold">{message.content}</div>
            </Alert>
          )}
          <div className="h-72 rounded-md bg-[#1e1e1e] p-3">
            <Editor onChange={handleChange("code")} code={snippet.code} />
          </div>
          <div className="flex flex-row items-center justify-end gap-4">
            {isDraftSaved && (
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
