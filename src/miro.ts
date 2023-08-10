import type { CustomEvent } from "@mirohq/websdk-types";

export const handleIconClick = () => {
  miro.board.ui
    .openPanel({
      url: "/panel",
    })
    .catch(console.error);
};

export const handleCreateSnippet = async (items: CustomEvent) => {
  await miro.board.ui.openModal({
    url: "/code-editor",
    width: 800,
  });
};

export const registerCustomActions = async () => {
  const createSnippetEvent = "create-snippet";
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  miro.board.ui.on(`custom:${createSnippetEvent}`, handleCreateSnippet);
  await miro.board.experimental.action.register({
    event: createSnippetEvent,
    ui: {
      label: "Create snippet",
      icon: "cog",
      description:
        "Create your code snippet using WebSDK directly on the Miro board",
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
          type: "sticky_note",
        },
      ],
    },
  });
};

export const init = async () => {
  try {
    miro.board.ui.on("icon:click", handleIconClick);
    await registerCustomActions();
  } catch (error) {
    console.error("Error initializing Miro", { error });
  }
};
