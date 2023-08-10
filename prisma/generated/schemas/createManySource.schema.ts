import { z } from "zod";
import { SourceCreateManyInputObjectSchema } from "./objects/SourceCreateManyInput.schema";

export const SourceCreateManySchema = z.object({
  data: z.union([
    SourceCreateManyInputObjectSchema,
    z.array(SourceCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
