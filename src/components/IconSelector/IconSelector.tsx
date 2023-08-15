import React, { useMemo, useState } from "react";
import { DropdownMenu, IconButton } from "@mirohq/design-system";
import { debounce } from "lodash";
import iconsNames from "@mirohq/design-system-icons/svg/meta.json";
import { Input } from "~/components/Input";
import { Icon } from "../Icon";
import { supported } from "./icons";

type Props = {
  icon?: string;
  list?: string[];
  onSelect: (icon: string) => void;
};

export function IconSelector({ onSelect, icon = "plug", list = supported }: Props) {
  const [filter, setFilter] = useState("");

  const available = Object.keys(iconsNames).filter((icon) =>
    list.includes(icon)
  );

  const icons = useMemo(() => {
    if (!filter.trim().length) return available;

    return available.filter((icon) => icon.includes(filter));
  }, [filter, available]);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const handleFilter = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    e.preventDefault();

    setFilter(e.target.value);
  }, 200);

  return (
    <DropdownMenu onOpen={() => setFilter("")}>
      <DropdownMenu.Trigger asChild>
        <IconButton
          label={icon}
          type="button"
          variant="solid-subtle"
          size="x-large"
          tooltipSide="top"
        >
          <Icon icon={icon} />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <div className="form-group-small">
          <Input
            placeholder="Search icon"
            name="icon"
            autoComplete="off"
            type="search"
            onKeyDown={(e) => e.stopPropagation()}
            onChange={handleFilter}
            autoFocus
          />
        </div>
        <div className="my-2 h-52 w-64 overflow-auto">
          {icons.map((icon) => (
            <DropdownMenu.Item onClick={() => onSelect(icon)} key={icon}>
              <DropdownMenu.IconSlot>
                <Icon icon={icon} />
              </DropdownMenu.IconSlot>
              {icon}
            </DropdownMenu.Item>
          ))}
        </div>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
