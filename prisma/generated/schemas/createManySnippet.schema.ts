import { z } from "zod";
import { SnippetCreateManyInputObjectSchema } from "./objects/SnippetCreateManyInput.schema";

export const SnippetCreateManySchema = z.object({
  data: z.union([
    SnippetCreateManyInputObjectSchema,
    z.array(SnippetCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
