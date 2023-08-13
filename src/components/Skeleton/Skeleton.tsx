import React from "react";

type Props = React.HTMLProps<HTMLDivElement> & {
  children?: React.ReactNode;
};

export default function Skeleton({ className }: Props) {
  return (
    <div role="status" className="w-full animate-pulse">
      <div className={`h-2.5 w-48 rounded-full bg-gray-200 ${className}`}></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
