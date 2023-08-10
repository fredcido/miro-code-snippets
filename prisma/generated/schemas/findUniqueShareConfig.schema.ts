import { z } from "zod";
import { ShareConfigWhereUniqueInputObjectSchema } from "./objects/ShareConfigWhereUniqueInput.schema";

export const ShareConfigFindUniqueSchema = z.object({
  where: ShareConfigWhereUniqueInputObjectSchema,
});
