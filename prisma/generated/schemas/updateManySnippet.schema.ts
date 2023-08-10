import { z } from "zod";
import { SnippetUpdateManyMutationInputObjectSchema } from "./objects/SnippetUpdateManyMutationInput.schema";
import { SnippetWhereInputObjectSchema } from "./objects/SnippetWhereInput.schema";

export const SnippetUpdateManySchema = z.object({
  data: SnippetUpdateManyMutationInputObjectSchema,
  where: SnippetWhereInputObjectSchema.optional(),
});
