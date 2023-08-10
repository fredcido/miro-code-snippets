import { z } from "zod";
import { PredicateUpdateInputObjectSchema } from "./objects/PredicateUpdateInput.schema";
import { PredicateUncheckedUpdateInputObjectSchema } from "./objects/PredicateUncheckedUpdateInput.schema";
import { PredicateWhereUniqueInputObjectSchema } from "./objects/PredicateWhereUniqueInput.schema";

export const PredicateUpdateOneSchema = z.object({
  data: z.union([
    PredicateUpdateInputObjectSchema,
    PredicateUncheckedUpdateInputObjectSchema,
  ]),
  where: PredicateWhereUniqueInputObjectSchema,
});
