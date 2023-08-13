import React from "react";
import {
  DropdownMenu,
  IconButton,
  IconDotsThree,
  IconPen,
  IconTrash,
  IconPlayCircle,
} from "@mirohq/design-system";
import { type CodeSnippet } from "~/business";
import { Icon } from "../Icon";

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
    <section className="rounded-md bg-slate-50 p-3">
      <h2 className="flex items-center gap-2">
        <Icon icon={codeSnippet.icon ?? "cog"} />
        <span title={codeSnippet.name} className="truncate">
          {codeSnippet.name}
        </span>
        <div className="ml-auto">
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <IconButton label="Actions" type="button" variant="solid-subtle">
                <IconDotsThree />
              </IconButton>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item onClick={onEdit}>
                <DropdownMenu.IconSlot>
                  <IconPen />
                </DropdownMenu.IconSlot>
                Edit
              </DropdownMenu.Item>

              {onExecute && (
                <DropdownMenu.Item onClick={onExecute}>
                  <DropdownMenu.IconSlot>
                    <IconPlayCircle />
                  </DropdownMenu.IconSlot>
                  Execute
                </DropdownMenu.Item>
              )}
              {onRemove && (
                <DropdownMenu.Item onClick={onRemove}>
                  <DropdownMenu.IconSlot>
                    <IconTrash />
                  </DropdownMenu.IconSlot>
                  Remove
                </DropdownMenu.Item>
              )}
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>
      </h2>
    </section>
  );
}
