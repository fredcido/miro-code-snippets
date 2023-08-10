import { z } from "zod";
import { ShareConfigWhereInputObjectSchema } from "./objects/ShareConfigWhereInput.schema";
import { ShareConfigOrderByWithAggregationInputObjectSchema } from "./objects/ShareConfigOrderByWithAggregationInput.schema";
import { ShareConfigScalarWhereWithAggregatesInputObjectSchema } from "./objects/ShareConfigScalarWhereWithAggregatesInput.schema";
import { ShareConfigScalarFieldEnumSchema } from "./enums/ShareConfigScalarFieldEnum.schema";

export const ShareConfigGroupBySchema = z.object({
  where: ShareConfigWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ShareConfigOrderByWithAggregationInputObjectSchema,
      ShareConfigOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ShareConfigScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ShareConfigScalarFieldEnumSchema),
});
