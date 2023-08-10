import { z } from "zod";
import { PredicateCreateManyInputObjectSchema } from "./objects/PredicateCreateManyInput.schema";

export const PredicateCreateManySchema = z.object({
  data: z.union([
    PredicateCreateManyInputObjectSchema,
    z.array(PredicateCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
