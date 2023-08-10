import { z } from "zod";
import { SnippetWhereUniqueInputObjectSchema } from "./objects/SnippetWhereUniqueInput.schema";

export const SnippetDeleteOneSchema = z.object({
  where: SnippetWhereUniqueInputObjectSchema,
});
