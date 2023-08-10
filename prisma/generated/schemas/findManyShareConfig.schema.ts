import { z } from "zod";
import { ShareConfigOrderByWithRelationInputObjectSchema } from "./objects/ShareConfigOrderByWithRelationInput.schema";
import { ShareConfigWhereInputObjectSchema } from "./objects/ShareConfigWhereInput.schema";
import { ShareConfigWhereUniqueInputObjectSchema } from "./objects/ShareConfigWhereUniqueInput.schema";
import { ShareConfigScalarFieldEnumSchema } from "./enums/ShareConfigScalarFieldEnum.schema";

export const ShareConfigFindManySchema = z.object({
  orderBy: z
    .union([
      ShareConfigOrderByWithRelationInputObjectSchema,
      ShareConfigOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ShareConfigWhereInputObjectSchema.optional(),
  cursor: ShareConfigWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ShareConfigScalarFieldEnumSchema).optional(),
});
