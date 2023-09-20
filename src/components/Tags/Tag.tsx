import { IconCross } from "@mirohq/design-system";
import { twMerge } from "tailwind-merge";
import React from "react";

export type TagType = {
  id: string;
  name: string;
  variant?: "idle" | "info" | "success" | "warning" | "error";
};

const classNames = {
  idle: "text-gray-800 border-gray-300 bg-gray-50",
  info: "text-blue-800 border-blue-300 bg-blue-50",
  error: "text-red-800 border-red-300 bg-red-50",
  warning: "text-yellow-800 border-yellow-300 bg-yellow-50",
  success: "text-green-800 border-green-300 bg-green-50",
} as const;

type Props = {
  tag: TagType;
  className?: string;
  onRemove?: (tag: TagType) => void;
};

export function Tag({ tag, onRemove, className }: Props) {
  return (
    <span
      className={twMerge(
        "leading-sm inline-flex items-center gap-2 rounded-md border px-3 py-1 text-xs font-bold uppercase",
        classNames[tag.variant ?? "idle"],
        className
      )}
    >
      {tag.name}
      {onRemove && (
        <button type="button" title="Remove" onClick={() => onRemove(tag)}>
          <IconCross css={{ width: "1em" }} />
        </button>
      )}
    </span>
  );
}
