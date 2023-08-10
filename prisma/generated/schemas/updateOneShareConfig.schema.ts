import { z } from "zod";
import { ShareConfigUpdateInputObjectSchema } from "./objects/ShareConfigUpdateInput.schema";
import { ShareConfigUncheckedUpdateInputObjectSchema } from "./objects/ShareConfigUncheckedUpdateInput.schema";
import { ShareConfigWhereUniqueInputObjectSchema } from "./objects/ShareConfigWhereUniqueInput.schema";

export const ShareConfigUpdateOneSchema = z.object({
  data: z.union([
    ShareConfigUpdateInputObjectSchema,
    ShareConfigUncheckedUpdateInputObjectSchema,
  ]),
  where: ShareConfigWhereUniqueInputObjectSchema,
});
