import React from "react";

export type Tag = {
  id: string;
  name: string;
};

type Props = {
  tag: Tag;
  onRemove?: (tag: Tag) => void;
};

export function Tag({ tag, onRemove }: Props) {
  return (
    <span className="tag bg-gray-600 font-bold">
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
