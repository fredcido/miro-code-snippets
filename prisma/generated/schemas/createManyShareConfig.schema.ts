import { z } from "zod";
import { ShareConfigCreateManyInputObjectSchema } from "./objects/ShareConfigCreateManyInput.schema";

export const ShareConfigCreateManySchema = z.object({
  data: z.union([
    ShareConfigCreateManyInputObjectSchema,
    z.array(ShareConfigCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
