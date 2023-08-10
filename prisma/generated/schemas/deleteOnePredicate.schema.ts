import { z } from "zod";
import { PredicateWhereUniqueInputObjectSchema } from "./objects/PredicateWhereUniqueInput.schema";

export const PredicateDeleteOneSchema = z.object({
  where: PredicateWhereUniqueInputObjectSchema,
});
