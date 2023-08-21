import React from "react";
import {
  DropdownMenu,
  IconButton,
  IconDotsThree,
  IconPen,
  IconTrash,
  IconPlayCircle,
  Tooltip,
  IconEyeOpen,
  IconDownload,
} from "@mirohq/design-system";
import { type CodeSnippet } from "~/business";
import { Icon } from "../Icon";
import { Tags, type TagType } from "../Tags";
import {
  hasCustomAction,
  predicateToTags,
  usedByTheUser,
} from "~/business/utils";
import { useMiroContext } from "../MiroContext";

type Callback = () => void;

type Props = {
  codeSnippet: CodeSnippet;
  onEdit?: Callback;
  onExecute?: Callback;
  onRemove?: Callback;
  onView?: Callback;
  onUse?: Callback;
};

export function CodePreview({
  codeSnippet,
  onEdit,
  onExecute,
  onRemove,
  onView,
  onUse,
}: Props) {
  const tags: TagType[] = [];
  const miroContext = useMiroContext();

  if (!miroContext) {
    return null;
  }

  if (codeSnippet.status === "DRAFT") {
    tags.push({
      id: "draft",
      name: "DRAFT",
    });
  }

  if (codeSnippet.predicate) {
    const widgetTags = predicateToTags(codeSnippet.predicate);
    widgetTags.forEach((tag) => tags.push(tag));
  }

  const RemoveButton = () => {
    return (
      <DropdownMenu.Item onClick={onRemove}>
        <DropdownMenu.IconSlot>
          <IconTrash />
        </DropdownMenu.IconSlot>
        Remove
      </DropdownMenu.Item>
    );
  };

  const EditButton = () => {
    return (
      <DropdownMenu.Item onClick={onEdit}>
        <DropdownMenu.IconSlot>
          <IconPen />
        </DropdownMenu.IconSlot>
        Edit
      </DropdownMenu.Item>
    );
  };

  const ExecuteButton = () => {
    return (
      <DropdownMenu.Item onClick={onExecute}>
        <DropdownMenu.IconSlot>
          <IconPlayCircle />
        </DropdownMenu.IconSlot>
        Execute
      </DropdownMenu.Item>
    );
  };

  const ViewButton = () => {
    return (
      <DropdownMenu.Item onClick={onView}>
        <DropdownMenu.IconSlot>
          <IconEyeOpen />
        </DropdownMenu.IconSlot>
        View
      </DropdownMenu.Item>
    );
  };

  const UseButton = () => {
    return (
      <DropdownMenu.Item onClick={onUse}>
        <DropdownMenu.IconSlot>
          <IconDownload />
        </DropdownMenu.IconSlot>
        Use
      </DropdownMenu.Item>
    );
  };

  const buttons: React.ReactNode[] = [];

  if (onExecute && !hasCustomAction(codeSnippet)) {
    buttons.push(<ExecuteButton key="execute-button" />);
  }

  if (codeSnippet.owner === "USER") {
    if (onEdit) {
      buttons.push(<EditButton key="edit-button" />);
    }

    if (onRemove) {
      buttons.push(<RemoveButton key="remove-button" />);
    }
  }

  if (codeSnippet.owner === "OTHER" && codeSnippet.visibility === "PUBLIC") {
    if (onView) {
      buttons.push(<ViewButton key="view-button" />);
    }

    if (onUse && !usedByTheUser(codeSnippet, miroContext.userInfo.user)) {
      buttons.push(<UseButton key="use-button" />);
    }
  }

  return (
    <section className="flex flex-col gap-1 rounded-md bg-slate-50 p-3">
      <h2 className="flex items-center gap-2">
        <Icon icon={codeSnippet.icon ?? "cog"} />
        <span
          title={codeSnippet.name}
          className="truncate text-lg font-semibold"
        >
          <Tooltip>
            <Tooltip.Trigger asChild>
              <span>{codeSnippet.name}</span>
            </Tooltip.Trigger>
            <Tooltip.Content>
              {codeSnippet.status === "DRAFT" && `[DRAFT] `}
              {codeSnippet.name}
            </Tooltip.Content>
          </Tooltip>
        </span>
        {buttons.length > 0 && (
          <div className="ml-auto">
            <DropdownMenu>
              <DropdownMenu.Trigger asChild>
                <IconButton
                  label="Actions"
                  type="button"
                  variant="solid-subtle"
                  tooltipSide="top"
                >
                  <IconDotsThree />
                </IconButton>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>{buttons}</DropdownMenu.Content>
            </DropdownMenu>
          </div>
        )}
      </h2>
      <div className="text-sm">
        <Tags tags={tags} />
      </div>
    </section>
  );
}
