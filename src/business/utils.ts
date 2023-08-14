import { type TagType } from "~/components/Tags";
import { type Predicate } from "./models";

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
