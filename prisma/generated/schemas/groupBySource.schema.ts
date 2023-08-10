import { z } from "zod";
import { SourceWhereInputObjectSchema } from "./objects/SourceWhereInput.schema";
import { SourceOrderByWithAggregationInputObjectSchema } from "./objects/SourceOrderByWithAggregationInput.schema";
import { SourceScalarWhereWithAggregatesInputObjectSchema } from "./objects/SourceScalarWhereWithAggregatesInput.schema";
import { SourceScalarFieldEnumSchema } from "./enums/SourceScalarFieldEnum.schema";

export const SourceGroupBySchema = z.object({
  where: SourceWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      SourceOrderByWithAggregationInputObjectSchema,
      SourceOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: SourceScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(SourceScalarFieldEnumSchema),
});
