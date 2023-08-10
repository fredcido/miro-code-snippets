import { z } from "zod";
import { PredicateCreateInputObjectSchema } from "./objects/PredicateCreateInput.schema";
import { PredicateUncheckedCreateInputObjectSchema } from "./objects/PredicateUncheckedCreateInput.schema";

export const PredicateCreateOneSchema = z.object({
  data: z.union([
    PredicateCreateInputObjectSchema,
    PredicateUncheckedCreateInputObjectSchema,
  ]),
});
