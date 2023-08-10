import { z } from "zod";
import { SnippetOrderByWithRelationInputObjectSchema } from "./objects/SnippetOrderByWithRelationInput.schema";
import { SnippetWhereInputObjectSchema } from "./objects/SnippetWhereInput.schema";
import { SnippetWhereUniqueInputObjectSchema } from "./objects/SnippetWhereUniqueInput.schema";
import { SnippetCountAggregateInputObjectSchema } from "./objects/SnippetCountAggregateInput.schema";
import { SnippetMinAggregateInputObjectSchema } from "./objects/SnippetMinAggregateInput.schema";
import { SnippetMaxAggregateInputObjectSchema } from "./objects/SnippetMaxAggregateInput.schema";

export const SnippetAggregateSchema = z.object({
  orderBy: z
    .union([
      SnippetOrderByWithRelationInputObjectSchema,
      SnippetOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: SnippetWhereInputObjectSchema.optional(),
  cursor: SnippetWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), SnippetCountAggregateInputObjectSchema])
    .optional(),
  _min: SnippetMinAggregateInputObjectSchema.optional(),
  _max: SnippetMaxAggregateInputObjectSchema.optional(),
});
