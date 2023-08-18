import classNames from "classnames";
import React from "react";

export type TabType = {
  id: string;
  name: string;
};

type Props = {
  active?: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export function Tab({ children, active, onClick }: Props) {
  return (
    <div
      className={classNames("tab", { "tab-active": active })}
      onClick={onClick}
    >
      <div className="tab-text tab-badge">{children}</div>
    </div>
  );
}
