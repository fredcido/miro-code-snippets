import { z } from "zod";
import { PredicateWhereInputObjectSchema } from "./objects/PredicateWhereInput.schema";
import { PredicateOrderByWithAggregationInputObjectSchema } from "./objects/PredicateOrderByWithAggregationInput.schema";
import { PredicateScalarWhereWithAggregatesInputObjectSchema } from "./objects/PredicateScalarWhereWithAggregatesInput.schema";
import { PredicateScalarFieldEnumSchema } from "./enums/PredicateScalarFieldEnum.schema";

export const PredicateGroupBySchema = z.object({
  where: PredicateWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PredicateOrderByWithAggregationInputObjectSchema,
      PredicateOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: PredicateScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PredicateScalarFieldEnumSchema),
});
