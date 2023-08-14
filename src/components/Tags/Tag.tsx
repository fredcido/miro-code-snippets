import React from "react";

export type TagType = {
  id: string;
  name: string;
  variant?: "idle" | "info" | "success" | "warning" | "error";
};

const colorMap = {
  idle: "var(--blackAlpha60)",
  info: "var(--blue900)",
  success: "var(--green800)",
  warning: "var(--yellow700)",
  error: "var(--red900)",
} as const;

type Props = {
  tag: TagType;
  onRemove?: (tag: TagType) => void;
};

export function Tag({ tag, onRemove }: Props) {
  return (
    <span
      className="tag font-bold"
      style={{
        "--background": colorMap[tag.variant ?? "idle"],
        "--color": "var(--white)",
      }}
    >
      {tag.name}
      {onRemove && (
        <button
          type="button"
          className="icon icon-close"
          aria-label="Remove tag"
          onClick={() => onRemove(tag)}
        ></button>
      )}
    </span>
  );
}
