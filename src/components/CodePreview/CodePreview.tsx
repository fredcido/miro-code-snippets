import React from "react";

type Props = {
  title: string;
  code: string;
};

export function CodePreview({ title, code }: Props) {
  return (
    <div className="app-card">
      <h1 className="app-card--title">{title}</h1>
      <p className="app-card--description p-medium">{code}</p>
    </div>
  );
}
