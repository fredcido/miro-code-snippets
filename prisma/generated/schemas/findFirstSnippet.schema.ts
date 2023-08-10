import { z } from "zod";
import { SnippetOrderByWithRelationInputObjectSchema } from "./objects/SnippetOrderByWithRelationInput.schema";
import { SnippetWhereInputObjectSchema } from "./objects/SnippetWhereInput.schema";
import { SnippetWhereUniqueInputObjectSchema } from "./objects/SnippetWhereUniqueInput.schema";
import { SnippetScalarFieldEnumSchema } from "./enums/SnippetScalarFieldEnum.schema";

export const SnippetFindFirstSchema = z.object({
  orderBy: z
    .union([
      SnippetOrderByWithRelationInputObjectSchema,
      SnippetOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: SnippetWhereInputObjectSchema.optional(),
  cursor: SnippetWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(SnippetScalarFieldEnumSchema).optional(),
});
