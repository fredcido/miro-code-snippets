import { z } from "zod";
import { PredicateWhereUniqueInputObjectSchema } from "./objects/PredicateWhereUniqueInput.schema";

export const PredicateFindUniqueSchema = z.object({
  where: PredicateWhereUniqueInputObjectSchema,
});
