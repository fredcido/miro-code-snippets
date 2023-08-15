import type { CustomAction, CustomEvent } from "@mirohq/websdk-types";
import { type CodeSnippet, codeSnippetsService } from ".";
import slug from "slug";
import { run } from "~/sandbox";
import { getRegistry } from "./actions";

export const handleIconClick = () => {
  miro.board.ui
    .openPanel({
      url: "/panel",
      height: 600,
    })
    .catch(console.error);
};

export const handleCreateSnippet = (event: CustomEvent) => {
  const uniqueTypes = new Set([...event.items.map((item) => item.type)]);
  const types = [...uniqueTypes].map((type) => `type=${type}`).join("&");

  miro.board.ui
    .openModal({
      url: `/code-editor?${types}`,
      width: 800,
    })
    .catch(console.error);
};

const registerAction = async (
  action: CustomAction,
  handler: (event: CustomEvent) => void
) => {
  try {
    miro.board.ui.off(`custom:${action.event}`, handler);
  } catch (error) {}

  miro.board.ui.on(`custom:${action.event}`, handler);
  await miro.board.experimental.action.register(action);
};

const registerSnippetAsAction = async (snippet: CodeSnippet) => {
  if (snippet.status === "DRAFT") return;

  return registerAction(
    {
      event: slug(snippet.name),
      ui: {
        label: snippet.name,
        icon: snippet.icon ?? "cog",
      },
      predicate: snippet.predicate,
    },
    runCode(snippet)
  ).catch(console.error);
};

const runCode = (snippet: CodeSnippet) => () => {
  run(snippet.code).catch((error) => {
    console.error(error);
    void miro.board.notifications.showError(
      `Error executing: ${snippet.name}. Check your browser dev console.`
    );
  });
};

export const registerCustomActions = async () => {
  try {
    const actions = await codeSnippetsService.getActions();
    actions.map(registerSnippetAsAction);
  } catch (error) {
    console.error(error);
  }

  registerAction(
    {
      event: "create-snippet",
      ui: {
        label: "Create snippet",
        icon: "lightning",
        description: "Create code snippets directly on the board",
        position: 0,
      },
      predicate: {
        $or: [
          // Matching multiple types
          {
            type: "preview",
          },
          {
            type: "frame",
          },
          {
            type: "image",
          },
          {
            type: "text",
          },
          {
            type: "card",
          },
          {
            type: "shape",
          },
          {
            type: "sticky_note",
          },
        ],
      },
    },
    handleCreateSnippet
  ).catch(console.error);

  return () => {
    miro.board.ui.off("custom:create-snippet", handleCreateSnippet);
  };
};

export const init = async () => {
  try {
    miro.board.ui.on("icon:click", handleIconClick);
    const unsuscribeActions = await registerCustomActions();

    getRegistry().on("snippet:created", registerSnippetAsAction);
    getRegistry().on("snippet:updated", registerSnippetAsAction);

    return () => {
      miro.board.ui.off("icon:click", handleIconClick);
      getRegistry().off("snippet:created", registerSnippetAsAction);
      getRegistry().off("snippet:updated", registerSnippetAsAction);
      unsuscribeActions();
    };
  } catch (error) {
    console.error("Error initializing Miro", { error });
  }
};
