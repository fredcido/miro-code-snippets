import { type TagType } from "~/components/Tags";
import { type CodeSnippet, type Predicate } from "./models";
import { run } from "~/sandbox";

export const typeToCleanName = (type: string) =>
  type.split("_").join(" ").toLocaleUpperCase();

export const predicateToTags = (predicate: Predicate): TagType[] => {
  const tags: TagType[] = [];

  if (predicate.$or) {
    predicate.$or.forEach((item) => {
      if ("type" in item) {
        tags.push({
          id: item.type as string,
          name: typeToCleanName(item.type as string),
          variant: "info",
        });
      }
    });
  }

  return tags;
};

export const runCode = (snippet: CodeSnippet) => {
  return run(snippet.code).catch((error) => {
    console.error(error);
    void miro.board.notifications.showError(
      `Error executing: ${snippet.name}. Check your browser dev console.`
    );
  });
};

export const hasCustomAction = (snippet: CodeSnippet): boolean => {
  return (
    snippet.predicate != undefined &&
    predicateToTags(snippet.predicate).length > 0
  );
};

export const usedByTheUser = (
  snippet: CodeSnippet,
  userId: string
): boolean => {
  return snippet.shareConfig.some(
    (share) => share.sourceType === "USER" && share.identifier === userId
  );
};