import { z } from "zod";
import { SnippetWhereInputObjectSchema } from "./objects/SnippetWhereInput.schema";
import { SnippetOrderByWithAggregationInputObjectSchema } from "./objects/SnippetOrderByWithAggregationInput.schema";
import { SnippetScalarWhereWithAggregatesInputObjectSchema } from "./objects/SnippetScalarWhereWithAggregatesInput.schema";
import { SnippetScalarFieldEnumSchema } from "./enums/SnippetScalarFieldEnum.schema";

export const SnippetGroupBySchema = z.object({
  where: SnippetWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      SnippetOrderByWithAggregationInputObjectSchema,
      SnippetOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: SnippetScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(SnippetScalarFieldEnumSchema),
});
