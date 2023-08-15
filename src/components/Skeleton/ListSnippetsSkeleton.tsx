import React from "react";
import Skeleton from "./Skeleton";

export function ListSnippetsSkeleton() {
  return (
    <div className="flex flex-col gap-4 px-6 py-1">
      <Skeleton className="h-14" />
      {Array.from({ length: 3 }).map((_, idx) => (
        <Skeleton key={idx} className="h-24" />
      ))}
    </div>
  );
}
