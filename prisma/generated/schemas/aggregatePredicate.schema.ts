import { z } from "zod";
import { PredicateOrderByWithRelationInputObjectSchema } from "./objects/PredicateOrderByWithRelationInput.schema";
import { PredicateWhereInputObjectSchema } from "./objects/PredicateWhereInput.schema";
import { PredicateWhereUniqueInputObjectSchema } from "./objects/PredicateWhereUniqueInput.schema";
import { PredicateCountAggregateInputObjectSchema } from "./objects/PredicateCountAggregateInput.schema";
import { PredicateMinAggregateInputObjectSchema } from "./objects/PredicateMinAggregateInput.schema";
import { PredicateMaxAggregateInputObjectSchema } from "./objects/PredicateMaxAggregateInput.schema";

export const PredicateAggregateSchema = z.object({
  orderBy: z
    .union([
      PredicateOrderByWithRelationInputObjectSchema,
      PredicateOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PredicateWhereInputObjectSchema.optional(),
  cursor: PredicateWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PredicateCountAggregateInputObjectSchema])
    .optional(),
  _min: PredicateMinAggregateInputObjectSchema.optional(),
  _max: PredicateMaxAggregateInputObjectSchema.optional(),
});
