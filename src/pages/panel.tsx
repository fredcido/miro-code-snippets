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

  return (
    <main>
      {items.map((item) => (
        <CodePreview key={item.id} title={item.name} code={item.code} />
      ))}
    </main>
  );
}
