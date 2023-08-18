import React from "react";
import Skeleton from "./Skeleton";
import { ListSnippetsSkeleton } from "./ListSnippetsSkeleton";

export function PanelSkeleton() {
  return (
    <div className="flex flex-col gap-4 px-6 py-1">
      <Skeleton className="h-14" />
      <ListSnippetsSkeleton />
    </div>
  );
}
