"use client";
import { useEffect, useMemo, useState } from "react";
import type { CodeSnippet } from "~/business/models";
import { CodePreview } from "~/components/CodePreview";
import { codeSnippetsService } from "~/business/services/CodeSnippets";
import { Input } from "~/components/Input";
import { debounce } from "lodash";
import { getRegistry } from "~/business/actions";
import { Alert, type Message } from "~/components/Alert";
import { IconButton, IconPlus, Tooltip } from "@mirohq/design-system";
import { ListSnippetsSkeleton } from "~/components/Skeleton/ListSnippetsSkeleton";

export default function CodeEditor() {
  const [items, setItems] = useState<CodeSnippet[]>([]);
  const [state, setState] = useState<"idle" | "busy" | "ready">("idle");
  const [message, setMessage] = useState<Message | undefined>();
  const [filter, setFilter] = useState("");

  // eslint-disable-next-line @typescript-eslint/require-await
  const newSnippet = async (snippet: CodeSnippet) => {
    setItems((items) => [snippet, ...items]);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/require-await
    const snippetUpdated = async (snippet: CodeSnippet) => {
      setItems((items) => {
        return items.map((item) => {
          if (item.id === snippet.id) {
            return snippet;
          }

          return item;
        });
      });
    };

    getRegistry().on("snippet:created", newSnippet);
    getRegistry().on("snippet:updated", snippetUpdated);

    codeSnippetsService
      .getMine()
      .then((items) => {
        setItems(items);
        setState("ready");
      })
      .catch((error) => {
        console.error(error);
        setMessage({
          content: "Error fetching code snippets.",
          variant: "danger",
        });
      });

    return () => {
      getRegistry().off("snippet:created", newSnippet);
      getRegistry().off("snippet:updated", snippetUpdated);
    };
  }, []);

  const filteredItems = useMemo(() => {
    if (!filter.trim().length) return items;

    return items.filter((item) =>
      item.name.toLocaleLowerCase().includes(filter)
    );
  }, [filter, items]);

  const handleEdit = (code: CodeSnippet) => {
    miro.board.ui
      .openModal({
        url: `/code-editor/?id=${code.id}`,
        width: 800,
      })
      .catch((error) => {
        console.error(error);
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
      .catch((error) => {
        console.error(error);
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

  return state === "ready" ? (
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
      <main className="flex flex-grow flex-col gap-4 overflow-auto py-2">
        {message && <Alert variant={message.variant}>{message.content}</Alert>}

        {filteredItems.length < 1 && (
          <div className="py-6">
            <Alert variant="idle">No code snippets available.</Alert>
          </div>
        )}

        {filteredItems.map((item) => (
          <CodePreview
            key={item.id}
            codeSnippet={item}
            onEdit={() => handleEdit(item)}
            onRemove={() => handleRemove(item)}
          />
        ))}
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
  ) : (
    <ListSnippetsSkeleton />
  );
}
