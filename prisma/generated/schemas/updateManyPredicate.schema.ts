import { z } from "zod";
import { PredicateUpdateManyMutationInputObjectSchema } from "./objects/PredicateUpdateManyMutationInput.schema";
import { PredicateWhereInputObjectSchema } from "./objects/PredicateWhereInput.schema";

export const PredicateUpdateManySchema = z.object({
  data: PredicateUpdateManyMutationInputObjectSchema,
  where: PredicateWhereInputObjectSchema.optional(),
});
