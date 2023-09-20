import React from "react";

type Props = React.HTMLProps<HTMLDivElement> & {
  children?: React.ReactNode;
};

export default function Skeleton({ className }: Props) {
  return (
    <div
      role="status"
      aria-busy="true"
      className={`${className} w-full animate-pulse`}
    >
      <div className={`${className} w-full rounded-md bg-gray-100`}></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
