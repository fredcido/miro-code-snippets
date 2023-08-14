import React from "react";
import type { TagType } from "./Tag";
import { Tag } from "./Tag";

type Props = {
  tags: TagType[];
  onRemove?: (tag: TagType) => void;
};

export function Tags({ tags, onRemove }: Props) {
  return (
    <div className="flex gap-2">
      {tags.map((tag) => (
        <Tag onRemove={onRemove} key={tag.id} tag={tag} />
      ))}
    </div>
  );
}
