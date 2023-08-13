import React from "react";
import { type CodeSnippet } from "~/business";
import { Icon } from "../Icon";
import { IconButton } from "@mirohq/design-system";

type Props = {
  codeSnippet: CodeSnippet;
  onEdit: () => void;
  onExecute?: () => void;
  onRemove?: () => void;
};

export function CodePreview({
  codeSnippet,
  onEdit,
  onExecute,
  onRemove,
}: Props) {
  return (
    <section className="rounded-md bg-slate-100 p-3">
      <h2 className="flex items-start justify-between gap-2">
        <Icon icon={codeSnippet.icon ?? "cog"} />
        <span title={codeSnippet.name} className="truncate">
          {codeSnippet.name}
        </span>
        <div className="flex gap-1">
          <IconButton onClick={onEdit}>
            <Icon icon="pen" />
          </IconButton>
          {onExecute && (
            <IconButton onClick={onExecute}>
              <Icon icon="play-circle" />
            </IconButton>
          )}
          {onRemove && (
            <IconButton onClick={onRemove}>
              <Icon icon="trash" />
            </IconButton>
          )}
        </div>
      </h2>
    </section>
  );
}
