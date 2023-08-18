import React from "react";
import Skeleton from "./Skeleton";

type Props = {
  quantity?: number;
};

export function ListSnippetsSkeleton({ quantity = 3 }: Props) {
  return (
    <>
      {Array.from({ length: quantity }).map((_, idx) => (
        <Skeleton key={idx} className="h-24" />
      ))}
    </>
  );
}
