import React from "react";

export type Tag = {
  id: string;
  name: string;
};

type Props = {
  tags: Tag[];
  onRemove?: (tag: Tag) => void;
};

export function Tags({ tags, onRemove }: Props) {
  return (
    <div>
      {tags.map((tag) => (
        <span key={tag.id} className="tag">
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
      ))}
    </div>
  );
}
