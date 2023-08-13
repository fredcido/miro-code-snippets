import type { CustomAction, CustomEvent } from "@mirohq/websdk-types";
import { codeSnippetsService } from "./business";
import slug from "slug";
import { run } from "~/sandbox";

export const handleIconClick = () => {
  miro.board.ui
    .openPanel({
      url: "/panel",
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

export const registerCustomActions = async () => {
  try {
    const actions = await codeSnippetsService.getActions();

    actions.map((action) => {
      const runCode = () => {
        miro.board.notifications.showInfo(`Triggered ${action.name}`);
        console.log(action.code);
        run(action.code).catch((error) => {
          miro.board.notifications.showError(`Error: ${error}`);
        });
      };

      registerAction(
        {
          event: slug(action.name),
          ui: {
            label: action.name,
            icon: action.icon ?? "cog",
          },
          predicate: {
            $or: action.predicate,
          },
        },
        runCode
      ).catch(console.error);
    });
  } catch (error) {
    console.error(error);
  }

  registerAction(
    {
      event: "create-snippet",
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

    return () => {
      miro.board.ui.off("icon:click", handleIconClick);
      unsuscribeActions();
    };
  } catch (error) {
    console.error("Error initializing Miro", { error });
  }
};
