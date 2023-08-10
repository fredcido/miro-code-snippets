import { z } from "zod";
import { ShareConfigWhereInputObjectSchema } from "./objects/ShareConfigWhereInput.schema";

export const ShareConfigDeleteManySchema = z.object({
  where: ShareConfigWhereInputObjectSchema.optional(),
});
