"use client";
import { useEffect, useMemo, useState } from "react";
import type { CodeSnippet } from "~/business/models";
import { CodePreview } from "~/components/CodePreview";
import { codeSnippetsService } from "~/business/services/CodeSnippets";
import { Input } from "~/components/Input";
import { debounce } from "lodash";

export default function CodeEditor() {
  const [items, setItems] = useState<CodeSnippet[]>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    codeSnippetsService.getAll().then(setItems).catch(console.error);
  }, []);

  const filteredItems = useMemo(() => {
    if (!filter.trim().length) return items;

    return items.filter((item) => item.name.includes(filter));
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
    <main className="flex flex-col gap-4 p-6">
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
