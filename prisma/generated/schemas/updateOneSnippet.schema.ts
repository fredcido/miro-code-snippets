import { z } from "zod";
import { SnippetUpdateInputObjectSchema } from "./objects/SnippetUpdateInput.schema";
import { SnippetUncheckedUpdateInputObjectSchema } from "./objects/SnippetUncheckedUpdateInput.schema";
import { SnippetWhereUniqueInputObjectSchema } from "./objects/SnippetWhereUniqueInput.schema";

export const SnippetUpdateOneSchema = z.object({
  data: z.union([
    SnippetUpdateInputObjectSchema,
    SnippetUncheckedUpdateInputObjectSchema,
  ]),
  where: SnippetWhereUniqueInputObjectSchema,
});
