import { z } from "zod";
import { SnippetWhereUniqueInputObjectSchema } from "./objects/SnippetWhereUniqueInput.schema";

export const SnippetFindUniqueSchema = z.object({
  where: SnippetWhereUniqueInputObjectSchema,
});
