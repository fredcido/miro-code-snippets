import React from "react";
import type { Tag } from "./Tag";
import { Tag as TagItem } from "./Tag";

type Props = {
  tags: Tag[];
  onRemove?: (tag: Tag) => void;
};

export function Tags({ tags, onRemove }: Props) {
  return (
    <div className="flex gap-2">
      {tags.map((tag) => (
        <TagItem onRemove={onRemove} key={tag.id} tag={tag} />
      ))}
    </div>
  );
}
