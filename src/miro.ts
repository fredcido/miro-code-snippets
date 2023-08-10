import type { CustomEvent } from "@mirohq/websdk-types";

export const handleIconClick = () => {
  miro.board.ui
    .openPanel({
      url: "/panel",
    })
    .catch(console.error);
};

export const handleCreateSnippet = async (event: CustomEvent) => {
  const uniqueTypes = new Set([...event.items.map((item) => item.type)]);
  const types = [...uniqueTypes].map((type) => `type=${type}`).join("&");

  await miro.board.ui.openModal({
    url: `/code-editor?${types}`,
    width: 800,
  });
};

export const registerCustomActions = async () => {
  const createSnippetEvent = "create-snippet";

  try {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    miro.board.ui.off(`custom:${createSnippetEvent}`, handleCreateSnippet);
  } catch (error) {}

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
          type: "shape",
        },
        {
          type: "sticky_note",
        },
      ],
    },
  });

  return () => {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    miro.board.ui.off(`custom:${createSnippetEvent}`, handleCreateSnippet);
  };
};

export const init = async () => {
  try {
    miro.board.ui.on("icon:click", handleIconClick);
    const unsuscribeActions = await registerCustomActions();

    return () => {
      miro.board.ui.off("icon:click", handleIconClick);
      unsuscribeActions();
    };
  } catch (error) {
    console.error("Error initializing Miro", { error });
  }
};
