import { z } from "zod";
import { SourceOrderByWithRelationInputObjectSchema } from "./objects/SourceOrderByWithRelationInput.schema";
import { SourceWhereInputObjectSchema } from "./objects/SourceWhereInput.schema";
import { SourceWhereUniqueInputObjectSchema } from "./objects/SourceWhereUniqueInput.schema";
import { SourceCountAggregateInputObjectSchema } from "./objects/SourceCountAggregateInput.schema";
import { SourceMinAggregateInputObjectSchema } from "./objects/SourceMinAggregateInput.schema";
import { SourceMaxAggregateInputObjectSchema } from "./objects/SourceMaxAggregateInput.schema";

export const SourceAggregateSchema = z.object({
  orderBy: z
    .union([
      SourceOrderByWithRelationInputObjectSchema,
      SourceOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: SourceWhereInputObjectSchema.optional(),
  cursor: SourceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), SourceCountAggregateInputObjectSchema])
    .optional(),
  _min: SourceMinAggregateInputObjectSchema.optional(),
  _max: SourceMaxAggregateInputObjectSchema.optional(),
});
