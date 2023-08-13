import React from "react";
import Skeleton from "./Skeleton";

export function SnippetFormSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="h-9" />
      <div className="flex gap-4">
        <Skeleton className="h-12 w-12" />
        <Skeleton className="h-12" />
      </div>
      <div className="flex gap-4">
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-8 w-16" />
      </div>
      <Skeleton className="h-80" />
    </div>
  );
}
