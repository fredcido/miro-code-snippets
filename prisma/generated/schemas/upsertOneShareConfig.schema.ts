import { z } from "zod";
import { ShareConfigWhereUniqueInputObjectSchema } from "./objects/ShareConfigWhereUniqueInput.schema";
import { ShareConfigCreateInputObjectSchema } from "./objects/ShareConfigCreateInput.schema";
import { ShareConfigUncheckedCreateInputObjectSchema } from "./objects/ShareConfigUncheckedCreateInput.schema";
import { ShareConfigUpdateInputObjectSchema } from "./objects/ShareConfigUpdateInput.schema";
import { ShareConfigUncheckedUpdateInputObjectSchema } from "./objects/ShareConfigUncheckedUpdateInput.schema";

export const ShareConfigUpsertSchema = z.object({
  where: ShareConfigWhereUniqueInputObjectSchema,
  create: z.union([
    ShareConfigCreateInputObjectSchema,
    ShareConfigUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ShareConfigUpdateInputObjectSchema,
    ShareConfigUncheckedUpdateInputObjectSchema,
  ]),
});
