import { z } from "zod";
import { PredicateWhereUniqueInputObjectSchema } from "./objects/PredicateWhereUniqueInput.schema";
import { PredicateCreateInputObjectSchema } from "./objects/PredicateCreateInput.schema";
import { PredicateUncheckedCreateInputObjectSchema } from "./objects/PredicateUncheckedCreateInput.schema";
import { PredicateUpdateInputObjectSchema } from "./objects/PredicateUpdateInput.schema";
import { PredicateUncheckedUpdateInputObjectSchema } from "./objects/PredicateUncheckedUpdateInput.schema";

export const PredicateUpsertSchema = z.object({
  where: PredicateWhereUniqueInputObjectSchema,
  create: z.union([
    PredicateCreateInputObjectSchema,
    PredicateUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PredicateUpdateInputObjectSchema,
    PredicateUncheckedUpdateInputObjectSchema,
  ]),
});
