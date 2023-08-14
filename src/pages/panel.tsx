"use client";
import { useEffect, useMemo, useState } from "react";
import type { CodeSnippet } from "~/business/models";
import { CodePreview } from "~/components/CodePreview";
import { codeSnippetsService } from "~/business/services/CodeSnippets";
import { Input } from "~/components/Input";
import { debounce } from "lodash";
import { getRegistry } from "~/business/actions";

export default function CodeEditor() {
  const [items, setItems] = useState<CodeSnippet[]>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/require-await
    const newSnippet = async (snippet: CodeSnippet) => {
      setItems((items) => [snippet, ...items]);
    };

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

    codeSnippetsService.getMine().then(setItems).catch(console.error);

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
      .catch(console.error);
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
      .catch(console.error);
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const handleFilter = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    e.preventDefault();

    setFilter(e.target.value);
  }, 200);

  return (
    <main className="flex flex-col gap-4 px-6 py-1">
      <Input
        placeholder="Search..."
        name="icon"
        autoComplete="off"
        type="search"
        onKeyDown={(e) => e.stopPropagation()}
        onChange={handleFilter}
        autoFocus
      />
      {filteredItems.map((item) => (
        <CodePreview
          key={item.id}
          codeSnippet={item}
          onEdit={() => handleEdit(item)}
          onRemove={() => handleRemove(item)}
        />
      ))}
    </main>
  );
}