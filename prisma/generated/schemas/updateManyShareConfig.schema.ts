import { z } from "zod";
import { ShareConfigUpdateManyMutationInputObjectSchema } from "./objects/ShareConfigUpdateManyMutationInput.schema";
import { ShareConfigWhereInputObjectSchema } from "./objects/ShareConfigWhereInput.schema";

export const ShareConfigUpdateManySchema = z.object({
  data: ShareConfigUpdateManyMutationInputObjectSchema,
  where: ShareConfigWhereInputObjectSchema.optional(),
});
