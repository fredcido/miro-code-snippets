import { z } from "zod";
import { SnippetWhereInputObjectSchema } from "./objects/SnippetWhereInput.schema";

export const SnippetDeleteManySchema = z.object({
  where: SnippetWhereInputObjectSchema.optional(),
});
