import { z } from "zod";
import { SourceOrderByWithRelationInputObjectSchema } from "./objects/SourceOrderByWithRelationInput.schema";
import { SourceWhereInputObjectSchema } from "./objects/SourceWhereInput.schema";
import { SourceWhereUniqueInputObjectSchema } from "./objects/SourceWhereUniqueInput.schema";
import { SourceScalarFieldEnumSchema } from "./enums/SourceScalarFieldEnum.schema";

export const SourceFindFirstSchema = z.object({
  orderBy: z
    .union([
      SourceOrderByWithRelationInputObjectSchema,
      SourceOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: SourceWhereInputObjectSchema.optional(),
  cursor: SourceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(SourceScalarFieldEnumSchema).optional(),
});
