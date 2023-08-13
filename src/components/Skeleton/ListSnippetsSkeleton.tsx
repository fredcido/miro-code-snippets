import React from "react";
import Skeleton from "./Skeleton";

export function ListSnippetsSkeleton() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <Skeleton className="h-14" />
      {Array.from({ length: 5 }).map((_, idx) => (
        <Skeleton key={idx} className="h-16" />
      ))}
    </div>
  );
}
