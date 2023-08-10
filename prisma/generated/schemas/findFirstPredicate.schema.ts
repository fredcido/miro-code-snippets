import { z } from "zod";
import { PredicateOrderByWithRelationInputObjectSchema } from "./objects/PredicateOrderByWithRelationInput.schema";
import { PredicateWhereInputObjectSchema } from "./objects/PredicateWhereInput.schema";
import { PredicateWhereUniqueInputObjectSchema } from "./objects/PredicateWhereUniqueInput.schema";
import { PredicateScalarFieldEnumSchema } from "./enums/PredicateScalarFieldEnum.schema";

export const PredicateFindFirstSchema = z.object({
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
  distinct: z.array(PredicateScalarFieldEnumSchema).optional(),
});
