import React from "react";
import { Tab, type TabType } from "./Tab";

type Props = {
  tabs: TabType[];
  selected?: TabType;
  onSelect: (tab: TabType) => void;
};

export function Tabs({ tabs, onSelect, selected }: Props) {
  return (
    <div className="tabs">
      <div className="tabs-header-list">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            active={tab.id === selected?.id}
            onClick={() => onSelect(tab)}
          >
            {tab.name}
          </Tab>
        ))}
      </div>
    </div>
  );
}
