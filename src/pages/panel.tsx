"use client";
import { useEffect, useState } from "react";
import type { CodeSnippet } from "~/business/models";
import { CodePreview } from "~/components/CodePreview";
import { codeSnippetsService } from "~/business/services/CodeSnippets";

export default function CodeEditor() {
  const [items, setItems] = useState<CodeSnippet[]>([]);
  useEffect(() => {
    codeSnippetsService.getAll().then(setItems).catch(console.error);
  }, []);

  const handleEdit = (code: CodeSnippet) => {
    miro.board.ui
      .openModal({
        url: `/code-editor/?id=${code.id}`,
        width: 800,
      })
      .catch(console.error);
  };

  return (
    <main className="flex flex-col gap-4 p-6">
      {items.map((item) => (
        <CodePreview
          key={item.id}
          codeSnippet={item}
          onEdit={() => handleEdit(item)}
        />
      ))}
    </main>
  );
}
