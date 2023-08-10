import { z } from "zod";
import { SnippetWhereUniqueInputObjectSchema } from "./objects/SnippetWhereUniqueInput.schema";
import { SnippetCreateInputObjectSchema } from "./objects/SnippetCreateInput.schema";
import { SnippetUncheckedCreateInputObjectSchema } from "./objects/SnippetUncheckedCreateInput.schema";
import { SnippetUpdateInputObjectSchema } from "./objects/SnippetUpdateInput.schema";
import { SnippetUncheckedUpdateInputObjectSchema } from "./objects/SnippetUncheckedUpdateInput.schema";

export const SnippetUpsertSchema = z.object({
  where: SnippetWhereUniqueInputObjectSchema,
  create: z.union([
    SnippetCreateInputObjectSchema,
    SnippetUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    SnippetUpdateInputObjectSchema,
    SnippetUncheckedUpdateInputObjectSchema,
  ]),
});
