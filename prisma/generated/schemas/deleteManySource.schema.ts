import { z } from "zod";
import { SourceWhereInputObjectSchema } from "./objects/SourceWhereInput.schema";

export const SourceDeleteManySchema = z.object({
  where: SourceWhereInputObjectSchema.optional(),
});
