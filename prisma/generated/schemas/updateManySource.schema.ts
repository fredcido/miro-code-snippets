import { z } from "zod";
import { SourceUpdateManyMutationInputObjectSchema } from "./objects/SourceUpdateManyMutationInput.schema";
import { SourceWhereInputObjectSchema } from "./objects/SourceWhereInput.schema";

export const SourceUpdateManySchema = z.object({
  data: SourceUpdateManyMutationInputObjectSchema,
  where: SourceWhereInputObjectSchema.optional(),
});
