"use client";

import { useEffect, useMemo, useState } from "react";
import type { CodeSnippet } from "~/business/models";
import { CodePreview } from "~/components/CodePreview";
import { codeSnippetsService } from "~/business/services/CodeSnippets";
import { Input } from "~/components/Input";
import { debounce } from "lodash";
import { getRegistry } from "~/business/actions";
import { Alert, type Message } from "~/components/Alert";
import { IconButton, IconPlus } from "@mirohq/design-system";
import { ListSnippetsSkeleton } from "~/components/Skeleton/ListSnippetsSkeleton";
import { runCode } from "~/business/utils";
import { type TabType, Tabs } from "~/components/Tabs";
import { useMiroContext } from "~/components/MiroContext";

const ownedTab = {
  id: "owned",
  name: "Owned",
};

const tabs: TabType[] = [
  ownedTab,
  {
    id: "user",
    name: "Used",
  },
  {
    id: "public",
    name: "Public",
  },
];

export default function Panel() {
  const miroContext = useMiroContext();
  const [items, setItems] = useState<CodeSnippet[]>([]);
  const [state, setState] = useState<"idle" | "busy" | "ready" | "error">(
    "idle"
  );
  const [tab, setTab] = useState<TabType>(ownedTab);
  const [message, setMessage] = useState<Message | undefined>();
  const [filter, setFilter] = useState("");

  // eslint-disable-next-line @typescript-eslint/require-await
  const onSnippetCreated = async (snippet: CodeSnippet) => {
    setItems((items) => [snippet, ...items]);
  };

  // eslint-disable-next-line @typescript-eslint/require-await
  const onSnippetUpdated = async (snippet: CodeSnippet) => {
    setItems((items) => {
      return items.map((item) => {
        if (item.id === snippet.id) {
          return snippet;
        }

        return item;
      });
    });
  };

  useEffect(() => {
    getRegistry().on("snippet:created", onSnippetCreated);
    getRegistry().on("snippet:updated", onSnippetUpdated);

    return () => {
      getRegistry().off("snippet:created", onSnippetCreated);
      getRegistry().off("snippet:updated", onSnippetUpdated);
    };
  }, []);

  useEffect(() => {
    setMessage(undefined);

    const load = () => {
      setState("busy");

      if (tab.id === "user") {
        return codeSnippetsService.listMine();
      }

      if (tab.id === "public") {
        return codeSnippetsService.listPublic();
      }

      return codeSnippetsService.listMine();
    };

    load()
      .then((items) => {
        setItems(items);
        setState("ready");
      })
      .catch(() => {
        setState("error");
        setMessage({
          content: "Error fetching code snippets.",
          variant: "danger",
        });
      });
  }, [tab.id]);

  const filteredItems = useMemo(() => {
    if (!filter.trim().length) return items;

    return items.filter((item) =>
      item.name.toLocaleLowerCase().includes(filter)
    );
  }, [filter, items]);

  if (!miroContext) {
    throw new Error("Missing Miro Context");
  }

  const { miro } = miroContext;

  const handleEdit = (code: CodeSnippet) => {
    miro.board.ui
      .openModal({
        url: `/code-editor/?id=${code.id}`,
        width: 800,
      })
      .catch(() => {
        setMessage({
          content: "Error editing code snippet.",
          variant: "danger",
        });
      });
  };

  const handleAdd = () => {
    miro.board.ui
      .openModal({
        url: `/code-editor`,
        width: 800,
      })
      .catch(() => {
        setMessage({
          content: "Error adding code snippet.",
          variant: "danger",
        });
      });
  };

  const handleRemove = (code: CodeSnippet) => {
    if (!confirm(`Are you sure you want to remove "${code.name}"`)) {
      return false;
    }

    codeSnippetsService
      .remove(code)
      .then(() => {
        setItems((items) => items.filter((item) => item.id !== code.id));
      })
      .catch(() => {
        setMessage({
          content: "Error removing code snippet.",
          variant: "danger",
        });
      });
  };

  const handleUse = (code: CodeSnippet) => {
    codeSnippetsService
      .remove(code)
      .then(() => {
        setItems((items) => items.filter((item) => item.id !== code.id));
      })
      .catch((error) => {
        console.error(error);
        setMessage({
          content: "Error removing code snippet.",
          variant: "danger",
        });
      });
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const handleFilter = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    e.preventDefault();

    setFilter(e.target.value);
  }, 200);

  const ItemsContent = () => {
    return (
      <>
        {filteredItems.length < 1 && (
          <Alert variant="idle">No code snippets available.</Alert>
        )}

        {filteredItems.map((item) => (
          <CodePreview
            key={item.id}
            codeSnippet={item}
            onEdit={() => handleEdit(item)}
            onRemove={() => handleRemove(item)}
            onExecute={() => void runCode(item)}
            onUse={() => handleUse(item)}
          />
        ))}
      </>
    );
  };

  return (
    <section className="flex h-screen flex-col gap-2 px-6 py-1">
      <Input
        placeholder="Search..."
        name="icon"
        autoComplete="off"
        type="search"
        className="flex-shrink-0"
        onKeyDown={(e) => e.stopPropagation()}
        onChange={handleFilter}
        autoFocus
      />

      <Tabs tabs={tabs} onSelect={setTab} selected={tab} />

      <main className="flex flex-grow flex-col gap-4 overflow-auto py-2">
        {message && <Alert variant={message.variant}>{message.content}</Alert>}
        {state === "ready" && <ItemsContent />}
        {state === "busy" && <ListSnippetsSkeleton />}
      </main>

      <footer className="flex items-center justify-between py-4">
        <a
          href="https://github.com/fredcido/miro-code-snippets/issues"
          target="_blank"
          className="flex flex-col items-center"
        >
          <span className="m2 icon icon-help-question"></span>
          Learn more
        </a>
        <a
          href="https://forms.gle/7vre8fvUKDfc5x3A7"
          target="_blank"
          className="flex flex-col items-center"
          title="Direct contact to provide feedback"
        >
          <span className="m2 icon icon-comment-feedback"></span>
          Send Feedback
        </a>
        <IconButton
          variant="solid-prominent"
          label="Add Snippet"
          onClick={handleAdd}
        >
          <IconPlus />
        </IconButton>
      </footer>
    </section>
  );
}
