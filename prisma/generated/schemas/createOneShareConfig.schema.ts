import { z } from "zod";
import { ShareConfigCreateInputObjectSchema } from "./objects/ShareConfigCreateInput.schema";
import { ShareConfigUncheckedCreateInputObjectSchema } from "./objects/ShareConfigUncheckedCreateInput.schema";

export const ShareConfigCreateOneSchema = z.object({
  data: z.union([
    ShareConfigCreateInputObjectSchema,
    ShareConfigUncheckedCreateInputObjectSchema,
  ]),
});
