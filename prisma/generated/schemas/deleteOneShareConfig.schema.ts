import { z } from "zod";
import { ShareConfigWhereUniqueInputObjectSchema } from "./objects/ShareConfigWhereUniqueInput.schema";

export const ShareConfigDeleteOneSchema = z.object({
  where: ShareConfigWhereUniqueInputObjectSchema,
});
