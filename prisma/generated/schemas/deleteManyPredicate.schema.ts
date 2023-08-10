import { z } from "zod";
import { PredicateWhereInputObjectSchema } from "./objects/PredicateWhereInput.schema";

export const PredicateDeleteManySchema = z.object({
  where: PredicateWhereInputObjectSchema.optional(),
});
